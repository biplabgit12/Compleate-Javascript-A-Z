/*let p1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("P1 resolved after 3 second");
    resolve(420);
  }, 3000)
})

p1.then((value) => {
  // console.log(value);
  console.log("Resolved P1");
  let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("P2 resolved");
    }, 2000)
  })
}).then((value) => {
  console.log("We are done P2");
  return 2;
}).then((value) => {
  console.log(value);
  console.log("Now we are pakka done");
})
*/



//Quick Quiz: Rewrite the loadScript function using Promises
let loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve("script has been loaded");
    }
    script.onerror = () => {
      reject(0);
    }
  })

}
let p1 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");
p1.then((value) => {
  console.log(value);
  let p2 = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js");
  return p2;
}).then((value)=>{
  console.log("Second script ready");
}).catch((error)=>{
  console.log("We are sorry but we are having problems loading this script");
})


