console.log("I am first code");
setTimeout(function(){
    console.log("I am second code with setTimeout");
},2000)
console.log("I am third code");


let promise = new Promise(function (resolve,reject){
    alert("Hi");
    resolve(56);
    // reject(56);
})

console.log(promise);
console.log("promise type is ", typeof promise);

