// Import the lyrics from the module (must use .js extension for browser compatibility)
import { bieberBaby } from './baby-bieber-lyrics.js';
/**
 * Checks if any lyrics contain the word "baby" (case-insensitive).
 * Uses functional programming with `.some()`.
 * @param lyrics - Array of song lyrics.
 * @returns True if the word "baby" is found in any line.
 */
function hasBaby(lyrics) {
    return lyrics.some((line) => line.toLowerCase().includes('baby'));
}
/**
 * Counts how many lines in the lyrics contain the word "baby" (case-insensitive).
 * Uses functional programming with `.reduce()`.
 * @param lyrics - Array of song lyrics.
 * @returns Number of lines that contain the word "baby".
 */
function numBabies(lyrics) {
    return lyrics.reduce((count, line) => {
        return count + (line.toLowerCase().includes('baby') ? 1 : 0);
    }, 0);
}
// Outputs for debugging and verification
console.log(`Does the song contain "baby"? ${hasBaby(bieberBaby)}`); // Expected: true
console.log(`Number of times "baby" appears in lyrics: ${numBabies(bieberBaby)}`); // Expected: Count of "baby" lines
