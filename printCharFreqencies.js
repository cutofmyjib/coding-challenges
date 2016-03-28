//Count number of each character in a string
//and print out the counts from highest to lowest.

var string = 'the big brown fox jumped over the lazy dog'
var string2 = 'aaaaaaaaaaaaaaaaaaaaa'
// {  't': 2,
//    'h': 2,
//    'e': 4,
//    'b': 2,
//    'i': 1,
//    ..... }

//create an object variable that will hold frequency of each character
//loop over string and record the frequency
//if current element doesn't exist in the frequency object variable
  //create it, and set the value to 0
//increment by 1

//after getting the frequency
//loop over it and organize the values to use as keys, save it in a var
//sort the keys
//print out the frequency from highest to lowest

function getFreq(str) {
  var frequency = {}
  for (var i = 0; i < str.length; i++) {
    if(!(frequency[str[i]])) {
      frequency[str[i]] = 0
    }
    frequency[str[i]] += 1
  }
  return frequency
}

//group keys according to their values
function groupKeys(obj) {
  var keys = {}
  var length = Object.keys(obj).length

  var counter = 1
  for (var key in obj) {
    if (!(keys[obj[key]])) {
      keys[obj[key]] = []
    }
    keys[obj[key]].push(key)
  }
  return keys
}


function printCharCount(obj) {
  var keys = Object.keys(obj)
  keys.sort().reverse()

  keys.forEach(function(frequency) {
    console.log(frequency, ': ', obj[frequency])
  })
}

printCharCount(groupKeys(getFreq(string)))
