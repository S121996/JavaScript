const name="sumit"
const count= 50
// console.log(name+count+"Value")

//string interpolation
console.log(`hello my name is ${name.toUpperCase()} and my count is ${count}`);

const gameName=new String('sumitbhargava-sb')
// console.log(gameName.__proto__);
// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('b'));

const newString=gameName.substring(-4,7)
console.log(newString)

const anotherString= gameName.slice(1,4)
console.log(anotherString);

const newString1="  sumit   "
console.log(newString1);
console.log(newString1.trim());

const url="https://sumit.com/sumit%12bhargava"
console.log(url.replace('%','-'))
console.log(url.includes('sumit'))
console.log(gameName.split('-'))
console.log("3"+"3")
console.log("3"+3);
console.log(3+"3");
console.log("3"+ +"3");


