function fibonacci_number(n){
    if(n==0){
        return 0
    }else if(n==1){
        return 1
    }else{
        return fibonacci_number(n-1)+fibonacci_number(n-2)
    }
}
console.log(fibonacci_number(5))
// 5
console.log(fibonacci_number(6))
//8
//0,1,1,2,3,5,8,13