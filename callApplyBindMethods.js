/**
 *  All three of these JavaScript methods allow you to change the value of this for a given function.
 * 
 *  The practical use of these methods in the scenarios like function borrowing and function currying.
 *    
 */




/**
 * Example 1:- Syntax and the usage of the methods
 * 
 * In this example we will show you the synatx and the usage of these 3 functions
 * The object (person) and its method can be attached to a particular function. 
 * After attaching we can use them in the function given.This will help us to reuse the code.
 * 
 */
var person = {
	firstName : 'john',
	lastName : 'Doe',
	getFullName : function(){
		var fullName = this.firstName + " " + this.lastName;
		return fullName;
	}
}

var logName = function(lang1, lang2){
	console.log('Logged:' + this.getFullName());
	console.log('Arguments:' + lang1 + ' ' + lang2);
	console.log('-------------');
}

// Bind
var logPersonName = logName.bind(person);
logPersonName('en', 'es');

// Call
logName.call(person, 'en', 'es');

// Apply
logName.apply(person, ['en', 'es']);

/**
 * Example 2 - Function borrowing 
 */
var user = {
	firstName : 'Bob',
	lastName : 'Marley',
	getFullName : function(){
		var fullName = this.firstName + " " + this.lastName;
		return fullName;
	}
};

var user2 = {
	firstName : 'Tarun',
	lastName : 'Nagpal',
}
console.log(user.getFullName());
// borrowing
console.log(user.getFullName.apply(user2));

/**
 * Example 3 - Function Currying 
 */
function multiply(x, y){
	return x * y;
}
var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(6));
