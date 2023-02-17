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
let remo1 = document.querySelector(".rem1");
let remo2 = document.querySelector(".rem2");
let remo3 = document.querySelector(".rem3");
let remo4 = document.querySelector(".rem4");
let remo5 = document.querySelector(".rem5");
let remo6 = document.querySelector(".rem6");
let remo7 = document.querySelector(".rem7");
let remo8 = document.querySelector(".rem8");
let remonine = document.querySelector(".rem9");
let remozero = document.querySelector(".remzero");
let remohash = document.querySelector(".remhash");
let remostar = document.querySelector(".remstar");


console.log(caller);
console.log(numbers_dial1);
console.log(numbers_dial2);
console.log(numbers_dial3);
console.log(numbers_dialhash);
console.log(numbers_dialstar);
console.log(numbers_dialnine);
console.log(screen);
console.log(remo1);
console.log(remo2);
console.log(remo3);
console.log(remonine);
console.log(remohash);
console.log(remostar);


numbers_dial1.addEventListener("click",(e)=>{
remo1.parentNode.removeChild(remo1);
de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
            de.style.visibility="visible";
    }
});

numbers_dial2.addEventListener("click",(e)=>{
    remo2.parentNode.removeChild(remo2);
    de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
    }
});

numbers_dial3.addEventListener("click",(e)=>{
    remo3.parentNode.removeChild(remo3);
    de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
    }
});

numbers_dial4.addEventListener("click",(e)=>{
    remo4.parentNode.removeChild(remo4);
    de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
    }
});

numbers_dial5.addEventListener("click",(e)=>{
    remo5.parentNode.removeChild(remo5);
    de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
    }
});

numbers_dial6.addEventListener("click",(e)=>{
    remo6.parentNode.removeChild(remo6);
    de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
    }
});

numbers_dial7.addEventListener("click",(e)=>{
    remo7.parentNode.removeChild(remo7);
    de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
    }
});

numbers_dial8.addEventListener("click",(e)=>{
    remo8.parentNode.removeChild(remo8);
    de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
    }
});

numbers_dialnine.addEventListener("click",(e)=>{
    remonine.parentNode.removeChild(remonine);
    de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
    }
});

numbers_dialzero.addEventListener("click",(e)=>{
    remozero.parentNode.removeChild(remozero);
    de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
    }
});

numbers_dialstar.addEventListener("click",(e)=>{
    remostar.parentNode.removeChild(remostar);
    de.style.visibility="visible";
    switch(e.target.innerText){
        default:
            screen.innerText += e.target.innerText;
    }
});

numbers_dialhash.addEventListener("click",(e)=>{
    remohash.parentNode.removeChild(remohash);
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


