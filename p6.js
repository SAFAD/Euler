/*The sum of the squares of the first ten natural numbers is,

1^2 + 2^2 + ... + 10^2 = 385
The square of the sum of the first ten natural numbers is,

(1 + 2 + ... + 10)^2 = 552 = 3025
Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.*/
var squareOfSums = 0,
    sumOfSquares = 0,
    difference,
    d1 = new Date();

function f1() {
    for (var i = 0; i < 101; i++) {
        squareOfSums += i;
    }
    //well the loop has finished, square it
    squareOfSums = Math.pow(squareOfSums, 2);
}

function f2() {
    for (var i = 0; i < 101; i++) {
        sumOfSquares += Math.pow(i, 2);
    }
}
f1();
f2();
difference = squareOfSums - sumOfSquares;
var d2 = new Date();
console.log('solution: ' + difference + ' solved in: ' + (d2 - d1));