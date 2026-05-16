import { createContext, useContext, useState, type ReactNode } from 'react';
import type { GameState } from '../story/types';

interface GameContextValue {
  state: GameState;
  advanceTo: (sceneId: string, choiceId?: string) => void;
  reset: () => void;
}

const GameContext = createContext<GameContextValue | null>(null);

const INITIAL_STATE: GameState = {
  currentSceneId: 'museum_opening',
  choiceHistory: [],
};

export function GameProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<GameState>(INITIAL_STATE);

  function advanceTo(sceneId: string, choiceId?: string) {
    setState(prev => ({
      currentSceneId: sceneId,
      choiceHistory: choiceId ? [...prev.choiceHistory, choiceId] : prev.choiceHistory,
    }));
  }

  function reset() {
    setState(INITIAL_STATE);
  }

  return (
    <GameContext.Provider value={{ state, advanceTo, reset }}>
      {children}
    </GameContext.Provider>
  );
}

export function useGame() {
  const ctx = useContext(GameContext);
  if (!ctx) throw new Error('useGame must be used inside GameProvider');
  return ctx;
}
