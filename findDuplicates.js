//find duplicates in 2 ordered arrays
var array1 = [2,3,4,7,8,11],
    array2 = [5,7,8,9,11]

//loop over 1st array i
//inside loop j
// compare i with j

function findDupes(arr1, arr2) {
  var dupes = []
  for (var i = 0; i < arr1.length; i++) {
    for (var j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        dupes.push(arr2[j])
      }
    }
  }
  return dupes
}

console.log(findDupes(array1, array2))


//use splice
//for loop using array2's length
//variable (index) holding the value if there's indexOf(array2[i]) in array1
//conditional statement if the value is > -1
  //take it out of array1 or push it in new array //array1.splice(index, 1)
