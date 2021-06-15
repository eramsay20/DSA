
const isValidParens = (string) => {
    if(string.length === 0) return true;    // if empty string, return true
    if(string.length % 2) return false;    // if length of string is odd, must have at least 1 mismatch, return false
    
    // create a stack to track the open braces
    let stack = []  
    // create an obj to reference the corresponding close brace for each open
    let valid = {'(':')', '{':'}', '[':']'}  
    
    //loop through all chars in str
    for(let i = 0; i < string.length; i++){
        let char = string[i]   // define current character in string

        if(char in valid) stack.push(char)      // if the char is an open brace, add to stack
        else {
            let last = stack[stack.length-1]        // grab reference to the character at top of the stack
            if(valid[last] === char) stack.pop()    // if the new char is the corresponding close brace, pop off the last ele
            else return false                       // else return false; mismatch
        }

    }
    // if still have items on the stack after loop, leftover opens present == mismatch, return false
    return stack.length ? false : true      
}