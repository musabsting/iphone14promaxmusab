let btndynamic =document.querySelector("#dynamic");
let btnhide =document.querySelector("#btnhide");
btndynamic.addEventListener("click",()=>{
  btnhide.style.display="none";
  btndynamic.classList.add("w-100");
  btndynamic.classList.remove("ms-5");
  btndynamic.classList.add("ms-4");
  btndynamic.classList.remove("text-dark");
  btndynamic.classList.add("text-light");
  btndynamic.classList.add("me-2");
  btndynamic.classList.remove("bg-dark");
  btndynamic.classList.add("bg-primary");
  btndynamic.style.cssText="transform:scaley(.8);transition:1s"
  let wi =document.querySelector(".net");
  wi.classList.add("invisible");
  let ele = document.createElement("p");
  let node= document.createTextNode("welcome to dynamic")
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

  

