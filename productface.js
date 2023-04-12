let a=document.getElementById("b100")
let b=document.getElementById("b200")
let c=document.getElementById("b300")
let d=document.getElementById("b500")
let e=document.getElementById("b1000")
let f=document.getElementById("asc");
let g=document.getElementById("dsc");

let gett=JSON.parse(localStorage.getItem("cart")) || []
let arr=[]
window.addEventListener("load", function()
{fetch('tools-brushes.json')
  .then(response => response.json())
  .then(data => {
    console.log(data)
    arr=data;
    for(let i of data)
    {
        render(i);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });})
function render(obj)
{
    let card=document.createElement("div");
    card.setAttribute("class","crd");
    let image=document.createElement("img");
    image.src=obj.image;
    let name=document.createElement("h3")
    name.innerText=obj.title;
    let pri=document.createElement("h2")
    pri.innerText=obj.price;
    let abtn=document.createElement("button")
    abtn.setAttribute("class","abtnn")
    abtn.innerText="Add to Cart"
    abtn.addEventListener('click', function() {
        // Set the link destination
        alert("added to cart");
            // store.push(data)
      gett.push(obj)


      // Store the serialized object in local storage
    
      localStorage.setItem("cart",JSON.stringify(gett));
      });
    card.append(image,name,pri,abtn)
    let rendercard=document.getElementsByClassName("pctn");
    rendercard[0].appendChild(card);
}
a.addEventListener("click",()=>{
    let rendercard=document.getElementsByClassName("pctn");
    rendercard[0].innerText=null
    fetch('tools-brushes.json')
  .then(response => response.json())
  .then(data => {
    for(let i of data)
    {
        if(i.price<=100)
        render(i);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
})
b.addEventListener("click",()=>{
    let rendercard=document.getElementsByClassName("pctn");
    rendercard[0].innerText=null
    fetch('tools-brushes.json')
  .then(response => response.json())
  .then(data => {
    for(let i of data)
    {
        if((i.price<=300)&&(i.price>100))
        render(i);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
})
c.addEventListener("click",()=>{
    let rendercard=document.getElementsByClassName("pctn");
    rendercard[0].innerText=null
    fetch('tools-brushes.json')
  .then(response => response.json())
  .then(data => {
    for(let i of data)
    {
        if((i.price<=500)&&(i.price>300))
        render(i);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
})
d.addEventListener("click",()=>{
    let rendercard=document.getElementsByClassName("pctn");
    rendercard[0].innerText=null
    fetch('tools-brushes.json')
  .then(response => response.json())
  .then(data => {
    for(let i of data)
    {
        if((i.price<=1000)&&(i.price>500))
        render(i);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
})
e.addEventListener("click",()=>{
    let rendercard=document.getElementsByClassName("pctn");
    rendercard[0].innerText=null
    fetch('tools-brushes.json')
  .then(response => response.json())
  .then(data => {
    for(let i of data)
    {
        if(parseFloat((i.price.slice(1)))>1000)
        render(i);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
})
f.addEventListener("click",()=>{
    let rendercard=document.getElementsByClassName("pctn");
    rendercard[0].innerText=null
    fetch('tools-brushes.json')
  .then(response => response.json())
  .then(data => {
    data.sort((a, b) => a.title.localeCompare(b.title));
    for(let i of data)
    {
        render(i);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
})
g.addEventListener("click",()=>{
    let rendercard=document.getElementsByClassName("pctn");
    rendercard[0].innerText=null
    fetch('tools-brushes.json')
  .then(response => response.json())
  .then(data => {
    data.sort((a, b) => b.title.localeCompare(a.title));
    for(let i of data)
    {
        render(i);
    }
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });
})
// >>>>>>>>>>>Search functionality added here>>>>>>>>
let searchBar = document.querySelector("#search")
searchBar.addEventListener("input",function(){
  let value=searchBar.value
// console.log("changed",value)
let filtered=arr.filter((el)=>{
        return el.title.toLowerCase().includes(value.toLowerCase())
    })
console.log(filtered)
let rendercard=document.getElementsByClassName("pctn");
    rendercard[0].innerText=null
filtered.forEach((el)=>{
render(el)
})
})