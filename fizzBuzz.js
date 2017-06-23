/**
 * Print the Fizz Buzz 
 * 
 * @param {number} length 
 */
function printFizzBuzz(length) {
    for (i = 1; i <= length; i++) {
        if ((i % 3 == 0) && (i % 5 == 0)) {
            result = 'FizzBuzz';
        } else if (i % 3 == 0) {
            result = 'Fizz';
        } else if (i % 5 == 0) {
            result = 'Buzz';
        } else {
            result = i;
        }
        return result;
    }
}
printFizzBuzz(100);