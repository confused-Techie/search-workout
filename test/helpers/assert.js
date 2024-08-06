// Module that extens the functionality of the built in 'assert' module.
module.exports =
function assertExtensions(assert) {

  // Determines if the length of the value is equal to the want numeric value provided.
  assert.hasLength = (actual, want) => {
    if (actual.length !== want) {
      throw new Error(`Value: '${actual}'s length is not equal to '${want}'`);
    }
  };

  // Iterates through an array, checking if each value is 'equal'
  assert.equalArray = (actual, want) => {
    let longestLength = (actual.length > want.length) ? actual.length : want.length;

    for (let i = 0; i < longestLength; i++) {
      assert.equal(actual[i], want[i]);
    }
  };

  // Iterates through an array, checking if each value is 'strictEqual'
  assert.strictEqualArray = (actual, want) => {
    let longestLength = (actual.length > want.length) ? actual.length : want.length;

    for (let i = 0; i < longestLength; i++) {
      assert.strictEqual(actual[i], want[i]);
    }
  };

  // Iterates through an array, checking if each value is 'deepEqual'
  assert.deepEqualArray = (actual, want) => {
    let longestLength = (actual.length > want.length) ? actual.length : want.length;

    for (let i = 0; i < longestLength; i++) {
      assert.deepEqual(actual[i], want[i]);
    }
  };
  
  return assert;
}
