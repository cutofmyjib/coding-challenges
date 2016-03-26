// find two numbers from an array that has the greatest sum

// loop over each number to get the highest number, do this twice
// if the current element is greater than current max
  //max is equal to current element

//after getting the max, push the value inside a separate array
//after looping twice, the array has 2 values, return the sum

function largestSum(arr) {
  var largestTwo = [];
  for (var i = 0; i < 2; i++) {
    var max = 0;
    for (var j = 0; j < arr.length; j++) {
      if (arr[j] > max) {
        max = arr[j]
      }
    }
    largestTwo.push(max)
    arr.splice(arr.indexOf(max), 1)
  }
  return largestTwo[0] + largestTwo[1]
}


//refactor
//1. get the max function
//2. use getmax function twice and save the result
    //don't forget to splice it out of array
//3. add the results
function largestSum2(arr) {
  var highestTwo = []
  for (var i = 0; i < 2; i++) {
    var max = getMax(arr)
    highestTwo.push(max)
    arr.splice(arr.indexOf(max), 1)
  }
  return highestTwo[0] + highestTwo[1]
}

function getMax(arr) {
  var highest = 0;
  arr.forEach(function(value) {
    if (value > highest) {
      highest = value
    }
  })
  return highest;
}

console.log(largestSum([11, 13, 10, 5, 7, 3, 11]))
console.log(largestSum2([11, 13, 10, 5, 7, 3, 11]))
