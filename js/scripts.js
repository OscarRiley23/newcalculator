var add = function(number1, number2){
  return number1 + number2;
}
var subtract = function(number1, number2){
  return number1 - number2;
};
var multiple = function(number1, number2){
  return number1 * number2;
};
var divide = function(number1, number2){
  return number1 / number2;
};
// var heightInches = prompt("How tall are you in inches?");
// var weightPounds = prompt("what is your weght in pounds?") 
var BMI = function(weight, height){
  return alert((weight/ (height * height)) * 703);
}
// BMI(weightPounds, heightInches)
// var fahrenheit = prompt("What is the temp in Fahrenheit?")

var toCelsius = function(tempature){
  return alert((tempature - 32) * (5/9) + " ℃");
}
// toCelsius(fahrenheit)

var celsius = prompt("What is the temp in Celsius?")
var toFahrenheit = function(tempature){
  return alert((tempature * (9/5) + 32) + " ℉")
}
toFahrenheit(celsius)

