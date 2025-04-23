const add = function(numberOne, numberTwo) {
  return numberOne + numberTwo;
};

const subtract = function(numberOne, numberTwo) {
	return numberOne - numberTwo
};

const sum = function(array) {
  let arraySum = 0;
  for (let i = 0; i <= array.length; i++) arraySum += array[i];
  return arraySum;	
};

const multiply = function(array) {
  let arrayProduct = 1;
  if (array.length === 0) return 0;
  else for (let i = 0; i <= array.length; i++) arrayProduct *= array[i];
  return arrayProduct;	
};

const power = function(base, exponent) {
	let result = 1;
  for (let i = 0; i <= exponent; i++) result *= base;
  return result;
};

const factorial = function(number) {
	let result = 1;
  for (let i = number; i > 0; i--) result *= i;
  return result
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
