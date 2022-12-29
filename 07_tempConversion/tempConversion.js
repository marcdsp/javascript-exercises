const convertToCelsius = function(tempF) {
const tempC = Math.round(((tempF-32)*(5/9)) * 10) / 10;
return tempC;
};

const convertToFahrenheit = function(tempC) {
  return tempF = Math.round(((tempC*(9/5))+32) * 10) / 10;

const convertToKelvin = function(tempC) {

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
