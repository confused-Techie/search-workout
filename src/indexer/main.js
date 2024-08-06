const retrieval = require("./retrieval.js");
const indexer = require("./indexer.js");

module.exports =
function main(corpusPath) {
  const corpus = retrieval(corpusPath);

  const indexed = indexer(corpus);

  // Returns object with `table` object and `corpus` array
  return indexed;
}
