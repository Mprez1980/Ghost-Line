import type { Scene } from '../story/types';

/**
 * Sends the player's free-form input to the server-side proxy,
 * which calls Claude and returns the resolved choice ID.
 */
export async function resolveChoiceFromText(
  scene: Scene,
  playerInput: string
): Promise<string | null> {
  if (!scene.choices || scene.choices.length === 0) return null;

  const response = await fetch('/api/resolve-choice', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      choices: scene.choices.map(c => ({ id: c.id, label: c.label })),
      playerInput,
    }),
  });

  if (!response.ok) return null;

  const data = await response.json() as { choiceId: string | null };
  return data.choiceId;
}
