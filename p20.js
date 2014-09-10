var r = n = 100,
	s = 0,
	d1 = new Date();
for (var i = 1; i < n; i++) {
	r *= n-i; 
	console.log(r);
}
for (var i = 0; i < r.toString().length; i++) {
	s += parseInt(r.toString().charAt(r.toString().length-(i+1)));
}
var d2 = new Date();
console.log('the sum is: ' + s + ' solved in:' + (d2 - d1));