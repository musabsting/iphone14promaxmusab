let myprom=new Promise((resolve,reject)=>{
 let arr =["musab","ali",'musa'];
 if(arr.length===3){
   resolve(console.log(arr));
 }
 else{
    reject(Error("no ne"));
 }

})
myprom.then(
    (res)=>{

    res.length=2;
    console.log(res)}
)
  