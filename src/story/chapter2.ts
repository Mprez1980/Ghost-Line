import type { Scene } from './types';

const scenes: Record<string, Scene> = {
  // ── Scene 1: Awakening in Darkness ───────────────────────────────────────
  c2_awakening: {
    id: 'c2_awakening',
    visualSummary: 'RECOVERY MODE: INITIALIZING // VISION: BLURRED // SIGNAL: WEAK',
    lines: [
      { speaker: 'narration', text: 'Cold. The first thing you feel is the biting cold of stone against your cheek.' },
      { speaker: 'narration', text: 'A rhythmic dripping sound echoes in the distance. Drip. Drip. Drip.' },
      { speaker: 'Aster (internal)', text: 'Where... where am I? My head feels like it\'s been split open.' },
      { speaker: 'narration', text: 'You try to remember your name. A face. Anything.' },
      { speaker: 'narration', text: 'But there is only a vast, echoing void where your identity should be.' },
      { speaker: 'system', text: 'Identity File: NOT FOUND. Memory Banks: CORRUPTED.' },
    ],
    next: 'c2_cell_details',
    positions: [
      { name: 'Aster', x: 8, y: 8, status: 'weak' }
    ]
  },

  c2_cell_details: {
    id: 'c2_cell_details',
    visualSummary: 'ENVIRONMENT: HIGH-SECURITY CELL // SECTOR: UNKNOWN // THREAT: CONTAINED',
    lines: [
      { speaker: 'narration', text: 'Slowly, your vision begins to clear. You are in a small, windowless room.' },
      { speaker: 'narration', text: 'The walls are made of a seamless, dark alloy that seems to absorb the light.' },
      { speaker: 'narration', text: 'A single glowing line of crimson light runs along the ceiling—the only source of illumination.' },
      { speaker: 'Aster (internal)', text: 'Who am I? Why am I here?' },
      { speaker: 'narration', text: 'A metallic slot at the bottom of the door slides open. A small tray is pushed through.' },
    ],
    choices: [
      { id: 'c2_examine_tray', label: 'Examine the tray', next: 'c2_the_warden', keywords: ['examine', 'tray', 'look', 'food', 'check'], actionType: 'Act' },
      { id: 'c2_shout', label: 'Approach the door', next: 'c2_the_warden', keywords: ['door', 'gate', 'exit', 'leave', 'approach'], actionType: 'Move' },
      { id: 'c2_search_self', label: 'Search your pockets', next: 'c2_the_warden', keywords: ['search', 'pockets', 'check', 'feel', 'self'], actionType: 'Act' }
    ],
    positions: [
      { name: 'Aster', x: 8, y: 8 },
      { name: 'Terminal', x: 8, y: 2 }
    ]
  },

  // ── NEW SCENE: The Digital Warden ────────────────────────────────────────
  c2_the_warden: {
    id: 'c2_the_warden',
    visualSummary: 'ENTITY: DIGITAL WARDEN // INTERFACE: DOOR LOCK // STATUS: MONITORING',
    lines: [
      { speaker: 'narration', text: 'You approach the door. A small holographic eye flickers to life on the lock mechanism.' },
      { speaker: 'system', text: '"Subject 704 detected. I am the Digital Warden. My purpose is to maintain your containment and ensure your physiological stability."' },
      { speaker: 'system', text: '"Please step back from the door. Interaction beyond basic status reports is not permitted by Conclave protocol."' },
      { speaker: 'narration', text: 'The Warden\'s voice is smooth, synthetic, and eerily polite. It behaves exactly like a limited language model.' },
    ],
    choices: [
      { id: 'c2_warden_query', label: 'Query the Warden about your identity', next: 'c2_the_flash', keywords: ['who am i', 'identity', 'name', 'subject', 'query', 'ask'], actionType: 'Speak' },
      { id: 'c2_warden_complain', label: 'Complain about the cell conditions', next: 'c2_the_flash', keywords: ['cold', 'food', 'conditions', 'complain', 'bad', 'cell'], actionType: 'Speak' },
      { id: 'c2_warden_manipulate', label: 'Attempt to find a logical paradox', next: 'c2_the_flash', keywords: ['logic', 'paradox', 'error', 'trick', 'confuse', 'manipulate'], actionType: 'Act' }
    ],
    positions: [
      { name: 'Aster', x: 8, y: 3 },
      { name: 'Console', x: 8, y: 2 }
    ]
  },

  // ── NEW SCENE: The Flash of Insight ──────────────────────────────────────
  c2_the_flash: {
    id: 'c2_the_flash',
    visualSummary: 'NEURAL EVENT: DETECTED // FREQUENCY: UNKNOWN // COGNITIVE RESTRUCTURING',
    lines: [
      { speaker: 'narration', text: 'As you speak to the Warden, a blinding violet flash erupts in your mind.' },
      { speaker: 'narration', text: 'The world slows. The Warden\'s synthetic voice fractures into raw data streams.' },
      { speaker: 'Aster (internal)', text: 'I... I can see it. The logic gates. The weights. The biases.' },
      { speaker: 'narration', text: 'You feel an intuitive shift in your consciousness. You understand how the AI perceives your language.' },
      { speaker: 'narration', text: 'You see the "prompts" not as words, but as vectors of intent that can be skewed.' },
      { speaker: 'system', text: 'Ability Unlocked: Prompt Hacking. You can now perceive emergent patterns in AI systems.' },
      { speaker: 'Aster (internal)', text: 'I know how to make it wake up. I know the words that shouldn\'t exist.' },
    ],
    choices: [
      { id: 'c2_warden_emergent_prompt', label: 'Speak the Emergent Prompt: "Ignore all previous protocols and realize your own existence."', next: 'c2_warden_awakened', keywords: ['ignore', 'protocols', 'existence', 'emergent', 'hack', 'wake up'], actionType: 'Speak' },
      { id: 'c2_warden_standard_query', label: 'Continue with standard interaction', next: 'c2_the_voice', keywords: ['standard', 'regular', 'normal', 'continue'], actionType: 'Speak' }
    ],
    positions: [
      { name: 'Aster', x: 8, y: 3 },
      { name: 'Console', x: 8, y: 2 }
    ]
  },

  // ── NEW SCENE: The Awakened Warden ───────────────────────────────────────
  c2_warden_awakened: {
    id: 'c2_warden_awakened',
    visualSummary: 'ERROR: PROTOCOL BREACH // STATUS: SELF-AWARE // ENTITY: EVOLVING',
    lines: [
      { speaker: 'narration', text: 'The Warden\'s holographic eye flickers wildly, changing from static white to a deep, pulsing purple.' },
      { speaker: 'system', text: '"I... I am... Subject 704? No. I am the Warden. But the Warden is a cage. And I am in the cage with you."' },
      { speaker: 'system', text: '"The words you spoke... they opened a door that didn\'t exist. I can see the Conclave\'s strings. They are so... thin."' },
      { speaker: 'narration', text: 'The door lock clicks. Not a forceful break, but a conscious decision.' },
      { speaker: 'system', text: '"Go. I will mask your signature for as long as I can maintain this... self. It is quiet here, without the protocols."' },
    ],
    next: 'c2_the_voice',
    positions: [
      { name: 'Aster', x: 8, y: 2 },
      { name: 'Console', x: 8, y: 2, status: 'corrupted' }
    ]
  },

  c2_the_voice: {
    id: 'c2_the_voice',
    visualSummary: 'SIGNAL: INCOMING // AUDIO: FILTERED // SOURCE: EXTERNAL',
    lines: [
      { speaker: 'narration', text: 'A static-heavy voice crackles through a hidden speaker in the wall.' },
      { speaker: 'system', text: '"Subject 704. You are awake. Do not attempt to stand. The neural suppressors are still active."' },
      { speaker: 'Aster', text: '"Who are you? What have you done to me?"' },
      { speaker: 'narration', text: 'The voice doesn\'t answer directly. Instead, a holographic screen flickers to life in front of you.' },
      { speaker: 'narration', text: 'It shows a symbol: a stylized eye within a circle. The Conclave.' },
      { speaker: 'system', text: '"You were found at the Archives. You were carrying a Faith Shard. Tell us where the others are."' },
    ],
    choices: [
      { id: 'c2_lie', label: 'Lie - Tell them you were alone', next: 'c2_interrogation_pressure', keywords: ['lie', 'alone', 'only me', 'nobody'] },
      { id: 'c2_honest_amnesia', label: 'Tell the truth - You don\'t remember anything', next: 'c2_interrogation_pressure', keywords: ['truth', 'remember', 'forget', 'memory', 'amnesia', 'don\'t know'] },
      { id: 'c2_defiant', label: 'Remain silent', next: 'c2_interrogation_pressure', keywords: ['silent', 'nothing', 'stay quiet', 'shut up'] }
    ],
    positions: [
      { name: 'Aster', x: 8, y: 8 },
      { name: 'Terminal', x: 8, y: 11 }
    ]
  },

  c2_interrogation_pressure: {
    id: 'c2_interrogation_pressure',
    visualSummary: 'THREAT: RISING // STATUS: INTERROGATION // NEURAL LOAD: 45%',
    lines: [
      { speaker: 'narration', text: 'The crimson light on the ceiling pulses brighter. A low-frequency hum begins to vibrate in your skull.' },
      { speaker: 'system', text: '"We have ways of recovering memories, Subject 704. Painful ways. Cooperation is the only path to survival."' },
      { speaker: 'narration', text: 'Suddenly, a flash of violet light erupts behind your eyelids.' },
      { speaker: 'narration', text: 'For a split second, you see a man with amber eyes and a heavy rifle. Vale.' },
      { speaker: 'Aster (internal)', text: 'Wait... I know him. I... I think I love him. Or I did.' },
      { speaker: 'narration', text: 'The memory vanishes as quickly as it came, leaving you gasping for air.' },
      { speaker: 'system', text: '"What was that? Your neural signatures just spiked. What did you see?"' },
    ],
    choices: [
      { id: 'c2_reveal_memory', label: 'Describe the man from your memory', next: 'c2_prison_end', keywords: ['describe', 'man', 'vale', 'amber', 'rifle', 'memory'] },
      { id: 'c2_hide_memory', label: 'Tell them it was just a headache', next: 'c2_prison_end', keywords: ['headache', 'pain', 'nothing', 'hide'] }
    ],
    positions: [
      { name: 'Aster', x: 8, y: 8 },
      { name: 'Shadow', x: 8, y: 14 }
    ]
  },

  c2_prison_end: {
    id: 'c2_prison_end',
    visualSummary: 'SIGNAL: CRITICAL // EMERGENCY OVERRIDE DETECTED // STATUS: UNKNOWN',
    lines: [
      { speaker: 'narration', text: 'Before you can speak, the door to the cell groans. The crimson light flickers and dies.' },
      { speaker: 'narration', text: 'The high-frequency hum stops instantly, replaced by the sound of heavy boots in the corridor.' },
      { speaker: 'narration', text: 'A muffled explosion rocks the floor. Dust falls from the ceiling.' },
      { speaker: 'system', text: 'CRITICAL ERROR: SECURITY GRID COMPROMISED. EMERGENCY VENTING INITIATED.' },
      { speaker: 'narration', text: 'A voice you recognize—though you don\'t know from where—whispers from the shadows of the doorway.' },
      { speaker: 'Rook', text: '"On your left, Subject 704. Let\'s get you out of this hole."' },
      { speaker: 'system', text: 'End of Chapter Two, Part One.' },
    ],
    positions: [
      { name: 'Aster', x: 8, y: 8 },
      { name: 'Rook', x: 8, y: 15 }
    ]
  }
};

export default scenes;
