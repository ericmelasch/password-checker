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
    for (let i = 0; i < passwordLengthValue; i++) {
       randomPassword += arraySelect.at(Math.floor(Math.random() * arraySelect.length));
    } 
    return randomPassword
}

//
// Dieser Abschnitt sorgt dafür, dass aktuelle Slide-Value neben Range Input erscheint

let passwordLength = document.getElementById("password-length")
let passwordLengthOutput = document.getElementById("password-length-output")

// passwordLength muss ersetzt werden durch eigene variable z.B. passwordLengthValue sonst funktioniert slider bzw. berechnung erst nach erstem slide
let passwordLengthValue = passwordLength.value

//oninput wird direkt ausgeführt, alternative onchange nicht
passwordLengthOutput.textContent = passwordLength.value
passwordLength.oninput = function() {
    passwordLengthValue = this.value;
    passwordLengthOutput.textContent = this.value;

}

// ALT ->
// Dieser Abschnitt sorgt dafür das Passwort länge per Slider angepasst werden kann
// Vorher : for (let i = 0; i < 15; i++) { ... }
// gelöst durch -> passwordLength = this.value;
// eingesetzt in for loop -> for (let i = 0; i < passwordLenght; i++) { ... }
//

// Dieser Abschnitt sorgt dafür das durch radio Button entschieden wird welcher Teil des Arrays zur Password generierung genutzt wird

// ALT / Eigenes ->
//let radio1 = document.getElementById("radio-1").value
//let radio2 = document.getElementById("radio-2").value
//let radio3 = document.getElementById("radio-3").value



//let radioSelect = document.getElementById("radio")
//radioSelect.oninput = function() {
    //radioSelect = this.value;
//} <- ALT

// NEU ->
// querySelectorAll wählt alle inputs mit name = length, perfekt für radio
let radioButtons = document.querySelectorAll('input[name="length"]');

let radioSelect = null;

// Event Listener für alle Radio-Buttons hinzufügen, radioSelect ändern + funktion ausführen bei jeder veränderung
radioButtons.forEach(radio => {
    radio.addEventListener("change", function () {
        radioSelect = this.value;
        changeArray()
    });
});
// <-

// arraySelect darf nicht [] sein, sonst erscheint bei erster Berechnung undefined
let arraySelect = characters

//.slice(anfang, ende +1) -> erschafft neues Array mit ausgewählten Elementen; 
function changeArray() {
        if ( radioSelect === "1") {
            arraySelect = characters
        } else if (radioSelect === "2") {
            arraySelect = characters.slice(0, 61)
        } else {
            arraySelect = characters.slice(0, 51)
        }
    }