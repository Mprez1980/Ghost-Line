import { useEffect } from 'react';
import { useGame } from '../context/GameContext';
import scenes from '../story';
import type { ActionType } from '../story/types';
import './ActionPanel.css';

export default function ActionPanel() {
  const { state, movePlayer, toggleMovementMode, advanceTo } = useGame();
  const scene = scenes[state.currentSceneId];

  // Keyboard listener for movement
  useEffect(() => {
    if (!state.isMovementMode) return;

    function handleKeyDown(e: KeyboardEvent) {
      switch (e.key) {
        case 'ArrowUp': movePlayer(0, 1); break;
        case 'ArrowDown': movePlayer(0, -1); break;
        case 'ArrowLeft': movePlayer(-1, 0); break;
        case 'ArrowRight': movePlayer(1, 0); break;
        case 'Escape': toggleMovementMode(); break;
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [state.isMovementMode, movePlayer, toggleMovementMode]);

  function getDistance(p1: { x: number, y: number }, p2: { x: number, y: number }) {
    return Math.sqrt(Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2));
  }

  function handleAction(type: ActionType) {
    if (type === 'Move') {
      toggleMovementMode();
      return;
    }

    if (!scene || !scene.choices || !state.playerPosition) return;

    // Filter entities by type
    const characters = ['Vale', 'Rook', 'Wisp', 'Shadow'];
    const objects = ['Shard', 'Console', 'Emitter', 'Terminal', 'ArchiveNode', 'MemoryCore'];
    const enemies = ['Construct', 'Enforcer', 'Prime Enforcer'];

    let targetNames: string[] = [];
    if (type === 'Speak') targetNames = characters;
    else if (type === 'Act') targetNames = objects;
    else if (type === 'Fight') targetNames = enemies;

    const nearbyEntities = (scene.positions || []).filter(p => 
      targetNames.includes(p.name) && 
      getDistance(state.playerPosition!, { x: p.x, y: p.y }) <= 3
    );

    if (nearbyEntities.length > 0) {
      // Find a choice in the current scene that matches the action type
      const matchingChoice = scene.choices.find(c => c.actionType === type);
      if (matchingChoice) {
        advanceTo(matchingChoice.next, matchingChoice.id);
      } else {
        // Fallback: if no actionType is defined on choices, just take the first one
        // or we could show a message. For now, let's just take the first available choice.
        const firstChoice = scene.choices[0];
        advanceTo(firstChoice.next, firstChoice.id);
      }
    }
  }

  const isMoveActive = state.isMovementMode;

  return (
    <div className="action-panel">
      <button 
        className="action-btn" 
        onClick={() => handleAction('Speak')}
        title="Speak with the closest ally"
      >
        <span className="action-icon">💬</span>
        <span>Speak</span>
      </button>

      <button 
        className={`action-btn ${isMoveActive ? 'active' : ''}`} 
        onClick={() => handleAction('Move')}
        title="Toggle movement mode (use Arrow Keys)"
      >
        <span className="action-icon">🚶</span>
        <span>Move</span>
      </button>

      <button 
        className="action-btn" 
        onClick={() => handleAction('Act')}
        title="Interact with the closest object"
      >
        <span className="action-icon">⚙️</span>
        <span>Act</span>
      </button>

      <button 
        className="action-btn" 
        onClick={() => handleAction('Fight')}
        title="Engage the closest threat"
      >
        <span className="action-icon">⚔️</span>
        <span>Fight</span>
      </button>

      {isMoveActive && (
        <div className="movement-hint">
          Movement Mode Active: Use Arrow Keys to move on the grid. Press ESC or Move again to exit.
        </div>
      )}
    </div>
  );
}
