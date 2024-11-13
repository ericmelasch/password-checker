const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let button1 = document.getElementById("btn-1")
let button2 = document.getElementById("btn-2")
let generateButton = document.getElementById("generate-btn")


generateButton.addEventListener("click", textContent)

function textContent() {
    button1.textContent = passwordGenerator()
    button2.textContent = passwordGenerator()
}


function passwordGenerator() {
    let randomPassword = "";
    for (let i = 0; i < 15; i++) {
       randomPassword += characters.at(Math.floor(Math.random() * characters.length));
    } 
    return randomPassword
}

