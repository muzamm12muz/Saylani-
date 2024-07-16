
//Write a js program to find sum of digits of a given number using function.

function sumOfDigits(num) {
    let sum = 0;
    while(num>0){
        sum += num%10;
        num = Math.floor(num/10);
        }
        return sum;
    }
    console.log(sumOfDigits(1234));
// var num1 = 123.5;
// var  num = Math.floor(num1/10);
// console.log(num);