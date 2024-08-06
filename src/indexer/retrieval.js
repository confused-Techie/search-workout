const fs = require("fs");
const path = require("path");

// Collects the textual content of results that are intended to be indexed.
module.exports =
function retrieval(corpusPath) {
  const corpus = [];

  const documents = fs.readdirSync(path.resolve(corpusPath));

  for (const doc of documents) {
    corpus.push({
      title: path.join(corpusPath, doc),
      content: fs.readFileSync(path.join(path.resolve(corpusPath), doc), { encoding: "utf8" })
    });
  }

  return corpus;
}
