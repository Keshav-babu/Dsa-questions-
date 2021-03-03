function runProgram(input){
    input=input.trim().split(' ')

    var out=[]
    for(i=input.length-1;i>=0;i--){
        out.push(input[i])
    }
    console.log(out.map(Number))
}
 
 process.stdin.resume();
 process.stdin.setEncoding("ascii");
 let read = "";
 process.stdin.on("data", function (input) {
     read += input;
 });
 process.stdin.on("end", function () {
     read = read.replace(/\n$/,"")
    runProgram(read);
 });
 
 process.on("SIGINT", function () {
     read = read.replace(/\n$/,"")
     runProgram(read);
     process.exit(0);
 });