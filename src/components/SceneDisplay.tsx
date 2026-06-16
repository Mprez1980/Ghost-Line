import { useState } from 'react';
import { useGame } from '../context/GameContext';
import scenes from '../story';
import { resolveChoiceFromTextLocal } from '../services/choiceMatcher';
import type { Scene } from '../story/types';
import './SceneDisplay.css';

interface SceneDisplayProps {
  showHistory: boolean;
  onCloseHistory: () => void;
}

export default function SceneDisplay({ showHistory, onCloseHistory }: SceneDisplayProps) {
  const { state, advanceTo, reset, getDialogueHistory } = useGame();
  const [freeInput, setFreeInput] = useState('');
  const [resolving, setResolving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const scene: Scene | undefined = scenes[state.currentSceneId];

  function handleChoice(choiceId: string, next: string) {
    setFreeInput('');
    setError(null);
    advanceTo(next, choiceId);
  }

  async function handleFreeSubmit(e: React.FormEvent, currentScene: Scene) {
    e.preventDefault();
    if (!freeInput.trim() || !currentScene.choices) return;
    setResolving(true);
    setError(null);
    
    // Simulate brief AI resolution time for visual feedback
    await new Promise(resolve => setTimeout(resolve, 400));
    
    try {
      const choiceId = resolveChoiceFromTextLocal(currentScene, freeInput.trim());
      if (choiceId) {
        const choice = currentScene.choices.find(c => c.id === choiceId)!;
        handleChoice(choice.id, choice.next);
        setFreeInput('');
      } else {
        setError("I couldn't match that to a choice. Try rephrasing, or pick a numbered option below.");
      }
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setResolving(false);
    }
  }

  if (!scene) {
    return (
      <div className="scene-error">
        <p>Scene not found: {state.currentSceneId}</p>
        <button className="btn-restart" onClick={reset}>Restart</button>
      </div>
    );
  }

  const isEnded = !scene.choices && !scene.next;
  const dialogueHistory = getDialogueHistory();

  return (
    <div className="scene">
      {/* Dynamic Key forces dialogue-box to re-mount, triggering animations */}
      <div className="dialogue-box" key={state.currentSceneId}>
        {scene.lines.map((line, i) => {
          if (line.speaker === 'narration') {
            return <p key={i} className="narration">{line.text}</p>;
          }
          if (line.speaker === 'system') {
            return <p key={i} className="system-msg">{line.text}</p>;
          }
          if (line.speaker === 'Aster (internal)') {
            return (
              <p key={i} className="internal-monologue">
                <em>{line.text}</em>
              </p>
            );
          }
          return (
            <div key={i} className="dialogue-line" style={{ animationDelay: `${i * 150}ms` }}>
              <span className={`speaker speaker-${line.speaker.toLowerCase().split(' ')[0]}`}>{line.speaker}</span>
              <span className="dialogue-text">{line.text}</span>
            </div>
          );
        })}
      </div>

      <div className="interaction-area">
        {isEnded && (
          <button className="btn-restart" onClick={reset}>Play Again</button>
        )}

        {scene.next && !scene.choices && (
          <button className="btn-continue" onClick={() => advanceTo(scene.next!)}>Continue</button>
        )}

        {scene.choices && (
          <>
            <form className="free-input-form" onSubmit={e => handleFreeSubmit(e, scene)}>
              <input
                type="text"
                value={freeInput}
                onChange={e => setFreeInput(e.target.value)}
                placeholder="Type your response, or choose below…"
                disabled={resolving}
              />
              <button type="submit" disabled={resolving || !freeInput.trim()}>
                {resolving ? '…' : 'Send'}
              </button>
            </form>

            {error && <p className="input-error">{error}</p>}

            <div className="choices">
              {scene.choices.map((c, i) => (
                <button
                  key={c.id}
                  className="btn-choice"
                  onClick={() => handleChoice(c.id, c.next)}
                  disabled={resolving}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {i + 1}. {c.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>

      {/* Slide-out Dialogue History Log Drawer */}
      {showHistory && (
        <div className="history-overlay" onClick={onCloseHistory}>
          <div className="history-panel" onClick={e => e.stopPropagation()}>
            <div className="history-header">
              <h2>Dialogue History</h2>
              <button className="btn-close" onClick={onCloseHistory} title="Close Log">
                &times;
              </button>
            </div>
            <div className="history-body">
              {dialogueHistory.length === 0 ? (
                <p className="history-empty">No dialogue logged yet.</p>
              ) : (
                dialogueHistory.map((line, i) => {
                  let rowClass = 'dialogue';
                  if (line.speaker === 'narration') rowClass = 'narration';
                  else if (line.speaker === 'system') rowClass = 'system-msg';
                  else if (line.speaker === 'Aster (internal)') rowClass = 'internal-monologue';

                  return (
                    <div key={i} className={`history-row ${rowClass}`}>
                      {line.speaker !== 'narration' && line.speaker !== 'system' && (
                        <span className={`speaker speaker-${line.speaker.toLowerCase().split(' ')[0]}`}>
                          {line.speaker}
                        </span>
                      )}
                      <p className={line.speaker === 'narration' || line.speaker === 'system' ? '' : 'dialogue-text'}>
                        {line.speaker === 'Aster (internal)' ? <em>{line.text}</em> : line.text}
                      </p>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
