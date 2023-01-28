let p1 = new Promise((resolve, reject)=>{
  console.log("I am resolving...");
  setTimeout(()=>{
      resolve("I am resolved");
  },3000)
})

p1.then((value)=>{
//   console.log(value);
  console.log("Congratulatios this promise is now resolved");
})

p1.then((value)=>{
  console.log("Ha Ha Ha ...");
})

p1.then((value)=>{
  console.log("Hurry");
})

