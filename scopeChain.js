/**
   Scope Chain - Scope chain is the process in which the JS look for the variable.
   It will first look into its local scope --> then Outer Scope --> then Global Scope
 */

function b() {
    var myVar = 3;
    console.log("I am inside B function");
}

function a() {
    b();
    var myVar = 2;
}

var myVar = 1;
console.log(myVar);

// Creating Closures 

function a() {
    function b() {
        var myVar = 3;
        console.log("I am inside B function");
    }
    b();    
    console.log(myVar);
    
}
var myVar = 1;
console.log(myVar);

// Given example on StackOverflow
var currentScope = 0; // global scope
(function () {
  var currentScope = 1, one = 'scope1';
  alert(currentScope);
  (function () {
    var currentScope = 2, two = 'scope2';
    alert(currentScope);
    (function () {
      var currentScope = 3, three = 'scope3';
      alert(currentScope);
      alert(one + two + three); // climb up the scope chain to get one and two
    }());
  }());
}());


