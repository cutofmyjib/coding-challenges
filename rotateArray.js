//https://leetcode.com/problems/rotate-array/
//Rotate an array of n elements to the right by k steps.
//For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

//long way
//while loop to rotate array k number of times
//inside loop, take the last item in array and push it to a new array
//take first and the following elements and push it to the new array
//use n to loop over array
//subtract 1 from k

function rotateArray(arr, n, k) {
  while (k > 0) {
    var temp = [];
    temp.push(arr[n-1])
    for(var i = 0; i < n-1; i++) {
      temp.push(arr[i])
    }
    k-=1
    arr = temp;
  }
  return arr;
}


// short
//take difference of n and k
//splice array up to that difference - save it in a var
//add that var to the end of the array
function rotateArray2(arr, n, k) {
  var end = n - k;
  var rotate = arr.splice(0, end)
  return arr.concat(rotate)
}

console.log(rotateArray([1,2,3,4,5,6,7], 7, 3))
console.log(rotateArray2([1,2,3,4,5,6,7], 7, 3))
