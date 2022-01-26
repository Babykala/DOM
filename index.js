var output=document.querySelector("#out");
var errorMsg1=document.querySelectorAll("#error")[0];
var errorMsg2=document.querySelectorAll("#error")[1];

document.querySelectorAll("button")[0].setAttribute("id","add");
document.querySelectorAll("button")[1].setAttribute("id","sub");
document.querySelectorAll("button")[2].setAttribute("id","mul");
document.querySelectorAll("button")[3].setAttribute("id","div");
document.querySelectorAll("button")[4].setAttribute("id","mod");

var selectButton1=document.querySelector("#add");
var selectButton2=document.querySelector("#sub");
var selectButton3=document.querySelector("#mul");
var selectButton4=document.querySelector("#div");
var selectButton5=document.querySelector("#mod");

var num1=document.querySelector("#first");
var num2=document.querySelector("#second");

num1.addEventListener("keyup",function(e){
    
    if(!((e.keyCode >= 48 && e.keyCode <=57) || (e.keyCode==8)))
    errorMsg1.innerText="Warning:Only numbers are allowed";
    else
    errorMsg1.innerText="";
})
num2.addEventListener("keypress",function(e){
    
    if(!((e.keyCode >= 48 && e.keyCode <=57) || (e.keyCode==8)))
    errorMsg2.innerText="Warning:Only numbers are allowed";   
    else
    errorMsg2.innerText="";
})


selectButton1.addEventListener("click",function(){
  
    output.value=Number(num1.value)+Number(num2.value);
    document.querySelector("#first")="";
    document.querySelector("#second")="";
})


selectButton2.addEventListener("click",function(){

    output.value=Number(num1.value)-Number(num2.value);
    document.querySelector("#first")="";
    document.querySelector("#second")="";
})
selectButton3.addEventListener("click",function(){

    output.value=Number(num1.value)*Number(num2.value);
    document.querySelector("#first")="";
    document.querySelector("#second")="";
})

selectButton4.addEventListener("click",function(){

    output.value=Number(num1.value)/Number(num2.value);
    document.querySelector("#first")="";
    document.querySelector("#second")="";
})

selectButton5.addEventListener("click",function(){

    output.value=Number(num1.value)%Number(num2.value);
    document.querySelector("#first")="";
    document.querySelector("#second")="";
})



