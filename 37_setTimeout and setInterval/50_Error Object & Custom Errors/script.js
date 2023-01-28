// console.log(biplab); 

/*try {
    // console.log(biplab); 
    // throw new Error("biplab is not good");
    // throw new ReferenceError("biplab is not good");
    throw new SyntaxError("biplab is not good");
} catch (error) {
  console.log(error);  
  console.log("error type is " + typeof error);  
  console.log(error.name);  
  console.log(error.message);  
  console.log(error.stack);  
 
}
*/

try {
 let age = prompt("Type your age?");
 if(age > 100){
   throw new ReferenceError("Invalid Error");
 }
} catch (error) {
  console.log(error);  
  console.log("error type is " + typeof error);  
  console.log(error.name);  
  console.log(error.message);  
  // console.log(error.stack);  
 
}
console.log("script is still running");
