/* exported getValues */
// create an empty array for data storage and output
// use a for in loop to go through each key property within the object
// utilize bracket notation to take the value of each key and add to the newly created empty array
// return the array from the function

function getValues(object) {
  const values = [];
  for (var value in object) {
    values.push(object[value]);
  }
  return values;
}
