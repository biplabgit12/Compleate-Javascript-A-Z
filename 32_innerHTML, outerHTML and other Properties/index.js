console.log(document.getElementById("main"));
console.dir(document.getElementById("main"));


console.log(document.body.firstChild.nodeName);
console.log(document.body.firstChild.tagName);
console.log(document.body.firstElementChild.tagName);

// get value 
/*let main = document.getElementById("main");
console.log(main.innerHTML);
console.log(main.outerHTML);
*/

// set value 
let main = document.getElementById("main");
main.innerHTML = "<span>This is a innerHTML set</span>";
main.outerHTML = "<div>Hey<div/>";

// data,nodeValue and textContent 
 console.log(document.body.firstChild.data);
 console.log(document.body.firstChild.nodeValue);
 console.log(document.body.firstElementChild.textContent);

//  hidden
let span = document.getElementsByTagName("span")[0];
    span.hidden = false;
