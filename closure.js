/**
 *  A closure is a persistent scope which holds on to local variables even after the code execution has moved out of that block. 
 *  Languages which support closure (such as JavaScript, Swift and Ruby) will allow you to keep a reference to a scope 
 *  (including its parent scopes), even after the block in which those variables were declared has finished executing,
 *  provided you keep a reference to that block or function somewhere.
 */


/**
 * Typical Example of closure.
 * @param {*} firstName 
 */
function fullName(firstName) {
    return function(lastName){
        console.log("First Name is " + firstName + " LastName is" + lastName)
	}
}
var myFullName = fullName("Tarun");
myFullName("Nagpal");


/**
 * When a block or function is done with, 
 * its local variables are no longer needed and are usually blown out of memory.
 * This is how we normally expect things to work.
 */