/**
 * Callback function - It is a function that will call another function that may/maynot be 
 * passed aa a parameter.
 * 
 * Example - set Timeout - It will call the function when the specified time is passed.
 */


// Example 1 
function sayHiLater(){
    function greeting(){
        console.log("I am callback function");
    }
    setTimeout(greeting, 3000);
}
sayHiLater();

// Example 2
/**
 * A typical Example of callback function
 * call the function which is passed as a parameter.
 * 
 * @param {function} callback 
 */
function tellMeWhenDone(callback){
    var x = 100; // some work
    var y = 200; // some more work
    callback(); // It will return the function I gave
}

tellMeWhenDone(function(){
    console.log("I am the first callback function");
});

tellMeWhenDone(function(){
    console.log("I am the second callback function");
});


