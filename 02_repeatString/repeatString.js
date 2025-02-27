const repeatString = function (string, num) {
  const error = "ERROR";
  if (num < 0) {
    return error;
  }
  let finalResult = "";
  for (let i = 0; i < num; i++) {
    finalResult += string;
  }
  return finalResult;
};

// Do not edit below this line
module.exports = repeatString;

//declare string to a variable
//add the string to the previous (result)string
//print out the final result
//do this x amout of times
//if num is negative
//return error
