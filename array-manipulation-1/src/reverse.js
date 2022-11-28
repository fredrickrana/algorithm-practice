/* exported reverse */
// use unshift method or loop backwards and use push method

// create an empty array to store data and use as output
// go through each element in the array starting with the last element
// add(push) all elements to the empty array
// return the array from the function

function reverse(array) {
  const backwards = [];
  for (let i = array.length - 1; i >= 0; i--) {
    backwards.push(array[i]);
  }
  return backwards;
}
