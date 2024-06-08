//# Primitive (call by value)

//7 type: string,number,boolean,null,undefined,Symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn=false
const outsideTemp=null
let userEmail;

const id =Symbol('123')
const anotherId=Symbol('123')
console.log(id===anotherId);

const bigNumber=67954333222345678765434567654567n
const heros =["saktiman","naagraj","doga"];
let myobj={
    name:"sumit",
    age: 33,
}

const myFunction=function(){
    console.log("hello world");
}


// console.log(typeof bigNumber);
// console.log(typeof heros);
// console.log(typeof outsideTemp);
console.log(typeof anotherId);


// Non Primitive(Reference)

//Array,Objects,Functions


// Stack Memory (Primitive),Heap Memory(Non-Primitive)
let myYoutubename="sumitbhargavadotcom"
let anothername=myYoutubename

anothername="chaiourcode"
console.log(anothername);

let userOne={
    email:"user@google.com",
    upi:"user@ybl"
}

let usertwo=userOne
usertwo.email="sumitbhargav12@gmail.com"
console.log(userOne.email);
console.log(usertwo.email);
