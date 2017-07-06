/**
 * Demonstrating the disadvantage of automatic semicolon 
 * 
 * After the return statement, an automtic semicolon will be added.
 * This will return the undefined object rather than the actual object * 
 */
function greet(){
   return  
   {
       greet: "Have a Good Day !"
   }
}

console.log(greet());