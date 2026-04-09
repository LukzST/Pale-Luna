const prompts = require('prompts');

const menuItems = [
    { title: '\x1b[96mPORTUGUÊS (BR)', value: 'portugues' },
    { title: '\x1b[96mENGLISH (US)', value: 'english' },
    { title: '\x1b[96mEXIT / SAIR', value: 'exit' }
];

function displayAsciiArt() {
    console.log("█████████████████████████████████████████████████████████████████████");
    console.log("██                                                                 ██");
    console.log("██                               ██████                            ██");
    console.log("██                               ██████                            ██");
    console.log("██                               ██████                            ██");
    console.log("██                               ██████                            ██");
    console.log("██                               ██████                            ██");
    console.log("██                               ██████                            ██");
    console.log("██                               ██████                            ██");
    console.log("██                                                                 ██");
    console.log("██                               ██████                            ██");
    console.log("██                               ██████                            ██");
    console.log("██                                                                 ██");
    console.log("█████████████████████████████████████████████████████████████████████");
    console.log("");
    console.log("===========================================================================");
    console.log("[LANGUAGE SELECTION] / [SELEÇÃO DE IDIOMA]");
    console.log("===========================================================================");
}

async function main() {
    console.clear();
    displayAsciiArt();

    const response = await prompts({
        type: 'select',
        name: 'language',
        message: '\x1b[96mSelect your language:',
        choices: menuItems
    });

    console.clear();

    if (response.language === 'portugues') {
        console.log("===========================================================================");
        console.log("Idioma selecionado: Português");
        console.log("===========================================================================");
        // Requer o arquivo do menu em Português
        require('./menuBR.js'); 
    } else if (response.language === 'english') {
        console.log("===========================================================================");
        console.log("Language selected: English");
        console.log("==========================================================================="); 
        // Requer o arquivo do menu em Inglês
        require('./menuEN.js');
    } else if (response.language === 'exit') {
        console.log("===========================================================================");
        console.log("[EXITING] / [SAINDO]");
        console.log("===========================================================================");
        process.exit(0);
    }
}

main().catch(console.error);