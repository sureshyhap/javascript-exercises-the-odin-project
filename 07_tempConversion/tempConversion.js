const convertToCelsius = function(fahrTemp) {
  let converted = (fahrTemp - 32) / 1.8;
  return Math.round(converted * 10) / 10;
};

const convertToFahrenheit = function(celTemp) {
  let converted = (celTemp * 1.8) + 32;
  return Math.round(converted * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
