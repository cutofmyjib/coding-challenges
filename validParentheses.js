//https://leetcode.com/problems/valid-parentheses/

//create a 'stack'
//if length is not even - false
//loop through the string
//if the current element is an open bracket
    //push it in the stack
//else
  //if there's an element in the stack && stack is a valid pair to the element
    //take it out of the stack
  //else
    //false


function validParentheses(str) {
  if (str.length % 2 !== 0) {
    return false
  }

  var stack = [];
  str = str.split('')

  for (var i = 0; i < str.length; i++) {
    if (isOpen(str[i])) {
      stack.push(str[i])
    } else {
      var peek = stack[stack.length-1]
      if (peek && isPair(peek,str[i])) {
        stack.splice(stack.length-1, 1)
      } else {
        return false
      }
    }
  }
  return stack.length === 0
}

function isOpen(str) {
  if (str.length > 1) {
    throw new Error('must be 1 character')
  }
  return (str[0] === '{' || str[0] === '(' || str[0] === '[')
}

function isPair(stackPiece, string) {
  types = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  return (types[stackPiece] === string)
}

console.log(validParentheses('()[]{}'))
console.log(validParentheses('{]'))
console.log(validParentheses('([)]'))
console.log(validParentheses('(([{}]'))
