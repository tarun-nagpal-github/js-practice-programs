/**
 * Print the triangle as per the value passed.
 * 
 * @param {string} spChar - Special charcter to be displayed 
 * @param {number} maxLength - The length of the triangle
 */
function printTriangle(spChar, maxLength){    
    for ( i = spChar; i.length < maxLength; i = i + spChar){
        console.log(i);
    }
}
printTriangle('$', 50);