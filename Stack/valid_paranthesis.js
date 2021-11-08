function check(input){
    var stack=[]
    for(var i=0;i<input.length;i++){
        if(input[i] == '(' || input[i] == '{' || input[i] == '['){
         stack.push(input[i]);
        }else{
            if(stack.length===0){
                return "not balanced";
            }else{
               var top_stack=stack[stack.length-1]
               if(input[i] == ')' && top_stack == '(' || 
                  input[i] == '}' && top_stack == '{' ||
                  input[i] == ']' && top_stack == '[') {
                  stack.pop();
               }else{
                   return 'not balanced';
               }
            }
        }
    }
    if(stack.length===0){
        return "balanced"
    }else{
        return 'not balanced';
    }
}
