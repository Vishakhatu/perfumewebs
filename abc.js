function search_word(text, word) {
    // Create a regular expression with the word, using global flag to find all matches
    const regex = new RegExp(`\\b${word}\\b`, 'gi');
    // Match the word in the text and get the result as an array
    const matches = text.match(regex);
    // If there are matches, return the count, otherwise return 0
    const count = matches ? matches.length : 0;
    return `'${word}' was found ${count} ${count === 1 ? 'time' : 'times'}.`;}
// Test Data
console.log(search_word('The quick brown fox', 'fox')); // Output: "'fox' was found 1 times."
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));  // Output: "'aa' was found 2 times. 
 

