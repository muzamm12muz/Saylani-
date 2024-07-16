// Write a js program to find sum of elements of array using function.
//
var ary = [1,2,3,4,5,6,7,8];
function sun(ary){
    let sum = 0;
    for(var i = 0; i < ary.length ; i++){
        sum +=ary[i];
    }
     console.log(sum);
}
sun(ary);