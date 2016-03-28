//write a method to replace all spaces in a string with '%20'

// Input: "Mr John Smith"
// Output:"Mr%20John%20Smith"

//short way---
//split input string by space
//join it with the parameter '%20'

function urlify(string) {
  return string.split(' ').join('%20')
}

// var input = "Mr John Smith"
// console.log(urlify(input))


//long way
//split string, since JavaScript strings are immutable
//loop over array
//if current element is equal to a space
//replace current element value to %20 
//after loop, convert array to string

function urlify2(string) {
  string = string.split('')
  for(var i = 0; i < string.length; i++) {
    if (string[i]=== ' ') {
      string[i] = '%20'
      console.log(string[i])
    }
  }
  return string.join('')
}

var input = "Mr John Smith"
console.log(urlify2(input))
