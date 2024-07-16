//Write a js program to find maximum and minimum between two numbers using functions.
function max(a,b){
    if(a>b)
        return a;
    else
    return b;
}
function min(a,b){
    if(a<b)
        return a;
    else
    return b;
}
console.log("Maximum number is "+max(10,20));
console.log("Minimum number is "+min(10,20));