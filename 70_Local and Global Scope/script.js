// global scope 
/*let a = 18;

console.log(a);
*/


// global scope 
/*{
 var a = 18;
}

console.log(a);  
*/


// block/local scope 
/*{
 let a = 18;
}

console.log(a);   //a is not defined  
*/


// function/local scope 
/*function func(){
    let a = 18;
    console.log(a);
}

func();
console.log(a);   //a is not defined  
*/


// global scope 
let k = 14
function func(){
    let a = 18;
    console.log(a);
    console.log(k);
}

func();
console.log(k);  
console.log(a);   //a is not defined  


