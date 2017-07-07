

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