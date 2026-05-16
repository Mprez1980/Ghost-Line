import type { VercelRequest, VercelResponse } from '@vercel/node';
import Anthropic from '@anthropic-ai/sdk';

interface Choice {
  id: string;
  label: string;
}

const client = new Anthropic({ apiKey: process.env.ANTHROPIC_API_KEY });

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { choices, playerInput } = req.body as { choices: Choice[]; playerInput: string };

  if (!Array.isArray(choices) || !playerInput || typeof playerInput !== 'string') {
    return res.status(400).json({ error: 'Invalid request body' });
  }

  const choiceList = choices.map((c, i) => `${i + 1}. [id: ${c.id}] ${c.label}`).join('\n');

  const message = await client.messages.create({
    model: 'claude-sonnet-4-6',
    max_tokens: 64,
    system: `You are the choice resolver for an interactive visual novel called Ghost Line.
Given the player's free-form response and the available choices, return ONLY the choice id that best matches the player's intent.
If the input is ambiguous or doesn't match any choice, return "null".
Respond with only the choice id string or the word null — nothing else.`,
    messages: [
      {
        role: 'user',
        content: `Available choices:\n${choiceList}\n\nPlayer said: "${playerInput}"\n\nWhich choice id matches?`,
      },
    ],
  });

  const raw = (message.content[0] as { type: string; text: string }).text.trim();
  const validIds = choices.map(c => c.id);
  const choiceId = validIds.includes(raw) ? raw : null;

  return res.status(200).json({ choiceId });
}
