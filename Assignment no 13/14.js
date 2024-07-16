//14. Write a js program to find sum of all even or odd numbers in given range using function.
function print(start,end){
    for(let i=start;i<=end;i++){
        if(i%2==0){
            console.log("Even number", +i);
            }
            else{
                console.log("odd number", +i);
            }
            }
}
print(1,10);