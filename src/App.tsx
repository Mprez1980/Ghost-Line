import { useState } from 'react';
import { GameProvider, useGame } from './context/GameContext';
import SceneDisplay from './components/SceneDisplay';
import TacticalScanner from './components/TacticalScanner';
import VisualFeed from './components/VisualFeed';
import ActionPanel from './components/ActionPanel';
import scenes from './story';
import './App.css';

function GameShell() {
  const { state, saveGame, loadGame, reset, hasSave } = useGame();
  const [showHistory, setShowHistory] = useState(false);

  // Map currentSceneId to appropriate mood theme class
  const sceneId = state.currentSceneId;
  let themeClass = 'theme-museum';

  if (sceneId.startsWith('vale_') || sceneId === 'prison_vale_path' || sceneId === 'prison_escape_vale') {
    themeClass = 'theme-vale';
  } else if (sceneId.startsWith('rook_') || sceneId === 'prison_rook_path' || sceneId === 'prison_escape_rook') {
    themeClass = 'theme-rook';
  } else if (sceneId === 'memory_pier') {
    themeClass = 'theme-pier';
  } else if (sceneId === 'prison_escape_convergence') {
    themeClass = 'theme-terminal';
  } else if (sceneId.startsWith('archives_')) {
    themeClass = 'theme-archives';
  } else if (sceneId.startsWith('prison_') || sceneId.startsWith('c2_')) {
    themeClass = 'theme-prison';
  }

  const activeScene = scenes[sceneId];
  const positions = activeScene?.positions || [];
  const visualSummary = activeScene?.visualSummary;

  return (
    <div className={`app-shell ${themeClass}`}>
      <header className="game-header">
        <div className="header-container">
          <div className="header-left">
            <h1>Ghost Line</h1>
            <p className="chapter-label">Chapter One — The Museum of Echoes</p>
          </div>
          <div className="game-controls">
            <button className="btn-control" onClick={() => setShowHistory(true)} title="View dialogue history log">
              📜 Log
            </button>
            <button className="btn-control" onClick={saveGame} title="Save current progress">
              💾 Save
            </button>
            <button className="btn-control" onClick={loadGame} disabled={!hasSave} title="Load manual save file">
              📂 Load
            </button>
            <button className="btn-control" onClick={reset} title="Restart chapter from beginning">
              🔄 Restart
            </button>
          </div>
        </div>
      </header>
      <main className="game-layout">
        <div className="main-content">
          <SceneDisplay showHistory={showHistory} onCloseHistory={() => setShowHistory(false)} />
          <ActionPanel />
        </div>
        <aside className="sidebar-content">
          <VisualFeed summary={visualSummary} sceneId={sceneId} />
          <TacticalScanner positions={positions} />
        </aside>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <GameProvider>
      <GameShell />
    </GameProvider>
  );
}
