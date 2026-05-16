import type { Scene } from './types';

const scenes: Record<string, Scene> = {
  // ── Scene 1: The Museum of Echoes ───────────────────────────────────────
  museum_opening: {
    id: 'museum_opening',
    lines: [
      { speaker: 'narration', text: 'The lights flicker. The air hums. The Museum of Echoes feels like it\'s holding its breath.' },
      { speaker: 'narration', text: 'Aster stands in the center hall, surrounded by fractured holograms and half-collapsed memory displays.' },
      { speaker: 'Aster (internal)', text: 'Something\'s wrong. The resonance field is collapsing faster than expected.' },
      { speaker: 'narration', text: 'A shard pulses on the floor — soft violet light, trembling.' },
      { speaker: 'system', text: 'You found your first Faith Shard.' },
      { speaker: 'narration', text: 'Aster kneels, touching it.' },
      { speaker: 'Aster', text: '"Wisp… if you can hear me, I\'m here. I\'m not leaving you."' },
      { speaker: 'narration', text: 'Footsteps echo behind them. Two figures emerge from the smoke.' },
      { speaker: 'narration', text: 'Vale — jaw tight, eyes burning with fear and determination.' },
      { speaker: 'narration', text: 'Rook — calm, sharp, scanning the room like a battlefield.' },
      { speaker: 'narration', text: 'They stop on either side of Aster.' },
    ],
    next: 'the_choice',
  },

  // ── Scene 2: The Choice ──────────────────────────────────────────────────
  the_choice: {
    id: 'the_choice',
    lines: [
      { speaker: 'Vale', text: '"Aster. We don\'t have time. They took her. They took my daughter. We have to move. Now."' },
      { speaker: 'narration', text: 'His voice cracks on the last word.' },
      { speaker: 'Rook', text: '"No. We move smart, not fast. This wasn\'t a kidnapping — it was a political strike. We need intel before we charge in blind."' },
      { speaker: 'narration', text: 'Aster rises slowly.' },
      { speaker: 'Aster (internal)', text: 'Both of them are right. Both of them are wrong. But I have to choose.' },
    ],
    choices: [
      { id: 'follow_vale', label: 'Follow Vale', next: 'vale_scene3' },
      { id: 'follow_rook', label: 'Follow Rook', next: 'rook_scene3' },
    ],
  },

  // ── Vale Path ────────────────────────────────────────────────────────────
  vale_scene3: {
    id: 'vale_scene3',
    lines: [
      { speaker: 'narration', text: 'Vale moves fast, almost too fast, pushing through the museum\'s broken corridors.' },
      { speaker: 'Vale', text: '"She\'s just a kid, Aster. She didn\'t ask for any of this. She didn\'t deserve it."' },
      { speaker: 'narration', text: 'Aster watches him — the tension in his shoulders, the way he keeps glancing at every shadow.' },
      { speaker: 'Aster (internal)', text: 'He\'s terrified. Not of the Conclave. Not of the pogrom. Of losing her.' },
      { speaker: 'narration', text: 'A resonance surge shakes the hall. A corrupted memory-construct lunges.' },
      { speaker: 'Vale', text: '"Stay behind me!"' },
    ],
    choices: [
      { id: 'vale_protect', label: 'Step in front of Vale — Aster protects him.', next: 'vale_scene4' },
      { id: 'vale_support', label: 'Support Vale from behind — Aster trusts his strength.', next: 'vale_scene4' },
    ],
  },

  vale_scene4: {
    id: 'vale_scene4',
    lines: [
      { speaker: 'narration', text: 'The floor cracks. The lights die.' },
      { speaker: 'Vale', text: '"We\'re almost there. Just hold on."' },
      { speaker: 'narration', text: 'Vale grabs Aster\'s arm. They reach the Memory Pier entrance.' },
      { speaker: 'narration', text: 'Aster feels the shard pulsing again.' },
      { speaker: 'Aster (internal)', text: 'Wisp… I\'m coming.' },
    ],
    next: 'memory_pier',
  },

  // ── Rook Path ────────────────────────────────────────────────────────────
  rook_scene3: {
    id: 'rook_scene3',
    lines: [
      { speaker: 'narration', text: 'Rook walks with purpose — every step measured, every breath controlled.' },
      { speaker: 'Rook', text: '"This wasn\'t random. This was a message. They want us scared. They want us reactive. We can\'t give them that."' },
      { speaker: 'narration', text: 'Aster studies them.' },
      { speaker: 'Aster (internal)', text: 'Rook isn\'t afraid. They\'re angry. And anger can be just as dangerous.' },
      { speaker: 'narration', text: 'A corrupted construct flickers into view. Rook doesn\'t flinch.' },
      { speaker: 'Rook', text: '"On your left."' },
    ],
    choices: [
      { id: 'rook_attack', label: 'Attack first — Aster takes initiative.', next: 'rook_scene4' },
      { id: 'rook_wait', label: "Wait for Rook's signal — Aster trusts their strategy.", next: 'rook_scene4' },
    ],
  },

  rook_scene4: {
    id: 'rook_scene4',
    lines: [
      { speaker: 'narration', text: 'Rook kneels beside a shattered resonance node.' },
      { speaker: 'Rook', text: '"See this? They overloaded the emotional geometry. This wasn\'t meant to kill — it was meant to erase."' },
      { speaker: 'narration', text: 'Aster feels their stomach twist.' },
      { speaker: 'Aster', text: '"Wisp…"' },
      { speaker: 'Rook', text: '"We\'ll get her back. But we do it smart."' },
      { speaker: 'narration', text: 'They reach the Memory Pier entrance.' },
    ],
    next: 'memory_pier',
  },

  // ── The Memory Pier (convergence) ────────────────────────────────────────
  memory_pier: {
    id: 'memory_pier',
    lines: [
      { speaker: 'narration', text: 'The world goes quiet.' },
      { speaker: 'narration', text: 'The ocean glitches. The sky fractures. The pier trembles under Aster\'s feet.' },
      { speaker: 'Aster (internal)', text: 'This place… it feels like it remembers her.' },
      { speaker: 'narration', text: 'A soft violet glow appears at the end of the pier.' },
      { speaker: 'narration', text: 'Aster steps forward.' },
      { speaker: 'Aster', text: '"Wisp… please… I\'m here."' },
      { speaker: 'narration', text: 'The shard in their hand ignites. The world holds its breath.' },
      { speaker: 'system', text: 'End of Tutorial.' },
    ],
  },
};

export default scenes;
