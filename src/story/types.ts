export type Speaker = 'narration' | 'system' | 'Aster' | 'Vale' | 'Rook' | 'Wisp' | 'Aster (internal)';

export interface SceneLine {
  speaker: Speaker;
  text: string;
}

export type ActionType = 'Speak' | 'Move' | 'Act' | 'Fight';

export interface Choice {
  id: string;
  label: string;
  next: string; // scene ID
  keywords?: string[];
  actionType?: ActionType;
}

export interface CharacterPosition {
  name: 'Aster' | 'Vale' | 'Rook' | 'Wisp' | 'Shard' | 'Construct' | 'Console' | 'Emitter' | 'Terminal' | 'Enforcer' | 'ArchiveNode' | 'MemoryCore' | 'Barrier' | 'Shadow';
  x: number; // 0 to 15
  y: number; // 0 to 15
  status?: string; // e.g. "active", "deactivated", "corrupted"
}

export interface Scene {
  id: string;
  lines: SceneLine[];
  choices?: Choice[];
  /** Scene to go to automatically (no choice) */
  next?: string;
  positions?: CharacterPosition[];
  /** High-level visual description for the neural uplink */
  visualSummary?: string;
  /** Optional URL for a physical illustration */
  illustration?: string;
}

export interface GameState {
  currentSceneId: string;
  choiceHistory: string[]; // choice IDs made so far
}
