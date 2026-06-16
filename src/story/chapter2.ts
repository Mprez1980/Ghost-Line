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
      { id: 'c2_examine_tray', label: 'Examine the tray', next: 'c2_the_voice', keywords: ['examine', 'tray', 'look', 'food', 'check'], actionType: 'Act' },
      { id: 'c2_shout', label: 'Shout for help', next: 'c2_the_voice', keywords: ['shout', 'help', 'scream', 'yell', 'call'], actionType: 'Speak' },
      { id: 'c2_search_self', label: 'Search your pockets', next: 'c2_the_voice', keywords: ['search', 'pockets', 'check', 'feel', 'self'], actionType: 'Act' }
    ],
    positions: [
      { name: 'Aster', x: 8, y: 8 },
      { name: 'Terminal', x: 8, y: 2 }
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
