import { useState } from 'react';
import { useGame } from '../context/GameContext';
import scenes from '../story/chapter1';
import { resolveChoiceFromText } from '../services/claudeService';
import type { Scene } from '../story/types';
import './SceneDisplay.css';

export default function SceneDisplay() {
  const { state, advanceTo, reset } = useGame();
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
    try {
      const choiceId = await resolveChoiceFromText(currentScene, freeInput.trim());
      if (choiceId) {
        const choice = currentScene.choices.find(c => c.id === choiceId)!;
        handleChoice(choice.id, choice.next);
        setFreeInput('');
      } else {
        setError("I couldn't match that to a choice. Try rephrasing, or pick a numbered option below.");
      }
    } catch {
      setError('Something went wrong connecting to the AI. Please try again.');
    } finally {
      setResolving(false);
    }
  }

  if (!scene) {
    return (
      <div className="scene-error">
        <p>Scene not found: {state.currentSceneId}</p>
        <button onClick={reset}>Restart</button>
      </div>
    );
  }

  const isEnded = !scene.choices && !scene.next;

  return (
    <div className="scene">
      <div className="dialogue-box">
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
            <div key={i} className="dialogue-line">
              <span className={`speaker speaker-${line.speaker.toLowerCase()}`}>{line.speaker}</span>
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
                >
                  {i + 1}. {c.label}
                </button>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
