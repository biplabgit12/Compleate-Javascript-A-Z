// Q2: 
/*let google = document.getElementById("google");
let bootstrap = document.getElementById("bootstrap");
let twitter = document.getElementById("twitter");

google.addEventListener("click", () => {
    location.href = "https://google.com";
})

bootstrap.addEventListener("click", () => {
    location.href = "https://getbootstrap.com";
})

twitter.addEventListener("click", () => {
    location.href = "https://twitter.com";
})
*/


// Q4: 
/*let fetchContent = async (url)=>{
    let con = await fetch(url);
    let a = await con.json();
    return a;
}
setInterval(async function () {
  let url = "https://jsonplaceholder.typicode.com/todos/1";
    console.log(await fetchContent(url));
},3000)
*/


let bulb = document.getElementById("bulb");
let img = document.getElementsByTagName("img")[0];



setInterval(function (){
    if( img.src =='http://127.0.0.1:5500/pic_bulbon.gif'){
        img.src = "pic_bulboff.gif" ; 
      }
      else{
          img.src = "pic_bulbon.gif" ;   
      }
},200)


