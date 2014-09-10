/*The Fibonacci sequence is defined by the recurrence relation:

Fn = Fn−1 + Fn−2, where F1 = 1 and F2 = 1.
Hence the first 12 terms will be:

F1 = 1
F2 = 1
F3 = 2
F4 = 3
F5 = 5
F6 = 8
F7 = 13
F8 = 21
F9 = 34
F10 = 55
F11 = 89
F12 = 144
The 12th term, F12, is the first term to contain three digits.

What is the first term in the Fibonacci sequence to contain 1000 digits?*/

var sequence = [0, 1],
    i = 0,
    d1 = new Date();

while (true) {
    console.log(parseInt(i) + ' ' + parseInt(sequence[0]) + ' ' + parseNumber(sequence[1]));
    sequence[2] = sequence[0] + sequence[1];
    if (i == 1478) {
        var d2 = new Date();
        console.log('solution: ' + parseInt(i) + ' solved in:' + (d2 - d1));
        break;
    }
    sequence[0] = sequence[1];
    sequence[1] = sequence[2];
    i++;
}