let screen =document.querySelector(".screen");
let numbers_dial1= document.querySelector("[data-num1]");
let numbers_dial2= document.querySelector("[data-num2]");
let numbers_dial3= document.querySelector("[data-num3]");
let numbers_dial4= document.querySelector("[data-num4]");
let numbers_dial5= document.querySelector("[data-num5]");
let numbers_dial6= document.querySelector("[data-num6]");
let numbers_dial7= document.querySelector("[data-num7]");
let numbers_dial8= document.querySelector("[data-num8]");
let numbers_dialstar= document.querySelector("[data-numstar]");
let numbers_dialhash= document.querySelector("[data-numhash]");
let numbers_dialnine= document.querySelector("[data-numnine]");
let numbers_dialzero= document.querySelector("[data-numzero]");
//

let de =document.querySelector(".del")
//

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


console.log(caller);
console.log(numbers_dial1);
console.log(numbers_dial2);
console.log(numbers_dial3);
console.log(numbers_dialhash);
console.log(numbers_dialstar);
console.log(numbers_dialnine);
console.log(screen);



numbers_dial1.addEventListener("click",(e)=>{

de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
            de.style.visibility="visible";
    }
});

numbers_dial2.addEventListener("click",(e)=>{
 
    de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
    }
});

numbers_dial3.addEventListener("click",(e)=>{
  
    de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
    }
});

numbers_dial4.addEventListener("click",(e)=>{
   
    de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
    }
});

numbers_dial5.addEventListener("click",(e)=>{

    de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
    }
});

numbers_dial6.addEventListener("click",(e)=>{

    de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
    }
});

numbers_dial7.addEventListener("click",(e)=>{
 
    de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
    }
});

numbers_dial8.addEventListener("click",(e)=>{

    de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
    }
});

numbers_dialnine.addEventListener("click",(e)=>{
    
    de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
    }
});

numbers_dialzero.addEventListener("click",(e)=>{
    
    de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
    }
});

numbers_dialstar.addEventListener("click",(e)=>{

    de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
    }
});

numbers_dialhash.addEventListener("click",(e)=>{
  
    de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
    }
});
de.onclick=function(){
    screen.innerText="";
}
de.onmouseleave=function(){
    location.reload();
}


