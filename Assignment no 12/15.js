//Write a js program to find all roots of a quadratic equation.

var a = 10; 
var b = 2;
var c = 3;
var d = b*b - 4*a*c;
var x1 = (-b + Math.sqrt(d))/(2*a);
var x2 = (-b - Math.sqrt(d))/(2*a);
console.log("The roots of the quadratic equation are " +x1+ " and " +x2 );



