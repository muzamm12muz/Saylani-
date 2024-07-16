//21. Write a js program to find LCM of two numbers using function.
function lcm(a, b) {
    let max = Math.max(a, b);
    while (true) {
        if (max % a == 0 && max % b == 0) {
            return max;
            }
            max++;
            }
            }
            console.log(lcm(12, 10));

