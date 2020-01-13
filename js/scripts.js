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
var heightInches = prompt("How tall are you in inches?");
var BMI = function(weight, height){
  retun ((weight/ height) * height) * 703;
}