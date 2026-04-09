const prompt = require('prompt-sync')();
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

let lang;
let portugues = false;
let english = false;

const mp3Path = path.join(__dirname, 'audios', 'You_Cant_Escape.mp3');

function pauseToContinue() {
    console.log("---------------------------------------------------------------");
    console.log("-> Press 1 to continue...");
    console.log("---------------------------------------------------------------");
    while (prompt("> ") !== '1') {
        // Loops until the player presses 1
    }
}

function playMinimizedMusic() {
    if (!fs.existsSync(mp3Path)) {
        console.error("ERRO: 'You_Cant_Escape.mp3' não encontrado no caminho especificado.");
        return;
    }
    const command = `start /min "" "${mp3Path}"`; 

    console.clear();
    console.log("---------------------------------------------------------------");
    console.log("Playing soundtrack (player window will open)...");
    console.log("Tocando trilha sonora (o player será aberto)...");
    console.log("---------------------------------------------------------------");
    exec(command, (error) => {
        if (error) {
            console.error(`ERRO ao tentar abrir o player de música: ${error.message}`);
            console.log("Não foi possível iniciar o player de música. Verifique se o arquivo MP3 é válido ou se há um player padrão configurado.");
        }
    });
}


function askForMusicPreference() {
    console.clear();
    console.log("---------------------------------------------------------------");
    console.log("Play with soundtrack?");
    console.log("Jogar com a trilha sonora?");
    console.log("---------------------------------------------------------------");
    console.log("[01] Yes (Sim)");
    console.log("[02] No (Não)");
    console.log("---------------------------------------------------------------");

    const musicChoice = Number(prompt("> "));
    if (musicChoice === 1) {
        playMinimizedMusic();
    }

}


function Idioma() {
    console.clear();
    console.log("---------------------------------------------------------------");
    console.log("Language Selection!!");
    console.log("Seleção de Idioma!!");
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
        console.log("[ERRO 444] INVALID LANGUAGE");
        console.log("Closing program...");
        process.exit();
    }
}

// --- Fluxo Principal do Jogo ---

askForMusicPreference(); // Pergunta sobre a música ANTES do idioma
pauseToContinue()
Idioma(); // Pergunta sobre o idioma

console.clear(); // Limpa o console antes de carregar o módulo do jogo

if (portugues === true && english === false) {
    require('./mainBR.js');
} else if (portugues === false && english === true) {
    require('./mainEN.js');
}