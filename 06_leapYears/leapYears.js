const leapYears = function(year) {
    const isDivisibleByFour = year % 4;
    const isDivisibleByOneHundred = year % 100;
    const isDivisibleByFourHundred = year % 400;

    if (isDivisibleByFour && 
        (!isDivisibleByOneHundred || isDivisibleByFourHundred)) 
        return true;
    else return false;
};

// Do not edit below this line
module.exports = leapYears;
