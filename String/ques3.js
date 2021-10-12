function runProgram(input){
    input=input.trim().split(/[\r\n]+/)
    var test_case=Number(input[0])
    var c=1

    for(let i=0;i<test_case;i++){
        var arr=input[c++].trim().split(' ').map(Number)
        var num=arr[0]
        for(let j=0;j<arr[1];j++){
            if(num>=10){
                num=num%10
            }else{
                num+=1
            }
        }
        console.log(num)
        
        
    }
        
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