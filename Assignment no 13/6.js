// Write a js program to find all prime numbers between given interval using functions.
function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true;
}
function findPrimes(start, end) {
    let primes = [];
    for (let i = start; i <= end; i++) {
        if (isPrime(i)) {
            primes.push(i);
        }
    }
    return primes;
}
let start = 0;
let end = 30;
let primes = findPrimes(start, end);
console.log("Prime numbers between " + start + " and " + end + " are: ");
console.log(primes);




