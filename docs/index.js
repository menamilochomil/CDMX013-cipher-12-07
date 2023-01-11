import cipher from './cipher.js';
import { pressButton, displayView } from './newView.js';

//Display second view
pressButton.addEventListener("click", displayView);

//DOM Elements
const inputButton = document.getElementById("cipherButton");
const outputButton = document.getElementById("decipherButton");


//Bringing info to the interface
function encode() {
    let offset = document.getElementById("numberSelect").value;
    let textEncode = document.getElementById("cipherBox").value;
    let printAnswer = document.getElementById("decipherBox");
    printAnswer.value = cipher.encode(offset, textEncode);
}

function decode() {
    let offset = document.getElementById("numberSelect").value;
    let textDecode = document.getElementById("decipherBox").value;
    let printAnswer = document.getElementById("cipherBox");
    printAnswer.value = cipher.decode(offset, textDecode);
}

//Calling main fuctions
inputButton.addEventListener("click", encode);
outputButton.addEventListener("click", decode);
