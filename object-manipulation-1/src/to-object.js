/* exported toObject */
// create an empty object for data storage and output
// use indexes to access each element within the keyValuePair
// utilize bracket notation to set the property and value of the newly created empty object
// return the object from the function

function toObject(keyValuePair) {
  const object = {};
  object[keyValuePair[0]] = keyValuePair[1];
  return object;
}
