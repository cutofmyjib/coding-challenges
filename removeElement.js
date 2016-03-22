// https://leetcode.com/problems/remove-element/
// 1. loop thru array
// 2. if the current element is equal to val
      // take element out of the array
// 3. repeat until end of array

function removeElement(arr, val) {
  for(var i = 0; i < arr.length; i++){
    if(arr[i] === val) {
      arr.splice(i, 1)
    }
  }
  return arr
}

console.log(removeElement([3,2,2,3], 3))
