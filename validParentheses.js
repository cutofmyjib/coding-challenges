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
    if (str[i].isOpen()) {
      stack.push(str[i])
    } else {
      var peek = stack[stack.length-1]
      if (peek && peek.isPair(str[i])) {
        stack.splice(stack.length-1, 1)
      } else {
        return false
      }
    }
  }
  return stack.length === 0 ? true : false
}

String.prototype.isOpen = function() {
  if (this.length > 1) {
    throw new Error('must be 1 character')
  }
  return (this[0] === '{' || this[0] === '(' || this[0] === '[')
}

String.prototype.isPair = function(piece) {
  types = {
    '{': '}',
    '(': ')',
    '[': ']'
  }
  return (types[this[0]] === piece)
}

console.log(validParentheses('()[]{}'))
console.log(validParentheses('{]'))
console.log(validParentheses('([)]'))
console.log(validParentheses('(([{}]'))
