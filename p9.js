/*
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,

a^2 + b^2 = c^2
For example, 32 + 42 = 9 + 16 = 25 = 52.

There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.

 */

for (var i = 1; i < 1000; i++) {
	for (var j = 1; j < 1000; j++) {
		for (var k = 1; k < 1000; k++) {
			if (i < j && j < k) {
				if (i+j+k == 1000 && Math.pow(i,2)+Math.pow(j,2)==Math.pow(k,2)) {
					console.log('Solution is : '+i*j*k);
					break;
				}
			}
			
		};
	};
};