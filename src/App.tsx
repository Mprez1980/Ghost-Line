import { GameProvider } from './context/GameContext';
import SceneDisplay from './components/SceneDisplay';
import './App.css';

export default function App() {
  return (
    <GameProvider>
      <div className="app-shell">
        <header className="game-header">
          <h1>Ghost Line</h1>
          <p className="chapter-label">Chapter One — The Museum of Echoes</p>
        </header>
        <main>
          <SceneDisplay />
        </main>
      </div>
    </GameProvider>
  );
}
