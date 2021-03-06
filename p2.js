/*
Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.*/

var sequence = [0, 1],
    sum = 0,
    d1 = new Date();

function isEven(n) {
    if (n % 2 === 0) {
        return true;
    }
}

for (var i = 0; sequence[1] < 4000000; i++) {
    console.log(i + ' ' + sequence[0] + ' ' + sequence[1]);
    sequence[2] = sequence[0] + sequence[1];
    if (isEven(sequence[2])) {
        sum += sequence[2];
    }
    sequence[0] = sequence[1];
    sequence[1] = sequence[2];
}
var d2 = new Date();
console.log('solution: ' + sum + ' solved in:' + (d2 - d1));