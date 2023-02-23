let btndynamic =document.querySelector("#dynamic");
let btnhide =document.querySelector("#btnhide");
let con =document.querySelector(".container");
console.log(con)
btndynamic.addEventListener("click",()=>{
  btnhide.style.display="none";
  btndynamic.classList.add("w-100");
  btndynamic.classList.remove("ms-5");
  btndynamic.classList.add("ms-4");
  btndynamic.classList.remove("text-dark");
  btndynamic.classList.add("text-light");
  btndynamic.classList.add("me-2");
  con.style.cssText="   height: 700px;"
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

let day = document.querySelector(".day");
let month = document.querySelector(".month");
let weekday=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
let monthly = ["january","february","march","april","may","june","july","august","september","october","november","december"];


let get = new Date();
let showday= weekday[get.getDay()];
let showmonth= monthly[get.getMonth()];
day.innerHTML=showday+","+" " +showmonth+" "+get.getDate();


let his= document.querySelector(".he");
let wheel= document.querySelector(".wheel");
let mainpage= document.querySelector(".all-content");
let go= document.querySelector(".go-acount");
let acountInfo= document.querySelector(".menshow")
let done= document.querySelector(".acount-done")
let getapp= document.querySelector(".acount")
let download= document.querySelector(".get")
let download2= document.querySelector(".get2")

go.addEventListener("click",()=>{
acountInfo.style.cssText="visibility:visible;transform:scale(1.06); transition:1s;s";
mainpage.style.cssText="visibility: hidden;";
his.style.cssText="visibility: hidden;";
wheel.style.cssText="visibility: hidden;";
console.log("clicked")

})
done.addEventListener("click",()=>{
acountInfo.style.cssText="visibility:hidden, transform:scale(1.06); transition:1s;s";
mainpage.style.cssText="visibility: visible;";
his.style.cssText="visibility: visible;";
wheel.style.cssText="visibility: visible;";

console.log("clicked")

})

download.addEventListener("click",()=>{

getapp.style.cssText="  visibility: visible; z-insex=12000;transform:scale(1.06); transition:1s;s"

console.log("clicked")
})

download2.addEventListener("click",()=>{
  mainpage.style.cssText="visibility: hidden;";
getapp.style.cssText="  visibility: visible; z-insex=12000;transform:scale(1.06); transition:1s;s"

console.log("clicked")
})
let concel= document.querySelector(".concel");
console.log(concel)
concel.addEventListener("click", ()=> {
  getapp.style.cssText="  visibility: hidden; "
  mainpage.style.cssText="visibility: visible;transform:scale(1); transition:1s;";
})
let screen= document.querySelector(".inpo");
console.log(screen);
let key1=document.querySelectorAll(".key1");
let key2=document.querySelectorAll(".key2");
let key3=document.querySelectorAll(".key3");
let keyup=document.querySelector(".keyup");
let keydel=document.querySelector(".keydel");
let keyre=document.querySelector(".keyre");
let keyspace=document.querySelector(".keyspace");
let keynumb=document.querySelector(".keynumb");
console.log(key1);
console.log(key2);
console.log(key3);
console.log(keydel);
console.log(keyup);
console.log(keyspace);
console.log(keyre);
console.log(keynumb);

key1.forEach((e)=>{
  e.addEventListener("click",(me)=>{
console.log(me)
console.log(me.target);
screen.value +=me.target.innerText;
  })
})

key2.forEach((e)=>{
  e.addEventListener("click",(me)=>{
console.log(me)
console.log(me.target);
screen.value +=me.target.innerText;
  })
})

key3.forEach((e)=>{
  e.addEventListener("click",(me)=>{
console.log(me)
console.log(me.target);
screen.value +=me.target.innerText;
  })
})



  keydel.addEventListener("click",()=>{
screen.innerText="";
console.log("clicked")  
  })

  keyup.addEventListener("click",()=>{
     key1.forEach((e)=>{
      e.style.cssText="text-transform: capitalize;"
     })
     key2.forEach((e)=>{
      e.style.cssText="text-transform: capitalize;"
     })
     key3.forEach((e)=>{
      e.style.cssText="text-transform: capitalize;"
     })
  })

  let  send = document.querySelector(".save");
  send.addEventListener("click",()=>{

    getapp.style.cssText="  visibility: hidden; "
    mainpage.style.cssText="visibility: visible;transform:scale(1); transition:1s;";
   
  
  })


