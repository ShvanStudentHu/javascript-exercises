const removeFromArray = function (array, removeNumber) {
  //store the length of the array
  //loop through the array to check if a number in the array === the number that needs to be removed
  //if the number is found store the index of the number in a variable
  //use toSpliced to remove the number
  //continue to the next number
  let arrayLength = array.length;
  let numbersInArray = removeNumber.length;
  let newArray;
  for (let i = 0; i < arrayLength; i++) {
    // [3,2]
    if (array[i] === removeNumber) {
      newArray = array.toSpliced(i, 1);
    }
  }
  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
