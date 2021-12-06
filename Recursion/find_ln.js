//Beyond Factorial!
// Description

// Given an integer N, you have to find the natural logarithmic value of the given integer's factorial i.e., ln(n!).

// You have to print the result up to 4 digits after the decimal point.

function fact(n)
{
    if (n == 1)
        return 0;
    return fact(n - 1) + Math.log(n);
}
console.log(fact(12).toFixed(4))