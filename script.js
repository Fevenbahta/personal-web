function showimageproperty(para){
    document.getElementById(id="description").innerHTML=para.alt;
}
function dontshowimageproperty(para){
    document.getElementById("description").innerHTML="School Background";} 

const myform=document.querySelector("#form"); 
const nameinput=document.querySelector("#name");
const commentinput=document.querySelector("#comment");
const msg=document.querySelector("#msg");
const commentlist=document.querySelector("#commentlist");  
myform.addEventListener('submit',changesubmitted); 
function changesubmitted(e){
    e.preventdefault();
if(nameinput===''|| commentinput==='') {
    msg.classList.add('error');
    setTimeout(() => msg.remove(), 3000);
 document.getElementById("#msg").innerHTML="enteryour comment";
}
else{document.getElementById("#msg").innerHTML="submitted";
const li=document.createElement('li');
li.appendchild(document.createTextNode(`${nameinput.value}:${commentinput.value}`));
commentlist.append(li);
nameinput.value='';
commentinput.value='';}}