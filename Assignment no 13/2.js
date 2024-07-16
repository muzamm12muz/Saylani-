//Write a js program to find diameter, circumference and area of circle using functions.
function program(R)
{
    var diameter = 2 * R;
    var circumference = 2 * Math.PI * R;
    var area = Math.PI * R * R;
    return [diameter, circumference, area];
}
var R = 5;
var result = program(R);
console.log("Diameter of circle is " + result[0]);
console.log("Circumference of circle is " + result[1]);
console.log("Area of circle is " + result[2]);
