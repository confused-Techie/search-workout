const normalizeWord = require("../shared/normalizeWord.js");
// Here we receive an array of texts as the corpus of our documents.
// The indexer will then return a full index of the documents.

const WHITESPACE_REG = /\s/;

module.exports =
function indexer(corpus) {
  // === To index we will focus on creating a table of each unique word within
  // the corpus. By giving each a unique numeric code, we can then string together
  // each numeric code seperated by '0' to form the full text in a smaller size.
  let tableIndex = 1;
  const table = {};
  const corpusIds = [];

  for (const doc of corpus) {
    const docIds = [];

    const words = doc.content.split(WHITESPACE_REG);

    for (const word of words) {
      const normalWord = normalizeWord(word);

      if (normalWord.length === 0) {
        // The word may be removed alltogether if it is a stop word, etc
        continue;
      }

      if (table[normalWord]) {
        // If the word is already within our table, get the value, and append it
        // to our current doc
        docIds.push(table[normalWord]);
      } else {
        // The word is not yet on the table
        table[normalWord] = tableIndex;
        docIds.push(table[normalWord]);
        tableIndex++;
      }
      // After every word we must then add a '0' to break them up
      docIds.push(0);
    }

    // Add our docIds to the corpusIds
    corpusIds.push({
      title: doc.title,
      index: docIds.join("")
    });
  }

  return {
    table: table,
    corpus: corpusIds
  };
}
