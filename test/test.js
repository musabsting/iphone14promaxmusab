
let screen= document.querySelector(".show")
let green= document.querySelector(".green")
let black= document.querySelector(".black")

let red= document.querySelector(".red")
let lis = document.querySelectorAll(".cl");

/*
cli.onclick= function(){
    if(localStorage.clickcount){
        localStorage.clickcount=Number(localStorage.clickcount)+1;
    }
    else{
        window.localStorage.clickcount =1;
    }
    p.innerHTML=localStorage.clickcount;
}
*/
if( localStorage.getItem("color")){
    screen.style.backgroundColor= localStorage.getItem("color");
    lis.forEach((li)=>{
        li.classList.remove("active")
    })
    document.querySelector(`[data-color="${localStorage.getItem("color")}"]`).classList.add("active");

}
lis.forEach((li)=>{
    li.addEventListener("click",(e)=>{
        lis.forEach((li)=>{
            li.classList.remove("active");
        })
        let me= e.currentTarget.dataset.color;
        localStorage.setItem("color",me);
        screen.style.backgroundColor=me;
    })
})

const httpre= new XMLHttpRequest();
httpre.open("get","https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;1,100&display=swap" );
httpre.send();
console.log(httpre);
httpre.onreadystatechange=function(){
    if(this.readyState===4 && this.status===200){
        let jsdat =JSON.parse(this.responseText);
        console.log(jsdat)
    }
}















































let person = {

    name:"musab",
    age:"ali"
}
console.log(person)
console.log(person.name)
console.log(person.age)
console.log(person["age"])
person.name="musab-ali";
console.log(person.name)
person["age"]=25;
console.log(person.age)
let js= JSON.stringify(person);
console.log(js);
let jss= JSON.parse(js)
console.log(jss);
let nu= document.querySelector(".b")
console.log(nu)
let n;
console.log(n)
console.log(typeof null)
console.log(typeof undefined)
let ar= n+n;
console.log(ar)
console.log( typeof ar)
let day = new Date();
console.log(day.getHours());
console.log(day.getMinutes());
/*
let text= '{"name":"musab",  "birth:"5/4/1998", "city":fasher"}';
let obj = JSON.parse(text, function (key, value) {
    if(key=="birth"){
        return new Date(value)
    }
    else{
        return value;
    }


})*/









