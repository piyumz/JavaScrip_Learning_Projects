const min=1;
const max=20;
let attempt=1;
const random = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(random);
let guess;
let t=false;

// Define mybtn and mytext by selecting the elements from the DOM
const mybtn = document.getElementById("mybtn");
const mytext = document.getElementById("mytext");

mybtn.onclick=function(){
const number=Number(document.getElementById("myinput").value);

    if (isNaN(number)) {
        mytext.textContent = "Enter Only Numbers";
    }
    else if (number < 1 || number > 20) {
        mytext.textContent = "Enter number between 1-20";
    }
    else if (number === random) {
        mytext.textContent = `Your number is correct! and your attempts are ` + attempt;
        attempt=1;
        t=true;
    }
    else if (number < random) {
        mytext.textContent = `Too low`;
        attempt++;
    }
    else {
        mytext.textContent = `Too high`;
        attempt++;
    }





}