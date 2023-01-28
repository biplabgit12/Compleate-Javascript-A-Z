// Synchronous Programming
/* let a = prompt("What is your name ?");
 let b = prompt("What is your age ?");
 let c = prompt("What is your favorite color ?");
  console.log(a,b,c);
*/


 // Asynchronous Programming 
/* console.log("Start");
 setTimeout(function (){
   console.log("This is a Asynchronous Programme");
 },2000)
 console.log("End");
*/


// Callbacks
 function loadScript(src, callback) {
   var script = document.createElement("script");
       script.src = src;
       script.onload = function(){
         console.log("Loaded script with src " + src);
         callback(null,src);
       }
       script.onerror = function (){
        console.log("Error loading script with src " + src);
        callback(new Error("src some got error"));
        
       }
       document.body.append(script);
 }

 function hello(error,src) {
  if (error) {
    console.log(error);
    return;
  }
   console.log("Hello Brother " + src);
 }

 function greeting(error,src) {
  if (error) {
    console.log(error);
    return;
  }
   alert("Good Morning " + src);
 }

 loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js", greeting);

 