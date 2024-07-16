function isPerfectNumber(n) {
    let sum = 0;
    for (let i = 1; i < n; i++) {
      if (n % i === 0) {
        sum += i;
      }
    }
    return sum === n;
  }
  
  function printPerfectNumbers(start, end) {
    for (let i = start; i <= end; i++) {
      if (isPerfectNumber(i)) {
        console.log(i);
      }
    }
  }
  
  // Test the function
  printPerfectNumbers(1, 1000);