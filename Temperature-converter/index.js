const input=document.getElementById("input");
const celsius=document.getElementById("celsius");
const fahrenheit=document.getElementById("fahrenheit");
const submit=document.getElementById("submit");
const text=document.getElementById("text");




    submit.onclick = function(e) {
    e.preventDefault(); //  This line stops the form from refreshing

    const inputValue = Number(input.value);
    let answer;
    if(celsius.checked){
        answer=inputValue*9/5+32;
        text.textContent = `${answer.toFixed(2)} °F`;

    }
    else if(fahrenheit.checked){
        answer=(inputValue-32)*5/9;
        text.textContent = `${answer.toFixed(2)} °C`;
    }
    else{
        text.textContent="Select unit";

    }
        
    }