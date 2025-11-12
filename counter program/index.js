const increase=document.getElementById("Increasebtn");
const descrease=document.getElementById("Decreasebtn");
const reset=document.getElementById("Resetbtn");
const countlable=document.getElementById("countlable");

let count=0;

increase.onclick=function(){
    count++;
    document.getElementById("countlable").textContent=count;

}

descrease.onclick=function(){
    count--;
    document.getElementById("countlable").textContent=count;

}

reset.onclick=function(){
    count=0;
    document.getElementById("countlable").textContent=count;

}