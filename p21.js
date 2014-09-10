var sum = 0,
	d1 = new Date();


function d(n){
	var s = 0;
	for (var i = 0; i < n; i++) {
		if (n%i == 0) s += i;
	}
	return s;
}

for (var i = 1; i < 10000; i++){
	if (i == d(d(i)) && i != d(i)) sum += i;
}
	

var d2 = new Date();
console.log('the sum is: ' + sum + ' solved in:' + (d2 - d1));


 