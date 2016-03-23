// https://leetcode.com/problems/majority-element/

//create an object that takes the frequency of each element in the array
//loop over the array
//assign current element as object's property
//if the current element in the object exists, increment by 1
//else create object property for that element

//after looping over the array
//find out which one has the greatest value
//loop over object and find max value
//set up a max variable
//if current element is greater that max
  //max value is the current element's value
//return property

function getFrequencies(arr) {
  var frequency = {}
  for (var i = 0; i < arr.length; i++) {
    if (!(frequency[arr[i]])) {
      (frequency[arr[i]]) = 0
    }
    frequency[arr[i]] += 1
  }
  return frequency
}

function majorityElement(frequency) {
  var max = {val: 0, key: 0};
  for (var key in frequency) {
    if (frequency[key] > max.val) {
      max.val = frequency[key]
      max.key = key
    }
  }
  return max.key;
}

console.log(majorityElement(getFrequencies([1,1,5,7,8,8,8,7,9,5,5,1,6,8])))
