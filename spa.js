var  teacher = {
    firstname:"musab",
    lastname:"ali abdo",
    languages:[
    "html","css","js"
    ]
}
function swit(teacher){
       var firstNameElem=document.getElementById("firstName");
       var lastNameElem=document.getElementById("lastname");
       var teacherNameElem=document.getElementById("teacherName");
       var languageslist = document.getElementById("teacherlang");

       console.log('me',firstNameElem);
       firstNameElem.value = teacher.firstname;
       var ve=teacher.firstname;
       lastNameElem.value = teacher.lastname;
       teacherNameElem.innerText=`${ ve} ${teacher.lastname}`;
       languageslist.innerHTML="";
   teacher.languages.forEach(element => {
    var node = document.createElement("li");
    let text = document.createTextNode(element);
    node.append(text);
    languageslist.appendChild(node)
    
   });
 
}

function addskill(){
   var inpuadd=document.getElementById("skils");
   teacher.languages.push(inpuadd.value);
   if(inpuadd.value===""){return;}
   inpuadd.value='';
   swit(teacher);

}

swit(teacher);

function savateacher(){
    var firstNameElem=document.getElementById("firstName");
    var lastNameElem=document.getElementById("lastname");
    var teacherNameElem=document.getElementById("teacherName");
     teacherNameElem.innerText=`${ ve} ${teacher.lastname}`;
    teacher.firstname =firstNameElem.value;
    teacher.lastname = lastNameElem.value;
    swit(teacher);
    var  edit = document.getElementById('editTeacher');
  var  view = document.getElementById('viewTeacher');


  edit.style.display='none';
  view.style.display='block';
}
