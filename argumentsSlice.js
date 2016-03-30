//Question: How would you make this work?
//add(2, 5); // 7
//add(2)(5); // 7

//use arguments
//create an array that will hold the arguments
//use reduce add the arguments

//in (arg1)(arg2), arg2 will be applied after
//arg1 is applied in the functions

//in the function add, use a conditional statement using arguments.length

function add(nums) {
  if(arguments.length > 1) {
    var args = Array.prototype.slice.call(arguments)
    var total = args.reduce(function(prev, current) {
      return prev + current
    })
    return total
  } else {
    return function(num2) {
      return nums + num2
    }
  }
}

console.log(add(2, 5))
console.log(add(2)(5))
