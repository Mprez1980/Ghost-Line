export type Speaker = 'narration' | 'system' | 'Aster' | 'Vale' | 'Rook' | 'Wisp' | 'Aster (internal)';

export interface SceneLine {
  speaker: Speaker;
  text: string;
}

export interface Choice {
  id: string;
  label: string;
  next: string; // scene ID
}

export interface Scene {
  id: string;
  lines: SceneLine[];
  choices?: Choice[];
  /** Scene to go to automatically (no choice) */
  next?: string;
}

export interface GameState {
  currentSceneId: string;
  choiceHistory: string[]; // choice IDs made so far
}
