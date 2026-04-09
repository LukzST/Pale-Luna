const prompt = require('prompt-sync')();
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');
let musicChoice
let portugues = false;
let english = false;
let lang


function Text(){
    console.log("===============================================================")
    console.log("      --- PRE-GAME SETTINGS  |  CONFIGURAÇÕES PRÉ-JOGO ---     ");
    console.log("===============================================================")
}

function printDivider() {
    console.log("---------------------------------------------------------------");
}

function InvalidOption() {
    console.clear()
    Text()
    console.log("")
    console.log("---------------------------------------------------------------");
    console.log("-> Opcão Invalida!")
    console.log ("-> Invalid option!")
    printDivider();
    console.log ("-> Pressione 1 para fechar")
    console.log("-> Press 1 to close...");
    printDivider();
    while (prompt("> ") !== '1') {
        // Loops ate player aperta 1
    }
    process.exit(90)
}

function pauseToContinue() {
    console.log("---------------------------------------------------------------");
    console.log("-> Press 1 to continue...");
    console.log("---------------------------------------------------------------");
    while (prompt("> ") !== '1') {
        // Loops ate player aperta 1
    }
}

function tocamusic() {
    const command = `start /min "" "./audios/VLC/vlc.exe" --play-and-exit --qt-start-minimized "./audios/You_Cant_Escape.mp3"`;
//lembrar q o ¨¨  é o titulo do cmd
    exec(`cmd.exe /c "${command}"`, (error, stdout, stderr) => {
        // azio para suumir quaisquer mensagens no console.
    });
}


function askForMusicPreference() {
    if (lang == 1){
        console.clear();
        Text()
        console.log("")
    console.log("---------------------------------------------------------------");
        console.log("-> Jogar com a trilha sonora?");
        console.log("---------------------------------------------------------------");
        console.log("[01] Sim");
        console.log("[02] Não");
        console.log("---------------------------------------------------------------");
    
        let musicChoice = Number(prompt("> "));
        if (musicChoice === 1) {
            console.log("---------------------------------------------------------------");
            console.log ("-> O VLC está iniciando... (Isso pode demorar)")
            tocamusic()
            pauseToContinue()
        } else if (musicChoice != 1 && musicChoice != 2){
            InvalidOption()
        }
    } else if (lang == 2){
        console.clear();
        Text()
        console.log("")
    console.log("---------------------------------------------------------------");
        console.log("-> Play with soundtrack?");
        console.log("---------------------------------------------------------------");
        console.log("[01] Yes");
        console.log("[02] No");
        console.log("---------------------------------------------------------------");
    
        let musicChoice = Number(prompt("> "));
        if (musicChoice === 1) {
            console.log("---------------------------------------------------------------");
            console.log ("-> The VLC is starting... (May take a while)")
            tocamusic()
            pauseToContinue()
        }  else if (musicChoice != 1 && musicChoice != 2){
            InvalidOption()
        }
    } else {
        InvalidOption()
    }

}


function Idioma() {
    console.clear();
    Text()
    console.log("")
    console.log("---------------------------------------------------------------");
    console.log("-> Seleção de Idioma!!");
    console.log("-> Language Selection!!");
    console.log("---------------------------------------------------------------");
    console.log("[01] Portugues");
    console.log("[02] English");
    console.log("---------------------------------------------------------------");

    lang = Number(prompt("> "));
    if (lang == 1) {
        portugues = true;
        english = false;
    } else if (lang == 2) {
        portugues = false;
        english = true;
    } else {
        console.clear();
        Text()
        console.log("[ERROR 444] INVALID LANGUAGE");
        console.log("Closing program...");
        printDivider()
        process.exit();
    }
}

// --- Fluxo Principal do Jogo ---
Idioma(); // Pergunta sobre o idioma
askForMusicPreference(); // Pergunta sobre a música ANTES do idioma

console.clear(); // Limpa o console antes de carregar o módulo do jogo

if (portugues === true && english === false) {
    require('./mainBR.js');//versao brazuca
} else if (portugues === false && english === true) {
    require('./mainEN.js'); //versao gringa
}