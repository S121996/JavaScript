/*
show()
function show(){
    console.log("show called");
}
show()
show()

function data(a,b){
    console.log("data called-",a*b);
}
data(10,20)
data(50,80)

function child(x,y,z){
    console.log("child called-",x+y+z);
    // console.log(arguments);
    console.log(arguments[3]+arguments[4]+arguments[5]+arguments[6]);
}
child(10,20,30,40,50,60,70)


function fun(a,b,...rest){
console.log("fun called-",a,b);
// console.log(rest);
console.log(rest[0],rest[1],rest[2],rest[3]);
}
fun(10,20,30,40,50,60)

function data(x,y,z=50){
console.log(x+y+z);
}
data(10,20)
data(5,10,20)


function fun(a,b){
 return a+b 
}
// console.log(fun(10,20));
var result=fun(20,30)
console.log(result);

function show(){
    var x=50
    var y=20
    var z=x*y 
    return z 
}
 var result= show()
 console.log(result);

variable scope 
1- local scope 
2- global scope 
3- block scope 


function data(){
    var a=10 //local
    console.log(a);
}
data()

var b=20//global 
function data(){
    console.log(b);
}
data()
console.log(b);

function fun(){
    a=20 //global 
    console.log(a);
}
fun()
console.log(a);

var a=50
function fun(){
   var a=20 
    console.log(a);
}
fun()
console.log(a);
 */
var a=50
function fun(){
    a=20 
    console.log(a);
}
fun()
console.log(a); 

