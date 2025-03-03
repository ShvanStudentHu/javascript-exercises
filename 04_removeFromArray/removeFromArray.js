const removeFromArray = function (array, ...removeNumbers) {
  for (let i = 0; i < removeNumbers.length; i++) {
    for (let y = array.length - 1; y >= 0; y--) {
      if (removeNumbers[i] === array[y]) {
        array.splice(y, 1);
      }
    }
  }
  return array;
};
//store the length of the array
//loop through the array to check if a number in the array === the number that needs to be removed
//if the number is found store the index of the number in a variable
//use toSpliced to remove the number
//continue to the next number decrement to avoide indexing issues

// Do not edit below this line
module.exports = removeFromArray;
