/*
class father{
    property(){
        console.log("property called");
    }
    home(){
        console.log("home called");
    }
}
class son extends father{
      job(){
        console.log("job called");
      }
}
var obj=new son()
obj.home()
obj.job()
obj.property()

class father{
    home(){
        console.log("home called");
    }
    constructor(){
        console.log("father constructor called");
    }
}
class son extends father{
      job(){
        console.log("son job called");
      }
      constructor(){
        super()
        console.log("son constructor called");
    }
}
var obj=new son()




class father{
    home(){
        console.log("home called-",this.x,this.y);
    }
    constructor(x,y){
        this.x=x 
        this.y=y
        console.log("father constructor called-",x,y);
    }
}
class son extends father{
      job(){
        console.log("son job called");
      }
      constructor(a,b){
        super(a,b)
        console.log("son constructor called-",a*b);
    }
}
var obj=new son(20,40)
obj.home()

*/ 
class A{
    data1(){
        console.log("data 1 called");
    }
}
class B extends A{
    data2(){console.log("data 2 called");}
}
class C extends B{
    data3(){console.log("data 3 called");}
}
class D extends C{
    data4(){console.log("data 4 called");}
}
var obj=new D()
obj.data1()
obj.data2()
obj.data3()
obj.data4()