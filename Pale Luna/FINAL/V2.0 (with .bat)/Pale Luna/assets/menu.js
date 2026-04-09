const readline = require('readline'); // Imports the readline module for handling command-line input.
const { exec, execSync } = require('child_process'); // Imports exec and execSync from child_process to run external commands.
const prompt = require('prompt-sync')(); // Imports prompt-sync for synchronous user input.
const folderPath = '../Achievements';
const fs = require('fs');
const path = require('path');
// Creates a readline interface for reading input and writing output to the console.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Defines the main menu items.
const menuItems = [
    'Start Game',
    'Delete progress',
    'View Achivements',
    'Exit'
];

let selectedIndex = 0; // Keeps track of the currently selected menu item (index).

// Object mapping color codes (hex and numeric) to color names and vice versa.
const cores = {
    "0": "Black", "1": "Dark Blue", "2": "Dark Green", "3": "Dark Cyan",
    "4": "Dark Red", "5": "Dark Purple", "6": "Yellow (Olive)", "7": "White (Light Gray)",
    "8": "Dark Gray", "9": "Light Blue", "A": "Light Green", "B": "Light Cyan",
    "C": "Light Red", "D": "Light Purple (Light Magenta)", "E": "Light Yellow", "F": "Bright White",
    "Black": "0", "Blue": "1", "Green": "2", "Cyan": "3", "Red": "4", "Purple": "5",
    "Yellow": "6", "White": "7", "Gray": "8", "Light Blue": "9", "Light Green": "A",
    "Light Cyan": "B", "Light Red": "C", "Light Purple": "D", "Light Yellow": "E",
    "Bright White": "F"
};

// Defines various text constants used for displaying messages and titles.
const linhaDivisoria = "---------------------------------------------------------------------------";
const tituloConfigs = "SETTINGS";
const tituloCorTerminal = "// TERMINAL COLOR \\\\";
const tituloFundo = "*Set a background color:";
const tituloTexto = "*Set a text color:";

// Lists of background and text colors with their corresponding codes.
const listaFundo = [
    "0 = Black", "1 = Blue", "2 = Green", "3 = Cyan", "4 = Red", "5 = Purple",
    "6 = Yellow", "7 = White", "8 = Gray", "9 = Light Blue"
];

const listaTexto = [
    "A = Light Green", "B = Light Cyan", "C = Light Red",
    "D = Light Purple", "E = Light Yellow", "F = Bright White"
];

// Function to normalize color input (e.g., "preto" to "Preto" or "0" to "0").
function arrumarEntradaCor(entrada) {
    if (!entrada) return '';
    entrada = entrada.trim();
    if (entrada.length === 1 && cores[entrada.toUpperCase()]) {
        return entrada.toUpperCase();
    }
    return entrada.split(' ').map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()).join(' ');
}

// Function to draw the main menu on the console.
function desenharMenu() {
    console.clear(); // Clears the console screen.
    // ASCII art logo.
    console.log ("██████╗  █████╗ ██╗     ███████╗ TM           ███████████");
    console.log ("██╔══██╗██╔══██╗██║     ██╔════╝           █████████████████ ");
    console.log ("██████╔╝███████║██║     █████╗           █████████████████████ ");
    console.log ("██╔═══╝ ██╔══██║██║     ██╔══╝          ███████████████████████ ");
    console.log ("██║     ██║  ██║███████╗███████╗      ███████████████████████████");
    console.log ("╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝      ███████████████████████████");
    console.log ("██╗     ██╗   ██╗███╗   ██╗ █████╗    ███████████████████████████");
    console.log ("██║     ██║   ██║████╗  ██║██╔══██╗   ███████████████████████████");
    console.log ("██║     ██║   ██║██╔██╗ ██║███████║     ███████████████████████");
    console.log ("██║     ██║   ██║██║╚██╗██║██╔══██║      █████████████████████ ");
    console.log ("███████╗╚██████╔╝██║ ╚████║██║  ██║        █████████████████");
    console.log ("╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝           ███████████ ");
    console.log ("---------------------------------------------------------------");
    console.log ("--- TERMINAL EDITION - MADE BY SAD BERRY GAMES ---")
    console.log ("---------------------------------------------------------------");

    // Iterates through menu items and displays the selected one with "> <".
    menuItems.forEach((item, index) => {
        if (index === selectedIndex) {
            console.log(`\x1b[91m[> ${item} <] \x1b[96m`);
        } else {
            console.log(`  ${item}`);
        }
    });
    console.log('\nUse up/down arrows to navigate, Enter to select.');
}

function pausarParaContinuar() {
    console.log("---------------------------------------------------------------");
    console.log("-> Pressione [1] para continuar...");
    console.log("---------------------------------------------------------------");
    while (prompt("> ") !== '1') {
        // Fica em loop até o jogador pressionar 1
    }
    console.clear();
}

function conquistas() {
    const count = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin')).length;
    const finais = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin'));
    console.clear()
        console.log("---------------------------------------------------------------");
            console.log("-> Checking the folder...")

    if (finais != null && finais.length > 0) {
                console.log("---------------------------------------------------------------");
            console.log("-> FILES FOUND:")
                console.log(finais)
                console.log("---------------------------------------------------------------");
                console.log("-> If you want to keep these endings, DO NOT RESTORE")
            pausarParaContinuar()
    } else {
            console.log("---------------------------------------------------------------");
                console.log("-> No endings files found!")
            pausarParaContinuar()
    }

     desenharMenu(); // Redraws the main menu after exiting color settings.
    process.stdin.setRawMode(true); // Resumes raw mode for keypress detection.
    process.stdin.resume(); // Resumes stdin.
}

// Function to handle terminal color adjustments
function ajustarCores() {
    let toNessaTelaDeCor = true; // Flag to keep looping in the color settings screen.

    while (toNessaTelaDeCor) {
        console.clear();
        console.log(linhaDivisoria);
        console.log(tituloConfigs);
        console.log(linhaDivisoria);
        console.log(tituloCorTerminal);
        console.log("");
        console.log(tituloFundo);
        listaFundo.forEach(item => console.log(item)); // Displays available background colors.
        console.log("");
        console.log(tituloTexto);
        listaTexto.forEach(item => console.log(item)); // Displays available text colors.
        console.log("");
        console.log(linhaDivisoria);
        console.log("-> To go back to the Main Menu, just press ENTER for both options.");
        console.log("-> You can change colors multiple times here!");
        console.log(linhaDivisoria);

        let inputFundo = prompt("Background color (type name, e.g.: Black): ");
        let inputTexto = prompt("Text color (type name, e.g.: Light Green): ");

        // Checks if the user wants to go back to the main menu.
        if (inputFundo.trim() === '0' || (inputFundo.trim() === '' && inputTexto.trim() === '')) {
            toNessaTelaDeCor = false;
            console.clear();
            console.log("Returning to Main Menu...");
            break;
        }

        // Gets the color codes from the user's input.
        const codigoDoFundo = cores[arrumarEntradaCor(inputFundo)];
        const codigoDoTexto = cores[arrumarEntradaCor(inputTexto)];
        
        // Input validation for colors.
        if (!codigoDoFundo || !codigoDoTexto) {
            console.clear();
            console.log(linhaDivisoria);
            console.log("-> Error: One or both colors you typed are incorrect!");
            console.log("-> Please type the names or codes (0-F) exactly as they appear in the list.");
            console.log(linhaDivisoria);
            prompt("Press ENTER to try again...");
        } else if (codigoDoFundo === codigoDoTexto) { // Checks if background and text colors are the same.
            console.clear();
            console.log(linhaDivisoria);
            console.log("-> Error: Background and text cannot be the same color! You won't be able to read anything!");
            console.log("-> Please choose different colors for the background and text.");
            console.log(linhaDivisoria);
            prompt("Press ENTER to try again...");
        } else {
            // Constructs the command to change terminal colors.
            const comandoCor = `COLOR ${codigoDoFundo}${codigoDoTexto}`;
            try {
                execSync(comandoCor, { stdio: 'inherit' }); // Executes the command synchronously.

                console.clear();
                console.log(linhaDivisoria);
                console.log("-> TERMINAL COLORS CHANGED SUCCESSFULLY!");
                console.log(linhaDivisoria);
                // Displays the chosen colors.
                console.log(`Background: ${listaFundo.find(item => item.startsWith(codigoDoFundo)) || codigoDoFundo}`);
                console.log(`Text: ${listaTexto.find(item => item.startsWith(codigoDoTexto)) || codigoDoTexto}`);
                console.log(linhaDivisoria);
                console.log("-> Your terminal colors are now different!");
                prompt("Press ENTER to set more colors or go back...");
            } catch (error) {
                // Error handling if changing colors fails (e.g., not on Windows).
                console.clear();
                console.log(linhaDivisoria);
                console.log("-> FAILED to change colors.");
                console.log("-> Make sure you are running this in a Windows terminal (CMD or PowerShell).");
                console.log(`Technical error: ${error.message}`);
                console.log(linhaDivisoria);
                prompt("Press ENTER to try again...");
            }
        }
    }
    desenharMenu(); // Redraws the main menu after exiting color settings.
    process.stdin.setRawMode(true); // Resumes raw mode for keypress detection.
    process.stdin.resume(); // Resumes stdin.
}

desenharMenu(); // Draws the initial menu.

process.stdin.setRawMode(true); // Sets stdin to raw mode to capture individual key presses.
process.stdin.resume(); // Resumes stdin, allowing it to emit 'data' events.

// Event listener for incoming data (keypresses).
process.stdin.on('data', (chunk) => {
    const key = chunk.toString('hex'); // Converts the key buffer to a hexadecimal string.

    switch (key) {
        case '1b5b41': // Up arrow key
            selectedIndex = (selectedIndex - 1 + menuItems.length) % menuItems.length; // Moves selection up, wraps around.
            desenharMenu();
            break;
        case '1b5b42': // Down arrow key
            selectedIndex = (selectedIndex + 1) % menuItems.length; // Moves selection down, wraps around.
            desenharMenu();
            break;
        case '0d': // Enter key
            console.clear();
            
            if (selectedIndex === 0) { // "Start Game" option
                rl.close(); // Closes the readline interface.
                process.stdin.pause(); // Pauses stdin.
                console.log('Starting the game...');
                require('./lang.js'); // Requires an external script to start the game.
            } else if (selectedIndex === 3) { // "Exit" option
                console.log('Exiting menu...');
                rl.close();
                process.exit(); // Exits the Node.js process.
            } else if (selectedIndex === 1) { // "Delete progress" option
                process.stdin.setRawMode(false); // Disables raw mode before running external command.
                process.stdin.pause(); // Pauses stdin.
                exec('start cmd.exe /c Erase_Data.bat', (error) => { // Executes the batch file in a new window.
                    if (error) {
                        console.error(`Error running file: ${error.message}`);
                    } else {
                        console.log('Erase_Data.bat command ran successfully.');
                    }
                    console.log('\nPress ENTER to return to the menu...');
                    prompt(''); // Waits for user to press Enter.
                    desenharMenu(); // Redraws the menu.
                    process.stdin.setRawMode(true); // Re-enables raw mode.
                    process.stdin.resume(); // Resumes stdin.
                });
            } else if (selectedIndex === 2) { // "Settings" option
                process.stdin.setRawMode(false);
                process.stdin.pause();
                
                //ajustarCores(); // Calls the function to adjust terminal colors.
                conquistas()
            }
            break;
        case '03': // Ctrl+C (SIGINT)
            console.log('\nExiting menu...');
            rl.close();
            process.exit();
            break;
        default: // Handles any other keypresses (does nothing).
            break;
    }
});

// Event listener for when the readline interface is closed.
rl.on('close', () => {
    console.log('\nMenu terminated.');
});