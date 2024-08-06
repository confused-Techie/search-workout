const corpus = [
  {
    title: "test",
    content: "Hello to the World while I am running!"
  }
];

const indexer = require("./src/indexer/indexer.js");

const index = indexer(corpus);
console.log(index);
