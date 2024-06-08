
async function getalldata(cat){
    let res=await fetch(`https://newsapi.org/v2/everything?q=all &language=hi&apiKey=a53f9d592bcb4b328768abfedcdcbf8b`)
// console.log(res.json());
let data=await res.json()
// console.log(data.articles);
var totaldata=data.articles.map((item)=>{
return(
    `
    <div class="col col-3">
    <img src=${item.urlToImage}>
    <div class="content">
<h3> ${item.title} </h3>
<p> ${item.description} </p>
<a href=${item.url}><button> More News </button></a>

    </div>
    </div>
    
    `
)
})
document.getElementById("mydiv").innerHTML=totaldata.join('')
}
getalldata()



async function getdata(cat){
    let res=await fetch(`https://newsapi.org/v2/everything?q=${cat} &language=hi&apiKey=a53f9d592bcb4b328768abfedcdcbf8b`)
// console.log(res.json());
let data=await res.json()
// console.log(data.articles);
var totaldata=data.articles.map((item)=>{
return(
    `
    <div class="col col-3">
    <img src=${item.urlToImage}>
    <div class="content">
<h3> ${item.title} </h3>
<p> ${item.description} </p>
<a href=${item.url}><button> More News </button></a>

    </div>
    </div>
    
    `
)
})
document.getElementById("mydiv").innerHTML=totaldata.join('')
}



