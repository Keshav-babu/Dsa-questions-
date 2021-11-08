// Description

// There is a stack of integers which is currently empty. You are given an integer n and there are n operations that you need to perform on the stack.

// The next n line contains one of the following 3 operations:

// 1 x : Push x to the top of the stack.

// 2 : Pop an element from the top of the stack. If the stack is empty, do nothing.

// 3 : Print the top element of the stack (if stack is empty, print "Empty!" (without quotes)).

// For better understanding, read sample test case explanation
// Sample Input 1 
// 6
// 1 15
// 1 20
// 2
// 3
// 2
// 3
// Sample Output 1
// 15
// Empty!
function runProgram(input) {
    input=input.split("\n")
    var N=+(input[0])
    var arr=[]
    for(var i=1;i<=N;i++){
        var line=input[i].split(" ").map(Number)
        //console.log(line)
        if(line.length>1){
            arr.push(line[1])
        }else{
            if(line[0]===3){
                console.log(arr[arr.length-1]||"Empty!")
            }else{
                arr.pop()
            }
        }
    }
 }
 if (process.env.USER === "") {
   runProgram(``);
} else {
    process.stdin.resume();
    process.stdin.setEncoding("ascii");
    let read = "";
    process.stdin.on("data", function (input) {
      read += input;
    });
    process.stdin.on("end", function () {
      read = read.replace(/\n$/, "");
      read = read.replace(/\n$/, "");
      runProgram(read);
    });
    process.on("SIGINT", function () {
      read = read.replace(/\n$/, "");
      runProgram(read);
      process.exit(0);
    });
  }