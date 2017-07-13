/**
 * Typical example of functional programing
 * 
 * @param {Array} arr   
 * @param {Function} func 
 */
function mapEach( arr, func ){
   var newArray = [];
   for(var i = 0; i < arr.length; i++){
     newArray.push(
         func(arr[i])
     );
   }
   return newArray;
}
// Vanila/Original function before manuplations
var sum = function (x, y){
    return x + y;
};
var sub = function (x, y){
    return x - y;
};
var mul = function (x, y){
    return x * y;
};
var divide = function (x, y){
    return x / y;
};
var square = function (x){
    return x * x;
};
var cube = function (x){
    return x * x * x;
};

// Binding the functions
var add10      =  sum.bind(this, 10);
var minus10    =  sub.bind(this, 1);
var mul10      =  mul.bind(this, 10);
var divide10   =  divide.bind(this, 10);

// Original Array
var myArray = [1,2,3,4,5,6];

// function invocation
var arraySquared = mapEach(myArray, square);
var arrayCubed = mapEach(myArray, cube);
var arrayAdd10 = mapEach(myArray, add10);
var arrayMinus10 = mapEach(myArray, minus10);
var arrayMul10 = mapEach(myArray, mul10);
var arrayDivide10 = mapEach(myArray, divide10);

// Final results 
console.log("----- Array Squared --- ");
console.log(arraySquared);

console.log("----- Array Cubed --- ");
console.log(arrayCubed);

console.log("----- Array Add10 --- ");
console.log(arrayAdd10);

console.log("----- Array minus10 --- ");
console.log(arrayMinus10);

console.log("----- Array Mul10 --- ");
console.log(arrayMul10);

console.log("----- Array Divide10 --- ");
console.log(arrayDivide10);

// Underscore start here
console.log("Underscore start here Works");

// Map function 
var arraySquaredUnderscore = _.map(myArray, square);
console.log("_map function");
console.log(arraySquaredUnderscore);

// Unique function 
var uniqTest = _.uniq([1,5,4,4,5,2,1,1,3,2,2,3,4,1]); 
console.log("_uniq function");
console.log(uniqTest);



 