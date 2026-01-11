const prompts = require('prompts');

function centerText(text) {
    const terminalWidth = process.stdout.columns;
    const padding = Math.max(0, Math.floor((terminalWidth - text.length) / 2));
    console.log(' '.repeat(padding) + text);
}

const menuItems = [
    { title: '\x1b[96mPORTUGUÊS (BR)\x1b[96m', value: 'portugues' },
    { title: '\x1b[96mENGLISH (US)\x1b[96m', value: 'english' },
    { title: '\x1b[96mEXIT / SAIR\x1b[96m', value: 'exit' }
];

function displayAsciiArt() {
    console.log("\x1b[96m█████████████████████████████████████████████████████████████████████");
    console.log("\x1b[96m██                                                                 ██");
    console.log("\x1b[96m██                               ██████                            ██");
    console.log("\x1b[96m██                               ██████                            ██");
    console.log("\x1b[96m██                               ██████                            ██");
    console.log("\x1b[96m██                               ██████                            ██");
    console.log("\x1b[96m██                               ██████                            ██");
    console.log("\x1b[96m██                               ██████                            ██");
    console.log("\x1b[96m██                               ██████                            ██");
    console.log("\x1b[96m██                                                                 ██");
    console.log("\x1b[96m██                               ██████                            ██");
    console.log("\x1b[96m██                               ██████                            ██");
    console.log("\x1b[96m██                                                                 ██");
    console.log("\x1b[96m█████████████████████████████████████████████████████████████████████");
    console.log("");
    console.log("\x1b[96m===========================================================================");
    console.log("\x1b[96m[LANGUAGE SELECTION] / [SELEÇÃO DE IDIOMA]");
    console.log("\x1b[96m===========================================================================");
}

async function main() {
    console.clear();
    displayAsciiArt();

    const response = await prompts({
        type: 'select',
        name: 'language',
        message: '\x1b[96mSelect your language:\x1b[96m',
        choices: menuItems
    });

    console.clear();

    if (response.language === 'portugues') {
        centerText("===========================================================================");
        centerText("Idioma selecionado: Português");
        centerText("===========================================================================");
        // Requer o arquivo do menu em Português
        require('./menuBR.js'); 
    } else if (response.language === 'english') {
        centerText("===========================================================================");
        centerText("Language selected: English");
        centerText("==========================================================================="); 
        // Requer o arquivo do menu em Inglês
        require('./menuEN.js');
    } else if (response.language === 'exit') {
        centerText("===========================================================================");
        centerText("[EXITING] / [SAINDO]");
        centerText("===========================================================================");
        process.exit(0);
    }
}

main().catch(console.error);