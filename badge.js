let ico = document.querySelectorAll(".con1");
let ico2 = document.querySelectorAll(".con2");
let ico3 = document.querySelectorAll(".con4");
let icon3 = document.querySelectorAll(".icon3");
let icon4 = document.querySelectorAll(".icon4");
let icon5 = document.querySelectorAll(".icon5");

let screen12= document.querySelector(".bdge12");
let screen13= document.querySelector(".bdge13");
let screen14= document.querySelector(".bdge14");

let screen21= document.querySelector(".bdge21");
let screen22= document.querySelector(".bdge22");
let screen23= document.querySelector(".bdge23");

let hide1= document.querySelector(".hide1");
let hide2= document.querySelector(".hide2");
let body=document.querySelector("body");
console.log(ico)
console.log(ico2)
console.log(ico3)
console.log(icon3)
console.log(icon4)
console.log(screen12)
console.log(screen13)
console.log(screen14)
console.log(hide1)
console.log(hide2)
console.log(body)
let refresh=document.querySelector(".ref");
console.log(refresh)

let time= document.querySelector(".time");
let hour= document.querySelector(".hour");
let min= document.querySelector(".min");
let se= document.querySelector(".min");
console.log(time)
console.log(hour)
console.log(min)

let gethour= new Date();
let ho= gethour.getHours()
let minu= gethour.getMinutes()
let sec= gethour.getSeconds()
console.log(ho)
time.innerHTML=ho+":"+minu;


refresh.addEventListener("click",()=>{
    location.reload();
    
})

ico.forEach((ev)=>{
    ev.addEventListener("click",()=>{

      screen21.classList.add("d-none");
      screen22.classList.add("d-none");
      screen23.classList.add("d-none");
      screen13.classList.add("d-none");
      screen14.classList.add("d-none");
      hide1.classList.add("d-none");
      hide2.classList.add("d-none");
      screen12.classList.add("w-100");
      screen12.classList.add("h-50");
      screen12.style.cssText="transform:scaley(1.9); margin-top:100px; transition: 2s";
   
     
    })
})

ico2.forEach((ev)=>{
    ev.addEventListener("click",()=>{

      screen21.classList.add("d-none");
      screen22.classList.add("d-none");
      screen23.classList.add("d-none");
      screen12.classList.add("d-none");
      screen14.classList.add("d-none");
      hide1.classList.add("d-none");
      hide2.classList.add("d-none");
      screen13.classList.add("w-100");
      screen13.classList.add("h-50");
      screen13.style.cssText="transform:scaley(1.9); margin-top:100px; transition: 2s";
   
     
    })
})

ico3.forEach((ev)=>{
    ev.addEventListener("click",()=>{

      screen21.classList.add("d-none");
      screen22.classList.add("d-none");
      screen23.classList.add("d-none");
      screen12.classList.add("d-none");
      screen13.classList.add("d-none");
      hide1.classList.add("d-none");
      hide2.classList.add("d-none");
      screen14.classList.add("w-100");
      screen14.classList.add("h-50");
      screen14.style.cssText="transform:scaley(1.9); margin-top:100px; transition: 2s";
   
     
    })
})
time.innerHTML=ho+":"+minu;
icon3.forEach((ev)=>{
    ev.addEventListener("click",()=>{

    
      screen22.classList.add("d-none");
      screen23.classList.add("d-none");
      screen14.classList.add("d-none");
      screen12.classList.add("d-none");
      screen13.classList.add("d-none");
      hide1.classList.add("d-none");
      hide2.classList.add("d-none");
      screen21.classList.add("w-75");
      screen21.classList.add("h-75");
      screen21.classList.add("ms-4");
      screen21.classList.add("justify-content-between");
      screen21.style.cssText="transform:scaley(2); margin-top:100px; transition: 2s";
   
     
    })
})

icon4.forEach((ev)=>{
    ev.addEventListener("click",()=>{

    
      screen21.classList.add("d-none");
      screen23.classList.add("d-none");
      screen14.classList.add("d-none");
      screen12.classList.add("d-none");
      screen13.classList.add("d-none");
      hide1.classList.add("d-none");
      hide2.classList.add("d-none");
      screen22.classList.add("w-75");
      screen22.classList.add("h-75");
      screen22.classList.add("ms-4");
      screen22.classList.add("justify-content-between");
      screen22.style.cssText="transform:scaley(2); margin-top:100px; transition: 2s";
   
    })
})

icon5.forEach((ev)=>{
    ev.addEventListener("click",()=>{

    
      screen21.classList.add("d-none");
      screen22.classList.add("d-none");
      screen14.classList.add("d-none");
      screen12.classList.add("d-none");
      screen13.classList.add("d-none");
      hide1.classList.add("d-none");
      hide2.classList.add("d-none");
      screen23.classList.add("w-75");
      screen23.classList.add("h-75");
      screen23.classList.add("ms-4");
      screen23.classList.add("justify-content-between");
      screen23.style.cssText="transform:scaley(2); margin-top:100px; transition: 2s";
   
     
    })
})
