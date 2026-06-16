import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';
import type { GameState, SceneLine } from '../story/types';
import scenes from '../story';

interface GameContextValue {
  state: GameState;
  advanceTo: (sceneId: string, choiceId?: string) => void;
  reset: () => void;
  saveGame: () => void;
  loadGame: () => void;
  hasSave: boolean;
  getDialogueHistory: () => SceneLine[];
}

const GameContext = createContext<GameContextValue | null>(null);

const INITIAL_STATE: GameState = {
  currentSceneId: 'museum_opening',
  choiceHistory: [],
};

const SAVE_KEY = 'ghost_line_save_v1';

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GameState>(INITIAL_STATE);
  const [hasSave, setHasSave] = useState(false);

  // Check if a save exists on mount
  useEffect(() => {
    setHasSave(!!localStorage.getItem(SAVE_KEY));
  }, []);

  function advanceTo(sceneId: string, choiceId?: string) {
    setState(prev => {
      const newState = {
        currentSceneId: sceneId,
        choiceHistory: choiceId ? [...prev.choiceHistory, choiceId] : prev.choiceHistory,
      };
      // Auto-save on every transition for seamless gameplay
      localStorage.setItem(SAVE_KEY + '_auto', JSON.stringify(newState));
      return newState;
    });
  }

  function reset() {
    setState(INITIAL_STATE);
    localStorage.removeItem(SAVE_KEY + '_auto');
  }

  function saveGame() {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    setHasSave(true);
  }

  function loadGame() {
    const saved = localStorage.getItem(SAVE_KEY) || localStorage.getItem(SAVE_KEY + '_auto');
    if (saved) {
      try {
        const loadedState = JSON.parse(saved) as GameState;
        if (loadedState.currentSceneId) {
          setState(loadedState);
        }
      } catch (e) {
        console.error('Failed to parse save game state', e);
      }
    }
  }

  /**
   * Reconstructs the complete dialogue history by tracing the player's
   * exact choice history from the start.
   */
  function getDialogueHistory(): SceneLine[] {
    const historyLines: SceneLine[] = [];
    let currentSceneId = 'museum_opening';
    let choiceIndex = 0;

    // Trace the path up to the active scene
    while (currentSceneId) {
      const scene = scenes[currentSceneId];
      if (!scene) break;

      // Add all lines in this scene
      historyLines.push(...scene.lines);

      // Determine the next step in the path
      if (scene.choices && scene.choices.length > 0) {
        if (choiceIndex < state.choiceHistory.length) {
          const chosenId = state.choiceHistory[choiceIndex];
          const choice = scene.choices.find(c => c.id === chosenId);
          if (choice) {
            currentSceneId = choice.next;
            choiceIndex++;
          } else {
            break;
          }
        } else {
          // We reached the active scene (no choices made past this point)
          break;
        }
      } else if (scene.next) {
        currentSceneId = scene.next;
      } else {
        break;
      }
    }

    return historyLines;
  }

  return (
    <GameContext.Provider value={{ state, advanceTo, reset, saveGame, loadGame, hasSave, getDialogueHistory }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used inside GameProvider');
  return ctx;
}
