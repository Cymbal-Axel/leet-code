/*

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

    Open brackets must be closed by the same type of brackets.
    Open brackets must be closed in the correct order.
    Every close bracket has a corresponding open bracket of the same type.



Example 1:

        Input: s = "()"
Output: true

Example 2:

    Input: s = "()[]{}"
    Output: true

Example 3:

    Input: s = "(]"
    Output: false



*/
    // [(, ')']

const test1 = '()';
const test2 = '[)';

var isValid = function(s) {
    const stack = [];
    let count = 0; 
    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            stack.push(s[i]);
            count++;
        } else {
            if (stack.length === 0) return false;
            const check = stack.pop();
            if ((s[i] === ')' && check === '(') || (s[i] === ']' && check === '[') || (s[i] === '}' && check === '{')) {
            } else {
                return false;
            }
            count--;
        }
    }
    return count === 0;
};

isValid(test1);
