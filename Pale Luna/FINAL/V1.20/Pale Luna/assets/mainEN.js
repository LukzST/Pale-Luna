
// Property of Sad Berry Games

const prompt = require('prompt-sync')();
const { exec } = require('child_process');
const fs = require('fs');


function updateAccountFileWithAchievement(achievementName) {
    let username = '';
    let password = '';
    let achievements = [];

    if (fs.existsSync(accountFilePath)) {
        try {
            const content = fs.readFileSync(accountFilePath, 'utf8');
            const usernameMatch = content.match(/Username: (.+)/);
            const passwordMatch = content.match(/Password: (.+)/);
            const achievementsMatch = content.match(/Achievements: \[([^\]]*)\]/);

            if (usernameMatch) username = usernameMatch[1].trim();
            if (passwordMatch) password = passwordMatch[1].trim();
            if (achievementsMatch && achievementsMatch[1]) {
                achievements = achievementsMatch[1].split(', ').map(s => s.trim()).filter(Boolean);
            }
        } catch (error) {
            console.error(`ERROR reading account file: ${error.message}`);
        }
    }

    if (!achievements.includes(achievementName)) {
        achievements.push(achievementName);
        console.log(`Achievement "${achievementName}" added to the list.`);
    } else {
        console.log(`Achievement "${achievementName}" already exists in the account.`);
    }

    let newContent = `Username: ${username}\r\nPassword: ${password}\r\n`;
    if (achievements.length > 0) {
        newContent += `Achievements: [${achievements.join(', ')}]\r\n`;
    }

    try {
        fs.writeFileSync(accountFilePath, newContent.trim(), 'utf8');
        console.log(`-> Account file updated with achievement: ${achievementName}`);
    } catch (writeError) {
        console.error(`ERROR rewriting account file: ${writeError.message}`);
    }
}



// Nova função para imprimir a linha divisória padrão
function printDivider() {
    console.log("---------------------------------------------------------------");
}

function InvalidOption() {
    console.clear()
    printDivider();
    console.log ("-> Invalid option!")
    printDivider();
    console.log("-> Press 1 to close...");
    printDivider();
    while (prompt("> ") !== '1') {
        // Loops until the player presses 1
    }
    process.exit(90)
}

function pauseToClose() {
    console.clear()
    printDivider();
    console.log("-> Press 1 to close...");
    printDivider();
    while (prompt("> ") !== '1') {
        // Loops until the player presses 1
    }
    process.exit(90)
}

function pauseToContinue() {
    printDivider();
    console.log("-> Press 1 to continue...");
    printDivider();
    while (prompt("> ") !== '1') {
        // Loops until the player presses 1
    }
    console.clear();
}

function inventory() {
    // We use an infinite loop that will only be broken when the player chooses to exit.
    while (true) {
        console.clear();
        printDivider();
        console.log("-> You have the following items in your inventory:");
        printDivider();

        // We create a counter to know if any item has been displayed.
        let itemsInInventory = 0;

        // Now, we check each item separately.
        if (papega) {
            console.log("-> Shovel");
            itemsInInventory++; // Increases the counter if the item exists.
        }
        if (temChave) {
            console.log("-> Keys");
            itemsInInventory++;
        }
        if (chavedois) {
            console.log("-> Key (Gravestone)");
            itemsInInventory++;
        }
        // If you want to add a new item, just add a new `if` here!

        // If the counter is 0, it means the inventory is empty.
        if (itemsInInventory === 0) {
            console.log("-> You haven't picked up any items yet!");
        }

        printDivider();
        console.log("-> Do you want to go back?");
        console.log("1. YES");
        console.log("2. NO");
        printDivider();

        // Renamed the variable to avoid having the same name as the function.
        let choice = Number(prompt("> "));

        if (choice === 1) {
            console.clear();
            break; // Breaks the loop and exits the inventory function.
        }
        // If the choice is 2 (or anything else), the loop continues and the inventory is shown again.
    }
}
function decreaseSanity() {
    if (valorsanidade <= 10) {
        console.clear()
        printDivider();
        console.log ("-> Your sanity level has become very low during the game!")
        console.log ("-> You went crazy and got lost in the forest forever!")
        printDivider();
        console.log ("-> Game Over")
        printDivider();
        process.exit(1)
    } else {
        valorsanidade-=10
    while (s2 != 1) {
        console.clear()
    printDivider();
    console.log ("-> WARNING: YOUR SANITY DROPPED!")
    console.log ("-> You now have " ,valorsanidade, "% sanity")
    printDivider();
    console.log ("-> Do you want to continue?")
            console.log ("1. YES")
            console.log ("2. NO")
            printDivider();
            let s2 = Number(prompt("> "))

            if (s2 == 1) {
                console.log ("")
                console.clear()
                break;
            }
            if (s2 == 2) {
            }
}
}
}

function increaseSanity() {

    valorsanidade+=10
    while (s3 != 1) {
        console.clear()
        printDivider();
        console.log ("-> WARNING: YOUR SANITY INCREASED!")
        console.log ("-> You now have " ,valorsanidade, "% sanity")
        printDivider();
        console.log ("-> Do you want to continue?")
                console.log ("1. YES")
                console.log ("2. NO")
                printDivider();
                let s3 = Number(prompt("> "))

                if (s3 == 1) {
                    console.log ("")
                    console.clear()
                    break;
                }
                if (s3 == 2) {
                }

    }
}


function sanity() {
while (s1 != 1) {
    console.clear()
    contagemS++
printDivider();
console.log ("-> Your sanity is at ",valorsanidade, "%")
printDivider();
        console.log ("-> Do you want to go back to the previous options?")
        console.log ("1. YES")
        console.log ("2. NO")
        printDivider();
        let s1 = Number(prompt("> "))

        if (s1 == 1) {
            console.log ("")
            console.clear()
            break;
        }
        if (s1 == 2) {
        }
}
}

function decreaseLifeLarge() {

if(Vida <20){
    console.clear();
    printDivider();
    console.log ("-> You lost a lot of life!")
    printDivider();
    console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
    console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
    console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
    console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
    console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
    printDivider();
    process.exit(1);
}
Vida-= 50
while (v1 != 1) {
console.clear();
printDivider();
console.log ("-> WARNING: YOUR LIFE DROPPED SEVERELY!")
console.log ("-> You now have " ,Vida, "% life")
printDivider();
console.log ("-> Do you want to continue?")
        console.log ("1. YES")
        console.log ("2. NO")
        printDivider();
        let v1 = Number(prompt("> "))

        if (v1 == 1) {
            console.log ("")
            console.clear();
            break;
        }
        if (v1 == 2) {
        }
}
if(Vida <20){
console.clear();
printDivider();
console.log ("-> You lost a lot of life!")
printDivider();
console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
printDivider();
process.exit(1);
}
}

function decreaseLifeMedium() {
    if(Vida <20){
        console.clear();
        printDivider();
        console.log ("-> You lost a lot of life!")
        printDivider();
        console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
        console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
        console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
        console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
        console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
        printDivider();
        process.exit(1);
    }
    Vida-= 20
    while (v2 != 1) {
        console.clear();
        printDivider();
        console.log ("-> WARNING: YOUR LIFE DROPPED TO A MEDIUM LEVEL!")
        console.log ("-> You now have " ,Vida, "% life")
        printDivider();
        console.log ("-> Do you want to continue?")
                console.log ("1. YES")
                console.log ("2. NO")
                printDivider();
                let v2 = Number(prompt("> "))

                if (v2 == 1) {
                    console.log ("")
                    console.clear();
                    break;
                }
                if (v2 == 2) {
                }
    }
    if(Vida <20){
        console.clear();
        printDivider();
        console.log ("-> You lost a lot of life!")
        printDivider();
        console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
        console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
        console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
        console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
        console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
        printDivider();
        process.exit(1);
    }
    }

    function decreaseLifeSmall() {
        if(Vida <20){
            console.clear();
            printDivider();
            console.log ("-> You lost a lot of life!")
            printDivider();
            console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
            console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
            console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
            printDivider();
            process.exit(1);
        }
        Vida-= 10
        while (v3 != 1) {
            console.clear();
            printDivider();
            console.log ("-> WARNING: YOUR LIFE DROPPED!")
            console.log ("-> You now have " ,Vida, "% life")
            printDivider();
            console.log ("-> Do you want to continue?")
                    console.log ("1. YES")
                    console.log ("2. NO")
                    printDivider();
                    let v3 = Number(prompt("> "))

                    if (v3 == 1) {
                        console.log ("")
                        console.clear();
                        break;
                    }
                    if (v3 == 2) {
                    }
        }
        if(Vida <20){
            console.clear();
            printDivider();
            console.log ("-> You lost a lot of life!")
            printDivider();
            console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
            console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
            console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
            printDivider();
            process.exit(1);
        }
        }

        function showLife() {
            while (v4 != 1) {
                console.clear();
                printDivider();
                console.log ("-> You now have " ,Vida, "% life")
                printDivider();
                console.log ("-> Do you want to continue?")
                        console.log ("1. YES")
                        console.log ("2. NO")
                        printDivider();
                        let v4 = Number(prompt("> "))

                        if (v4 == 1) {
                            console.log ("")
                            console.clear();
                            break;
                        }
                        if (v4 == 2) {
                        }
            }
        }

        function decreaseLifeVeryLarge() {
            if(Vida <20){
                console.clear();
                printDivider();
                console.log ("-> You lost a lot of life!")
                printDivider();
                console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
                console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
                console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
                printDivider();
                process.exit(1);
            }
            Vida-= 70
            while (v5 != 1) {
                console.clear();
                printDivider();
                console.log ("-> WARNING: YOUR LIFE DROPPED EXTREMELY!")
                console.log ("-> You now have " ,Vida, "% life")
                printDivider();
                console.log ("-> Do you want to continue?")
                        console.log ("1. YES")
                        console.log ("2. NO")
                        printDivider();
                        let v5 = Number(prompt("> "))

                        if (v5 == 1) {
                            console.log ("")
                            console.clear();
                            break;
                        }
                        if (v5 == 2) {
                        }
            }
        }

let papega = false; // Control of shovel possession
let temChave = false; // Control of key possession
let jogoAtivo = true; // Flag to continue the game
let jogoAtivo1 = true;
let iniciofalha = false;
let tentanovamente = true;
let floresta1 = ("");
let atalho = false;
let gameover = false;
let saiudafloresta = false;
let floresta2 = ("");
let jogoAtivo2 = true
let cabana = ("");
let mapaachado = false;
let tentanovamente1 = true;
let cabana1 = ("");
let kitm = false
let cabana2 = ("");
let saiudacasa = false;
let saiudafloresta1 = false;
let floresta3 = ("");
let jogoAtivo3 = true
let mapa = ("");
let objeto = ("");
let foto = ("");
let decisão1 = ("");
let decisão2 = ("");
let barco = ("");
let ponte = ("");
let tentanovamente2 = true;
let jogoAtivo4 = true;
let floresta4 = ("");
let BAD_ENDING = false;
let BAD_ENDING_2 = false;
let BAD_ENDING_3 = false;
let GOOD_ENDING = false;
let REAL_ENDING = false;
let fotopega = false
let leufoto = false
let casafora =false
let N = false
let L = false
let O = false
let S = false
let back = true
let conquistas
let s1
let s2
let s3
let contagemS
let Vida = 100;
let v1
let v2
let v3
let v4
let v5
let v6
let chavedois
let teste
let teste2
let valorsanidade = 100
let destruir = false

// Answers for the TRUE ENDING:;
// 1 (YES);
// 1 (SHOVEL);
// 2 (GOLD POT);
// 3 (DOOR);
// 3 (EAST);
// 1 (NORTH);
// 1 (Enter the cabin);
// 1 (Pick up the map);
// 1 (Return to the fork);
// 3 (East);
// 1 (Use map);
// 1 (North);
// 1 (Dig the ground);
// 1 (Read what is written);
// 2 (SOUTH)
// 1 (ENTER THE HOUSE)
// 1 (FOLLOW MAP)
// 1 (DIG)
// END

// Answers for the GOOD ENDING:;
// 1 (YES);
// 1 (SHOVEL);
// 2 (GOLD POT);
// 3 (DOOR);
// 3 (EAST);
// 1 (NORTH);
// 1 (Enter the cabin);
// 1 (Pick up the map);
// 1 (Return to the fork);
// 3 (East);
// 1 (Use map);
// 1 (North);
// 1 (Dig the ground);
// 1 (Read what is written);
// 1 (NORTH)
// 1 (START CAR)
// 1 (LEAVE)
// END

// Answers for the BAD ENDING:;
// 1 (YES);
// 1 (SHOVEL);
// 2 (GOLD POT);
// 3 (DOOR);
// 1 (NORTH) %50 CHANCE OF SUCCESS
// 1 (Shortcut)

// Answers for the BAD ENDING 2:;
// 1 (YES);
// 1 (SHOVEL);
// 2 (GOLD POT);
// 3 (DOOR);
// 3 (EAST);
// 1 (NORTH);
// 1 (Enter the cabin);
// 1 (Pick up the map);
// 1 (Return to the fork);
// 3 (East);
// 1 (Use map);
// 1 (North);
// 1 (Dig the ground);
// 2 (Do not read what is written);
// 1 (NORTH)
// 1 (START CAR)
// 1 (LEAVE)
// END

// Answers for the BAD ENDING 3:
// 1 (YES);
// 1 (SHOVEL);
// 2 (GOLD POT);
// 3 (DOOR);
// 3 (EAST);
// 1 (NORTH);
// 1 (Enter the cabin);
// 1 (Pick up the map);
// 1 (Return to the fork);
// 3 (East);
// 1 (Use map);
// 1 (North);
// 2 (Ignore the object);
// 1 (NORTH)
// 1 (START CAR)
// 1 (LEAVE)
// END

const accountFilePath = '../Account/Containfo.txt';
let Login
let overwrite = "Y"

console.log (" ");
console.log (" ");
console.log (" ")
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
printDivider();
console.log ("--- TERMINAL EDITION - MADE BY SAD BERRY GAMES ---")
printDivider() // Manteve o tamanho maior conforme seu design original
console.log ("--- VERSION 2.1 ---")
printDivider() // Manteve o tamanho maior conforme seu design original
console.log ("Welcome to Pale Luna! Follow the rules to ensure the full experience.");
console.log ("Rule 1: Type only numbers (1, 2, 3, and 4).");
console.log ("Rule 2: Do not use special characters.");
console.log ("Rule 3: Have fun 😉");
printDivider() // Manteve o tamanho maior conforme seu design original
const folderPath = '../Achievements';
const count = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin')).length;
const finais = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin'));
console.log(`Endings completed: ${count}/5`);
console.log('List of endings:', finais);
printDivider() // Manteve o tamanho maior conforme seu design original
console.log ("-> Can we start?");
printDivider() // Manteve o tamanho maior conforme seu design original
console.log ("Options:");
console.log ("1: Yes");
console.log ("2: No");
printDivider() // Manteve o tamanho maior conforme seu design original
console.log ("Command?");
let começar = prompt("> ");

if (count >5 || count < 0) {
    console.clear();
    console.log ("------------------------------------------------------------------------------------------------"); // Manteve o tamanho maior conforme seu design original
    console.log ("-> ERROR: You cannot have more than 5 endings or less than 0 endings, please run the progress eraser!.");
        console.log ("------------------------------------------------------------------------------------------------"); // Manteve o tamanho maior conforme seu design original
        process.exit(1); // Exits the program with exit code 1 (failure)
}
if (começar === "2") {
    console.log (" ");
    printDivider();
    console.log("-> Too bad, see you next time!");
    printDivider();
    process.exit(0); // Exits the program with exit code 0 (success)
} else if (começar !== "1") {
    InvalidOption()
}
console.clear();
printDivider();
    console.log("-> Would you like to create an account?");
    console.log("-> (For local saving only!)");
    console.log("---------------------------------------------------------------");
    console.log ("-> Options");
    console.log("---------------------------------------------------------------");
    console.log ("(1) Create Account");
    console.log ("(2) Skip");
    console.log("---------------------------------------------------------------");
    Login = Number(prompt("> ")); // User input for login choice (1 or 2)
    
    if (Login == 1) { // If user chooses to create an account
        console.clear();
    
        if (fs.existsSync(accountFilePath)) { // Checks if an account file already exists
            console.log("---------------------------------------------------------------");
            console.log("-> An account file already exists!");
            console.log("-> Would you like to overwrite it? (Y/N)");
            console.log("---------------------------------------------------------------");
            overwrite = prompt("> ").toUpperCase(); // User input for overwrite confirmation
    
            if (overwrite !== 'Y') { // If user does not want to overwrite
                console.clear();
                console.log("---------------------------------------------------------------");
                console.log("-> Account creation canceled. Existing file was not overwritten.");
                console.log("---------------------------------------------------------------");
    
            }
        }
        if (overwrite == "Y") { // If user confirms to overwrite or no file existed
        console.log("---------------------------------------------------------------");
        Usuario = prompt("Enter username: "); // Prompt for username
        Senha = prompt("Enter your password: "); // Prompt for password
        console.log("---------------------------------------------------------------");
    
        const conteudo = // Content to be written to the file
                         "Name: " + Usuario + "\r\n" +
                         "Password: " + Senha + "\r\n";
    
        fs.writeFileSync(accountFilePath, conteudo, 'utf8'); // Writes account details to file
    
        console.log("-> Account created and saved successfully!");
    }
    } else { // If user chooses to skip account creation
        console.clear();
        console.log("---------------------------------------------------------------");
        console.log("-> Account creation skipped!");
        console.log("---------------------------------------------------------------");
    }
    
    pauseToContinue() // This function name should also be translated, e.g., pauseToContinue()

while (jogoAtivo) {

    if (!papega && !temChave){
    console.log ("----------------------------------------------------------")
    console.log (" ")
    console.log ("███████████████████████████████████████████████████████████████████")
    console.log ("██                                                               ██")
    console.log ("██    █      █                                                   ██")
    console.log ("██   ███     █                                                   ██")
    console.log ("██  (Pot)   ███                                                  ██")
    console.log ("██        (Shovel)                                               ██")
    console.log ("██                                                            █████")
    console.log ("██                               ██                           █  ██")
    console.log ("██                             ██████                         █  ██")
    console.log ("██                            █  ██  █                      ███  ██")
    console.log ("██                               ██                         █ █  ██")
    console.log ("██                             ██  ██                         █  ██")
    console.log ("██                            ██    ██                        █  ██")
    console.log ("███████████████████████████████████████████████████████████████████")
    console.log ("")
    } else if (papega && !temChave) {
        console.log ("----------------------------------------------------------")
    console.log (" ")
    console.log ("███████████████████████████████████████████████████████████████████")
    console.log ("██                                                               ██")
    console.log ("██    █                                                          ██")
    console.log ("██   ███                                                         ██")
    console.log ("██  (Pot)                                                        ██")
    console.log ("██                                                               ██")
    console.log ("██                                                            █████")
    console.log ("██                               ██                           █  ██")
    console.log ("██                             ██████                         █  ██")
    console.log ("██                            █  ██  █                      ███  ██")
    console.log ("██                               ██                         █ █  ██")
    console.log ("██                             ██  ██                         █  ██")
    console.log ("██                            ██    ██                        █  ██")
    console.log ("███████████████████████████████████████████████████████████████████")
    console.log ("")
    } else if (papega && temChave) {
        console.log ("----------------------------------------------------------")
    console.log (" ")
    console.log ("███████████████████████████████████████████████████████████████████")
    console.log ("██                                                               ██")
    console.log ("██                                                               ██")
    console.log ("██                                                               ██")
    console.log ("██                                                               ██")
    console.log ("██                                                               ██")
    console.log ("██                                                            █████")
    console.log ("██                               ██                           █  ██")
    console.log ("██                             ██████                         █  ██")
    console.log ("██                            █  ██  █                      ███  ██")
    console.log ("██                               ██                         █ █  ██")
    console.log ("██                             ██  ██                         █  ██")
    console.log ("██                            ██    ██                        █  ██")
    console.log ("███████████████████████████████████████████████████████████████████")
    console.log ("")
    } else if (!papega && temChave) {
        console.log ("----------------------------------------------------------")
    console.log (" ")
    console.log ("███████████████████████████████████████████████████████████████████")
    console.log ("██                                                               ██")
    console.log ("██           █                                                   ██")
    console.log ("██           █                                                   ██")
    console.log ("██          ███                                                  ██")
    console.log ("██        (Shovel)                                               ██")
    console.log ("██                                                            █████")
    console.log ("██                               ██                           █  ██")
    console.log ("██                             ██████                         █  ██")
    console.log ("██                            █  ██  █                      ███  ██")
    console.log ("██                               ██                         █ █  ██")
    console.log ("██                             ██  ██                         █  ██")
    console.log ("██                            ██    ██                        █  ██")
    console.log ("███████████████████████████████████████████████████████████████████")
    console.log ("")
    }
    printDivider();
console.log ("-> You are in a dark room. Moonlight streams through the window.");
console.log ("-> There is a GOLD POT in the corner of the room, along with a SHOVEL. And on the other side there is a DOOR.");
printDivider();
console.log ("Options:");
console.log ("1. SHOVEL");
console.log ("2. GOLD POT");
console.log ("3. DOOR");
printDivider();
console.log ("Actions:");
console.log ("4. INVENTORY")
console.log ("5. VIEW SANITY")
console.log ("6. LIFE");
printDivider();
    console.log ("Command?");
    let inicio = Number(prompt("> "));
    if (inicio === 1) {
        if (papega) {
            console.clear();
            printDivider();
            console.log ("-> You already picked up the shovel");
        } else if (!papega) {
        console.clear();
        printDivider();
        console.log ("-> You picked up the shovel, it might be useful in the future");
        console.log ("-> What will you do now?");
        papega = true;
        }
    } else if (inicio === 2) {
        if (temChave) {
            console.clear();
            printDivider();
            console.log ("-> You already picked up the gold pot and the key");
        } else if (!temChave) {
        console.clear();
        printDivider();
        console.log ("-> You picked up the gold pot, inside it you found a key");
        console.log ("-> What will you do now?");
        temChave = true;
        }
    } else if (inicio === 3) {
        console.clear();
        printDivider();
        console.log ("-> You tried to open the door...");
        if (temChave) {
            console.log ("-> You can open the door with the found key!");
            console.log ("-> WARNING: You used the key!");
            temChave = false
            jogoAtivo = false;
            saiudacasa = true;
        } else if (!temChave) {
            console.log ("-> You try to open the door but it is locked...");
            printDivider();
        }
    } else if (inicio == 4) {
        inventory()
    } else if (inicio == 5) {
        sanity()
    } else if (inicio == 6) {
        showLife()
    } else {
       InvalidOption()
    }
    }

    console.clear();
    while (jogoAtivo1) {
        if (!N && !L && !O){
            console.log ("----------------------------------------------------------")
            console.log (" ")
            console.log ("██████████████████████████████████████████████████████         ████")
            console.log ("                   ██                                            ")
            console.log ("                 ██                                       /\\      ")
            console.log ("               ██                                        WEST     ")
            console.log ("         ██  ██                                                    ")
            console.log ("       ██  ██                                                      ")
            console.log ("     ██                                                            ")
            console.log ("██   ██                            ██                 NORTH >      ")
            console.log ("██   ██                          ██████                            ")
            console.log ("██   ██                         █  ██  █                           ")
            console.log ("██   ██                            ██                              ")
            console.log ("██   ██                          ██  ██                 EAST         ")
            console.log ("██   ██                         ██    ██                  \\/         ")
            console.log ("██████████████████████████████████████████████████████         ████")
            console.log ("")
        } else if (!N && L && !O) {
            console.log ("----------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                       /\\      ")
        console.log ("               ██                                        WEST     ")
        console.log ("         ██  ██                                                    ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                            ")
        console.log ("██   ██                            ██                 NORTH >      ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █                           ")
        console.log ("██   ██                            ██              (Already went)           ")
        console.log ("██   ██                          ██  ██                 EAST         ")
        console.log ("██   ██                         ██    ██                  \\/         ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("")
        } else if (N && !L && !O) {
            console.log ("----------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                       /\\      ")
        console.log ("               ██                                        WEST     ")
        console.log ("         ██  ██                                                    ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                            ")
        console.log ("██   ██                            ██        (Already went) NORTH >      ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █                           ")
        console.log ("██   ██                            ██                              ")
        console.log ("██   ██                          ██  ██                 EAST         ")
        console.log ("██   ██                         ██    ██                  \\/         ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("")
        } else if (!N && !L && O) {
            console.log ("----------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                       /\\      ")
        console.log ("               ██                                        WEST     ")
        console.log ("         ██  ██                                    (Already went)           ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                            ")
        console.log ("██   ██                            ██                 NORTH >      ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █                           ")
        console.log ("██   ██                            ██                              ")
        console.log ("██   ██                          ██  ██                 EAST         ")
        console.log ("██   ██                         ██    ██                  \\/         ")
        console.log ("██████████████████████████████████████████████████████         ████")
        } else if (!N && L && O) {
            console.log ("----------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                       /\\      ")
        console.log ("               ██                                        WEST     ")
        console.log ("         ██  ██                                    (Already went)              ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                            ")
        console.log ("██   ██                            ██                 NORTH >      ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █                           ")
        console.log ("██   ██                            ██              (Already went)           ")
        console.log ("██   ██                          ██  ██                 EAST         ")
        console.log ("██   ██                         ██    ██                  \\/         ")
        console.log ("██████████████████████████████████████████████████████         ████")
        } else if (N && L && !O) {
            console.log ("----------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                       /\\      ")
        console.log ("               ██                                        WEST     ")
        console.log ("         ██  ██                                                    ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                            ")
        console.log ("██   ██                            ██        (Already went) NORTH >      ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █                           ")
        console.log ("██   ██                            ██              (Already went)           ")
        console.log ("██   ██                          ██  ██                 EAST         ")
        console.log ("██   ██                         ██    ██                  \\/         ")
        console.log ("██████████████████████████████████████████████████████         ████")
        } else if (N && !L && O) {
            console.log ("----------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                       /\\     ")
        console.log ("               ██                                        WEST     ")
        console.log ("         ██  ██                                    (Already went)           ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                            ")
        console.log ("██   ██                            ██        (Already went) NORTH >      ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █                           ")
        console.log ("██   ██                            ██                              ")
        console.log ("██   ██                          ██  ██                 EAST         ")
        console.log ("██   ██                         ██    ██                  \\/         ")
        console.log ("██████████████████████████████████████████████████████         ████")
        } else if (N && L && O) {
            console.log ("----------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                       /\\      ")
        console.log ("               ██                                        WEST     ")
        console.log ("         ██  ██                                    (Already went)              ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                            ")
        console.log ("██   ██                            ██        (Already went) NORTH >      ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █                           ")
        console.log ("██   ██                            ██              (Already went)           ")
        console.log ("██   ██                          ██  ██                 EAST         ")
        console.log ("██   ██                         ██    ██                  \\/         ")
        console.log ("██████████████████████████████████████████████████████         ████")
        }
            printDivider();
            console.log ("-> Claim your reward. The pale moon smiles at you.");
            console.log ("-> You are in a forest. There are paths to the NORTH, WEST, and EAST:");
            printDivider();
            console.log ("Options:");
            console.log ("1. NORTH.");
            console.log ("2. WEST.");
            console.log ("3. EAST.");
            printDivider();
            console.log ("Actions:");
            console.log ("4. INVENTORY");
            console.log ("5. SANITY");
            console.log ("6. LIFE");
            printDivider();


        console.log ("Command?");
        floresta1 = Number(prompt("> "));
        if (floresta1 === 1) {
            console.clear();
            printDivider();
            console.log ("-> You feel more confident going North...");
            N = true
             // Randomization of 50% chance of success or failure

        if (Math.random() < 0.5) {
            printDivider();
            console.log ("-> You trip on a root and fall!");
            console.log ("-> You lost time and need to go back.");
            console.log ("-> You walk back...");
            } else {
                printDivider();
                console.log (" ")
                console.log ("███████████████████████████████████████████████████████████████████")
                console.log ("██                                                                 ")
                console.log ("██                                                                 ")
                console.log ("██                                                                 ")
                console.log ("██                                                                   ")
                console.log ("██                                                                   ")
                console.log ("██                                                                 ")
                console.log ("██                                 ██                              ")
                console.log ("██                               ██████                       ███████")
                console.log ("██                              █  ██  █              ██   ████      ")
                console.log ("██                                 ██               ██  ████         ")
                console.log ("██                               ██  ██           ██                 ")
                console.log ("██                              ██    ██         ██                  ")
                console.log ("████████████████████████████████████████████████████████████████████")
                console.log ("")
            printDivider();
            console.log ("-> You find a secret shortcut!");
            printDivider();
            console.log ("Options:");
            console.log ("1. Take the shortcut");
            console.log ("2. Ignore the shortcut");
            printDivider();
            console.log ("Command?")
            atalho = prompt ("> ");
            if (atalho == 1) {
                console.clear();
                printDivider();
                console.log ("-> You quickly advance through the forest.");
                console.log ("-> You manage to leave the forest, but secrets still await discovery...");
                printDivider();
                console.log ("-> You won!!");
                console.log ("-> Congratulations? You completed the BAD ENDING, SECRETS STILL AWAIT YOU.");
                printDivider();

                jogoAtivo=false
                jogoAtivo1=false
                jogoAtivo2=false
                jogoAtivo3=false
                jogoAtivo4=false
                REAL_ENDING=false
                BAD_ENDING=true
            } else if (atalho == 2) {
                console.clear();
                printDivider();
                console.log ("-> You find it dangerous and ignore the shortcut");
                console.log ("-> You decide to go back to the path options");

            } else {
                InvalidOption()
             }
          }
        } else if (floresta1 === 2) {
            console.clear();
            printDivider();
            console.log ("-> You go by the West path...")
            console.log ("-> Suddenly from afar you see a tall man coming, with an axe and not very friendly.");
            O = true
            printDivider();
            console.log ("Options:");
            console.log ("1. Run away");
            console.log ("2. Hide");
            printDivider();
            console.log ("Command?");
            decisão1 = prompt("> ");

             if (decisão1 === "1") {
                 console.clear();
                 printDivider();
                 console.log ("-> You start running as fast as possible...");
                 console.log ("-> But unfortunately you trip on a rock, and get hit by the man's axe")
                 printDivider();
                 console.log ("-> Press 1 to continue...")
                 console.log ("-> (If you type anything other than 1 the game will close!)")
                 printDivider();

                 let machado = Number(prompt("> "))
                 if (machado == 1) {
                 decreaseSanity()
                 decreaseLifeLarge()
                 } else {
                     process.exit(56)
                 }
             } else if (decisão1 === "2") {
                 console.clear();
                 printDivider();
                 console.log ("-> You decide to hide in a bush next to you");
                 console.log ("-> However, unfortunately he manages to see you, and hits you with an axe!");
                 printDivider();
                 console.log ("-> Press 1 to continue...")
                 console.log ("-> (If you type anything other than 1 the game will close!)")
                 printDivider();

                 let machado1 = Number(prompt("> "))
                 if (machado1 == 1) {
                 decreaseSanity()
                 decreaseLifeLarge()
                 } else {
                     process.exit(56)
                 }
             } else {
                InvalidOption()
             }
        } else if (floresta1 === 3) {
            console.clear();
            printDivider();
            console.log ("-> After thinking, you decide to go East...")
            L = true
            console.log ("-> You start to enter the dense forest...");
            saiudafloresta = true;
            jogoAtivo1 = false;
            back = false
        } else if (floresta1 == 4) {
            inventory()
        } else if (floresta1 == 5) {
            sanity()
        } else if (floresta1 == 6) {
            showLife()
        } else {
            InvalidOption()
         }
    }

    console.clear();
while (jogoAtivo2) {
    if (!N && !S && !L) {
        console.log ("----------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████            █████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                     /\\         ")
        console.log ("               ██                                      NORTH          ")
        console.log ("         ██  ██                                                    ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                          ")
        console.log ("██   ██                            ██                     EAST >        ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █                           ")
        console.log ("██   ██                            ██                   SOUTH           ")
        console.log ("██   ██                          ██  ██                 \\/            ")
        console.log ("██   ██                         ██    ██                           ")
        console.log ("██████████████████████████████████████████████████            █████")
        console.log ("")
    } else if (N && S && L) {
        console.log ("----------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████            █████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                     /\\         ")
        console.log ("               ██                                      NORTH          ")
        console.log ("         ██  ██                                       (Already went)           ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                          ")
        console.log ("██   ██                            ██             (Already went) EAST >        ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █              (Already went)            ")
        console.log ("██   ██                            ██                   SOUTH           ")
        console.log ("██   ██                          ██  ██                 \\/            ")
        console.log ("██   ██                         ██    ██                           ")
        console.log ("██████████████████████████████████████████████████            █████")
        console.log ("")
    } else if (!N && !S && L) {
        console.log ("----------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████            █████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                     /\\         ")
        console.log ("               ██                                      NORTH          ")
        console.log ("         ██  ██                                                    ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                          ")
        console.log ("██   ██                            ██              (Already went) EAST >        ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █                           ")
        console.log ("██   ██                            ██                   SOUTH           ")
        console.log ("██   ██                          ██  ██                 \\/            ")
        console.log ("██   ██                         ██    ██                           ")
        console.log ("██████████████████████████████████████████████████            █████")
        console.log ("")
    } else if (!N && S && !L) {
        console.log ("----------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████            █████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                     /\\         ")
        console.log ("               ██                                      NORTH          ")
        console.log ("         ██  ██                                                    ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                          ")
        console.log ("██   ██                            ██                     EAST >        ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █              (Already went)             ")
        console.log ("██   ██                            ██                   SOUTH           ")
        console.log ("██   ██                          ██  ██                 \\/            ")
        console.log ("██   ██                         ██    ██                           ")
        console.log ("██████████████████████████████████████████████████            █████")
        console.log ("")
    } else if (N && !S && !L) {
        console.log ("----------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████            █████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                     /\\         ")
        console.log ("               ██                                      NORTH          ")
        console.log ("         ██  ██                                       (Already went)              ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                          ")
        console.log ("██   ██                            ██                     EAST >        ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █                           ")
        console.log ("██   ██                            ██                   SOUTH           ")
        console.log ("██   ██                          ██  ██                 \\/            ")
        console.log ("██   ██                         ██    ██                           ")
        console.log ("██████████████████████████████████████████████████            █████")
        console.log ("")
    } else if (!N && S && L) {
        console.log ("----------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████            █████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                     /\\         ")
        console.log ("               ██                                      NORTH          ")
        console.log ("         ██  ██                                                    ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                          ")
        console.log ("██   ██                            ██              (Already went)   EAST >        ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █              (Already went)            ")
        console.log ("██   ██                            ██                   SOUTH           ")
        console.log ("██   ██                          ██  ██                 \\/            ")
        console.log ("██   ██                         ██    ██                           ")
        console.log ("██████████████████████████████████████████████████            █████")
        console.log ("")
    } else if (N && S && !L) {
        console.log ("----------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████            █████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                     /\\         ")
        console.log ("               ██                                      NORTH          ")
        console.log ("         ██  ██                                       (Already went)            ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                          ")
        console.log ("██   ██                            ██                     EAST >        ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █              (Already went)             ")
        console.log ("██   ██                            ██                   SOUTH           ")
        console.log ("██   ██                          ██  ██                 \\/            ")
        console.log ("██   ██                         ██    ██                           ")
        console.log ("██████████████████████████████████████████████████            █████")
        console.log ("")
    } else if (N && !S && L) {
        console.log ("----------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████            █████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                     /\\         ")
        console.log ("               ██                                      NORTH          ")
        console.log ("         ██  ██                                       (Already went)             ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                          ")
        console.log ("██   ██                            ██              (Already went) EAST >        ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █                           ")
        console.log ("██   ██                            ██                   SOUTH           ")
        console.log ("██   ██                          ██  ██                 \\/            ")
        console.log ("██   ██                         ██    ██                           ")
        console.log ("██████████████████████████████████████████████████            █████")
        console.log ("")
    }
    printDivider();
    console.log ("-> Claim your reward. The pale moon smiles at you.");
    console.log ("-> You are in a forest. There are paths to the NORTH, SOUTH, and EAST:");
    printDivider();
    console.log ("Options:");
    console.log ("1. NORTH.");
    console.log ("2. SOUTH.");
    console.log ("3. EAST.");
    printDivider();
    console.log ("Actions:");
    console.log ("4. INVENTORY");
    console.log ("5. SANITY");
    console.log ("6. LIFE");
    printDivider();
    console.log ("Command?");
    floresta2 = Number(prompt("> "));

    if (floresta2 === 1) {
        if (!tentanovamente1) {
            console.log (" ");
            console.clear();
            printDivider();
            console.log ("-> You've already been there!");
            printDivider();
        } else if (tentanovamente1) {
        console.clear();
        console.log ("                    █████████████████████████████████")
        console.log ("                    ██   ██                        ██")
        console.log ("                   ██  ██                           ██")
        console.log ("                 ██  ██                               ██")
        console.log ("                ██  ██                                 ██")
        console.log ("               ██  ██                                   ██")
        console.log ("               ██  ██                                   ██")
        console.log ("               ██  ██                                   ██")
        console.log ("               ██  ██                                   ██")
        console.log ("               ██  ██               ████                ██")
        console.log ("               ██  ██               █  █                ██")
        console.log ("               ██  ██               █  █                ██")
        console.log ("               ██  ██               █  █                ██ ")
        console.log ("████████████████████████████████████████████████████████████████████")
        console.log (" ")
        printDivider();
        console.log ("-> You decide to go North...");
        N = true
        console.log ("-> You find an old wooden cabin");
        printDivider();
        console.log ("Options:");
        console.log ("1. Enter the cabin");
        console.log ("2. Ignore the cabin");
        printDivider();
        console.log ("Command?");
        cabana = prompt("> ");

        if (cabana === "1") {
            console.clear();
            console.log ("----------------------------------------------------------")
        console.log (" ")
        console.log ("████████████████████████████████████████████████████████████████████")
        console.log ("██                                                                ██")
        console.log ("██                                                                ██")
        console.log ("██                                                                ██")
        console.log ("██                                                                ██")
        console.log ("██                                                                ██")
        console.log ("██                                                                ██")
        console.log ("██     ██                                             (Chest)       ██")
        console.log ("██   ██████                                        ████████████   ██")
        console.log ("██  █  ██  █                                      █            █  ██")
        console.log ("██     ██                                         █-----██-----█  ██")
        console.log ("██   ██  ██                                       █            █  ██")
        console.log ("██  ██    ██                                      █   (Map)   █  ██")
        console.log ("████████████████████████████████████████████████████████████████████")
        console.log ("")
            printDivider();
            console.log ("-> You enter the cabin and find an old chest");
            console.log ("-> Inside the chest you find a scroll with a map");
            printDivider();
            console.log ("Options:");
            console.log ("1. Take the map");
            console.log ("2. Return to the fork");
            console.log ("3. Take Medical Kit (Heals 50% life)");
            printDivider();
            console.log ("Command?");
            cabana1 = prompt("> ");

            if (cabana1 === "1") {
                console.clear();
                printDivider();
                console.log ("-> You take the map and leave the cabin");
                tentanovamente1 = false;
                mapaachado = true;
                printDivider();
                console.log ("Options:");
                console.log ("1. Return to the fork");
                printDivider();
                console.log ("Command?");
                cabana2 = prompt("> ");
                if (cabana2 === "1") {
                    console.clear();
                    console.log (" ")
                    printDivider();
                    console.log ("-> You return to the fork...");
                }  else if (cabana2 !== 1) {
                    InvalidOption()
                }
            } else if (cabana1 === "2") {
                console.clear();
                printDivider();
                console.log ("-> You return to the fork")
            } else if (cabana1 == "3") {
                if (kitm == true) {
                    console.clear()
                    printDivider();
                    console.log("-> You already took the medical kit!")
                    printDivider();
                console.log ("-> Press 1 to continue!")
                printDivider();
                let by1 = Number(prompt("> "))
                if (by1 == 1){
                    console.clear()
                } else {
                    InvalidOption()
                }
                } else {
                console.clear();
                printDivider();
                console.log ("-> You quickly grab the medical kit and start your medication and bandages")
                console.log ("-> Congratulations, you healed your life by +50.")
                printDivider();
                console.log ("-> Press 1 to continue!")
                printDivider();
                kitm = true
                let by = Number(prompt("> "))
                if (by == 1) {
                Vida+=50
                showLife()
                } else {
                    InvalidOption()
                }
            }
            } else {
                InvalidOption()
             }
        } else if (cabana === "2") {
            console.clear();
            console.log ("----------------------------------------------------------")
            console.log (" ")
            console.log ("███████████████████████████████████████████████████████████████████")
            console.log ("██                                                               ")
            console.log ("██                                                               ")
            console.log ("██                                                               ")
            console.log ("██                                                      ")
            console.log ("██                                                     ")
            console.log ("██                                                     █        ")
            console.log ("██                    ██                              ██")
            console.log ("██                  ██████                            ██")
            console.log ("██                 █  ██  █                           ██")
            console.log ("██                    ██                              ██")
            console.log ("██                  ██  ██                            ██-------")
            console.log ("██                 ██    ██                           ██     ------")
            console.log ("████████████████████████████████████████████████████████████████████ ---")
            console.log ("")
            printDivider();
            console.log ("-> You ignore the cabin and continue on your way...");
            console.log ("-> After walking a bit you find a broken bridge");
            printDivider();
            console.log ("Options:");
            console.log ("1. Jump the bridge");
            console.log ("2. Return to the fork");
            printDivider();
            console.log ("Command?");
            ponte = prompt("> ");

            if (ponte === "1") {
                console.clear();
                printDivider();
                console.log ("-> You try to jump the bridge, but you fall and die");
                console.log ("-> You died!!");
                printDivider();
                console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
                console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
                console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
                printDivider();
                process.exit(1);




            }  else if (ponte === "2") {
                console.clear();
                printDivider();
                console.log ("-> You return to the fork...");
            } else {
                InvalidOption()
             }
        } else {
            InvalidOption()
         }
        }
    } else if (floresta2 == 2) {
        console.clear();
        console.log ("")
        console.log ("                                                   ")
        console.log ("                                                   ")
        console.log ("                                                   ")
        console.log ("                                                                  ██")
        console.log ("         ██                                                       █████")
        console.log ("       ██████                                                     █████")
        console.log ("      █  ██  █                                                    ██")
        console.log ("         ██                                                       ██")
        console.log ("       ██  ██                                         █████████████████████████")
        console.log ("      ██    ██                                             ████████████████")
        console.log ("█████████████████████████████████████████████████")
        console.log (" ")
        printDivider();
        console.log ("-> You go South.");
        S = true
        console.log ("-> You find a lake, and a boat in front of you");
        printDivider();
        console.log ("Options:");
        console.log ("1. Take the boat");
        console.log ("2. Ignore the boat");
        console.log ("3. Return to the fork");
        printDivider();
        console.log ("Command?");
        barco = prompt("> ");
        console.log (" ");

        if (barco === "1") {
            console.clear();
            printDivider();
            console.log ("-> You take the boat and start rowing...");
            console.log ("-> But the boat starts to sink, and in the river you see a submerged cave!")
            printDivider();
        console.log ("Options:");
        console.log ("1. Ignore cave");
        console.log ("2. Enter the cave");
        printDivider();
        console.log ("Command?");
        barco2 = prompt("> ");
        console.log (" ");

        if (barco2 == 1) {
            console.clear();
            printDivider();
            console.log ("-> You ignore the cave and decide to swim back to the trail...");
        } else if (barco2 == 2) {
            console.clear();
            printDivider();
            console.log ("-> You enter the cave, and inside you are horrified...")
            console.log ("-> Inside you see several gravestones and in the center of the cemetery, there is an open scroll...")
            printDivider();
            console.log ("Options")
            printDivider();
            console.log ("1. Read")
            console.log ("2. Do Not Read")
            console.log ("3. DESTROY!")
            printDivider();
            pergaminho = Number(prompt("> "));

            if(pergaminho == 1) {
                console.clear()
                if (destruir == false){
                printDivider();
                console.log ("You pick up the scroll and start reading...")
                printDivider();
                console.log ("DAY 1: Where am I?")
                printDivider();
                console.log("I don't really know where to start.");
console.log("My hands still tremble so much I can barely hold this improvised pen...");
console.log("a piece of charcoal I found near one of the... gravestones.");
console.log("In a hidden lake in a forest that was already sinister on its own.");
console.log("I think it's been two days since I got lost from the main trail.");
console.log("I tried to find my way back, but every tree looked the same as the last.");
console.log("Night fell, and fear really began to set in.");
console.log ("")
console.log("Today, exhausted and thirsty, I spotted this strangely still lake.");
console.log("The water was dark, but the promise of relief drew me closer.");
console.log("That's when I saw a dark shadow beneath the surface, near the rocky shore.");
console.log("A kind of opening, a crack in the submerged rock.");
console.log("In a desperate impulse, thinking it might be a grotto for shelter, I dived in.");
console.log("The water was freezing. I followed the dark crack, holding my breath.");
console.log("I emerged into an air pocket, spitting water, my heart pounding.");
console.log ("")
console.log("My faint flashlight illuminated the unthinkable: the rows of gravestones.");
console.log("And in the center of this macabre chamber, on a smooth stone, this scroll.");
console.log("I am trapped, lost, and now I have found a submerged cemetery.");
console.log("What kind of madness is this? I need to record everything.");
console.log("I hope this charcoal lasts. And that I last too.");
printDivider();
console.log ("-> Press 1 to continue reading, or press 2 to close")
printDivider();
teste = Number(prompt("> "))

if (teste == 1) {
    console.clear()
    printDivider();
    console.log ("DAY 2: Is this real?")
    printDivider();
console.log("I spent the night awake, if there is such a thing as night in this damp hole.");
console.log("The flashlight died. Now I only have darkness and the sound of water.");
console.log("Every shadow that danced with the flashlight's flame seemed like a gravestone moving.");
console.log("I fumbled along the rocky walls, looking for another way out, a glimmer of hope.");
console.log("Nothing. Just the submerged passage where I entered yesterday, like a liquid nightmare.");
console.log ("")
console.log("My throat is dry, hunger churns my stomach.");
console.log("I look at this charcoal, at these words I write. Is it real?");
console.log("The gravestones are still there, cold, firm. A silent testament.");
console.log("It wasn't a delirium of exhaustion. This place exists.");
console.log ("")
console.log("The scroll... I picked it up again. My hands dirty with earth and fear.");
console.log("The writing is old, almost erased by the constant humidity.");
console.log("I managed to decipher a few loose words: 'lost', 'water', 'screams'.");
console.log("Screams? Whose? A shiver ran down my spine.");
console.log("This diary is not a good omen. Is it the record of another desperate person?");
console.log("I need to save the charcoal. And my strength.");
console.log ("")
console.log("I tried yelling for help earlier, but only the mocking echo answered.");
console.log("The forest outside lost me. This cave wants to swallow me.");
console.log ("")
console.log("Tomorrow. I need to find a way out of here. Or understand what this diary says.");
console.log("Sanity is a thin line over an abyss of gravestones.");
printDivider();
console.log ("-> At the end you see a lot of blood and fear for the writer's life...")
printDivider();
console.log ("-> Press 1 to try to swim back to the path, or 2 to stay in the cave")
console.log ("----------------------------------------------------------------------------------------------------------------------------------------------------"); // Manteve o tamanho maior conforme seu design original

teste2 = Number(prompt("> "))
if (teste2 == 1) {
    console.clear()
    printDivider();
    console.log ("-> Seeing that you don't have many options, you try to swim back...")

    if (Math.random() < 0.5) {
    printDivider();
    console.log ("-> You succeed! ")
    printDivider();
    } else {
        Vida-=100
        printDivider();
        console.log ("-> You drown!")
        pauseToContinue()
        decreaseLifeLarge()
        printDivider();
    }
} else if (teste2 == 2) {
    console.clear()
    printDivider();
    console.log ("-> You are afraid to try to go back and decide to stay in the cave.")
    console.log ("-> To pass the time you start to search the place and in the corner of a gravestone you see a key!")
    console.log ("-> You pick it up...")
    printDivider();
    console.log ("-> KEY COLLECTED!")
    chavedois = true
    printDivider();
    console.log ("2 days later you realize there's really nothing to do down there.")
    console.log ("And then you go back to the surface...")
}

} else if (teste == 2) {
    console.clear()
    printDivider();
    console.log ("-> You stop reading, out of fear.")
    console.log ("-> Seeing that you don't have many options, you try to swim back...")
    printDivider();
    console.log ("-> You succeed! ")
    printDivider();
} else {
    InvalidOption()
}

                } else {
                    console.clear()
                    printDivider();
                    console.log ("-> You destroyed the scroll, so you can no longer read it!")
                    printDivider();
                    console.log ("-> Press 1 to continue")
                    printDivider();
                    let ab = Number(prompt("> "))
                    if (ab == 1) {
                        console.clear()
                    } else {
                        console.clear()
                        printDivider();
                        console.log ("ERROR 678: Invalid Value!")
                        printDivider();
                        process.exit()
                    }
                }

            } else if (pergaminho == 2) {
                console.clear()
                printDivider();
        console.log ("-> Seeing that you don't have many options, you try to swim back...")
    printDivider();

            } else if (pergaminho == 3) {
                console.clear()
                destruir = true
                printDivider();
                console.log ("-> YOU DESTROYED THE SCROLL!")
                console.log ("-> THIS ACTION WILL HAVE CONSEQUENCES IN THE FUTURE...")
                printDivider();
                console.log ("-> Seeing that you don't have many options, you try to swim back...")
                printDivider();
            } else {
                InvalidOption()
            }
        } else {
            InvalidOption()
        }
        } else if (barco === "2") {
            console.clear();
            printDivider();
            console.log ("-> You ignore the boat and continue on your way...");
            console.log ("-> After walking a bit you find a wolf");
            printDivider();
            console.log ("Options:");
            console.log ("1. Run");
            console.log ("2. Hide");
            printDivider();
            console.log ("Command?");
            decisão2 = prompt("> ");
            console.log (" ");

            if (decisão2 === "1") {
                console.clear();
                printDivider();
                console.log ("-> You start running as fast as possible...");
                console.log ("-> But the wolf is faster and bites you, you are moderately wounded!");
                printDivider();
                console.log ("-> Press 1 to continue")
                printDivider();
                let a1 = Number(prompt("> "))

                if (a1 == 1) {
                decreaseLifeMedium()
                } else {
                    InvalidOption()
                }
            } else if (decisão2 === "2") {
                console.clear();
                printDivider();
                console.log ("-> You hide in a cave nearby");
                console.log ("-> Unfortunately, that cave was the wolf's home, and he bites you, along with several other animals!");
                console.log ("-> You are severely wounded.")
                printDivider();
                console.log ("-> Press 1 to continue")
                printDivider();
                let a2 = Number(prompt("> "))

                if (a2 == 1) {
                decreaseLifeVeryLarge()
                } else {
                    InvalidOption()
                }

            } else {
                InvalidOption()
             }

} else if (barco === "3") {
    console.clear();
    printDivider();
    console.log ("-> You return to the fork...");
    } else {
        InvalidOption()
    }
} else if (floresta2 == 3) {
    console.clear();
    printDivider();
    console.log ("-> You decide to go East.");
    L = true
    console.log ("-> You push through the leaves and branches, and find another fork");
   jogoAtivo2 = false;
   saiudafloresta1 = true;
} else if (floresta2 == 4) {
inventory()
} else if (floresta2 == 5) {
    sanity()
} else if (floresta2 == 6) {
    showLife()
} else {
    InvalidOption()
 }
}
console.clear();
N = false
O = false
L = false
S = false

while (jogoAtivo3) {

    if (mapaachado) {
        let mapa67 = false
        while (mapa67 == false) {
        printDivider();
        console.log ("-> Do you want to use the map?");
        printDivider();
        console.log ("Options:");
        console.log ("1. Yes");
        console.log ("2. No");
        printDivider();
        console.log ("Actions:");
        console.log ("3. Inventory")
        printDivider();
        console.log ("Command?");
        mapa = prompt("> ");
        console.log (" ");

        if (mapa == 1){
            console.clear();
            mapa67 = true
            printDivider();
            console.log ("-> The map says the North path is the right way");
            printDivider();
            console.log ("-> *WARNING* You cannot use the map again");
            mapaachado = false;

        } else if (mapa == 2) {
            console.clear();
            mapa67 = true
            printDivider();
            console.log ("-> You decide not to use the map");

        } else if (mapa == 3) {
            inventory()
        } else {
            console.clear();
            printDivider();
            console.log ("-> Invalid Option, you lost the chance to use the map!!")
            mapaachado = false
        }
    }
    }
    if (!N && !S && !O) {
    console.log ("--------------------------------------------------------------")
    console.log (" ")
    console.log ("██████████████████████████████████████████████             ██")
    console.log ("██           ██                                    /\\")
    console.log ("██           ██                                   NORTH")
    console.log ("██ ██        ██")
    console.log ("██   ████████")
    console.log ("██ ██               ██")
    console.log ("████              ██████                 ██          WEST >   ")
    console.log ("██               █  ██  █        ████████████")
    console.log ("██                  ██               █ █ ██")
    console.log ("██                ██  ██             █ █           SOUTH")
    console.log ("██               ██    ██            █ █           \\/")
    console.log ("██████████████████████████████████████████████             ██")
    console.log (" ")
    } else if (N && S && O) {
        console.log ("--------------------------------------------------------------")
    console.log (" ")
    console.log ("██████████████████████████████████████████████             ██")
    console.log ("██           ██                                    /\\")
    console.log ("██           ██                                   NORTH")
    console.log ("██ ██        ██                                  (Already went)")
    console.log ("██   ████████")
    console.log ("██ ██               ██")
    console.log ("████              ██████                 ██  (Already went) WEST >   ")
    console.log ("██               █  ██  █        ████████████")
    console.log ("██                  ██               █ █ ██      (Already went)")
    console.log ("██                ██  ██             █ █           SOUTH")
    console.log ("██               ██    ██            █ █           \\/")
    console.log ("██████████████████████████████████████████████             ██")
    console.log (" ")
    } else if (!N && !S && O) {
        console.log ("--------------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████             ██")
        console.log ("██           ██                                    /\\")
        console.log ("██           ██                                   NORTH")
        console.log ("██ ██        ██")
        console.log ("██   ████████")
        console.log ("██ ██               ██")
        console.log ("████              ██████                 ██  (Already went) WEST >   ")
        console.log ("██               █  ██  █        ████████████")
        console.log ("██                  ██               █ █ ██")
        console.log ("██                ██  ██             █ █           SOUTH")
        console.log ("██               ██    ██            █ █           \\/")
        console.log ("██████████████████████████████████████████████             ██")
        console.log (" ")
    } else if (!N && S && !O) {
        console.log ("--------------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████             ██")
        console.log ("██           ██                                    /\\")
        console.log ("██           ██                                   NORTH")
        console.log ("██ ██        ██")
        console.log ("██   ████████")
        console.log ("██ ██               ██")
        console.log ("████              ██████                 ██          WEST >   ")
        console.log ("██               █  ██  █        ████████████")
        console.log ("██                  ██               █ █ ██      (Already went)")
        console.log ("██                ██  ██             █ █           SOUTH")
        console.log ("██               ██    ██            █ █           \\/")
        console.log ("██████████████████████████████████████████████             ██")
        console.log (" ")
    } else if (N && !S && !O) {
        console.log ("--------------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████             ██")
        console.log ("██           ██                                    /\\")
        console.log ("██           ██                                   NORTH")
        console.log ("██ ██        ██                                  (Already went)")
        console.log ("██   ████████")
        console.log ("██ ██               ██")
        console.log ("████              ██████                 ██          WEST >   ")
        console.log ("██               █  ██  █        ████████████")
        console.log ("██                  ██               █ █ ██")
        console.log ("██                ██  ██             █ █           SOUTH")
        console.log ("██               ██    ██            █ █           \\/")
        console.log ("██████████████████████████████████████████████             ██")
        console.log (" ")
    } else if (!N && S && O) {
        console.log ("--------------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████             ██")
        console.log ("██           ██                                    /\\")
        console.log ("██           ██                                   NORTH")
        console.log ("██ ██        ██")
        console.log ("██   ████████")
        console.log ("██ ██               ██")
        console.log ("████              ██████                 ██  (Already went) WEST >   ")
        console.log ("██               █  ██  █        ████████████")
        console.log ("██                  ██               █ █ ██      (Already went)")
        console.log ("██                ██  ██             █ █           SOUTH")
        console.log ("██               ██    ██            █ █           \\/")
        console.log ("██████████████████████████████████████████████             ██")
        console.log (" ")
    } else if (N && S && !O) {
        console.log ("--------------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████             ██")
        console.log ("██           ██                                    /\\")
        console.log ("██           ██                                   NORTH")
        console.log ("██ ██        ██                                  (Already went)")
        console.log ("██   ████████")
        console.log ("██ ██               ██")
        console.log ("████              ██████                 ██          WEST >   ")
        console.log ("██               █  ██  █        ████████████")
        console.log ("██                  ██               █ █ ██      (Already went)")
        console.log ("██                ██  ██             █ █           SOUTH")
        console.log ("██               ██    ██            █ █           \\/")
        console.log ("██████████████████████████████████████████████             ██")
        console.log (" ")
    } else if (N && !S && O) {
        console.log ("--------------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████             ██")
        console.log ("██           ██                                    /\\")
        console.log ("██           ██                                   NORTH")
        console.log ("██ ██        ██                                  (Already went)")
        console.log ("██   ████████")
        console.log ("██ ██               ██")
        console.log ("████              ██████                 ██  (Already went) WEST >   ")
        console.log ("██               █  ██  █        ████████████")
        console.log ("██                  ██               █ █ ██")
        console.log ("██                ██  ██             █ █           SOUTH")
        console.log ("██               ██    ██            █ █           \\/")
        console.log ("██████████████████████████████████████████████             ██")
        console.log (" ")
    }
    printDivider();
    console.log ("-> Claim your reward. The pale moon smiles at you.");
    console.log ("-> You are in a forest. There are paths to the NORTH, SOUTH, and WEST:");
    printDivider();
    console.log ("Options:");
    console.log ("1. NORTH.")
    console.log ("2. SOUTH.");
    console.log ("3. WEST.");
    printDivider();
    console.log ("Actions:");
    console.log ("4. INVENTORY");
    console.log ("5. SANITY");
    console.log ("6. LIFE");
    printDivider();
    console.log ("Command?");
    floresta3 = Number(prompt("> "));
    console.log (" ");

    if (floresta3 == 1)  { //North
        console.clear();
        console.log ("--------------------------------------------------------------")
    console.log (" ")
    console.log ("█████████████████████████████████████████████████████████████")
    console.log ("██           ██")
    console.log ("██           ██")
    console.log ("██ ██        ██")
    console.log ("██   ████████")
    console.log ("██ ██               ██")
    console.log ("████              ██████            ")
    console.log ("██               █  ██  █           ")
    console.log ("██                  ██              ")
    console.log ("██                ██  ██               \\    /  ")
    console.log ("██               ██    ██          -   (Shine)  -    ")
    console.log ("█████████████████████████████████████████████████████████████")
    console.log (" ")
        printDivider();
        console.log ("-> You decide to go North.");
        console.log ("-> You walk through the path and find something shiny on the ground");
        printDivider();
        console.log ("Options:");
        console.log ("1. Dig the ground");
        console.log ("2. Ignore the object");
        printDivider();
        console.log ("Command?");
        objeto = prompt("> ");

        if (objeto == 1) { // Dig the ground
            if (papega) {
                console.clear();
                console.log ("--------------------------------------------------------------")
    console.log (" ")
    console.log ("████████████████████████████████")
    console.log ("████████████████████████████████")
    console.log ("██           ██               ██")
    console.log ("██           ██               ██")
    console.log ("██ ██        ██               ██")
    console.log ("██   ████████                 ██")
    console.log ("██ ██                         ██")
    console.log ("████                ██        ██")
    console.log ("██                 ████       ██")
    console.log ("██                █ ██ █      ██")
    console.log ("██                  ██        ██")
    console.log ("██                 █  █       ██")
    console.log ("████████████████████████████████")
    console.log ("████████████████████████████████")
    console.log ("████████████████████████████████")
    console.log ("████████████████████████████████")
    console.log (" ")
            printDivider();
            console.log ("-> You dig the ground and find a photo of a child");
            console.log ("-> On the photo you see that something is written on the back");
            printDivider();
            console.log ("Options:");
            console.log ("1. Read what is written");
            console.log ("2. Ignore the photo");
            printDivider();
            fotopega = true
            console.log ("Command?");
            foto = prompt("> ");

            if (foto==1) {
                console.clear();
                printDivider();
                console.log ("-> The photo says: 'YOU SHOULDN'T HAVE COME HERE'");
                printDivider();
                console.log ("-> You feel a little scared...");
                console.log ("-> After a while you decide to continue on your way");
                console.log ("-> You arrive at a fork");
                printDivider();
                console.log ("-> Press 1 to continue...")
                console.log ("-> (If you press any other key the game will close!)")
                printDivider();

                let foto11 = Number(prompt("> "))

                if (foto11 == 1){
                decreaseSanity()
                fotopega = true
                leufoto = true
                jogoAtivo3 = false;
                saiudafloresta2 = true;
                } else {
                    InvalidOption()
                }
            } else if (foto == 2 ) {
                console.clear();
                printDivider();
                console.log ("-> You ignore the photo and continue on your way...");
                console.log ("-> You arrive at a fork");
                fotopega = true
                leufoto = false
                jogoAtivo3 = false;
                saiudafloresta2 = true;
            }  else {
                InvalidOption()
            }
        } else if (!papega){
            console.clear();
            printDivider();
            console.log ("-> You cannot dig, because you don't have a shovel!");
        }
        } else if (objeto == 2) {
            console.clear();
            printDivider();
            console.log ("-> You ignore the object and continue on your way...");
            console.log ("-> You arrive at a fork");
            jogoAtivo3 = false;
            saiudafloresta2 = true;
        } else {
            InvalidOption()
         }
    } else if (floresta3 == 2) {
        console.clear();
        printDivider();
        console.log ("-> You go by the South path...");
        console.log ("-> You find a wolf");
        printDivider();
        console.log ("Options:");
        console.log ("1. Run");
        console.log ("2. Hide");
        printDivider();
        console.log ("What do you want to do now?");
        printDivider();
        console.log ("Command?")
        decisão2 = prompt("> ");
        console.log (" ")

        if (decisão2 === "1") {
            console.clear();
            printDivider();
            console.log ("-> You start running as fast as possible...");
            console.log ("-> But the wolf is faster and catches you, and kills you");
            printDivider();
            console.log ("-> You died!!");
            printDivider();
            console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
            console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
            console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
            printDivider();
            process.exit(1);
} else if (decisão2 === "2") {
    console.clear();
    printDivider();
    console.log ("-> You hide in a cave nearby");
    console.log ("-> Unfortunately that cave was the wolf's home, and he kills you");
    printDivider();
    console.log ("-> You died!!");
    printDivider();
    console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
    console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
    console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
    console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
    console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
    printDivider();
    process.exit(1);
    }
} else if (floresta3 == 3) {
    console.clear();
    printDivider();
    console.log ("-> You decide to go West");
    console.log ("-> You fall into the river and drown");
    printDivider();
    console.log ("-> You died!!");
    printDivider();
    console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
    console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
    console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
    console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
    console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
    printDivider();
    process.exit(1);
} else if (floresta3 == 4) {
    inventory()
    } else if (floresta3 == 5) {
        sanity()
    } else if (floresta3 == 6) {
        showLife()
    } else {
        InvalidOption()
     }
}

N = false
O = false
L = false
S = false


while (jogoAtivo4) {
    if (N && S) {
    console.log ("--------------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████             ██")
        console.log ("██           ██                    █                /\\     ██")
        console.log ("██           ██                    █               NORTH   ██")
        console.log ("██ ██        ██                    █             (Already went)  ██")
        console.log ("██   ████████                      ██                      ██")
        console.log ("██ ██               ██           ██████                    ██")
        console.log ("████              ██████           ██                      ██")
        console.log ("██               █  ██  █          ██                      ██")
        console.log ("██                  ██             ██            (Already went)  ██")
        console.log ("██                ██  ██                           SOUTH     ██")
        console.log ("██               ██    ██                          \\/      ██")
        console.log ("██████████████████████████████████████████████             ██")
        console.log (" ")
    } else if (!N && S) {
        console.log ("--------------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████             ██")
        console.log ("██           ██                    █                /\\     ██")
        console.log ("██           ██                    █               NORTH   ██")
        console.log ("██ ██        ██                    █                       ██")
        console.log ("██   ████████                      ██                      ██")
        console.log ("██ ██               ██           ██████                    ██")
        console.log ("████              ██████           ██                      ██")
        console.log ("██               █  ██  █          ██                      ██")
        console.log ("██                  ██             ██            (Already went)  ██")
        console.log ("██                ██  ██                           SOUTH     ██")
        console.log ("██               ██    ██                          \\/      ██")
        console.log ("██████████████████████████████████████████████             ██")
        console.log (" ")
    } else if (N && !S) {
        console.log ("--------------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████             ██")
        console.log ("██           ██                    █                /\\     ██")
        console.log ("██           ██                    █               NORTH   ██")
        console.log ("██ ██        ██                    █             (Already went)  ██")
        console.log ("██   ████████                      ██                      ██")
        console.log ("██ ██               ██           ██████                    ██")
        console.log ("████              ██████           ██                      ██")
        console.log ("██               █  ██  █          ██                      ██")
        console.log ("██                  ██             ██                      ██")
        console.log ("██                ██  ██                           SOUTH     ██")
        console.log ("██               ██    ██                          \\/      ██")
        console.log ("██████████████████████████████████████████████             ██")
        console.log (" ")
    } else if (!N && !S){
        console.log ("--------------------------------------------------------------")
        console.log (" ")
        console.log ("██████████████████████████████████████████████             ██")
        console.log ("██           ██                    █                /\\     ██")
        console.log ("██           ██                    █               NORTH   ██")
        console.log ("██ ██        ██                    █                       ██")
        console.log ("██   ████████                      ██                      ██")
        console.log ("██ ██               ██           ██████                    ██")
        console.log ("████              ██████           ██                      ██")
        console.log ("██               █  ██  █          ██                      ██")
        console.log ("██                  ██             ██                      ██")
        console.log ("██                ██  ██                           SOUTH     ██")
        console.log ("██               ██    ██                          \\/      ██")
        console.log ("██████████████████████████████████████████████             ██")
        console.log (" ")
    }

    printDivider();
console.log ("-> Claim your reward, the pale moon smiles at you")
console.log ("-> In front of you there are paths, to the NORTH and SOUTH");
printDivider();
console.log ("Options:");
console.log ("1. NORTH");
console.log ("2. SOUTH");
printDivider();
console.log ("Actions:");
console.log ("3. INVENTORY");
console.log ("4. SANITY");
console.log ("5. LIFE");
printDivider();
    console.log ("Command?")
    floresta4 = prompt("> ");
    console.log (" ")

    if (floresta4 == 1) {
        console.clear();
        printDivider();
        console.log ("-> You choose to go North...");
        N = true
        console.log ("-> You find a car parked by the side of a road in front of you.")
        printDivider();
        console.log ("Options:")
        printDivider();
        console.log ("1. Try to start the car.")
        console.log ("2. Ignore the car")
        console.log ("3. Walk away on the road")
        printDivider();
        console.log ("Command?")
        carro = Number(prompt("> "))
        console.log (" ")

        if (carro == 1) {
            console.clear();
            printDivider();
            console.log ("-> You manage to start the car.")
            printDivider();
            console.log ("Options:")
            console.log ("1. Leave")
            console.log ("2. Go back to the path")
            printDivider();
            console.log ("Command?")
            carro1 = Number(prompt("> "))
            console.log (" ")

            if (carro1 == 1) {
                console.clear()
                printDivider();
                console.log("-> Are you sure? This action will be irreversible!")
                printDivider();
                console.log ("-> Press 1 to continue or 2 to cancel!")
                printDivider();

                let br = Number(prompt("> "))
                if (br == 1) {

                console.clear();
                printDivider();
                console.log ("-> You decide to leave by the road!")
                if (fotopega && leufoto) {
                    printDivider();
                    console.log ("-> Before leaving, you remember the child's photo...")
                    console.log ("-> and decide to call the police as soon as you get home!")
                    printDivider();
                    console.log ("-> You completed the GOOD_ENDING")
                    printDivider();
                    GOOD_ENDING=true
                    jogoAtivo4=false
                } else if (fotopega && !leufoto) {
                    printDivider();
                    console.log ("-> Before leaving, you remember the child's photo.")
                    console.log ("-> but think someone just dropped it...")
                    printDivider();
                    console.log ("-> You completed the BAD_ENDING_2")
                    printDivider();
                    BAD_ENDING_2=true
                    jogoAtivo4=false
                } else if (!leufoto && !fotopega){
                    printDivider();
                    console.log ("-> You leave without thinking straight.")
                    printDivider();
                    console.log ("-> You completed the BAD_ENDING_3")
                    printDivider();
                    BAD_ENDING_3=true
                    jogoAtivo4=false
                }
            } else if (carro1 == 2) {
                console.clear();
                printDivider();
                console.log ("-> You decide to go back to the initial path")
            } else {
                InvalidOption()
             }
        } else {
            console.clear()
        }
        } else if (carro == 2) {
            console.clear();
            printDivider();
            console.log ("-> You ignore the car!")
            printDivider();
            console.log ("-> Reaching the end of the path, you realize you lost time and will have to go back to the initial path")
            console.log ("-> You walk back...")

        } else if (carro == 3){
            console.clear();
            printDivider();
            console.log ("-> you decide to walk along the road...")
            console.log ("-> That was not a good idea!")
            console.log ("-> A car with its headlights off doesn't see you and runs you over, killing you.")
            printDivider();
            console.log ("-> You Died!!")
            printDivider();
            console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
            console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
            console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
            printDivider();
            process.exit(1);

        } else {
            InvalidOption()
         }
    } else if (floresta4 == 2) {
        console.clear();
        printDivider();
        console.log ("-> You decide to go South...")
        S=true
        console.log ("-> On this path, you find a house, which seems normal.")
        printDivider();
        console.log ("Options:")
        console.log ("1. Enter the house.")
        console.log ("2. Ignore the house and follow the path.")
        printDivider();
        console.log ("Command?")
        casa2 = Number(prompt("> "))
        console.log (" ")

        if (casa2 == 1) {
            console.clear();
            printDivider();
console.log("Upon entering the house, your steps echo eerily through the silence.");
console.log("Your first instinct is to look for signs of life, someone living or perhaps trapped there.");
printDivider();
console.log("After a careful search, you find no one. The solitude of the place is palpable.");
console.log("You then start searching the house for something useful, like a phone.");
console.log("On a dusty table, you find a note with a rudimentary map drawn with arrows.");
printDivider();
            console.log ("Options:")
            console.log ("1. Follow map.")
            console.log ("2. Do not follow the map.")
            printDivider();
            console.log("Command?")
            mapa3 = Number(prompt("> "))
            console.log (" ")

            if (mapa3 == 1) {
                console.clear();
                printDivider();
console.log("You follow the map carefully, each turn a step towards the unknown.");
console.log("Upon reaching the marked 'X', you step and the ground creaks, sounding hollow under your feet.");
console.log("Immediate apprehension arises. Doubt lingers in the air: dig and face what lies beneath or ignore and move on?");
printDivider();
                console.log ("Options:")
                console.log ("1. Dig in search of something.")
                console.log ("2. Do not dig.")
                printDivider();
                console.log ("Command?")
                cavar = Number(prompt("> "))
                console.log (" ")

                if (cavar == 1) {
                    console.clear();
                    printDivider();
console.log("-> The loose earth yields easily. Soon, you distinguish the unmistakable shape of a human body.");
console.log("-> As you clear the last layer of earth, your blood runs cold at the sight.");
printDivider();
console.log("-> It's the small, fragile body of a child.");
console.log("-> Your heart pounds, hammering against your ribs.");
console.log("-> Amidst the panic, suddenly, you hear...");
                   console.log ("----------------------------------------------------------------------------")
                   console.log ("-> Congratulations!!")
                   console.log ("----------------------------------------------------------------------------")
                   console.log ("—— 40.24248 ——")
                   console.log (" ")
                   console.log ("—— -121.4434 ——")
                   console.log ("----------------------------------------------------------------------------")
                   console.log ("FDRTH SHN BRFBZCRAFN!!") // Original "CRTHR FHN ERPBZCRAFN!!"
                   console.log ("----------------------------------------------------------------------------")
                   jogoAtivo4 = false
                   REAL_ENDING=true


                } else if (cavar == 2) {
                    console.clear();
                    printDivider();
console.log("-> You decide not to dig and turn to move on. A fatal mistake.");
console.log("-> From the shadows, a figure moves. Before you can react, a violent impact hits your abdomen.");
console.log("-> The world spins as you fall. The last thing you see is a man's face, expressionless, watching you die.");
printDivider();
console.log("-> YOU DIED!");
printDivider();
                    console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
                    console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
                    console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
                    console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
                    console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
                    printDivider();
                    process.exit(1);

                } else {
                    InvalidOption()
                 }

            } else if (mapa3 == 2) {
                console.clear();
                printDivider();
console.log("-> A suspicion runs down your spine. The map seems too easy, perhaps a trap.");
console.log("-> You ignore it, deciding to continue your search through the house. Perhaps you missed something.");
printDivider();
console.log("-> Time drags on in the gloom. Every second feels like an eternity, until a sound breaks the silence: the front door opens.");
console.log("-> Heavy footsteps echo through the house. The owner has returned.");
console.log("-> You despair and dive into the first hiding place you find: a dark, dusty wardrobe.");
console.log("-> Through the cracks in the door, you see him. He stops, notices an object out of place and his body stiffens. He knows someone is here.");
console.log("-> The sound of his footsteps approaches your hiding place, louder and louder... The wardrobe door abruptly opens.");
                printDivider();
                console.log ("You Died!!")
                printDivider();
                console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
                console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
                console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
                printDivider();
                process.exit(1);

            } else {
                InvalidOption()
             }


        } else if (casa2 == 2) {
            console.clear();
            if (!casafora) {
                casafora = true
                printDivider();
                console.log("-> A shiver of dread stops you. You decide the risk is too great and turn your back on the house.");
                printDivider();
                console.log("-> You resume the trail, but the surrounding forest seems to have changed. It's quieter, darker.");
                console.log("-> The path twists strangely and, after a few minutes, a sense of 'déjà vu' disturbs you.");
                console.log("-> The same twisted tree... the same moss-covered rock. Panic sets in: the path is leading you in circles.");
                console.log("-> There is no other choice. You need to go back to the beginning, to the fork where everything started.");
                printDivider();
            } else if (casafora) {
                console.clear();
                printDivider();
                console.log ("-> You have already tried that...")
                printDivider();

            }
        } else {
            InvalidOption()
         }
    } else if (floresta4 == 3) {
        inventory()
    } else if (floresta4 == 4) {
        sanity()
    } else if (floresta4 == 5) {
        showLife()
    } else {
        InvalidOption()
     }
}

if (BAD_ENDING) {
    exec('start cmd.exe /c aEN.exe')
    const conteudo = "YOU COMPLETED THE FIRST BAD ENDING";
fs.writeFileSync('../Achievements/BAD_ENDING.bin', conteudo, 'utf8');
updateAccountFileWithAchievement('BAD_ENDING')

} else if (REAL_ENDING) {
    exec('start cmd.exe /c PoliceMonitorEN.exe', (error) => {
    if (error) {
      console.error(`Error executing file: ${error.message}`);
      return;
    }

    if (REAL_ENDING) {
        const conteudo1 = "YOU COMPLETED THE REAL ENDING";
        fs.writeFileSync('../Achievements/REAL_ENDING.bin', conteudo1, 'utf8');
        updateAccountFileWithAchievement('REAL_ENDING')
    }
});
} else if (GOOD_ENDING) {
        const conteudo2 = "YOU COMPLETED THE GOOD ENDING";
        fs.writeFileSync('../Achievements/GOOD_ENDING.bin', conteudo2, 'utf8');
        updateAccountFileWithAchievement('GOOD_ENDING')
    } else if (BAD_ENDING_2) {
        const conteudo3 = "YOU COMPLETED THE SECOND BAD ENDING";
        fs.writeFileSync('../Achievements/BAD_ENDING_2.bin', conteudo3, 'utf8');
        updateAccountFileWithAchievement('BAD_ENDING_2')
    } else if (BAD_ENDING_3) {
        const conteudo4 = "YOU COMPLETED THE THIRD BAD ENDING";
        fs.writeFileSync('../Achievements/BAD_ENDING_3.bin', conteudo4, 'utf8');
        updateAccountFileWithAchievement('BAD_ENDING_3')
    }

N = false
O = false
L = false
S = false

// Property of Sad Berry Games