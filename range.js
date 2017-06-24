// Your code here.

/**
 * Calculate the Range for the given set of number
 *
 * @param {number} start
 * @param {number} end
 * @param {number} step
 *
 * @return {Array}
 */
var range = function (start, end, step) {
    var resultArray = [], step;
    if (!step) step = 1;
    
    if (step > 0) {
        for (var i = start; i <= end; i = i + step) 
            resultArray.push(i);        
    } else {
        for (var i = start; i >= end; i = i + step) 
            resultArray.push(i);        
    }
    return resultArray;
};

var sum = function (rangeArray){
    var sumOfArray = 0; 
    for( var i = 0; i < rangeArray.length; i++ ) {
       sumOfArray =  sumOfArray + rangeArray[i];
    } 
	
    return sumOfArray;
} 
console.log(range(1, 10));
// → [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
console.log(range(5, 2, -1));
// → [5, 4, 3, 2]
console.log(sum(range(1, 10)));
// → 55