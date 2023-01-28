let messageList = [
    "Initializing Hack tool",
    "Connecting to Facebook..",
    "Connecting to Server 1",
    "Connecton failed. Retrying...",
    "Connecting to Server 2",
    "Connecton Successfully...",
    "Username iambiplab",
    "Trying Brute force",
    "200k password tried...",
    "Match not found",
    "200k password tried...",
    "Match found",
    "Accessing Account",
    "Hack Successful"
]

const sleep = async (seconds) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(true);
        }, 1000 * seconds)
    })
}


const showHack = async (message) => {
    await sleep(2);
    // console.log(message);
    document.getElementById("text").innerHTML += message + "<br>";
}


(async () => {
    for (let i = 0; i < messageList.length; i++) {
        await showHack(messageList[i]);

    }
})()

