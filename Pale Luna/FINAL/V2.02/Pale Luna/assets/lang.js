const prompts = require('prompts');

const menuItems = [
    { title: 'PORTUGUÊS (BR)', value: 'portugues' },
    { title: 'ENGLISH (US)', value: 'english' },
    { title: 'EXIT / SAIR', value: 'exit' }
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
        message: 'Select your language / Selecione seu idioma:',
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