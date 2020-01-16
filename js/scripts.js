var add = function(number1, number2){
  return number1 + number2;
}
var subtract = function(number1, number2){
  return number1 - number2;
};
var multiply = function(number1, number2){
  return number1 * number2;
};
var division = function(number1, number2){
  return number1 / number2;
};

// Everything below this line is user interface (or front-end) logic:

$(document).ready(function() {
  $("form#add").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#add1").val());
    var number2 = parseInt($("#add2").val());
    var result = add(number1, number2)
    $("#output").text(result)
  });


  $("form#subtract").submit(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#subtract1").val());
    var number2 = parseInt($("#subtract2").val());
    var result = subtract(number1, number2)
    $("#output").text(result)
  });

    $("form#multiply").submit(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#multiply1").val());
      var number2 = parseInt($("#multiply2").val());
      var result = multiply(number1, number2)
      $("#output").text(result)
    });

    $("form#division").submit(function(event) {
      event.preventDefault();
      var number1 = parseInt($("#division1").val());
      var number2 = parseInt($("#division2").val());
      var result = division(number1, number2)
      $("#output").text(result)
    });

});





// // var heightInches = prompt("How tall are you in inches?");
// // var weightPounds = prompt("what is your weght in pounds?") 
// var BMI = function(weight, height){
//   return alert((weight/ (height * height)) * 703);
// }
// // BMI(weightPounds, heightInches)
// // var fahrenheit = prompt("What is the temp in Fahrenheit?")

// var toCelsius = function(tempature){
//   return alert((tempature - 32) * (5/9) + " ℃");
// }
// // toCelsius(fahrenheit)

// // var celsius = prompt("What is the temp in Celsius?")
// var toFahrenheit = function(tempature){
//   return alert((tempature * (9/5) + 32) + " ℉")
// }
// // toFahrenheit(celsius)

