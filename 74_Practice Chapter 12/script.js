// Q1:
/* const a = async (text)=>{
   return new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve(text);
    }, 2000);
   }) 
}


(
 async ()=>{
  let txt = await a("Hello");
     console.log(txt);
      txt = await a("world");
      console.log(txt);
  }  
)()
*/


// Q2:
/* function sum(x,y,z) {
    return x+y+z;
 }

 let arr = [2,7,3];
 console.log(sum(...arr));
*/



// Q3:
/* const a = async (text, n=2)=>{
    return new Promise((resolve, reject)=>{
     setTimeout(() => {
         resolve(text);
     }, 1000 + n);
    }) 
 }
 
 
 (
  async ()=>{
   let txt = await a("I am resolving after 1 seconds", 1);
      console.log(txt);
       txt = await a("I am resolving after 3 seconds", 3);
       console.log(txt);
   }  
 )()
*/



// Q4:
function simpleCal(p,r,t) {
    return (p*r*t) /100;
}

console.log(simpleCal(1000, 5, 1));
