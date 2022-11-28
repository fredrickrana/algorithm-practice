/* exported initial */
// create an empty array to store data and use as output
// go through each element in the array until the second to last element using index array.length minus 1
// add(push) all elements to the empty array
// return the array from the function

function initial(array) {
  const beginning = [];
  for (let i = 0; i < array.length - 1; i++) {
    beginning.push(array[i]);
  }
  return beginning;
}
