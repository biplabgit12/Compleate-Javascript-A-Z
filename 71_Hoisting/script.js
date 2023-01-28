
// Following two lines will run successfully due to Javascript hoisting
console.log(a);

greet();
function greet() {
    console.log("Good Morning");
} 

/*let greet = function () {
    console.log("Good Morning");
}  */

/* var greet = function () {
    console.log("Good Morning");
}  */

var a = 12;   //Declaration hoisted to the top but initializations is not
// let a = 12;   //Declaration hoisted to the top but initializations is not
console.log(a);

