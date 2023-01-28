/* let x = document.getElementsByTagName("div")[0];
    // x.innerHTML = "<h3>Hello World</h3>";
    // x.innerHTML = x.innerHTML + "<h3>Hello World</h3>";
    x.innerHTML += "<h3>Hello World</h3>";
*/



let x = document.getElementsByTagName("div")[0];
let a = document.createElement("div");
    // a.innerText = "Hi, my name is biplab";
    // a.innerHTML = "<b>Hi, my name is biplab</b>";
    a.innerHTML = "<h1>Hi, my name is biplab</h1>";
    // x.append(a);
    // x.prepend(a);
    // x.after(a);
    // x.before(a);


    // replace node with the given node
    x.replaceWith("div", a);

