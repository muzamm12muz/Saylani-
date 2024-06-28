
//16. Write a js program to check whether the triangle is equilateral, isosceles or scalene triangle
var sideangle1 = 12;
var sideangle2 = 120;
var base = 120;
if(sideangle1 == sideangle2 && sideangle1 == base){
    console.log("The triangle is equilateral");
}
else if (sideangle1==sideangle2 && sideangle2 == sideangle1 ){
    console.log("The triangle is isosceles");
}
else{
console.log("The angle is scalene ");
}