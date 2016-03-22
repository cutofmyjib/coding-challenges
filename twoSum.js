// https://leetcode.com/problems/two-sum/

//use i and j variables to use in the loop
//i being 0 and j is i + 1
//loop thru array
//if current element (i) plus next element (j) is equal to target
//return i and j


//while
function twoSum(arr, target) {
  var i = 0;
  while(i < arr.length) {
    var j = i + 1;
    while (j < arr.length) {
      if (arr[i] + arr[j] === 9) {
        return [i, j];
      }
      j += 1;
    }
    i += 1;
  }
  return [];
}


//for
function twoSum2(arr, target) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [i, j]
      }
    }
  }
  return []
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum2([2, 7, 11, 15], 9))
