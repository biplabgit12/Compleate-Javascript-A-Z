function myTimer() {
    let date = new Date();
    let hour = date.getHours();
    hour = (hour > 12) ? "0" + (hour - 12) : hour;

    let minute = date.getMinutes();
    minute = (minute < 10) ? "0" + minute : minute;

    let second = date.getSeconds();
    second = (second < 10) ? "0" + second : second;

    let meridian = (hour > 12) ? "PM" : "AM";
    // console.log(hour, minute, second);
    
    let timeStore = document.getElementById("timeStore");
    timeStore.innerHTML = hour + ":" + minute + ":" + second + " " + meridian;
    // timeStore.innerHTML = new Date().toLocaleTimeString();
}

setInterval(function () {
    myTimer();
}, 1000)

