setTimeout(()=>{
    console.log("Hacking wifi... please wait...");
}, 1000)

// console.log(kaushik);

/* try{
    console.log(kaushik);
 }
 catch(err){
    console.log("Catching error is " + err);
 }
 */

/* try{
    setTimeout(() => {
       console.log(kaushik);
    }, 200);  
 }
 catch(err){
    console.log("Catching error is " + err);
 }
*/

 try{
    setTimeout(() => {
        try {
            console.log(kaushik);  
        } catch (error) {
            console.log("Catching error is " + error);
        }
    }, 200);
   
 }
 catch(err){
    console.log("Catching error is " + err);
 }


setTimeout(()=>{
    console.log("Fetching username and password... please wait...");
    // console.log(kaushik);
}, 2000)

setTimeout(()=>{
    console.log("Hacking kaushik's facebook id... please wait...");
}, 3000)

setTimeout(()=>{
    console.log("kaushik's facebook id is 32425... please wait...");
}, 4000)
