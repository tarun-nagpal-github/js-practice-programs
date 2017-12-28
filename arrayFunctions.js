
// **************** Concat Function *******************************
var myString = 'Hello World. How are you doing?';
var myNumbers = [1,2,3,4,5,7];
myNumbers.concat(myString);


// ****************** Filter function ****************************
var rollNo = [1,2,3,4,5,6,7,8,9,10];
function getEven(number) {
   return number % 2 === 0;  
}
rollNo.filter(getEven);

// ****************** Index Of ****************************
var myNewArray = ['One', 'Two'];
myNewArray.indexOf('Two')


/**
 * Reverse an Array
 * @param {*} array 
 */
function reverseArray(array) {
  var output = [];
  for (var i = array.length - 1; i >= 0; i--)
    output.push(array[i]);
  return output;
}


/**
 * Reverse an Array In Place
 * @param {*} array 
 */
function reverseArrayInPlace(array) {
  for (var i = 0; i < Math.floor(array.length / 2); i++) {
    var old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

var arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);

console.log(reverseArray(["A", "B", "C"]));
console.log(arrayValue);





