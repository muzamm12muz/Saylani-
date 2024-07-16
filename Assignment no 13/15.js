//Write a js program to find reverse of any number using function.

function reverseNumber(n) {
    let reversed = 0;
    while (n > 0) {
      let digit = n % 10;
      reversed = reversed * 10 + digit;
      n = Math.floor(n / 10);
    }
    return reversed;
  }
  
  // Test the function
  
  let num = 12345;
  console.log(`The reverse of ${num} is ${reverseNumber(num)}`);