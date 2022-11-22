/* exported capitalize */
function capitalize(word) {
  let capitalizedWord = word[0].toUpperCase();
  if (word.length > 1) {
    for (let i = 1; i < word.length; i++) {
      capitalizedWord += word[i].toLowerCase();
    }
  }
  return capitalizedWord;
}
