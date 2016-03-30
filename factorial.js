// factorial
// !5 = 120
// !5 = 5 x 4 x 3 x 2 x 1
// 0! = 1

//set a variable that will hold the product
//use input number for looping (i <= input)
//in the loop, increase the product by multiplying it with the current number
//return the product

function factorial(num) {
  var product = 1
  for (var i = 1; i <= num; i++) {
    product *= i
  }

  return product
}

console.log(factorial(5))
