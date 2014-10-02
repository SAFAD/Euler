var sum = 0,
    d1 = new Date();

function isDivisible(n) {
    return n % 5 == 0 || n % 3 == 0;
}

for (var i = 0; i < 1000; i++) {
    if (isDivisible(i)) {
        //yes it is
        sum += i;
    }
    if (i == 999) {
        var d2 = new Date();
        console.log('the sum is: ' + sum + ' solved in:' + (d2 - d1));
    }
}
