//Write a js program to print all strong numbers between given interval using functions.

// var n = 1000000;

// function factorial(n) {
//     let result = 1;
//     for (let i = 2; i <= n; i++) {
//       result *= i;
//     }
//     return result;
//   }
  
//   // Function to check if a number is strong
//   function isStrongNumber(n) {
//     let sum = 0;
//     let temp = n;
//     while (temp > 0) {
//       let digit = temp % 10;
//       sum += factorial(digit);
//       temp = Math.floor(temp / 10);
//     }
//     return sum === n;
//   }
  
//   // Function to print strong numbers between a given interval
//   function printStrongNumbers(start, end) {
//     for (let i = start; i <= end; i++) {
//       if (isStrongNumber(i)) {
//         console.log(i);
//       }
//     }
//   }
  
//   // Example usage
//   printStrongNumbers(1, 100000);

var n = 10000;
function factorial(n){
  let result = 1;
  for(let i = 2; i <= n; i++){
    result *=i;
    }
    return result;
}
// Function to check if a number is strong
function isStrongNumber(n){
  let sum = 0;
  let temp = n;
  while(temp > 0){
    let digit = temp % 10;
    sum += factorial(digit);
    temp = Math.floor(temp / 10);
    }
    return sum === n;
    }
    // Function to print strong numbers between a given interval
    function printStrongNumbers(start, end){
      for(let i = start; i <= end; i++){
        if(isStrongNumber(i)){
          console.log(i);
          }
          }}
          // Example usage
          printStrongNumbers(1, 100000);
