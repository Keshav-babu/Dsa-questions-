// EtopowerX Ended
// Description

// One famous series says

// Image

// Using the below explanation for n-th term of e^x, calculate the value of e^x given x and n. Do not calculate it directly using the formula and do not write any iterative code.

// Image


// Input
// Input Format

// First and the only line of code contains x and n respectively

// Constraints

// x <= 14

// n <= 12


// Output
// Print the value to 4 places after the decimal. For example, 13.1310 is a valid answer but 13.131 is not. Also, 12 is not a valid answer but 12.0000 is a valid answer


// Sample Input 1 

// 4 2
// Sample Output 1

// 13.0000

function factorial(n){
    if(n==1){
        return 1
    }
    return n*factorial(n-1)
}
// console.log(factorial(1))
function power(a,b){
    return a**b
}
// console.log(power(3,2))
function eToX(x,n){
    if(n==0){
        return 1
    }
    let Power=power(x,n)
    let ans =Power/factorial(n)+eToX(x,n-1)
    return ans
}
console.log(eToX(4,2).toFixed(4))
//13.0000
