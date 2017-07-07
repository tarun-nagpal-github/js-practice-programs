
// Example 1 - Simple
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

/**
 * This is a typical example of Factory functions.
 * Everytime you call a factory function a new execution scope is created with the help of closures.
 * 
 * In the first function, we have scope of greetEnglish and it can access the outer scope(variable).
 * Same with the second function 
 * 
 * @param {*} language 
 */
function factoryFunction(language){  
    return function(firstName, lastName){
      if(language === 'en'){
        console.log("Hello -- " + firstName + " " + lastName);
      }
      if(language === 'es'){
         console.log("Hola -- " + firstName + " " + lastName);
      }        
    }
}

var greetEnglish = factoryFunction('en');
var greetSpanish = factoryFunction('es');

greetEnglish('Tarun', 'Nagpal');
greetSpanish('Tarun', 'Nagpal');