const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
  for (let num of array) {
	  sum += num;
  }
  return sum;
};

const multiply = function(array) {
  let mult = 1;
  for (let num of array) {
    mult *= num;
  }
  return mult;
};

const power = function(num1, num2) {
	return Math.pow(num1, num2);
};

const factorial = function(num1) {
  let result = num1;
	if (num1 === 0 || num1 === 1) {
    return 1;
  } else {
    while (num1 > 1) {
      num1--;
      result = result * num1;
    }
    return result;
    }
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
