// Create a program that converts a temperature from Fahrenheit to Celsius and vice versa using a variable.


//Temprature in fahrenheit
var temperature = 70;

//Fahrenheit to Celsius
var celsius = (temperature - 32) * 5/9;

//Temperature in Celsius
console.log('The temperature in Celsius is  :' , celsius );

//Celsius to Fahrenheit
temperature = celsius * 9/5 + 32;

//Temperature in Fahrenheit
console.log('The temperature in Fahrenheit is  :' , temperature);
