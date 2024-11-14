const charactersNoSigns = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const charactersNoNumbers = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
// Dieser Abschnitt erzeugt 2x 15 Zeichen Passwörter auf Knopfdruck, randomisiert aus vorgegebenen Array

let button1 = document.getElementById("btn-1")
let button2 = document.getElementById("btn-2")
let generateButton = document.getElementById("generate-btn")

generateButton.addEventListener("click", passwordOutput)

function passwordOutput() {
    button1.textContent = passwordGenerator()
    button2.textContent = passwordGenerator()
}


function passwordGenerator() {
    let randomPassword = "";
    for (let i = 0; i < passwordLength; i++) {
       randomPassword += arraySelect.at(Math.floor(Math.random() * arraySelect.length));
    } 
    return randomPassword
}

//
// Dieser Abschnitt sorgt dafür, dass aktuelle Slide-Value neben Range Input erscheint

let passwordLength = document.getElementById("password-length")
let passwordLengthOutput = document.getElementById("password-length-output")

passwordLengthOutput.textContent = passwordLength.value
passwordLength.oninput = function() {
    passwordLength = this.value;
    passwordLengthOutput.textContent = this.value;

}

//
// Dieser Abschnitt sorgt dafür das Passwort länge per Slider angepasst werden kann
// Vorher : for (let i = 0; i < 15; i++) { ... }
// gelöst durch -> passwordLength = this.value;
// eingesetzt in for loop -> for (let i = 0; i < passwordLenght; i++) { ... }
//

// Dieser Abschnitt sorgt dafür das durch radio Button entschieden wird welcher Teil des Arrays zur Password generierung genutzt wird

let radio1 = document.getElementById("radio-1").value
let radio2 = document.getElementById("radio-2").value
let radio3 = document.getElementById("radio-3").value



let radioSelect = document.getElementsByClassName("radio")
radioSelect.oninput = function() {
    radioSelect = this.value;
}

let arraySelect = []
function changeSigns() {
    if ( radioSelect === radio2) {
        arraySelect = charactersNoSigns
    } else if (radioSelect === radio3) {
        arraySelect = charactersNoNumbers
    } else {
        arraySelect = characters
    }
}