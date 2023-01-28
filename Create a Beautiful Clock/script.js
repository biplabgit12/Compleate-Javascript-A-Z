let days = ["Sunday","Monday","Tuesday","Wednesday","ThursDay","Friday","Saturday"];
let months = ["January","Fabruary","March","April","May","June","July","August","September","October","November","December"];

function myTimer() {
    let date = new Date();
    let day = date.getDay();
       day = days[day];

    let month = date.getMonth();
        month = months[month];

    let Today = date.getDate();
    
    let hour = date.getHours();
        hour = (hour > 12) ? "0" + (hour - 12) : hour;

        // console.log(day,month,Today);

    let minute = date.getMinutes();
        minute = (minute < 10) ? "0" + minute : minute;

    let timeContent = document.getElementById("timeContent");
        timeContent.innerHTML = hour + ":" + minute;

    let dayContent = document.getElementById("dayContent");
        dayContent.innerHTML = day;

    let dateContent = document.getElementById("dateContent");
        dateContent.innerHTML = month + " " + Today;

}

setInterval(function () {
    myTimer();
}, 1000)

