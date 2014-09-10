/*Surprisingly there are only three numbers that can be written as the sum of fourth powers of their digits:

1634 = 14 + 64 + 34 + 44
8208 = 84 + 24 + 04 + 84
9474 = 94 + 44 + 74 + 44
As 1 = 14 is not a sum it is not included.

The sum of these numbers is 1634 + 8208 + 9474 = 19316.

Find the sum of all the numbers that can be written as the sum of fifth powers of their digits.*/
var sum = 0,
    d1 = new Date();

for (var i = 10000; i < 100000; i++) {
    var string = i.toString();
    if (Math.pow(parseInt(string.charAt(0)), 4) +
        Math.pow(parseInt(string.charAt(1)), 4) +
        Math.pow(parseInt(string.charAt(2)), 4) +
        Math.pow(parseInt(string.charAt(3)), 4) +
        Math.pow(parseInt(string.charAt(4)), 4) == i) {
        sum += i;
    }

};
console.log('solution : ' + sum + ' solved in : ' + (new Date() - d1));