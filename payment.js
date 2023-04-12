let addAddress=document.getElementById("clickbtn")

let closebt=document.getElementById("closebtn")

let subbbt=document.getElementById("submitbutt")




addAddress.addEventListener("click",()=>{
    document.body.classList.add("popup-active")
})

closebt.addEventListener("click",()=>{
    console.log('mwoiuehncuw')
    document.body.classList.remove("popup-active")
})

subbbt.addEventListener("click",()=>{
    document.body.classList.remove("popup-active")
})

// -----------------------------------------------------------

let container=document.getElementById("addressinp")
let pincode=document.getElementById("pincode")
let house=document.getElementById("house")
let area=document.getElementById("area")
let myname=document.getElementById("name")
let number=document.getElementById("number")
let phone=document.getElementById("phone")


let arr=JSON.parse(localStorage.getItem("myadd"))||[]
mydisplayData(arr)




subbbt.addEventListener("click",(ele)=>{
    ele.preventDefault()
    let mydata={
        Pincode:pincode.value,
        Name:myname.value,
        House:house.value,
        Area:area.value,
        Number:number.value,
        Phone:phone.value

    }
    // arr.splice(1,1)
    arr.push(mydata)
    // console.log(arr.Name)
    // container.append("bnciegbvuyweg")

    localStorage.setItem("myadd",JSON.stringify(arr))


    mydisplayData(arr)
    
})

function mydisplayData(data){
    container.innerHTML=null
    data.forEach((element,i) => {
        let maindiv=document.createElement("div")
        maindiv.setAttribute("id","maindiv")
        let H4=document.createElement("h3")
        let div1=document.createElement("div")
        div1.setAttribute("id","houselo")
        let myhouse=document.createElement("p")
        let myarea=document.createElement("p")
        let myemail=document.createElement("p")
        let mypinl=document.createElement("p")

        let div2=document.createElement("div")
        let edit=document.createElement("button")
        let delevary=document.createElement("button")
        // delevary.addclassnem("id","confpage")
        H4.innerText=element.Name

        edit.innerText="Edit"
        edit.setAttribute("id","editbt")
        delevary.innerText="Deliver Here ->"
        mypinl.innerText=element.Pincode

        myhouse.innerText=element.House+" - "+element.Area
        myarea.innerText=element.Number
        myemail.innerText=element.Phone+
        console.log(element.Pincode)

        div1.append(myhouse,mypinl,myarea ,myemail)

        div2.append(edit,delevary)
        div2.setAttribute("id","btndiv")

        maindiv.append(H4,div1,div2)
        container.append(maindiv)
        // arr.splice(i-1,1)
        // localStorage.setItem("myadd",JSON.stringify(arr))

        delevary.addEventListener("click",()=>{
            window.location.assign("/conferm.html")
        })
        


        subbbt.addEventListener("click",()=>{
            arr.splice(i-1,1)
            localStorage.setItem("myadd",JSON.stringify(arr))

        })

        editbt.addEventListener("click",()=>{
            console.log("cnqwouerncvuoqwge")
            document.body.classList.add("popup-active")
        })
    });
}

