const ps=require("prompt-sync")
const prompt=ps()
var number=parseInt(prompt("Enter the number "))
var i=1;
while(i<=10){
    console.log(number*i)
    i++
}