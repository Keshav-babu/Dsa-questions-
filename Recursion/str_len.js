function lengthString(str,i){
    // var a=i
    if(str[i]){
        i++
        return (lengthString(str,i))
    }else{
        return i
    }
    
}
var st='masaischool'
console.log(lengthString(st,0))
//11
