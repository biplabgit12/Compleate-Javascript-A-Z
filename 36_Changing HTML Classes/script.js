// If we assign something to elem.className, it replace the whole string of classes

let container = document.getElementById("container");
    // container.className = "brown";      // class thakle replace hoea jabe
    // container.className += " brown";    // class thakle replace hoea na
    // container.className = "brown padding";
    // container.classList.add("purple");
    // container.classList.remove("hey");
    // container.classList.toggle("div");
  let a = container.classList.contains("div");
    console.log(a);

