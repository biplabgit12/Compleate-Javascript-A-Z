let user = prompt("Enter S, W or G");
let computerInp = Math.floor(Math.random() *3);
let computer = ["S","W","G"];
    computer = computer[computerInp];
    // console.log(computer);

function Match(user,computer){
if(user === computer){
  return "Nobody";
}
else if(user == "S" && computer === "W"){
    return "user";
}
else if(user === "S" && computer === "G"){
    return "computer";
}
else if(computer === "S" && user === "W"){
    return "computer";
}
else if(computer === "S" && user === "G"){
    return "user";
}
}   

let result = Match(user,computer);
console.log(result);

let container = document.getElementById("container");
container.innerHTML = `COMPUTER:${computer} And USER:${user} <br>
The winner is ${result.toUpperCase()}`;