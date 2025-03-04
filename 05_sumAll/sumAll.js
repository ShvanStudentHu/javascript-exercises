const sumAll = function (startNumber, endNumber) {
  let err = "ERROR";
  if (startNumber > endNumber) {
    [startNumber, endNumber] = [endNumber, startNumber];
  } else if (
    startNumber < 0 ||
    endNumber < 0 ||
    !Number.isInteger(startNumber) ||
    !Number.isInteger(endNumber)
  ) {
    return err;
  }

  let sum = startNumber;
  let previousNumber = startNumber;

  for (let i = 0; previousNumber < endNumber; i++) {
    previousNumber++;
    sum += previousNumber;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

//take the starting number and store it in the final sum
//declare startnumber to newnumber
//add one to new number
//add that to the sum
//repeat previous steps until the Previous number is equel or bigger than the end number
//

//   if (
//     typeof startNumber === "number" ||
//     (typeof endNumber === "number" && !Number.isInteger(startNumber)) ||
//     !Number.isInteger(endNumber)
//   ) {
//     return err;
//   }
