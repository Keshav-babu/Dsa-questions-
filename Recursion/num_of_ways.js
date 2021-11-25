// Sandhya is running up a staircase with N steps, and can hop(jump) either 1 step, 2 steps or 3 steps at a time.
// You have to count, how many possible ways Sandhya can run up to the stairs.
// Sample Input 1 

// 4
// Sample Output 1

// 7
// Hint

// No of the ways for n=4 are:-

// 1 1 1 1

// 1 1 2

// 2 1 1

// 1 2 1

// 1 3

// 3 1
function rec(n){
    if(n<0){
        return 0
    }else if(n==0){
        return 1
    }else{
        return rec(n-1)+rec(n-2)+rec(n-3)
    }
}
console.log(rec(4))
//7

