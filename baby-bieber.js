"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Import the lyrics from the module (ensure .js extension for browser compatibility)
const baby_bieber_lyrics_js_1 = require("./baby-bieber-lyrics.js");
/**
 * Checks if any lyrics contain the word "baby" (case-insensitive).
 * @param lyrics - Array of song lyrics.
 * @returns True if the word "baby" is found in any line.
 */
function hasBaby(lyrics) {
    return lyrics.some((line) => line.toLowerCase().includes('baby'));
}
/**
 * Counts how many lines in the lyrics contain the word "baby" (case-insensitive).
 * @param lyrics - Array of song lyrics.
 * @returns Number of lines that contain the word "baby".
 */
function numBabies(lyrics) {
    return lyrics.reduce((count, line) => {
        return count + (line.toLowerCase().includes('baby') ? 1 : 0);
    }, 0);
}
// Test cases to print output in the console
console.log(`Does the song contain "baby"? ${hasBaby(baby_bieber_lyrics_js_1.bieberBaby)}`); // Expected: true
console.log(`Number of times "baby" appears in lyrics: ${numBabies(baby_bieber_lyrics_js_1.bieberBaby)}`); // Expected: Count of "baby" lines
