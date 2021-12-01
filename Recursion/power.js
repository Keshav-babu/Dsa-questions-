// Power Function - Recursive
// Description

// Given two integers a and b, we need to find the value of a^b recursively.

// Expected Time Complexity - O(logb).

function Power(a,b){
    if(b==0){
        return 1
    }else if(b===1){
        return a
    }else{
        return a*Power(a,b-1)
    }
}
console.log(Power(2,4))
//16