/*The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?*/
var number = 600851475143,
    largestPrime = 0,
    d1 = new Date();

function isFactor(n) {

    if (number % n === 0) {
        var valid = false;
        console.log(n + ' is factor to ' + number);
        //check if it is a prime number
        return isPrime(n);
    }
}

function isPrime(n) {
    var i = 2;
    var b = true;
    while (i <= Math.sqrt(n) && b) {
        b = n % i === 0 ? false : true;
        i++;
    }
    return n < 2 ? false : b;
}

for (var i = 0; i < number; i++) {
    if (isFactor(i) && i > largestPrime) {
        console.log(i + ' is prime and it is the greatest yet');
        largestPrime = i;
    }
}
d2 = new Date();
console.log('Largest prime to ' + number + ' is: ' + largestPrime + ' solved in: ' + (d2 - d1));