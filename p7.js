/*By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

What is the 10 001st prime number?*/
var primeNumbers = [],
    p = 2,
    d1 = new Date();

function isPrime(n) {
    var prime;
    for (var i = 2; i < Math.sqrt(n); i++) {
        if (n % i === 0) {
            prime = false;
            break;
        } else {
            prime = true;
        }
    }
    return prime;
}

while (true) {
    if (typeof primeNumbers[10000] != 'undefined') {
        //we found it!
        break;
    }
    if (isPrime(p)) {
        //yes it is prime add it to array
        primeNumbers.push(p);
    }
    p++;
}
var d2 = new Date();
console.log('solution : ' + primeNumbers[10000] + ' solved in: ' + (d2 - d1));