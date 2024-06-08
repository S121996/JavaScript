/*
var b=20 //global
function show(){
    var a=10//local 
    console.log(a);
    console.log(b);
}
show()
console.log(b);


 var result= function data(){
        console.log("data called");
     }
     result()
 

     var result= function data(a,b){
        console.log("data called-",a,b);
     }
     result(50,70)
       

    //  anonymous


   var data=  function(){
        console.log("function called");
       }
       data()
     
       var data=  function(x,y){
        console.log("function called-",x*y);
       }
       data(10,20)
    //    arrow function or fat arrow function
    
    let data=()=>{
        console.log("data called");
    }
    data()

   
    let data=a=>{
        console.log("data called-",a);
    }
    data(10)
    
    let data=(a,b,c)=>{
        console.log("data called-",a+b+c);
    }
    data(10,20,30)


class and object 

class class_name{
    member 1 
    . . . .
    . . . .
}
variable=new class_name()

   
     class child{
        show(){
            console.log("show called");
        }
     }
     var obj=new child()
     obj.show()
    
       class father{
        result(){
            console.log("get result-",this.a,this.b);
        }
        data(a,b){
            this.a=a 
            this.b=b 
            console.log("data called-",a,b);
        }
       }
       var obj=new father()
       obj.data(50,60)
       obj.result()
           */

class result{
    data1(){console.log("data 1 called");}
    data2(){console.log("data 2 called");}
    data3(){console.log("data 3 called");}
    constructor(a,b){
        console.log("constructor called-",a*b);
    }
}
var obj=new result(80,90)
obj.data3()
obj.data2()
obj.data1()













  