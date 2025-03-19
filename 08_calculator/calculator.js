const add = function (numOne, numTwo) {
  return (result = numOne + numTwo);
};

const subtract = function (numOne, numTwo) {
  return numOne - numTwo;
};

const sum = function (array) {
  let total = array.reduce((num, nextNum) => {
    return num + nextNum;
  }, 0);
  return total;
};

const multiply = function (array) {
  let total = array.reduce((num, nextNum) => {
    return num * nextNum;
  });
  return total;
};

const power = function (numOne, numTwo) {
  return numOne ** numTwo;
};

const factorial = function (num) {
  let finalResult;
  const array = [];
  if (num == 0) {
    return 1;
  }

  for (let i = 1; i <= num; i++) {
    array.push(i);
  }

  const result = multiply(array);
  return result;

  // 1 x 2 = (antwoord) x 3 = (antwoord) x 4
  // 2 x 3 = 6
  // 3 x 4 = 12
  // 3 x 4 = 12
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
