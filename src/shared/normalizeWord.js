// Module used to take a single word, and normalize it into something useable
// since it's used in both indexing, and will be used for searching, it's shared
module.exports =
function normalizeWord(str) {
  let word = str;

  word = lowercaseWord(word);
  word = removeSymbols(word);
  word = conflation(word);

  // Keep at last step
  if (isStopword(word)) {
    return "";
  }

  return word;
}

function lowercaseWord(str) {
  return str.toLowerCase();
}

function isStopword(str) {
  const stopWords = [
    "the", "is", "at", "which", "on",
    "and", "to", "too"
  ];

  return stopWords.includes(str);
}

function removeSymbols(str) {
  const charactersAndNumbers = /[\w|\d]+/;

  const matched = str.match(charactersAndNumbers);

  return matched[0];
}

// Here we attempt to conflate a word, in other terms preform some simple
// stemming to get at the root of a word
function conflation(str) {
  let word = str;

  word = stemmingSuffixStripping(word);
  word = stemmingLookupTable(word);

  return word;
}

// Stemming: Uses Suffix Stripping to conflate a word to it's base
function stemmingSuffixStripping(str) {
  console.log(str);
  // Super basic, not really appropriate for production
  if (str.endsWith("ing")) {
    return str.replace("ing", "");
  } else if (str.endsWith("ed")) {
    return str.replace("ed", "");
  } else if (str.endsWith("ly")) {
    return str.replace("ly", "");
  } else {
    return str;
  }
}

// Stemming: Uses a lookup table to conflate a word to it's base
function stemmingLookupTable(str) {
  const table = {
    "ran": "run",
    "runn": "run" // TODO side effect of the simple suffix stripping, turning 'running' into 'runn'
  };

  if (table[str]) {
    return table[str];
  } else {
    return str;
  }
}
