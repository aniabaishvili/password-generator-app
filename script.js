const slider = document.getElementById("slider");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbersInclude = document.getElementById("numbers-include");
const symbols = document.getElementById("symbols");
const generateButton =document.getElementsByClassName(".generate-button");
const password = document.getElementById("password");

function passwordGenerator(){
    let characterSet = "";
    if(uppercase.checked){
        characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
     if(lowercase.checked){
        characterSet += "abcdefghijklmnopqrstuvwxyz"
     }

     if(numbersInclude.checked){
        characterSet += "0123456789"
     }
    if(symbols.checked){
        characterSet += "!@#$%^&*()_-+={[}]|\\;:\"'<,>.?/"
    }
    
    for(let i =0; i < slider.value; i ++){
        const randomIndex = Math.floor(Math.random()* characterSet.length);
    }
}