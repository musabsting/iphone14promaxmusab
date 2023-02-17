let ico = document.querySelectorAll(".con");
console.log(ico)
ico.forEach((ev)=>{
    ev.addEventListener("click",()=>{
        console.log("clic")
    })
})