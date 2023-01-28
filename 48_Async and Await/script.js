/* function biplab(){
    return 15;
}

console.log(biplab());
console.log(typeof biplab());

 
 async function kaushik(){
    return 15;
}

console.log(kaushik());
console.log(typeof kaushik());
*/



/* async function biplab(){
    return 15;
}

biplab().then((value)=>{
    console.log(value);
 })
*/


/* function kaushik(){
    return 15;
}

kaushik().then((value)=>{
    console.log(value);
 })
*/



async function biplab() {
    let DelhiWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 deg");
        }, 2000)
    })

    let KalkataWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("32 deg");
        }, 5000)
    })


  /*  DelhiWeather.then((value)=>{
        console.log(value);
    })

    KalkataWeather.then((value)=>{
        console.log(value);
    })
  */

    console.log("Fetching Delhi Weather Please wait...");
   let DelhiW = await DelhiWeather; 
   console.log("Fetched Delhi Weather is " + DelhiW);

   console.log("Fetching kalkata Weather Please wait...");
   let KalkataW = await KalkataWeather; 
   console.log("Fetched kalkata Weather is " + KalkataW);
   return [DelhiW, KalkataW];
} 

async function kaushik(){
    console.log("Hey I am kaushik and I am waiting");
}

// Function is call/invoke
/*console.log("Welcome to weather control room");
    let a =  biplab();
    let b = kaushik();
    // console.log(a); 
*/

async function main1(){
    console.log("Welcome to weather control room");
    let a = await biplab();
    let b = await kaushik();
    // console.log(a); 
}

main1();

