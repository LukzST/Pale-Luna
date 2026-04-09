const prompt = require('prompt-sync')();
const { exec } = require('child_process');
const fs = require('fs');
let lang


let portugues = false
let english = false


function Idioma() {
    console.clear()
    console.log("---------------------------------------------------------------")
    console.log("Language Selection!!")
    console.log("Seleção de Idioma!!")
    console.log("---------------------------------------------------------------")
    console.log("[01] Portugues")
    console.log("[02] English")
    console.log("---------------------------------------------------------------")

    lang = Number(prompt("> "))
    if (lang == 1) {
        portugues = true
        english = false
    } else if (lang == 2){
        portugues = false
        english = true
    } else {
        console.clear()
        console.log ("[ERRO 444] INVALID LANGUAGE")
        console.log("Closing program...")
        process.exit();
    }
}


Idioma()

if (portugues == true && english == false) {
    console.clear()
    require('./mainBR.js');
} else if (portugues == false && english == true) {
    console.clear()
    require('./mainEN.js');
}
