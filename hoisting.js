// In JavaScript Variable declartion and functions are hoisted.
// but not variable defination

console.log(greetMe());
console.log(x);
/**
 * Function to explain the hoisting 
 */
function greetMe(){
    return "Hello Buddy!";
}
var x = 100;

// JavaScript variables are by default is undefined. 