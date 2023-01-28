let p1 = new Promise(function(resolve,reject){
   console.log("promise 1 is pending");
  setTimeout(function (){
    // console.log("I am a promise and I am resolve");
    resolve(true);
  },3000)  
})

let p2 = new Promise(function(resolve,reject){
  console.log("promise 2 is pending");
  setTimeout(function (){
    // console.log("I am a promise and I am rejected");
      reject(new Error("I am an error"));
  },3000)
})

// console.log(p1);
// console.log(p2);


// To get the value
/*p1.then((value)=>{
  console.log(value);
})
*/


// To catch the errors
/*p2.catch((error)=>{
//   console.log(error);
  console.log("Some error occurred in p2");
})
*/



p2.then((value)=>{
  console.log(value); 
},(error)=>{
   console.log(error); 
})


