const slider = document.getElementById("slider");
const uppercase = document.getElementById("uppercase");
const lowercase = document.getElementById("lowercase");
const numbersInclude = document.getElementById("numbers-include");
const symbols = document.getElementById("symbols");
const generateButton =document.getElementsByClassName(".generate-button");
const password = document.getElementById("password");


function passwordGenerator(){
    let characterSet = "";
    let counter =0;
    if(uppercase.checked){
        characterSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
        counter++;

    }
     if(lowercase.checked){
        characterSet += "abcdefghijklmnopqrstuvwxyz"
        counter++;
     }

     if(numbersInclude.checked){
        characterSet += "0123456789"
        counter++;
     }
    if(symbols.checked){
        characterSet += "!@#$%^&*()_-+={[}]|\\;:\"'<,>.?/"
        counter++;
    }
        document.getElementById('box1').style.backgroundColor ="";
        document.getElementById('box2').style.backgroundColor ="";
        document.getElementById('box3').style.backgroundColor ="";
        document.getElementById('box4').style.backgroundColor ="";
    if (counter === 1) {
        document.getElementById('password-strength-text').textContent = 'Too Weak';
        document.getElementById('box1').style.backgroundColor ="#F64A4A";
        
      } else if (counter === 2) {
        document.getElementById('password-strength-text').textContent  = 'Weak';
        document.getElementById('box1').style.backgroundColor =" #FB7C58";
        document.getElementById('box2').style.backgroundColor =" #FB7C58";
        

      } else if (counter=== 3) {
        document.getElementById('password-strength-text').textContent  = 'Medium';
        document.getElementById('box2').style.backgroundColor ="#A4FFAF";
        document.getElementById('box1').style.backgroundColor ="#A4FFAF";
        document.getElementById('box3').style.backgroundColor =" #A4FFAF";
        
        
      }
       else if(counter ==4){
        document.getElementById('password-strength-text').textContent  = 'Strong';
        document.getElementById('box1').style.backgroundColor ="#F8CD65";
        document.getElementById('box2').style.backgroundColor =" #F8CD65";
        document.getElementById('box3').style.backgroundColor =" #F8CD65";
        document.getElementById('box4').style.backgroundColor =" #F8CD65";
      }
    



    let randomPassword = "";
    
    for(let i =0; i < slider.value; i ++){
        const randomIndex = Math.floor(Math.random()* characterSet.length);
        randomPassword += characterSet[randomIndex];
    }
   if(counter == 0)randomPassword=""
    password.innerText =randomPassword;
}




function copyPassword(){
    var textToCopy = document.getElementById('password').innerText;

    // Use the Clipboard API for modern browsers
    navigator.clipboard.writeText(textToCopy)
      .then(function() {
        // Successfully copied
        alert('Text copied to clipboard: ' + textToCopy);
      })
      .catch(function(err) {
        // Unable to copy
        console.error('Error copying text: ', err);
      });
}

function updateNumber(){
    const sliderValue = document.getElementById('slider').value;
    document.getElementById('number').innerText = sliderValue;
}




  




