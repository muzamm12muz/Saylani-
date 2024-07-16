//Write a js program to find sum of all natural numbers between 1 to n using function.
function sumOfNaturalNumbers(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
        }
        return sum;
        }
        console.log(sumOfNaturalNumbers(10));