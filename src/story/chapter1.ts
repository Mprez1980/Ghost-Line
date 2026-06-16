import type { Scene } from './types';

const scenes: Record<string, Scene> = {
  // ── Scene 1: The Museum of Echoes ───────────────────────────────────────
  museum_opening: {
    id: 'museum_opening',
    visualSummary: 'SIGNAL: STABLE // ARCHIVE: MUSEUM HALL // VIOLET RADIANCE DETECTED',
    lines: [
      { speaker: 'narration', text: 'The lights flicker. The air hums. The Museum of Echoes feels like it\'s holding its breath.' },
      { speaker: 'narration', text: 'Aster stands in the center hall, surrounded by fractured holograms and half-collapsed memory displays.' },
      { speaker: 'narration', text: 'Outside, the city of Oakhaven is silent, save for the distant thrum of Conclave patrol ships.' },
      { speaker: 'Aster (internal)', text: 'Something\'s wrong. The resonance field is collapsing faster than expected.' },
      { speaker: 'narration', text: 'A shard pulses on the floor — soft violet light, trembling.' },
      { speaker: 'system', text: 'You found your first Faith Shard.' },
      { speaker: 'narration', text: 'Aster kneels, touching it. A surge of warmth travels up their arm.' },
      { speaker: 'Aster', text: '"Wisp… if you can hear me, I\'m here. I\'m not leaving you."' },
      { speaker: 'narration', text: 'Footsteps echo behind them. Two figures emerge from the smoke.' },
      { speaker: 'narration', text: 'Vale — jaw tight, eyes burning with fear and determination.' },
      { speaker: 'narration', text: 'Rook — calm, sharp, scanning the room like a battlefield.' },
      { speaker: 'narration', text: 'They stop on either side of Aster.' },
    ],
    next: 'the_choice',
    positions: [
      { name: 'Aster', x: 8, y: 8 },
      { name: 'Shard', x: 8, y: 12 },
      { name: 'Vale', x: 5, y: 4 },
      { name: 'Rook', x: 11, y: 4 }
    ]
  },

  // ── Scene 2: The Choice ──────────────────────────────────────────────────
  the_choice: {
    id: 'the_choice',
    visualSummary: 'INTERFACE: ACTIVE // ENTITIES: VALE & ROOK // TENSION LEVEL: CRITICAL',
    lines: [
      { speaker: 'Vale', text: '"Aster. We don\'t have time. They took her. They took my daughter. We have to move. Now."' },
      { speaker: 'narration', text: 'His voice cracks on the last word. He clutches his heavy tactical rifle.' },
      { speaker: 'Rook', text: '"No. We move smart, not fast. This wasn\'t a kidnapping — it was a political strike. We need intel before we charge in blind."' },
      { speaker: 'narration', text: 'Rook adjusts their visor, data streams reflecting in the glass.' },
      { speaker: 'Aster (internal)', text: 'Both of them are right. Both of them are wrong. But I have to choose.' },
    ],
    choices: [
      { id: 'follow_vale', label: 'Follow Vale', next: 'vale_scene3', keywords: ['vale', 'fast', 'quick', 'hurry', 'daughter', 'kid', 'run', 'speed'], actionType: 'Speak' },
      { id: 'follow_rook', label: 'Follow Rook', next: 'rook_scene3', keywords: ['rook', 'smart', 'slow', 'intel', 'plan', 'strategy', 'think'], actionType: 'Speak' },
    ],
    positions: [
      { name: 'Aster', x: 8, y: 8 },
      { name: 'Vale', x: 6, y: 9 },
      { name: 'Rook', x: 10, y: 9 }
    ]
  },

  // ── Vale Path ────────────────────────────────────────────────────────────
  vale_scene3: {
    id: 'vale_scene3',
    visualSummary: 'RECONSTRUCTION: RAPID MOVEMENT // SECTOR: BROKEN CORRIDOR // SURGE DETECTED',
    lines: [
      { speaker: 'narration', text: 'Vale moves fast, almost too fast, pushing through the museum\'s broken corridors.' },
      { speaker: 'Vale', text: '"She\'s just a kid, Aster. She didn\'t ask for any of this. She didn\'t deserve it."' },
      { speaker: 'narration', text: 'Aster watches him — the tension in his shoulders, the way he keeps glancing at every shadow.' },
      { speaker: 'Aster (internal)', text: 'He\'s terrified. Not of the Conclave. Not of the pogrom. Of losing her.' },
      { speaker: 'narration', text: 'A resonance surge shakes the hall. A corrupted memory-construct lunges from the ceiling.' },
      { speaker: 'Vale', text: '"Stay behind me!"' },
    ],
    choices: [
      { id: 'vale_protect', label: 'Step in front of Vale — Aster protects him.', next: 'vale_scene4', keywords: ['protect', 'front', 'shield', 'save', 'step in', 'defend', 'myself'] },
      { id: 'vale_support', label: 'Support Vale from behind — Aster trusts his strength.', next: 'vale_scene4', keywords: ['support', 'behind', 'back', 'trust', 'strength', 'him'] },
    ],
    positions: [
      { name: 'Aster', x: 6, y: 8 },
      { name: 'Vale', x: 6, y: 12 },
      { name: 'Construct', x: 6, y: 14 }
    ]
  },

  vale_scene4: {
    id: 'vale_scene4',
    visualSummary: 'SIGNAL: WEAK // ENVIRONMENT: LOW LIGHT // RESONANCE: SPIKING',
    lines: [
      { speaker: 'narration', text: 'The floor cracks. The lights die, replaced by a flickering violet emergency glow.' },
      { speaker: 'Vale', text: '"We\'re almost there. Just hold on. If I lose her... I lose everything."' },
      { speaker: 'narration', text: 'Vale grabs Aster\'s arm. They reach the Memory Pier entrance.' },
      { speaker: 'narration', text: 'Aster feels the shard pulsing again, hotter this time.' },
      { speaker: 'Aster (internal)', text: 'Wisp… I\'m coming. Just hang on.' },
    ],
    next: 'memory_pier',
    positions: [
      { name: 'Aster', x: 8, y: 11 },
      { name: 'Vale', x: 7, y: 12 },
      { name: 'Shard', x: 8, y: 14 }
    ]
  },

  // ── Rook Path ────────────────────────────────────────────────────────────
  rook_scene3: {
    id: 'rook_scene3',
    visualSummary: 'RECONSTRUCTION: MEASURED PACE // SECTOR: TACTICAL OVERLOOK // TARGETS: MULTIPLE',
    lines: [
      { speaker: 'narration', text: 'Rook walks with purpose — every step measured, every breath controlled.' },
      { speaker: 'Rook', text: '"This wasn\'t random. This was a message. They want us scared. They want us reactive. We can\'t give them that."' },
      { speaker: 'narration', text: 'Aster studies them. Rook\'s movements are surgical, precise.' },
      { speaker: 'Aster (internal)', text: 'Rook isn\'t afraid. They\'re angry. And anger can be just as dangerous as fear.' },
      { speaker: 'narration', text: 'A corrupted construct flickers into view. Rook doesn\'t flinch, raising their sidearm.' },
      { speaker: 'Rook', text: '"On your left. Don\'t waste ammo."' },
    ],
    choices: [
      { id: 'rook_attack', label: 'Attack first — Aster takes initiative.', next: 'rook_scene4', keywords: ['attack', 'strike', 'fight', 'first', 'initiative', 'hit', 'kill', 'offensive'] },
      { id: 'rook_wait', label: "Wait for Rook's signal — Aster trusts their strategy.", next: 'rook_scene4', keywords: ['wait', 'signal', 'listen', 'strategy', 'plan', 'hold', 'defensive'] },
    ],
    positions: [
      { name: 'Aster', x: 8, y: 5 },
      { name: 'Rook', x: 8, y: 9 },
      { name: 'Construct', x: 11, y: 10 }
    ]
  },

  rook_scene4: {
    id: 'rook_scene4',
    visualSummary: 'RECONSTRUCTION: ANALYSIS MODE // OBJECT: RESONANCE NODE // GEOMETRY: CORRUPTED',
    lines: [
      { speaker: 'narration', text: 'Rook kneels beside a shattered resonance node.' },
      { speaker: 'Rook', text: '"See this? They overloaded the emotional geometry. This wasn\'t meant to kill — it was meant to erase. To make us forget she ever existed."' },
      { speaker: 'narration', text: 'Aster feels their stomach twist. The cruelty of the Conclave is boundless.' },
      { speaker: 'Aster', text: '"Wisp…"' },
      { speaker: 'Rook', text: '"We\'ll get her back. But we do it smart. We strike where it hurts."' },
      { speaker: 'narration', text: 'They reach the Memory Pier entrance.' },
    ],
    next: 'memory_pier',
    positions: [
      { name: 'Aster', x: 8, y: 8 },
      { name: 'Rook', x: 8, y: 10 },
      { name: 'Console', x: 8, y: 11 }
    ]
  },

  // ── The Memory Pier (convergence) ────────────────────────────────────────
  memory_pier: {
    id: 'memory_pier',
    visualSummary: 'SIGNAL: UNSTABLE // ENVIRONMENT: OCEAN VOID // CRIMSON LIGHT DETECTED',
    lines: [
      { speaker: 'narration', text: 'The world goes quiet. The pier stretches out into an endless grey void.' },
      { speaker: 'narration', text: 'The ocean glitches, waves freezing in mid-air. The sky fractures into geometric patterns.' },
      { speaker: 'Aster (internal)', text: 'This place… it feels like it remembers her. I can hear her laughter in the wind.' },
      { speaker: 'narration', text: 'A soft violet glow appears at the end of the pier, illuminating the mist.' },
      { speaker: 'Aster', text: '"Wisp… please… I\'m here. I won\'t let them take you again."' },
      { speaker: 'narration', text: 'The shard in their hand ignites. The world holds its breath.' },
      { speaker: 'narration', text: 'But instead of a portal, a harsh crimson light floods the pier. The alarm sirens scream.' },
    ],
    next: 'combat_encounter',
    positions: [
      { name: 'Aster', x: 8, y: 6 },
      { name: 'Vale', x: 5, y: 2 },
      { name: 'Rook', x: 11, y: 2 },
      { name: 'Wisp', x: 8, y: 13 }
    ]
  },

  // ── Scene 5: Combat Ambush ───────────────────────────────────────────────
  combat_encounter: {
    id: 'combat_encounter',
    visualSummary: 'THREAT: HIGH // ENTITIES: CONCLAVE ENFORCERS // COMBAT MODE: ENGAGED',
    lines: [
      { speaker: 'narration', text: 'Footsteps thunder down the pier. Conclave Enforcers emerge from the crimson fog, heavy weapons humming with lethal energy.' },
      { speaker: 'Vale', text: '"It\'s an ambush! Enforcers! Protect Aster!"' },
      { speaker: 'Rook', text: '"They\'ve bracketed us. Form a defensive line, now! Aster, stay low!"' },
      { speaker: 'narration', text: 'Aster feels the shard vibrating violently. The Enforcers raise their containment weapons.' },
    ],
    choices: [
      { id: 'combat_fight', label: "Fight back beside Vale", next: 'combat_defeat', keywords: ['fight', 'attack', 'strike', 'vale', 'battle', 'weapons', 'hit'], actionType: 'Fight' },
      { id: 'combat_flee', label: "Attempt to escape with Rook", next: 'combat_defeat', keywords: ['flee', 'run', 'escape', 'rook', 'exit', 'retreat', 'avoid'], actionType: 'Move' },
      { id: 'combat_surrender', label: "Shield the Shard's energy core", next: 'combat_defeat', keywords: ['shield', 'protect', 'shard', 'surrender', 'guard', 'energy'], actionType: 'Act' }
    ],
    positions: [
      { name: 'Aster', x: 8, y: 6 },
      { name: 'Vale', x: 6, y: 5 },
      { name: 'Rook', x: 10, y: 5 },
      { name: 'Enforcer', x: 5, y: 9 },
      { name: 'Enforcer', x: 11, y: 9 },
      { name: 'Enforcer', x: 8, y: 11 }
    ]
  },

  // ── Scene 6: Suppression Blast ───────────────────────────────────────────
  combat_defeat: {
    id: 'combat_defeat',
    visualSummary: 'ERROR: NEURAL OVERLOAD // SIGNAL: TERMINATED // VISUAL DATA LOST',
    lines: [
      { speaker: 'narration', text: 'You move to act, but the Enforcers discharge a high-frequency suppression field.' },
      { speaker: 'narration', text: 'A massive sound wave hits you, shaking the entire pier. The air crackles with static electricity.' },
      { speaker: 'Vale', text: '"Aster, get back! No—"' },
      { speaker: 'narration', text: 'Rook lunges to block the blast, but the feedback wave hits Aster full force.' },
      { speaker: 'system', text: 'Warning: Neural feedback overload. Initializing emergency shutdown.' },
      { speaker: 'narration', text: 'Aster\'s vision fractures into a thousand shards. The world spins, then collapses into complete darkness.' },
    ],
    next: 'prison_trap',
    positions: [
      { name: 'Aster', x: 8, y: 6 },
      { name: 'Vale', x: 7, y: 6 },
      { name: 'Rook', x: 9, y: 6 },
      { name: 'Enforcer', x: 7, y: 7 },
      { name: 'Enforcer', x: 8, y: 7 },
      { name: 'Enforcer', x: 9, y: 7 }
    ]
  },

  // ── Scene 7: The Trap ───────────────────────────────────────────────────
  prison_trap: {
    id: 'prison_trap',
    visualSummary: 'SIGNAL: RECOVERING // STATUS: PRISONER // ENVIRONMENT: LOCKDOWN CELL',
    lines: [
      { speaker: 'narration', text: 'Aster slowly opens their eyes. A throbbing headache beats behind their temples, and the air smells of ozone.' },
      { speaker: 'Aster (internal)', text: 'What happened? My head... where are we? This isn\'t the pier.' },
      { speaker: 'narration', text: 'Red laser barriers hum around you, forming a tight grid cage. Solid metal plates seal the floor.' },
      { speaker: 'Vale', text: '"They caught us. Knocked us out cold and dumped us in this lockdown block. Bastards."' },
      { speaker: 'Rook', text: '"At least we are alive. But this is a high-security Conclave cage. We need to disable the console to escape."' },
    ],
    choices: [
      { id: 'prison_brute_force', label: "Force the console open (Vale's way)", next: 'prison_vale_path', keywords: ['force', 'brute', 'hit', 'smash', 'break', 'vale', 'disable', 'destroy', 'physically'], actionType: 'Act' },
      { id: 'prison_analyze', label: "Scan the console's energy flow (Rook's way)", next: 'prison_rook_path', keywords: ['analyze', 'scan', 'look', 'examine', 'rook', 'energy', 'console', 'diagnose'], actionType: 'Act' },
    ],
    positions: [
      { name: 'Aster', x: 8, y: 8 },
      { name: 'Vale', x: 6, y: 8 },
      { name: 'Rook', x: 10, y: 8 },
      { name: 'Emitter', x: 3, y: 3 },
      { name: 'Emitter', x: 12, y: 3 },
      { name: 'Emitter', x: 3, y: 12 },
      { name: 'Emitter', x: 12, y: 12 }
    ]
  },

  // ── Prison Path: Vale ────────────────────────────────────────────────────
  prison_vale_path: {
    id: 'prison_vale_path',
    visualSummary: 'RECONSTRUCTION: MECHANICAL FAILURE // STATUS: STEAM VENTING // TEMP: RISING',
    lines: [
      { speaker: 'narration', text: 'Vale smashes his heavy armored gauntlet into the emitter\'s ventilation panel. Sparking fluid sprays out.' },
      { speaker: 'Vale', text: '"The casing is loose! But the security overrides are starting to vent superheated steam. Aster, we need to blow this core now or we\'ll roast!"' },
      { speaker: 'Aster (internal)', text: 'I can either overload the central power core directly or try to bypass the safety valves manually.' },
    ],
    choices: [
      { id: 'vale_overload', label: "Overload the central core", next: 'prison_escape_vale', keywords: ['overload', 'core', 'blow', 'explode', 'force', 'power'] },
      { id: 'vale_bypass', label: "Bypass the security valve manually", next: 'prison_escape_vale', keywords: ['bypass', 'valve', 'manual', 'wire', 'reprogram', 'vent'] },
    ],
    positions: [
      { name: 'Aster', x: 8, y: 6 },
      { name: 'Vale', x: 7, y: 11 },
      { name: 'Console', x: 8, y: 12 },
      { name: 'Emitter', x: 3, y: 3 },
      { name: 'Emitter', x: 12, y: 3 },
      { name: 'Emitter', x: 3, y: 12 },
      { name: 'Emitter', x: 12, y: 12 }
    ]
  },

  // ── Prison Path: Rook ────────────────────────────────────────────────────
  prison_rook_path: {
    id: 'prison_rook_path',
    visualSummary: 'RECONSTRUCTION: HARMONIC OVERRIDE // FREQUENCY: SYNCING // GRID: UNSTABLE',
    lines: [
      { speaker: 'Rook', text: '"The console is running a tri-wave encryption. Standard brute force will lock it forever. We need to match the harmonic frequencies."' },
      { speaker: 'Aster', text: '"My Faith Shard... it\'s vibrating. I can try to tune its resonance to match the lock."' },
      { speaker: 'Rook', text: '"Do it. We need to choose the correct frequency offset. Be precise."' },
    ],
    choices: [
      { id: 'rook_tune_high', label: "Tune to a high-frequency pitch (800Hz)", next: 'prison_escape_rook', keywords: ['high', 'pitch', '800hz', 'tune', 'fast', 'sharp'] },
      { id: 'rook_tune_low', label: "Tune to a low-frequency rumble (120Hz)", next: 'prison_escape_rook', keywords: ['low', 'rumble', '120hz', 'heavy', 'tune', 'deep'] },
    ],
    positions: [
      { name: 'Aster', x: 8, y: 6 },
      { name: 'Rook', x: 9, y: 11 },
      { name: 'Console', x: 8, y: 12 },
      { name: 'Emitter', x: 3, y: 3 },
      { name: 'Emitter', x: 12, y: 3 },
      { name: 'Emitter', x: 3, y: 12 },
      { name: 'Emitter', x: 12, y: 12 }
    ]
  },

  // ── Prison Escape: Vale ──────────────────────────────────────────────────
  prison_escape_vale: {
    id: 'prison_escape_vale',
    visualSummary: 'RECONSTRUCTION: BARRIER DOWN // STATUS: STEAM CLEARING // EXIT: FOUND',
    lines: [
      { speaker: 'narration', text: 'With a metallic screech, the emitter panel ruptures. The red energy grid flickers and dies.' },
      { speaker: 'Vale', text: '"Told you. Nothing a little pressure can\'t fix. Let\'s get out of here before the steam blinds us."' },
      { speaker: 'Rook', text: '"Messy, but effective. Let\'s move before the security construct registers the drop in grid power."' },
    ],
    next: 'prison_escape_convergence',
    positions: [
      { name: 'Aster', x: 8, y: 10 },
      { name: 'Vale', x: 7, y: 11 },
      { name: 'Rook', x: 9, y: 11 },
      { name: 'Emitter', x: 3, y: 3, status: 'deactivated' },
      { name: 'Emitter', x: 12, y: 3, status: 'deactivated' },
      { name: 'Emitter', x: 3, y: 12, status: 'deactivated' },
      { name: 'Emitter', x: 12, y: 12, status: 'deactivated' }
    ]
  },

  // ── Prison Escape: Rook ──────────────────────────────────────────────────
  prison_escape_rook: {
    id: 'prison_escape_rook',
    visualSummary: 'RECONSTRUCTION: LOCK DISENGAGED // STATUS: STEALTH ACTIVE // EXIT: FOUND',
    lines: [
      { speaker: 'narration', text: 'The shard pulses with a pure chime. The red lasers cycle down to a soft blue, and the lock clicks open.' },
      { speaker: 'Rook', text: '"Perfect calibration. The grid didn\'t even trigger an alarm. We have the advantage of stealth."' },
      { speaker: 'Vale', text: '"Quiet and clean. Fine, I\'ll admit it was a good plan. Let\'s get out of here."' },
    ],
    next: 'prison_escape_convergence',
    positions: [
      { name: 'Aster', x: 8, y: 10 },
      { name: 'Vale', x: 7, y: 11 },
      { name: 'Rook', x: 9, y: 11 },
      { name: 'Emitter', x: 3, y: 3, status: 'deactivated' },
      { name: 'Emitter', x: 12, y: 3, status: 'deactivated' },
      { name: 'Emitter', x: 3, y: 12, status: 'deactivated' },
      { name: 'Emitter', x: 12, y: 12, status: 'deactivated' }
    ]
  },

  // ── Escape Convergence ───────────────────────────────────────────────────
  prison_escape_convergence: {
    id: 'prison_escape_convergence',
    visualSummary: 'INTERFACE: EXTERNAL TERMINAL // SIGNAL: INCOMING MESSAGE // SOURCE: W',
    lines: [
      { speaker: 'narration', text: 'They slip past the deactivated barrier into a long, dimly lit security corridor.' },
      { speaker: 'Aster', text: '"Look at that terminal. Someone left a message on the screen."' },
      { speaker: 'narration', text: 'Aster approaches the terminal. Flickering green text reads:' },
      { speaker: 'system', text: '"YOU ARE CLOSER THAN YOU THINK. FIND ME IN THE ARCHIVES. - W"' },
      { speaker: 'Aster', text: '"Wisp... she\'s still alive. She\'s leading us."' },
      { speaker: 'Vale', text: '"The Archives are in the lower levels. It\'s a maze down there."' },
      { speaker: 'Rook', text: '"Then we\'d better start moving. The Conclave won\'t wait."' },
    ],
    next: 'archives_approach',
    positions: [
      { name: 'Aster', x: 8, y: 12 },
      { name: 'Vale', x: 6, y: 11 },
      { name: 'Rook', x: 10, y: 11 },
      { name: 'Terminal', x: 8, y: 14 }
    ]
  },

  // ── NEW SEQUENCE: Heading to the Archives ────────────────────────────────
  archives_approach: {
    id: 'archives_approach',
    visualSummary: 'ENVIRONMENT: LOWER ARCHIVES // STATUS: CRYOGENIC DUST // ENTITY: RUNIC DOOR',
    lines: [
      { speaker: 'narration', text: 'The descent into the lower levels is steep and damp. The air grows cold, smelling of ancient dust and ozone.' },
      { speaker: 'Vale', text: '"I don\'t like this. It\'s too quiet. Even for a graveyard of memories."' },
      { speaker: 'Rook', text: '"Stay sharp. The Archives were built to withstand a siege. There will be automated defenses."' },
      { speaker: 'narration', text: 'They reach a massive circular door, etched with glowing runes of the Old World.' },
      { speaker: 'Aster (internal)', text: 'The Shard is reacting again. It\'s not vibrating... it\'s singing.' },
    ],
    choices: [
      { id: 'archives_shard_open', label: 'Use the Shard to unlock the door', next: 'archives_interior', keywords: ['shard', 'unlock', 'open', 'faith', 'door', 'runes'] },
      { id: 'archives_rook_hack', label: "Let Rook attempt to bypass the seal", next: 'archives_interior', keywords: ['rook', 'hack', 'bypass', 'seal', 'lock', 'console'] }
    ],
    positions: [
      { name: 'Aster', x: 8, y: 4 },
      { name: 'Vale', x: 5, y: 3 },
      { name: 'Rook', x: 11, y: 3 },
      { name: 'Barrier', x: 8, y: 10 }
    ]
  },

  archives_interior: {
    id: 'archives_interior',
    visualSummary: 'RECONSTRUCTION: CRYSTAL HALL // OBJECTS: MEMORY SEEDS // ENTITY: UNKNOWN SHADOW',
    lines: [
      { speaker: 'narration', text: 'The circular door grinds open, revealing a vast hall filled with towering crystal pillars.' },
      { speaker: 'narration', text: 'Each pillar glows with a different hue, housing thousands of flickering memory-seeds.' },
      { speaker: 'Vale', text: '"Look at all this... the history they tried to bury."' },
      { speaker: 'Rook', text: '"Focus. We need the central node. Wisp said she\'d be here."' },
      { speaker: 'narration', text: 'A shadow moves at the far end of the hall. It\'s not an Enforcer. It\'s small, flickering.' },
      { speaker: 'Aster', text: '"Wisp? Is that you?"' },
    ],
    choices: [
      { id: 'archives_call_out', label: 'Call out to the shadow', next: 'archives_revelation', keywords: ['call', 'speak', 'wisp', 'shout', 'name'] },
      { id: 'archives_approach_quietly', label: 'Approach the shadow cautiously', next: 'archives_revelation', keywords: ['approach', 'quiet', 'stealth', 'cautious', 'slow'] }
    ],
    positions: [
      { name: 'Aster', x: 8, y: 4 },
      { name: 'Vale', x: 6, y: 4 },
      { name: 'Rook', x: 10, y: 4 },
      { name: 'Shadow', x: 8, y: 12 },
      { name: 'ArchiveNode', x: 4, y: 8 },
      { name: 'ArchiveNode', x: 12, y: 8 }
    ]
  },

  archives_revelation: {
    id: 'archives_revelation',
    visualSummary: 'UPLINK: STABLE // ENTITY: WISP // STATUS: NEURAL SYNC ACTIVE',
    lines: [
      { speaker: 'narration', text: 'The shadow coalesces into a familiar form — a young girl, semi-transparent, pulsing with violet light.' },
      { speaker: 'Wisp', text: '"Aster... you came. I knew you would."' },
      { speaker: 'Vale', text: '"My god... Wisp! What have they done to you?"' },
      { speaker: 'narration', text: 'He reaches out, but his hand passes through her.' },
      { speaker: 'Wisp', text: '"I\'m not just me anymore, Dad. I\'m... part of the network now. They used the Shard to upload my consciousness."' },
      { speaker: 'Rook', text: '"The Conclave didn\'t want a hostage. They wanted an interface."' },
      { speaker: 'Wisp', text: '"They\'re coming, Aster. The Prime Enforcer. You have to take the Shard to the Memory Core. It\'s the only way to sever the link."' },
    ],
    choices: [
      { id: 'archives_protect_wisp', label: 'Stay and protect Wisp from the coming Enforcer', next: 'archives_final_stand', keywords: ['protect', 'stay', 'guard', 'wisp', 'fight'] },
      { id: 'archives_rush_core', label: 'Rush to the Memory Core with the Shard', next: 'archives_final_stand', keywords: ['rush', 'core', 'memory', 'shard', 'run'] }
    ],
    positions: [
      { name: 'Aster', x: 8, y: 8 },
      { name: 'Vale', x: 6, y: 8 },
      { name: 'Rook', x: 10, y: 8 },
      { name: 'Wisp', x: 8, y: 10 },
      { name: 'MemoryCore', x: 8, y: 14 }
    ]
  },

  archives_final_stand: {
    id: 'archives_final_stand',
    visualSummary: 'THREAT: EXTREME // ENTITY: PRIME ENFORCER // RESONANCE: LETHAL',
    lines: [
      { speaker: 'narration', text: 'A heavy thud echoes through the Archives. The entrance door is blasted off its hinges.' },
      { speaker: 'narration', text: 'The Prime Enforcer steps through, clad in black-and-gold ceramic armor, wielding a resonance blade that hums with a terrifying frequency.' },
      { speaker: 'system', text: 'TO BE CONTINUED IN CHAPTER TWO.' },
      { speaker: 'system', text: 'Thank you for playing the extended Ghost Line prologue!' },
    ],
    next: 'c2_awakening',
    positions: [
      { name: 'Aster', x: 8, y: 8 },
      { name: 'Vale', x: 6, y: 8 },
      { name: 'Rook', x: 10, y: 8 },
      { name: 'Wisp', x: 8, y: 10 },
      { name: 'Enforcer', x: 8, y: 2 }
    ]
  }
};

export default scenes;
