// This script processes the lyrics from Justin Bieber's song "Baby".
// It implements two functions:
// - `hasBaby`: Checks if any line in the lyrics contains the word "baby" (case-insensitive).
// - `numBabies`: Counts the occurrences of "baby" (case-insensitive).

// ⚠️ Problem with searching for the word "I":
// Searching for "I" in the lyrics is problematic because:
// 1. "I" appears as a standalone word and within contractions like "I'm", "I'll", "I've", etc.
// 2. Using `.includes("I")` would return false positives,
// as it would match any string containing "I" within other words.
// 3. A more precise solution would require regex matching with word boundaries (`\bI\b`) to distinguish standalone "I".

declare const window: any;
const { bieberBaby } = window;

// Checks if any line in the lyrics contains "baby" (case-insensitive).
const hasBaby = (lyrics: string[]): boolean => lyrics.some((line) => line.toLowerCase().includes('baby'));

// Counts occurrences of "baby" in the lyrics (case-insensitive).
const numBabies = (lyrics: string[]): number => lyrics
  .map((line) => (line.match(/baby/gi) || []).length)
  .reduce((sum, count) => sum + count, 0);

// Testing outputs
console.log(hasBaby(bieberBaby)); // Should print true
console.log(hasBaby(bieberBaby.slice(0, 4))); // Should print false
console.log(numBabies(bieberBaby)); // Should print 56
console.log(numBabies(bieberBaby.slice(3, 13))); // Check partial count

// No exports; functions are globally accessible
window.hasBaby = hasBaby;
window.numBabies = numBabies;
