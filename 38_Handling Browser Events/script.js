let btn = document.getElementById("btn");
// btn.addEventListener(Event, handler);


let func1 = function (event) {
    console.log(event);
    console.log(event.target);
    console.log(event.type);
    console.log(event.currentTarget);
    console.log(event.clientX);
    console.log(event.clientY);
    console.log(event.path);
    // alert("This is first message");
}

// let func2 = function (e) {
//     alert("This is second message");
// }

btn.addEventListener("click", func1);
// btn.addEventListener("click", func2);

// let prm = prompt("Your favorite number");
// prm = Number.parseInt(prm);


//Right Way
/*if (prm == 5) {
    btn.removeEventListener("click", func1);
}
*/


 // Wrong Way
/* if (prm == 5) {
    btn.removeEventListener("click", function (){
        alert("This is first message");
    }
);
}
*/


