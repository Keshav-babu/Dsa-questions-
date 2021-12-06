//Reverse Stack using Recursion
// Description:-
// You'll be given a stack. You have to reverse the stackwithout using any
// inbuilt function or for and while loops. You have to reverse it by recursion only.
let stack1=[1,2,3,4,5]
function reverseStack(stack){   
    if(!stack[0]){
        return ;
    }
    let a=stack.pop()
   console.log(a)
    return reverseStack(stack)
}
(reverseStack(stack1))
// 5
// 4
// 3
// 2
// 1


