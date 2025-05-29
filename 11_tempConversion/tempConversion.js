const convertToCelsius = function(temp) {
  let toCelsius = (temp - 32) * 5/9;
  let resultCelsius = Math.round(toCelsius * 10) / 10;
  return resultCelsius;
};

const convertToFahrenheit = function(temp) {
  let toFahrenheit = (temp * 9/5 + 32);
  let resultFahrenheit = Math.round(toFahrenheit * 10) / 10;
  return resultFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
