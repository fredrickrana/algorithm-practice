/* exported getWords */
function getWords(string) {
  if (string === '') {
    const words = [];
    return words;
  }
  return string.split(' ');
}
