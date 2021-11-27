// find the sum of array using recursion
function sum_arr(arr,len,i){
    var total=0
    if(i==len){
        return total
    }
    return (total+arr[i++])+sum_arr(arr,len,i)
}
var len=5
var arr=[1,2,3,4,5]
console.log(sum_arr(arr,len,0))
//15