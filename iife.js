var firstName = 'John';

// IIFE 
(function (firstName){
    console.log("My firstName is "+firstName);
})(firstName);