/* exported getKeys */
// create an empty array for data storage and output
// use a for in loop to go through each key property within the object
// add each key to the newly created array
// return the array from the function

function getKeys(object) {
  const keys = [];
  for (var key in object) {
    keys.push(key);
  }
  return keys;
}
