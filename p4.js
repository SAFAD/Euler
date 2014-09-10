var largest = 0,
	d1 = new Date();

for (var i = 100; i < 1000; i++) {
	for (var j = 100; j < 1000; j++) {
		var number = i*j;
		var reversed = parseInt(number.toString().split('').reverse().join(''),10);
		if (number == reversed && number > largest) largest = number;
	};
	if (i == 999) {
        var d2 = new Date();
        console.log('solution is : '+largest+' solved in : '+ (d2 - d1)+' seconds');
    }
}
