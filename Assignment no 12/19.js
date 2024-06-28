//21. Write a js program to input electricity unit charges and 
//calculate total electricity bill according to the given condition:
//For first 50 units Rs. 0.50/unit
//For next 100 units Rs. 0.75/unit
//For next 100 units Rs. 1.20/unit
//For unit above 250 Rs. 1.50/unit

var units = 100;
if(units <= 50){
    var bill = units * 0.50;
    console.log("Total bill is: "+bill);
}
else if(units > 50 && units <= 100){
    var bill = 50 * 0.75;
    console.log("Total bill is: "+bill);
}
else if(units > 100 && units <= 200){
    var bill = 50 * 1.20;
