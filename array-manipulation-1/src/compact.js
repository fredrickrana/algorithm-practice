/* exported compact */
// objective: omit all falsey values
// create an empty array to store data and use as output
// go through each element in the array
// check the condition of each element and determine whether it is a falsey or truthy value
// add(push) all truthy elements to the empty array
// return the array from the function

function compact(array) {
  const truthy = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      truthy.push(array[i]);
    }
  }
  return truthy;
}
