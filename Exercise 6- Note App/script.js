let addBox = document.querySelector(".add-box");
let popup = document.querySelector(".popup");
let popupBox = document.querySelector(".popup-box");
let crosIcon = popupBox.querySelector("header i");
let updateTitle = popupBox.querySelector("header p");
let titleCon = document.getElementById("titleCon");
let descCon = document.getElementById("descCon");
let addBtn = document.getElementById("addBtn");

const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
];


const notes = JSON.parse(localStorage.getItem("notes") || "[]");
let isUpdate = false;
let updateId;

addBox.addEventListener("click", addingBox);
function addingBox() {
    titleCon.focus();
    popupBox.classList.add("show");
    updateTitle.innerText = "Adding a new Note";
    addBtn.innerText = "Add Note";
    titleCon.value = "";
    descCon.value = "";
}


crosIcon.addEventListener("click", function () {
    popupBox.classList.remove("show");

})



// show the note
let showNote = document.querySelector(".wrapper");

function ShowNote() {
    // console.log(notes);
    document.querySelectorAll(".note").forEach((element) => {
        element.remove();
    });

    notes.forEach((element, index) => {
        // console.log(element, index);
        let liElm = `<li class="note">
    <div class="details">
        <p>${element.noteTitle}</p>
        <span>${element.noteDesc}</span>
    </div>
    <div class="bottom-content">
        <span>${element.month}: ${element.currentDate}, ${element.currentYear}</span>
        <div class="settings">
            <i onclick="showMenu(this)" class="uil uil-ellipsis-h"></i>
            <ul class="menu">
                <li onclick="updateNote('${index}','${element.noteTitle}', '${element.noteDesc}')"> <i class="uil uil-pen"></i>Edit</li>
                <li onclick="deleteNote(${index})"> <i class="uil uil-trash"></i>Delete</li>
            </ul>
        </div>
    </div>
</li>`;

        addBox = document.querySelector(".add-box");
        addBox.insertAdjacentHTML("afterend", liElm);

    })

}

ShowNote();


// Show the menu
function showMenu(elm) {
    console.log(elm);
    elm.nextElementSibling.classList.toggle("show");
}


// Upadte the note 
function updateNote(noteId,title,desc) {
    isUpdate = true;
    updateId = noteId;
    addBox.click();
    updateTitle.innerText = "Update the Note";
    addBtn.innerText = "Update Note";
    titleCon.value = title;
    descCon.value = desc;
}


// Delete the note
function deleteNote(index) {
    console.log("delete the note", index);
   let confirmDel = confirm("Are you sure you want to delete this note?");
   if (!confirmDel) {
    return;
   } 
    notes.splice(index, 1);   //deletes one note of given index
    localStorage.setItem("notes", JSON.stringify(notes));   //saving updated notes to local storage
    ShowNote();
}


// Add the note
addBtn.addEventListener("click", function (e) {
    e.preventDefault();
    let noteTitle = titleCon.value;
    let noteDesc = descCon.value;

    // if (noteTitle || noteDesc) {
        let dateObj = new Date();
        let month = months[dateObj.getMonth()];
        let currentDate = dateObj.getDate();
        let currentYear = dateObj.getFullYear();
        console.log(month, currentDate, currentYear);
        let noteObj = { noteTitle, noteDesc, month, currentDate, currentYear };

        if (!isUpdate) {
            notes.push(noteObj);    
        }else{
          notes[updateId] = noteObj; 
        }

        localStorage.setItem("notes", JSON.stringify(notes));   //saving updated notes to local storage
        ShowNote();
        crosIcon.click();
        titleCon.value = "";
        descCon.value = "";
    // }
})


// Searching the note
let searchTxt = document.getElementById("searchTxt");
searchTxt.addEventListener("input", function(){
    let searchVal = searchTxt.value.toLowerCase(); 
    let noteList = document.querySelectorAll(".note");
    Array.from(noteList).forEach((element,index)=>{
        let noteP = element.getElementsByTagName("p")[0].innerText;
        if (noteP.includes(searchVal)) {
            element.style.display = "block";
        }else{
            element.style.display = "none";
        }
    })

}) 