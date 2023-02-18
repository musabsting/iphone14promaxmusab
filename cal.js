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
  btndynamic.style.cssText="transform:scaley(.8);transition:1s"
  let wi =document.querySelector(".net");
  wi.classList.add("invisible");
  let ele = document.createElement("p");
  let node= document.createTextNode("wilcome this is calculator")
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

let show = document.querySelector(".form-control");
let btnall = document.querySelectorAll(".btn");
let equal = document.querySelector(".equal");
let ac = document.querySelector(".ac");
console.log(btnall)
console.log(show)
console.log(ac)
console.log(equal)
ac.addEventListener("click",()=>{
    show.innerText="";
})
btnall.forEach((btn)=>{
    btn.addEventListener("click",(e)=>{
        console.log("clicked")
        switch(e.target.innerText){
            case'C':
            if(show.innerText){
                show.innerText=show.innerText.slice(0,-1);
            }
            break;
            case"=":
            try{
                
            show.innerText= eval(show.innerText);
            } catch{
                show.innerText="Error!"
            }
            break;
            case".":
            if(!String(show.innerText).includes(".")&& show.innerText!=""){
                show.innerText +=".";
            }
        break;
            default:
                show.innerText += e.target.innerText;
                console.log(e)
                console.log(e.target)
        }
    })
});
