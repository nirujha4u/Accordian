let value=document.querySelector("h1");
value.innerHTML="India Moon Mission";
value.style.color="Blue";

let bkg=document.getElementById("light");
// let bkg=document.getElementsByClassName("box1");
// let bkg=document.querySelector(".box1"); 

const btn=document.querySelector("button");

let flag=0;
btn.addEventListener("click", function(){
    if(flag==0)
    {
        bkg.style.backgroundColor="red";
        flag=1;
    }
    else if(flag==1)
    {
        bkg.style.backgroundColor="green";
        flag=2;
    }
    else{
        bkg.style.backgroundColor="yellow";
        flag=0;
    }
})

// -------------------------

const acc=document.querySelectorAll(".accordian")
acc.forEach(Element=>{
    const icon=document.querySelector(".icon")
    const ans=document.querySelector(".answer")

    Element.addEventListener("click", ()=>{
        icon.classList.toggle("active1")
        ans.classList.toggle("active")
    })
})

// const icon=document.querySelector(".icon")
// const ans=document.querySelector(".answer")

// icon.addEventListener("click",()=>{
//     icon.classList.toggle("active1")
//     ans.classList.toggle("active")
// })



// icon.addEventListener("click",()=>{
//     if(icon.classList.toggle("active1")){
//         icon.classList.remove("active1")
//         ans.classList.toggle("active")
//     }
//     else{
//         // icon.classList.toggle("active1")
//         ans.classList.remove("active")
//     }
// })





// ---------------------------------------------------
// const dm=document.getElementById("dom1")
// const dm=document.getElementsByClassName("dom2")
// const dm=document.querySelector("dom1")
// const dm=document.querySelector("dom2")

const dm=document.querySelector(".head p")

dm.innerHTML="hindustan"
dm.style.backgroundColor="yellow";
dm.style.color="blue";


