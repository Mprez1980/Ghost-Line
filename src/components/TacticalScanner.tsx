import { useGame } from '../context/GameContext';
import type { CharacterPosition } from '../story/types';
import './TacticalScanner.css';

interface TacticalScannerProps {
  positions?: CharacterPosition[];
}

export default function TacticalScanner({ positions = [] }: TacticalScannerProps) {
  const { state } = useGame();
  const size = 16;
  const cells = [];

  // Override Aster's position with dynamic state if available
  const dynamicPositions = positions.map(pos => {
    if (pos.name === 'Aster' && state.playerPosition) {
      return { ...pos, x: state.playerPosition.x, y: state.playerPosition.y };
    }
    return pos;
  });

  // y-axis goes from 15 (top) down to 0 (bottom) so coordinates align like a Cartesian plane
  for (let y = size - 1; y >= 0; y--) {
    for (let x = 0; x < size; x++) {
      cells.push({ x, y });
    }
  }

  function getEntityAt(x: number, y: number) {
    return dynamicPositions.find(pos => pos.x === x && pos.y === y);
  }

  function getEntityInitial(name: string): string {
    switch (name) {
      case 'Aster': return 'A';
      case 'Vale': return 'V';
      case 'Rook': return 'R';
      case 'Wisp': return 'W';
      case 'Shard': return 'S';
      case 'Construct': return 'C';
      case 'Console': return 'Ω';
      case 'Emitter': return 'E';
      case 'Terminal': return 'T';
      default: return '?';
    }
  }

  return (
    <div className="tactical-scanner">
      <div className="scanner-header">
        <span className="scanner-beacon"></span>
        <h3>Resonance Locator</h3>
      </div>
      
      <div className="scanner-grid-wrapper">
        <div className="scanner-scanline"></div>
        <div className="scanner-grid">
          {cells.map(({ x, y }) => {
            const entity = getEntityAt(x, y);
            const isEntity = !!entity;
            const entityClass = isEntity 
              ? `cell-entity entity-${entity.name.toLowerCase()} ${entity.status === 'deactivated' ? 'entity-deactivated' : ''}` 
              : '';

            return (
              <div 
                key={`${x}-${y}`} 
                className={`grid-cell ${entityClass}`}
                title={isEntity ? `${entity.name} [x:${entity.x}, y:${entity.y}] ${entity.status || ''}` : `[x:${x}, y:${y}]`}
              >
                {entity && <span className="entity-marker">{getEntityInitial(entity.name)}</span>}
              </div>
            );
          })}
        </div>
      </div>

      <div className="scanner-legend">
        <h4>Telemetry Data</h4>
        {positions.length === 0 ? (
          <p className="legend-empty">Scanner offline. No signatures detected.</p>
        ) : (
          <ul className="legend-list">
            {positions.map((pos, idx) => (
              <li key={idx} className={`legend-item item-${pos.name.toLowerCase()} ${pos.status === 'deactivated' ? 'legend-deactivated' : ''}`}>
                <span className="legend-marker">{getEntityInitial(pos.name)}</span>
                <span className="legend-name">{pos.name}</span>
                <span className="legend-coords">[{pos.x}, {pos.y}]</span>
                {pos.status && <span className="legend-status">({pos.status})</span>}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
