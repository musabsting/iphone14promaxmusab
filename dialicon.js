

let dialicon = document.querySelector(".contact");
console.log(dialicon);
let take = document.querySelector(".span-one");
console.log(take);
take.addEventListener("click",()=>{
    let cont =document.querySelector(".container");
    cont.style.cssText="  background-image: linear-gradient(#536b47,#2e2424) ";
    console.log("clicked")
    let cho1 = document.createElement("span");
  let node1= document.createTextNode("call");
    let cho2 = document.createElement("span");
  let node2= document.createTextNode("massege");
    cho1.style.cssText="background-color:rgb(26, 172, 26);margin-left:10px; font-size:normal; color:white; margin-top:20px; transform:scaley(.8);transition:1s";
    cho2.style.cssText="background-color:rgb(35, 71, 35);font-size:normal; color:white;margin-left:10px; margin-top:20px"
    cho1.classList.add("rounded");
    cho2.classList.add("rounded");
    cho1.appendChild(node1);
    take.appendChild(cho1);
    cho2.appendChild(node2);
    take.appendChild(cho2);
    console.log(cho1);
    cho1.addEventListener("click",()=>{
        let cont =document.querySelector(".container");
        cont.style.cssText="background-image:url(Bg/content.png);background-size: cover;";
        cont.innerText="";
       
     let wait= document.createElement("p");
     let musab = document.createTextNode("the operation under developing");
     let wait2= document.createElement("p");
     let musab2 = document.createTextNode(" i hope support my page iam musab thanks wait me");
     wait.appendChild(musab);
     wait.appendChild(musab2);
     cont.appendChild(wait);
     let back = document.createElement("a");
     let node3 = document.createTextNode("BackHome");
     back.appendChild(node3);
     cont.appendChild(back)
     
    })

})

