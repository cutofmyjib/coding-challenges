// https://leetcode.com/problems/merge-sorted-array/

//loop while both lengths are valid
//use l1 and l2 as index of arr1 and arr2 (respectively) inside loop to compare values
//if current element in arr1 is less than current element in arr2
  //push the element in the arr1[l1+l2 -1] position
  //decrease index value
//else, push arr2's element in the arr1[l1+l2 -1] position

function merge(arr1, l1, arr2, l2) {
  var sorted = []
  while(l1 && l2){
    if(arr1[l1-1] > arr2[l2-1]) {
      arr1[l1+l2-1] = (arr1[l1-1])
      l1 -= 1
    } else {
      arr1[l1+l2-1] = arr2[l2-1]
      l2 -= 1
    }
  }

  //if arr2 has elements left,
  while (l2 > 0) {
    //assign it in the following index of arr1
    arr1[l2-1] = arr2[l2-1]
    l2 -= 1
  }
  return arr1
}

console.log(merge([1,3,5,7],4,[2,4,6,8,10],5))
console.log(merge([5,7,13],3,[1,2,8,10,12,15,17],7))
