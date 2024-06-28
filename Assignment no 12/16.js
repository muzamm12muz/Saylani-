//19. Write a js program to input marks of five subjects Physics, Chemistry, 
//Biology, Mathematics and Computer. Calculate percentage and grade according to following:
//Percentage >= 90% : Grade A
//Percentage >= 80% : Grade B
//Percentage >= 70% : Grade C
//Percentage >= 60% : Grade D
//Percentage >= 40% : Grade E
//Percentage < 40% : Grade F

var physics = 90;
var chemistry = 80;
var biology = 70;
var mathematics = 60;
var computer = 40;
var total = physics + chemistry + biology + mathematics + computer;
var percentage = total / 5;
if (percentage >= 90) {
    console.log("Grade A");
}
else if (percentage >= 80) {
    console.log("Grade B");
}
else if (percentage >= 70) {
    console.log("Grade C");
}
else if (percentage >= 60) {
    console.log("Grade D");
}
else if (percentage >= 40) {
    console.log("Grade E");
}
else {
    console.log("Grade F");}
    
