// You are given an array and you have to find the sum of the absolute difference between consecutive elements of the array.

// For instance, if the array is 3,5,6,1,8

// Absolute of (3-5) = 2

// Absolute of (5-6) = 1

// Absolute of (6-1) = 5

// Absolute of (1-8) = 7

// ------------------------
function rec(arr,len,i){
    var total=0
    if(i==len-1){
        return total
    }
    return (total+Math.abs(arr[i++]-arr[i]))+rec(arr,len,i)
}
console.log(rec([3,5,6,1,8],5,0))
//15

