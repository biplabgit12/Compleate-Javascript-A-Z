// document.write("Hello World");


// setTimeout and clearTimeout
/* let a = setTimeout(function func1() {
    alert("I am running"); 
 },5000);

console.log(a);
// clearTimeout(a);

let prm = prompt("Do you want run setTimeout yes/no ?")
if ("no" == prm) {
    clearTimeout(a);
}
*/


/*let sum = (a,b)=>{
    alert("The sum is " + (a+b));
}

setTimeout(sum,4000,2,5);
*/




// setInterval and clearInterval
/*setInterval(function(){
    document.write("setInterval is called");
},4000)
*/


// function add(x, y) {
//     alert("add number value is " + (x + y));
// }
// let a = setInterval(add, 2000, 5, 9);



let container = document.getElementById("container");
let stopBtn = document.getElementById("stopBtn");

  function myTimer(){
    let date = new Date();
     container.innerHTML = date.toLocaleTimeString();
  
  }


 let myInterval = setInterval(function(){
     myTimer();
    },1000)

 stopBtn.onclick = ()=>{
    clearInterval(myInterval);
 }

 