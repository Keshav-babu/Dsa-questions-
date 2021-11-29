// Nick and Hacks - Editorial
// Difficulty: Low
// Prerequisite: Recursion:
// Problem Statement:
// Tom and Nick are good friends.Once Tom asked Nick exactly N rupees, but Nick has only 1 rupee in his bank account.

// Nick wants to help his friend so he wrote two hacks First hack can multiply the amount of money he owns by 10,while the second can multiply it by 20. These hacks can be used any number of times.Can Nick help Tom with his hacks?

// Hint:
// At each moment in time, you can only multiply the amount by either 10 or 20.

// Short Explaination
// We are given an amount, and we start with 1 unit in the account. We can only multiply, by either 10 or 20. At any point of time, if we are able to make the amount, then we should print "Yes", but if the current amount exceeds, the total amount, then answer will be "No".

// Detailed Explanation:
// An amount is given, and we need to find if the certain amount can be made or not. We start with 1 unit, and at each moment,we can multiply the current amount by either 10 or 20.A recursive function can be used to search the feasability, of making up the amount, by exploring the solution by multiplyin by 10 and 20. If any one of them results in a true value, we can say "Yes", else the answer will be "No".

// Pseudo Code
// func recursive(int current, int target)
// if (current == target) return true
// if (current > target) return false;
// if (recursive(10current, target)== true || recursive(20current,target)== true) return true
// return false;
function hack(balance,target){
    if(balance===target){
        return true
    }if(balance>target){
        return false
    }if(hack(10*balance,target) || hack(20*balance,target)){
        return true
    }
    return false
}
console.log(hack(1,200))
//Yes
console.log(hack(1,100))
//Yes
console.log(hack(1,900))
//No