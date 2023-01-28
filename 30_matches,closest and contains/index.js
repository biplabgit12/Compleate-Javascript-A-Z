let item1 = document.getElementById("item1");
let sp1 = document.getElementById("sp1");
    console.log(item1.matches(".boxy"));
    console.log(item1.matches(".box"));

    console.log(sp1.closest(".box"));
    console.log(sp1.closest("#sp1"));
    // console.log(sp1.textContent);

    console.log(item1.contains(sp1));
    console.log(item1.contains(item1));
    console.log(sp1.contains(item1));

    