import chapter1 from './chapter1';
import chapter2 from './chapter2';
import type { Scene } from './types';

const allScenes: Record<string, Scene> = {
  ...chapter1,
  ...chapter2,
};

export default allScenes;
