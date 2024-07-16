//Write a js program to check whether a number is palindrome or not using function

// Function to check if a number is a palindrome
function isPalindrome(n) {
    // Convert the number to a string to easily reverse it
    const str = n.toString();
  
    // Reverse the string
    const reversedStr = str.split("").reverse().join("");
  
    // Check if the original string is equal to the reversed string
    return str === reversedStr;
  }
  
  // Test the function
  console.log(isPalindrome(121)); // true
  console.log(isPalindrome(123)); // false
  console.log(isPalindrome(12321)); // true