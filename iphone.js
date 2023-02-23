let btndynamic =document.querySelector("#dynamic");

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

let btnhide =document.querySelector("#btnhide");
btndynamic.addEventListener("click",()=>{
  btnhide.style.display="none";
  btndynamic.classList.add("w-100");
  btndynamic.classList.remove("ms-5");
  btndynamic.classList.add("ms-4");
  btndynamic.classList.remove("text-dark");
  btndynamic.classList.add("text-light");
  btndynamic.classList.add("me-2");
  btndynamic.style.cssText="transform:scaley(.8);transition:1s"
  let wi =document.querySelector(".net");
  wi.classList.add("invisible");
  let ele = document.createElement("p");
  let node= document.createTextNode("To musab iphone")
  ele.appendChild(node);
  btndynamic.appendChild(ele);
});
btndynamic.onmouseleave=function(){
    btnhide.style.display="block";
    btndynamic.style.cssText="transform:scaley(none);transition:1s"
    btndynamic.classList.remove("w-100");
    btndynamic.classList.add("w-50");
    btndynamic.classList.remove("ms-4");
    btndynamic.classList.remove("me-2");
    btndynamic.classList.add("ms-5");
    btndynamic.classList.add("text-dark");
    let wi =document.querySelector(".net");
    wi.classList.remove("invisible");
    wi.classList.add("visible");
    let hidep= document.querySelector("p");
    hidep.style.display="none";
    let con = document.querySelector(".container");
    console.log(con)
    location.reload();
}
let sc= document.querySelector(".bebig");
console.log(sc)
sc.addEventListener("click",()=>{
  sc.classList.add("w-50")

})

  

