// Description

// Given a string of lowercase characters in range ascii[‘a’..’z’].

// You can perform one operation on this string in which you can selects a pair of adjacent lowercase letters that match, and delete them.

// For instance, the string aab could be shortened to b in one operation.

// Your task is to delete as many characters as possible using this method and print the resulting string. If the final string is empty, print "Empty String" (without quotes).

// Please note that characters can be deleted only if they form a pair and are same(i.e from aaa we can only delete 2 a's and will be left with a single a).

// I know there exists a simple implemented Stringentation based solution of this question, but please try to come up with an approach that uses stack data structure to solve the purpose

// Sample Input 1 

// aaabccddd
// Sample Output 1

// abd
function runProgram(input) {
    //input=input.split("\n")
    var str=input
    var N=str.length
    var stack=[]
    for(var i=0;i<N;i++){
        stack.push(str[i])
        if(stack.length>1){
            var stack_len=stack.length
            if(stack[stack.length-1]===stack[stack.length-2]){
                stack.pop()
                stack.pop()
            }
        }
    }
   if(stack.length){
       var out=stack.reduce(function(ac,el){
      return ac+el
  })
  console.log(out)
}else{
    console.log("Empty String")
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