/* exported tail */
// create an empty array to store data and use as output
// go through each element in the array starting with the second element
// add(push) all elements to the empty array
// return the array from the function

function tail(array) {
  const end = [];
  for (let i = 1; i < array.length; i++) {
    end.push(array[i]);
  }
  return end;
}
