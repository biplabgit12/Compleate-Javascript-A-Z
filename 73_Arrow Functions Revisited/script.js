/* const sayHello = ()=>{
    console.log("Hello");
} */

// const sayHello = ()=> console.log("Hello");

// const sayHello = name=> console.log("Hello " + name);

const sayHello = (name, greet)=> console.log("Hello " + greet + name);


// sayHello("Biplab", "Good morning ");


const x = {
    name: "Biplab",
    role: "JS Developer",
    exp:12,
    show: function () {
        // console.log(this);
        // let that = this;

      /*  setTimeout(function(){
            // console.log(this);
            // console.log(`The name is ${this.name}\nThe role is ${this.role}`);   // not working
            console.log(`The name is ${that.name}\nThe role is ${that.role}`);
        }, 2000);   */

        
        setTimeout(()=>{
            // console.log(this);
            console.log(`The name is ${this.name}\nThe role is ${this.role}`);
        }, 2000);
    }
}

console.log(x.name, x.exp);
x.show();