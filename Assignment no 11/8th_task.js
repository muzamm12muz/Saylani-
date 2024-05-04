//Write a program that converts given number of days in to weeks and days such as 17 days = 2 weeks and 3 days.

var days = 300;
var weeks = Math.floor(days / 7);
var days = days % 7;
console.log(weeks + " weeks and " + days + " days");