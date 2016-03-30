// merge sort
//2 functions
//1 - merge a sorted array
//2 - divide the array in the middle until the value in array is one

function merge(array1, array2) {

  var merged = [],
      i = 0,
      j = 0;

  while (array1[i] && array2[j]) {
    if (array1[i] < array2[j]) {
      merged.push(array1[i])
      i += 1
    } else {
      merged.push(array2[j])
      j += 1
    }
  }

  while(array1[i] || array2[j]) {
    if (array1[i]) {
      merged.push(array1[i])
      i += 1
    } else {
      merged.push(array2[j])
      j += 1
    }
  }

  return merged
}


// console.log(merge([1,5],[4,6,9,11,30]))


function divideMerge(arr) {
  if (arr.length < 2) {
    //if there's only 1 or no element in the array, then it's sorted
    return arr
  }

  var a = [],
    b = [],
    middle = Math.floor(arr.length /2)

  a = arr.slice(0, middle )
  b = arr.slice(middle, arr.length)
  console.log('a', a)
  console.log('b', b)

  return merge(divideMerge(a), divideMerge(b))
}

console.log(divideMerge([1,9,11,5,4,6,30]))
