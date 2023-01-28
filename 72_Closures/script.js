message = "Good global";

function hello1() {
    let message = "Good Morning";

    {
        let message = "Good Afternoon";
        console.log(message);
    }
    console.log(message);

    let c = function hello2() {
        console.log("I am hello2 " + message);
    }

    message = "Hey";
    return c;
}

let A = hello1();
A();

