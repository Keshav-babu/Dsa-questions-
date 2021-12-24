//Binary Search - Recursive
//https://oj.masaischool.com/contest/2636/problem/02
function binarySearch(arr,start,end,element){
    let mid=Math.floor((start + end)/2);
    if(start>end){
        return "-1"
    }
    if(arr[mid]==element){
        return "1"
    }
    if(arr[mid]<element){
        return binarySearch(arr,mid+1,end,element)
    }else{
        return binarySearch(arr,start,mid-1,element)
    }
}
let arr=[1,2,3,6,7,78,90]
let k=90
let n=arr.length
console.log(binarySearch(arr,0,n-1,k))