/*2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?*/
var i = 21,
    d1 = new Date();

function isDivisible(n) {
    if (n % 1 === 0 && n % 2 === 0 && n % 3 === 0 && n % 4 === 0 && n % 5 === 0 && n % 6 === 0 && n % 7 === 0 && n % 8 === 0 && n % 9 === 0 &&
        n % 10 === 0 && n % 11 === 0 && n % 12 === 0 && n % 13 === 0 && n % 14 === 0 && n % 15 === 0 && n % 16 === 0 && n % 17 === 0 &&
        n % 18 === 0 && n % 19 === 0 && n % 20 === 0) {
        return true;
    }
}
while (true) {
    if (!isDivisible(i)) {
        i++;
    } else {
        d2 = new Date();
        console.log('solution :' + i + ' solved in :' + (d2 - d1));
        break;
    }
}