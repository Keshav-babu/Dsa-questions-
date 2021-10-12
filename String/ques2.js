function runProgram(input){
    // input=input.trim().split(/[\r\n]+/)
    input=input.trim().split()
    var inp_mo=input[0].split("")//.map(Number)
    var len=inp_mo.length
    var space_arr=[]
    for(let i=0;i<len;i++){
        if(inp_mo[i]=="?"){
            //console.log(inp_mo[i])
            space_arr.push(i)
        }
    }
    
    for(let i=0;i<=9;i++){
        inp_mo[space_arr[0]]=i
        var sum=0
        inp_mo=inp_mo.map(Number)
        //console.log(inp_mo)
        // inp_mo.forEach(element => {
        //     sum=sum+element
        // });
        // console.log(sum)
        
        console.log(inp_mo)
    }
    
    console.log(inp_mo)
   
    
    
        
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