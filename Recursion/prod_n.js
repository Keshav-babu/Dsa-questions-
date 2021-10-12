var n=4
function  prod_till_n(n){
    if(n==1){
        return 1
    }else{
        return n*prod_till_n(n-1)
    }
}
var ans=prod_till_n(n)
console.log(ans)