import type { Scene, Choice } from '../story/types';

// Common English stop words to filter out for better keyword matching
const STOP_WORDS = new Set([
  'a', 'an', 'the', 'and', 'or', 'but', 'is', 'if', 'then', 'else', 
  'to', 'for', 'with', 'in', 'on', 'at', 'by', 'from', 'of', 'about', 
  'i', 'you', 'he', 'she', 'they', 'we', 'me', 'him', 'her', 'them', 
  'my', 'your', 'his', 'her', 'their', 'our', 'would', 'should', 'could',
  'will', 'shall', 'can', 'may', 'might', 'must', 'do', 'did', 'does', 'doing'
]);

/**
 * Tokenize and normalize input string.
 */
function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[.,\/#!$%\^&\*;:{}=\-_`~()?"]/g, '')
    .split(/\s+/)
    .filter(word => word.length > 0);
}

/**
 * Resolves a choice ID from free-form player input locally.
 */
export function resolveChoiceFromTextLocal(scene: Scene, userInput: string): string | null {
  if (!scene.choices || scene.choices.length === 0) return null;

  const trimmedInput = userInput.trim();
  if (!trimmedInput) return null;

  const inputTokens = tokenize(trimmedInput);
  const inputCleanTokens = inputTokens.filter(t => !STOP_WORDS.has(t));
  const lowerInput = trimmedInput.toLowerCase();

  let bestChoice: Choice | null = null;
  let highestScore = 0;

  for (const choice of scene.choices) {
    let score = 0;

    const labelLower = choice.label.toLowerCase();
    const labelTokens = tokenize(choice.label);
    const labelCleanTokens = labelTokens.filter(t => !STOP_WORDS.has(t));

    // 1. Full/partial label match
    if (lowerInput.includes(labelLower) || labelLower.includes(lowerInput)) {
      score += 1.0;
    }

    // 2. Token overlap similarity (Jaccard-like index on clean tokens)
    const overlap = inputCleanTokens.filter(t => labelCleanTokens.includes(t));
    if (inputCleanTokens.length > 0 || labelCleanTokens.length > 0) {
      const union = new Set([...inputCleanTokens, ...labelCleanTokens]);
      const similarity = overlap.length / union.size;
      score += similarity * 0.8;
    }

    // 3. Keyword Match
    if (choice.keywords) {
      let keywordHits = 0;
      for (const keyword of choice.keywords) {
        const keywordLower = keyword.toLowerCase();
        if (lowerInput.includes(keywordLower)) {
          keywordHits++;
        }
      }
      if (keywordHits > 0) {
        score += (keywordHits / choice.keywords.length) * 0.6 + 0.3; // Boost score significantly for keyword hits
      }
    }

    // 4. Boost specific common inputs per choice for better game feel
    if (choice.id === 'follow_vale' && (lowerInput.includes('vale') || lowerInput.includes('fast') || lowerInput.includes('run') || lowerInput.includes('daughter'))) {
      score += 0.5;
    }
    if (choice.id === 'follow_rook' && (lowerInput.includes('rook') || lowerInput.includes('smart') || lowerInput.includes('slow') || lowerInput.includes('intel') || lowerInput.includes('strategy'))) {
      score += 0.5;
    }
    if (choice.id === 'vale_protect' && (lowerInput.includes('protect') || lowerInput.includes('front') || lowerInput.includes('shield') || lowerInput.includes('save') || lowerInput.includes('myself'))) {
      score += 0.5;
    }
    if (choice.id === 'vale_support' && (lowerInput.includes('support') || lowerInput.includes('behind') || lowerInput.includes('back') || lowerInput.includes('trust'))) {
      score += 0.5;
    }
    if (choice.id === 'rook_attack' && (lowerInput.includes('attack') || lowerInput.includes('fight') || lowerInput.includes('strike') || lowerInput.includes('first'))) {
      score += 0.5;
    }
    if (choice.id === 'rook_wait' && (lowerInput.includes('wait') || lowerInput.includes('signal') || lowerInput.includes('hold') || lowerInput.includes('listen'))) {
      score += 0.5;
    }
    if (choice.id === 'combat_fight' && (lowerInput.includes('fight') || lowerInput.includes('attack') || lowerInput.includes('battle') || lowerInput.includes('vale'))) {
      score += 0.5;
    }
    if (choice.id === 'combat_flee' && (lowerInput.includes('flee') || lowerInput.includes('run') || lowerInput.includes('escape') || lowerInput.includes('rook'))) {
      score += 0.5;
    }
    if (choice.id === 'combat_surrender' && (lowerInput.includes('surrender') || lowerInput.includes('shield') || lowerInput.includes('protect') || lowerInput.includes('shard'))) {
      score += 0.5;
    }
    if (choice.id === 'archives_shard_open' && (lowerInput.includes('shard') || lowerInput.includes('unlock') || lowerInput.includes('open') || lowerInput.includes('faith'))) {
      score += 0.5;
    }
    if (choice.id === 'archives_rook_hack' && (lowerInput.includes('rook') || lowerInput.includes('hack') || lowerInput.includes('bypass') || lowerInput.includes('seal'))) {
      score += 0.5;
    }
    if (choice.id === 'archives_call_out' && (lowerInput.includes('call') || lowerInput.includes('speak') || lowerInput.includes('wisp') || lowerInput.includes('name'))) {
      score += 0.5;
    }
    if (choice.id === 'archives_approach_quietly' && (lowerInput.includes('approach') || lowerInput.includes('quiet') || lowerInput.includes('stealth') || lowerInput.includes('cautious'))) {
      score += 0.5;
    }
    if (choice.id === 'archives_protect_wisp' && (lowerInput.includes('protect') || lowerInput.includes('stay') || lowerInput.includes('guard') || lowerInput.includes('wisp'))) {
      score += 0.5;
    }
    if (choice.id === 'archives_rush_core' && (lowerInput.includes('rush') || lowerInput.includes('core') || lowerInput.includes('memory') || lowerInput.includes('shard'))) {
      score += 0.5;
    }
    // Chapter 2 choices
    if (choice.id === 'c2_examine_tray' && (lowerInput.includes('examine') || lowerInput.includes('tray') || lowerInput.includes('look') || lowerInput.includes('food'))) {
      score += 0.5;
    }
    if (choice.id === 'c2_shout' && (lowerInput.includes('shout') || lowerInput.includes('help') || lowerInput.includes('scream') || lowerInput.includes('yell'))) {
      score += 0.5;
    }
    if (choice.id === 'c2_search_self' && (lowerInput.includes('search') || lowerInput.includes('pockets') || lowerInput.includes('check') || lowerInput.includes('feel'))) {
      score += 0.5;
    }
    if (choice.id === 'c2_lie' && (lowerInput.includes('lie') || lowerInput.includes('alone') || lowerInput.includes('nobody'))) {
      score += 0.5;
    }
    if (choice.id === 'c2_honest_amnesia' && (lowerInput.includes('truth') || lowerInput.includes('remember') || lowerInput.includes('forget') || lowerInput.includes('amnesia'))) {
      score += 0.5;
    }
    if (choice.id === 'c2_defiant' && (lowerInput.includes('silent') || lowerInput.includes('nothing') || lowerInput.includes('quiet'))) {
      score += 0.5;
    }
    if (choice.id === 'c2_reveal_memory' && (lowerInput.includes('describe') || lowerInput.includes('man') || lowerInput.includes('vale') || lowerInput.includes('amber'))) {
      score += 0.5;
    }
    if (choice.id === 'c2_hide_memory' && (lowerInput.includes('headache') || lowerInput.includes('pain') || lowerInput.includes('nothing') || lowerInput.includes('hide'))) {
      score += 0.5;
    }

    if (score > highestScore) {
      highestScore = score;
      bestChoice = choice;
    }
  }

  // A score threshold to prevent matching random unrelated gibberish
  const STRENGTH_THRESHOLD = 0.3;
  return highestScore >= STRENGTH_THRESHOLD ? bestChoice?.id || null : null;
}
