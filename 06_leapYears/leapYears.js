const leapYears = function (year) {
  if (Number.isInteger(year / 4)) {
    if (Number.isInteger(year / 100) && Number.isInteger(year / 400)) {
      return true;
    } else if (!Number.isInteger(year / 400) && Number.isInteger(year / 100)) {
      return false;
    }
    return true;
  }

  return false;
};

// Do not edit below this line
module.exports = leapYears;

//if number is deviseble by 4 it could be a leap year
//if the number is devisabe by 100 it could not be a leap year
//if number is deviseble by 400 it is a leap year
