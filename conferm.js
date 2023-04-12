let Credit=document.getElementById("Credit")

let appdiv=document.getElementById("addressinp")

//  displaydata()

Credit.addEventListener("click",(ele)=>{
    ele.preventDefault()
    appdiv.innerHTML=null
    let h2=document.createElement("h3")
    h2.innerText="One card for BeautyFable app"
    h2.setAttribute("id","ncoweurvbwuy")
    let div1=document.createElement("div")
    div1.setAttribute("id","contdiv")
    let h4=document.createElement("p")
    h4.innerText="WE ACCEPT"
    h4.setAttribute("id","weaccept")
    let img1=document.createElement("img")
    img1.setAttribute("src","https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/VISA.svg")

    let img2=document.createElement("img")
    img2.setAttribute("src","https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/mastercard.svg")

    let img3=document.createElement("img")
    img3.setAttribute("src","https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/Rupay.svg")

    let img4=document.createElement("img")
    img4.setAttribute("src","https://adn-static1.nykaa.com/media/wysiwyg/Payments/WeAccept/AMEX.svg")

    let div3=document.createElement("div")
    let cardno=document.createElement("input")
    cardno.setAttribute("placeholder","Card Number")
    cardno.setAttribute("id","div3")
    div3.append(cardno)

    let div4=document.createElement("div")
    let expi=document.createElement("input")
    expi.setAttribute("id","inp2ut")
    expi.setAttribute("placeholder","Expiry (DD/MM/YYYY)")
    // expi.setAttribute("required")
    let cvv=document.createElement("input")
    cvv.setAttribute("id","cvv")
    cvv.setAttribute("placeholder","CVV")
    div4.append(expi,cvv)


    let div5=document.createElement("div")
    let paybt=document.createElement("button")
    div5.setAttribute("id","btndiv")
    paybt.setAttribute("id","finalpayotp")
    div5.append(paybt)
    paybt.innerText="PAY"
    div1.append(img1,img2,img3,img4 )
    appdiv.append(h2,h4,div1,div3,div4,div5)


    let myotp=document.getElementById("otp")

    let randomotp=Math.floor(Math.random()*10000)
    let bcowuertnv=document.getElementById("finalpayotp")
    bcowuertnv.addEventListener("click",()=>{
        console.log("nouervuy")
        alert(randomotp +" is the secret code for online Purchase by card. Valid for 5 mins. Do not share OTP for security reasion.")
        
        document.body.classList.add("popup-active")

        let Conformotp=document.getElementById("conformotp")
        let otp=document.getElementById("otp")

        Conformotp.addEventListener("click",()=>{
            // console.log(randomotp)
            // console.log(otp.value)
            if(randomotp==otp.value){
                document.body.classList.remove("popup-active")
                document.body.classList.add("popup-activelaststep")
                
            }
            else{
                // window.location.assign("/wrongotp.html")

                document.body.classList.remove("popup-active")
                document.body.classList.add("popup-activesecond")
            }
        })
        
    })
 

    console.log("paybt.value")
    
})
// ------------------------------------------------------------

let conformotp=document.getElementById("clickok")

conformotp.addEventListener("click",()=>{
    window.location.assign("/conferm.html")
})


let lastclik=document.getElementById("lastclik")


lastclik.addEventListener("click",()=>{
    window.location.assign("/index.html")
})

// 