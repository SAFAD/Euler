/*
215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.

What is the sum of the digits of the number 21000?

Sadly cant be solved in Javascript due to limits on numbers :()
 */
var	sum = 0,
    d1 = new Date();

String.prototype.expandExponential = function(){
    return this.replace(/^([+-])?(\d+).?(\d*)[eE]([-+]?\d+)$/, function(x, s, n, f, c){
        var l = +c < 0, i = n.length + +c, x = (l ? n : f).length,
        c = ((c = Math.abs(c)) >= x ? c - x + l : 0),
        z = (new Array(c + 1)).join("0"), r = n + f;
        return (s || "") + (l ? r = z + r : r += z).substr(0, i += l ? z.length : 0) + (i < r.length ? "." + r.substr(i) : "");
    });
};


var str = (Math.pow(2,100)+'').expandExponential().toString();


  for (var i = 0; i < str.length; i++) {
    sum += parseInt(str.charAt(i), 10);
  }
console.log(str);

