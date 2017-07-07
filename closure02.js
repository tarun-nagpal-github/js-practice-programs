/**
 * In the first example the problem is - We are not invoking/calling the actual function.
 * Because of that we get the value 3 because it will fetch the values after the loop is completed.
 * 
 * Solution- We can resolve this by IIFE - In this we are executing the funtion there itself.
 * Because of this the value is assigned to the respective function and that function is pushed to the array.
 * 
 * Thats why we get the unique values at the time of function call.
 * 
 */


// Exacmple 1 
/**
 * Typical Use of closures - Implementing without IIFE
 */
function buildFunctions() {
    var arr = [];
    for(var i = 0; i < 3; i++){
       arr.push(
           function(){
               console.log(i);
           }
       );
    }
    return arr;
}

var myFun = buildFunctions();
// console.log(myFun);
myFun[0]();
myFun[1]();
myFun[2]();


// Exacmple 2 
/**
 * Typical Use of closures - Implementing with IIFE
 */
function buildFunctions2() {
    var arr = [];
    for(var i = 0; i < 3; i++){
       arr.push(
           (function(j){
               return function(){
                console.log(j);
               }
           }(i))
       );
    }
    return arr;
}

var myFun2 = buildFunctions2();
// console.log(myFun);
myFun2[0]();
myFun2[1]();
myFun2[2]();