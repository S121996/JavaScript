/*
var a=70
export default a


function show(a,b){
    console.log("show called-",a*b);
}
export default show


class data{
    fun(x,y){
        console.log("fun called0",x,y);
    }
}
export default data
*/ 
function show(a,b){
    console.log("show called-",a*b);
}
var a=70

export {show,a}