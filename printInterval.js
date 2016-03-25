// print 1 - 10 after 1 sec

// var counter = 1
//increment counter after printing
// when the counter hits 10, use clearInterval

function printNum(end) {
  var counter = 1
  var log = setInterval(function() {
    console.log(counter)
    //async function, clearInterval has to be inside log variable
    if (counter === end) {
      clearInterval(log)
    }
    counter += 1
  }, 1000)
}

printNum(5)
