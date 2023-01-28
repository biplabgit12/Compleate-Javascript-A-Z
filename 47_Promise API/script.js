let p1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 1")
    }, 5000)
})

let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("value 2")
         reject(new Error("Error"))
    }, 2000)
})

let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve("value 3")
    }, 3000)
})


/*p1.then((value)=>{
    console.log(value);
})

p2.then((value)=>{
    console.log(value);
})

p3.then((value)=>{
    console.log(value);
})
*/



// 6 static methods of promise class
//  let all_Promise = Promise.all([p1,p2,p3]);
//  let all_Promise = Promise.allSettled([p1,p2,p3]);
//  let all_Promise = Promise.race([p1,p2,p3]);
//  let all_Promise = Promise.any([p1,p2,p3]);
//  let all_Promise = Promise.resolve(420);
 let all_Promise = Promise.reject(new Error("Hey I am Error"));
//  console.log(typeof all_Promise);

 all_Promise.then((value)=>{
    console.log(value);
    // console.log(value[0]);
 })


