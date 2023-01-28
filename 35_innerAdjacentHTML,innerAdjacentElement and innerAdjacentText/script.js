let div = document.getElementById("div");

// insertAdjacentHTML(position: InsertPosition, text: string)
div.insertAdjacentHTML("afterbegin", "<div class='demo'>afterbegin</div>");
div.insertAdjacentHTML("beforebegin", "<div class='demo'>beforebegin</div>");
div.insertAdjacentHTML("afterend", "<div class='demo'>afterend</div>");
div.insertAdjacentHTML("beforeend", "<div class='demo'>beforeend</div>");



let h3 = document.getElementsByTagName("h3")[0];
    h3.remove();
// console.log(h3.remove());
