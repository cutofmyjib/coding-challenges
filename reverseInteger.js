// https://leetcode.com/problems/reverse-integer/

//create a string var that will hold the new integer

//if the integer is a negative number
//take out the negative sign
//var is equal to a negative number

//convert integer to String
//reverse the String --- loop over string
//use charAt and start from the end of the string and add to the var
//after loop, convert it back to an integer

function reverseInteger(int) {
  var reversed = ''
  int = int.toString()

  if (int < 0) {
    int = int.slice(1, int.length)
    reversed += '-'
  }

  for (var i = int.length-1; i >= 0; i--) {
    reversed += int[i]
  }

  return parseInt(reversed)
}

console.log(reverseInteger(-123))
console.log(reverseInteger(123))
