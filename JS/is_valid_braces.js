// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Input: s = "()"
// Output: true

// Input: s = "()[]{}"
// Output: true

// Input: s = "([)]"
// Output: false

// Input: s = "([])"
// Output: true

// CLARIFYING QUESTIONS
// empty sting allowed? NO
// other data types? NO
// odd num of chars possible? YES
// max space complexity? NO

// define function, take one string input
const isValid = (str) => {
    if (str.length % 2) return false  // check if str length is odd, if so, return false
    
    let stack = [] // create a stack to track the open braces
    
    //loop through all chars in str
    for(let i = 0; i<str.length; i++){
        char = str[i]   // define current character in string
        last = stack[stack.length-1]    // define character at top of the stack
        
        if(char == "(" || char == '{' || char == '['){
            stack.push(char) // if opening brace, push onto the stack
        } else if ( last == "(" && char == ")" || last == '{' && char == "}" || last == '[' && char == "]" ){
            stack.pop() // if corresponding closing brace immediately follows the last char on the stack, pop the last char off
        } else {
            return false // else return false early
        }

    }
    return stack.length ? false : true // if after iterating through the entire
} 

s1 = "()[]{}" // true
s2 = "([])" // true
s3 = "([)]" // false 
s4 = "()[{}]" // true

console.log(isParenthesis(s1))
console.log(isParenthesis(s2))
console.log(isParenthesis(s3))
console.log(isParenthesis(s4))



