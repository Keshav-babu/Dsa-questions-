var out=''
// console.log(179%10)
// console.log(Math.floor(179/10))
// console.log(17%10)
// console.log(Math.floor(17/10))
var num=179
while (num>9) {
  out=out+''+(num%10)
  num=Math.floor(num/10)
}
console.log(out+''+num)
