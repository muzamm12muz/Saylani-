//20. Write a js program to find GCD (HCF) of two numbers using function.
function gcd(a, b) {
    if (b == 0) return a;
    return gcd(b, a % b);   
    }
    console.log(gcd(10, 2)); //4

