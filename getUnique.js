// Given an array where all numbers except one are repeated,
// find the number that only occurs once.

// [2,2,4,3,1,5,4,3,5,4]
// return 1

// get frequencies of each element in the array
// by looping through the array
// after getting the frequencies
// return the all elements that have a frequency equal to 1

function getFreq(arr) {
  var hash = {}
  arr.forEach(function(element){
    if (!(hash[element])) {
      hash[element] = 0
    }
    hash[element] += 1
  })
  return hash
}

function getUnique(hash) {
  var elements = []
  for (var key in hash) {
    if (hash[key] === 1) {
      elements.push(key)
    }
  }
  return elements
}

console.log(getUnique(getFreq([2,2,4,3,1,5,4,3,5,4])))
