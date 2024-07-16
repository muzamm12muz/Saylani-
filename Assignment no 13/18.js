//18. Write a js program to find factorial of any number using function.
function factorial(num){
let fact = 1;
for(let i = 1 ; i <= num ; i++){
    fact = fact * i;

}
return fact;
}
console.log(factorial(5));

