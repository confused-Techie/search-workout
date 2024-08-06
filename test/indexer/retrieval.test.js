const { describe, it, before } = require("node:test");
const assert = require("node:assert");
require("../helpers/assert.js")(assert);

const retrieval = require("../../src/indexer/retrieval.js");

describe("collects data", () => {
  it("gets expected fixtures", () => {
    const docs = retrieval("./test/indexer/fixtures/retrieval");

    assert.hasLength(docs, 1);
    assert.equal(docs[0].title, "test\\indexer\\fixtures\\retrieval\\1.txt");
    assert.equal(docs[0].content, "Hello World\r\n");
  });
});
