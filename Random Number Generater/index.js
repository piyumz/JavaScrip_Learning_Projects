
const maybtn=document.getElementById("mybtn");
let randomno;
const labale1=document.getElementById("mylable1");


maybtn.onclick =function(){
const min=Number(document.getElementById("myinmin").value);
const max=Number(document.getElementById("myinmax").value);
      randomno=Math.floor(Math.random()*(max-min +1)+min);
      document.getElementById("mylable1").textContent=randomno;
     

}
