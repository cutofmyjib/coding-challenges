// How would you modify the String prototype in Javascript
// so that it printed out spaces in between every character?

String.prototype.spacify = function() {
  var spaced = ''
  for (var i = 0; i < this.length-1; i++) {
    spaced += this[i] + ' '
  }
  return spaced + this[i]
}

String.prototype.spacify2 = function() {
  return this.split('').join(' ');
}


var a = 'diana';
console.log(a.spacify() === a.spacify2())
