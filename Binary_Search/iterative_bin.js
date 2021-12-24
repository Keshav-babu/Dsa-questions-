//Binary Search - Iterative
//https://oj.masaischool.com/contest/2636/problem/01
function iterativebinary(arr,start,end,element){
    while(start<=end){
        let mid =Math.floor((start+end)/2)
        if(arr[mid]==element){
            return "1"
        }if(arr[mid]<element){
            start=mid+1
        }else{
            end=mid-1
        }
    }
    return -1
}

let arr=[11,34,5,4,21,0]
let n=arr.length
let k=5
console.log(iterativebinary(arr,0,n-1,k))
//console.log(Math.floor(5/2))