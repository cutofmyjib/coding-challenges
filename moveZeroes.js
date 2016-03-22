//https://leetcode.com/problems/move-zeroes/
//1. loop thru Array as many times as the length
//2. if the current element is equal to zero
    // move to the end of Array
//3. after loop, return array


function moveZeroes(arr){
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      arr.push(arr[i])
      arr.splice(i, 1)
    }
  }
  return arr;
}

var nums = [0, 1, 0, 3, 12]
var nums2 = [0, 1, 0, 3, 12, 0, 9]

console.log(moveZeroes(nums2))
