const PI =Math.PI;
let redius;
let circumference;

document.getElementById("mysubmit").onclick=function(){
    redius = document.getElementById("mytext").value;
    redius = Number(redius);
    circumference = 2 * PI * redius;
    document.getElementById("myh3").textContent =`C=${circumference}cm`;
}