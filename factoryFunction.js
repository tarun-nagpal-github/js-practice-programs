/**
 * High order function - Generating a function that can add numbers
 * 
 * @param {number} x 
 * @param {number} y 
 */
function makeAdder(x, y){  
  return function (y){
    return x + y; 
  }  
}
var add10 = makeAdder(10);
console.log(add10(80));

