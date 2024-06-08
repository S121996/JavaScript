
async function getData(){
    var result=await fetch("http://localhost:3000/Products")
    // console.log(result.json());
    var totaldata=await result.json()
    // console.log(totaldata);
 var data=totaldata.map((item)=>{
return(
    `
   <div> 
    <img src=${item.pimage} height="100px" width="120px">
    <h4> ${item.name} </h4>
    <p> Category=${item.category} Price=${item.price} </p>
    </div>
    `
)
    })
    document.getElementById("mydiv").innerHTML=data.join('')
}
getData()