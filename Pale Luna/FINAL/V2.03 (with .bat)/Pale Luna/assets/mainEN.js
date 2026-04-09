// Property of Sad Berry Games.

const prompt = require('prompt-sync')();
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');


// Checking if ET exists!
const ET1 = './ET.txt' 
ET = fs.existsSync(ET1)

function Opcãoinvalida() {
    console.clear()
    centertext("===========================================================================");
    centertext("-> Invalid option!")
    centertext("===========================================================================");
    centertext("-> Press [1] to close...");
    centertext("===========================================================================");
    while (prompt("> ") !== '1') {
        // Keeps looping until the player presses 1
    }
    process.exit(90)
}

function pausarParaFechar() {
    console.clear()
    centertext("===========================================================================");
    centertext("-> Press [1] to close...");
    centertext("===========================================================================");
    while (prompt("> ") !== '1') {
        // Keeps looping until the player presses 1
    }
    process.exit(90)
}

function pausarParaContinuar() {
    centertext("===========================================================================");
    centertext("-> Press [1] to continue...");
    centertext("===========================================================================");
    while (prompt("> ") !== '1') {
        // Keeps looping until the player presses 1
    }
    console.clear();
}

function inventario() {
    // We use an infinite loop that will only be broken when the player chooses to exit.
    while (true) {
        console.clear();
        centertext("===========================================================================");
        centertext("-> You have the following items in your inventory:");
        centertext("===========================================================================");

        // We create a counter to know if any item has been displayed.
        let itensNoInventario = 0;

        // Now, we check each item separately.
        if (papega) {
            centertext("-> Shovel");
            itensNoInventario++; // Increases the counter if the item exists.
        }
        if (temChave) {
            centertext("-> Keys");
            itensNoInventario++;
        }
        if (chavedois) {
            centertext("-> Key (Tombstone)");
            itensNoInventario++;
        }
        // If you want to add a new item, just add a new `if` here!

        // If the counter is 0, it means the inventory is empty.
        if (itensNoInventario === 0) {
            centertext("-> You haven't picked up any items yet!");
        }

        centertext("===========================================================================");
        centertext("-> Do you want to go back?");
        centertext("===========================================================================");
        centertext("[01] YES");
        centertext("[02] NO");
        centertext("===========================================================================");
        
        // Renamed the variable to avoid having the same name as the function.
        let escolha = Number(prompt("> "));

        if (escolha === 1) {
            console.clear();
            break; // Breaks the loop and exits the inventory function.
        }
        // If the choice is 2 (or anything else), the loop continues and the inventory is shown again.
    }
}
function menosSanidade() {
    if (valorsanidade <= 10) {
        console.clear()
        centertext("===========================================================================");
        centertext("-> You reached a very low sanity level during the game!")
        centertext("-> You went mad and got lost in the forest forever!")
        centertext("===========================================================================");
        centertext("-> Game Over")
        centertext("===========================================================================");
        process.exit(1)
    } else {
        valorsanidade-=10
    while (s2 != 1) {
        console.clear()
    centertext("===========================================================================");
    centertext("-> WARNING: YOUR SANITY DROPPED!")
    centertext("-> You now have " + valorsanidade + "% sanity")
    centertext("===========================================================================");
    centertext("-> Do you want to continue?")
    centertext("===========================================================================");
            centertext("[01] YES")
            centertext("[02] NO")
            centertext("===========================================================================");
            let s2 = Number(prompt("> "))
    
            if (s2 == 1) {
                centertext("")
                console.clear()
                break;
            } 
            if (s2 == 2) {
            }
}
}
}
function maisSanidade() {

        valorsanidade+=10
        while (s3 != 1) {
            console.clear()
            centertext("===========================================================================");
            centertext("-> [WARNING] YOUR SANITY INCREASED!")
            centertext("-> You now have " + valorsanidade + "% sanity")
            centertext("===========================================================================");
            centertext("-> Do you want to continue?")
            centertext("===========================================================================");
                    centertext("[01] YES")
                    centertext("[02] NO")
                    centertext("===========================================================================");
                    let s3 = Number(prompt("> "))
            
                    if (s3 == 1) {
                        centertext("")
                        console.clear()
                        break;
                    } 
                    if (s3 == 2) {
                    }
                    
        }
    }


function sanidade() {
    while (s1 != 1) {
        console.clear()
        contagemS++
    centertext("===========================================================================");
    centertext("-> Your sanity is at " + valorsanidade + "%")
    centertext("===========================================================================");
            centertext("-> Do you want to return to the previous options?")
            centertext("===========================================================================")
            centertext("[01] YES")
            centertext("[02] NO")
            centertext("===========================================================================");
            let s1 = Number(prompt("> "))
    
            if (s1 == 1) {
                centertext("")
                console.clear()
                break;
            } 
            if (s1 == 2) {
            }
}
}

function menosVidaG() {

    if(Vida <20){
        console.clear();
        gameover()
        centertext("===========================================================================");
        centertext("-> You lost a lot of health!")
        centertext("===========================================================================");
        process.exit(1);
    }
Vida-= 50
while (v1 != 1) {
    console.clear();
    centertext("===========================================================================");
    centertext("-> WARNING: YOUR HEALTH DROPPED SEVERELY!")
    centertext("-> You now have " + Vida + "% health")
    centertext("===========================================================================");
    centertext("-> Do you want to continue?")
    centertext("===========================================================================");
            centertext("[01] YES")
            centertext("[02] NO")
            centertext("===========================================================================");
            let v1 = Number(prompt("> "))
    
            if (v1 == 1) {
                centertext("")
                console.clear();
                break;
            } 
            if (v1 == 2) {
            }
}
if(Vida <20){
    console.clear();
    gameover()
    centertext("===========================================================================");
    centertext("-> You lost a lot of health!")
    centertext("===========================================================================");
    process.exit(1);
}
}

function menosVidaM() {
    if(Vida <20){
        console.clear();
        gameover()
        centertext("===========================================================================");
        centertext("-> You lost a lot of health!")
        centertext("===========================================================================");
        process.exit(1);
    }
    Vida-= 20
    while (v2 != 1) {
        console.clear();
        centertext("===========================================================================");
        centertext("-> WARNING: YOUR HEALTH DROPPED TO A MEDIUM LEVEL!")
        centertext("-> You now have " + Vida + "% health")
        centertext("===========================================================================");
        centertext("-> Do you want to continue?")
        centertext("===========================================================================");
                centertext("[01] YES")
                centertext("[02] NO")
                centertext("===========================================================================");
                let v2 = Number(prompt("> "))
        
                if (v2 == 1) {
                    centertext("")
                    console.clear();
                    break;
                } 
                if (v2 == 2) {
                }
    }
    if(Vida <20){
        console.clear();
        gameover()
        centertext("===========================================================================");
        centertext("-> You lost a lot of health!")
        centertext("===========================================================================");
        process.exit(1);
    }
    }

    function menosVidaP() {
        if(Vida <20){
            console.clear();
            gameover()
            centertext("===========================================================================");
            centertext("-> You lost a lot of health!")
            centertext("===========================================================================");
            process.exit(1);
        }
        Vida-= 10
        while (v3 != 1) {
            console.clear();
            centertext("===========================================================================");
            centertext("-> WARNING: YOUR HEALTH DROPPED!")
            centertext("-> You now have " + Vida + "% health")
            centertext("===========================================================================");
            centertext("-> Do you want to continue?")
            centertext("===========================================================================");
                    centertext("[01] YES")
                    centertext("[02] NO")
                    centertext("===========================================================================");
                    let v3 = Number(prompt("> "))
            
                    if (v3 == 1) {
                        centertext("")
                        console.clear();
                        break;
                    } 
                    if (v3 == 2) {
                    }
        }
        if(Vida <20){
            console.clear();
            gameover()
            centertext("===========================================================================");
            centertext("-> You lost a lot of health!")
            centertext("===========================================================================");
            process.exit(1);
        }
        }

        function mostrarVida() {
            while (v4 != 1) {
                console.clear();
                centertext("===========================================================================");
                centertext("-> You now have " + Vida + "% health")
                centertext("===========================================================================");
                centertext("-> Do you want to continue?")
                centertext("===========================================================================");
                        centertext("[01] YES")
                        centertext("[02] NO")
                        centertext("===========================================================================");
                        let v4 = Number(prompt("> "))
                
                        if (v4 == 1) {
                            centertext("")
                            console.clear();
                            break;
                        } 
                        if (v4 == 2) {
                        }
            }
        }

        function menosVidaMG() {
            if(Vida <20){
                console.clear();
                gameover()
                centertext("===========================================================================");
                centertext("-> You lost a lot of health!")
                centertext("===========================================================================");
                process.exit(1);
            }
            Vida-= 70
            while (v5 != 1) {
                console.clear();
                centertext("===========================================================================");
                centertext("-> WARNING: YOUR HEALTH DROPPED EXTREMELY!")
                centertext("-> You now have " + Vida + "% health")
                centertext("===========================================================================");
                centertext("-> Do you want to continue?")
                centertext("===========================================================================");
                        centertext("[01] YES")
                        centertext("[02] NO")
                        centertext("===========================================================================");
                        let v5 = Number(prompt("> "))
                
                        if (v5 == 1) {
                            centertext("")
                            console.clear();
                            break;
                        } 
                        if (v5 == 2) {
                        }
            }
        }

function centertext(text) {
    const terminalWidth = process.stdout.columns;
    const padding = Math.max(0, Math.floor((terminalWidth - text.length) / 2));
    console.log(' '.repeat(padding) + text);
}

// Function to correctly center ASCII art that is passed as an array of strings
function centerAscii(logo) {
    const maxLineWidth = Math.max(...logo.map(line => line.length));
    const terminalWidth = process.stdout.columns;
    const padding = Math.max(0, Math.floor((terminalWidth - maxLineWidth) / 2));
    const paddedLogo = logo.map(line => ' '.repeat(padding) + line);
    paddedLogo.forEach(line => console.log(line));
}


function gameover() {

    const logo = [
        "",
    " ███████████████    ████████████    █████████████████████     █████████████",
    "██████             ██████  ██████   ██████  ██████  ██████   ██████",
    "██████             ██████  ██████   ██████  ██████  ██████   ██████",
    "██████  ████████   ██████████████   ██████  ██████  ██████   ██████████",
    "██████    ██████   ██████  ██████   ██████  ██████  ██████   ██████",
    "██████    ██████   ██████  ██████   ██████  ██████  ██████   ██████",
    " ███████████████   ██████  ██████   ██████  ██████  ██████    █████████████",
    "",
    "   ██████████████    ██████  ██████    █████████████   ██████████████",
    "  ████████████████   ██████  ██████   ██████           ██████   ██████",
    "  ██████    ██████   ██████  ██████   ██████           ██████   ██████",
    "  ██████    ██████   ██████  ██████   ██████████       █████████████",
    "  ██████    ██████   ██████  ██████   ██████           ███████████████",
    "  ████████████████   ██████  ██████   ██████           ██████   ██████",
    "   ██████████████    █████████████     █████████████   ██████   ██████",
    ]
    centerAscii(logo);
}


function logoinicial(){
    const logo = [
"",
"██████╗  █████╗ ██╗     ███████╗              ███████████",
"██╔══██╗██╔══██╗██║     ██╔════╝           █████████████████ ",
"██████╔╝███████║██║     █████╗           █████████████████████ ",
"██╔═══╝ ██╔══██║██║     ██╔══╝          ███████████████████████ ",
"██║     ██║  ██║███████╗███████╗      ███████████████████████████",
"╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝      ███████████████████████████",
"██╗     ██╗   ██╗███╗   ██╗ █████╗    ███████████████████████████",
"██║     ██║   ██║████╗  ██║██╔══██╗   ███████████████████████████",
"██║     ██║   ██║██╔██╗ ██║███████║     ███████████████████████",
"██║     ██║   ██║██║╚██╗██║██╔══██║      █████████████████████ ",
"███████╗╚██████╔╝██║ ╚████║██║  ██║        █████████████████",
"╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝           ███████████ "
    ]
    centerAscii(logo);
}

        let temChave = false; // Control of key possession
        let jogoAtivo = true; // Flag to continue the game
        let jogoAtivo1 = true;
        let iniciofalha = false;
        let papega = false;
        let tentanovamente = true;
        let floresta1;
        let atalho = false;
        //let gameover = false;
        let saiudafloresta = false;
        let floresta2;
        let jogoAtivo2 = true
        let cabana;
        let mapaachado = false;
        let tentanovamente1 = true;
        let cabana1;
        let kitm = false
        let cabana2;
        let saiudacasa = false;
        let saiudafloresta1 = false;
        let floresta3;
        let jogoAtivo3 = true
        let mapa;
        let objeto;
        let foto;
        let decisão1;
        let decisão2;
        let barca;
        let ponte;
        let tentanovamente2 = true;
        let jogoAtivo4 = true;
        let floresta4;
        let BAD_ENDING = false;
        let BAD_ENDING_2 = false;
        let BAD_ENDING_3 = false;
        let GOOD_ENDING = false;
        let REAL_ENDING = false;
        let fotopega = false
        let leufoto = false
        let casafora = false
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
        let skipsavefilecheck = false
        let configinicial=true
        let inicia =true


//Answers for the TRUE ENDING:;
// 1 (YES);
// 1 (SHOVEL);
// 2 (POT OF GOLD);
// 3 (DOOR);
// 3 (EAST);
// 1 (NORTH);
// 1 (Enter the cabin);
// 1 (Take the map);
// 1 (Return to the fork);
// 3 (EAST);
// 1 (Use map);
// 1 (NORTH);
// 1 (Dig the ground);
// 1 (Read what is written);
// 2 (SOUTH)
// 1 (ENTER THE HOUSE)
// 1 (FOLLOW MAP)
// 1 (DIG)
// END

//Answers for the GOOD ENDING :;
// 1 (YES);
// 1 (SHOVEL);
// 2 (POT OF GOLD);
// 3 (DOOR);
// 3 (EAST);
// 1 (NORTH);
// 1 (Enter the cabin);
// 1 (Take the map);
// 1 (Return to the fork);
// 3 (EAST);
// 1 (Use map);
// 1 (NORTH);
// 1 (Dig the ground);
// 1 (Read what is written);
// 1 (NORTH)
// 1 (START CAR)
// 1 (LEAVE)
// END

//Answers for the BAD ENDING:;
// 1 (YES);
// 1 (SHOVEL);
// 2 (POT OF GOLD);
// 3 (DOOR);
// 1 (NORTH) %50 CHANCE OF SUCCESS
// 1 (Shortcut)

//Answers for the BAD ENDING 2:;
// 1 (YES);
// 1 (SHOVEL);
// 2 (POT OF GOLD);
// 3 (DOOR);
// 3 (EAST);
// 1 (NORTH);
// 1 (Enter the cabin);
// 1 (Take the map);
// 1 (Return to the fork);
// 3 (EAST);
// 1 (Use map);
// 1 (NORTH);
// 1 (Dig the ground);
// 2 (Do not read what is written);
// 1 (NORTH)
// 1 (START CAR)
// 1 (LEAVE)
// END

//Answers for the BAD ENDING 3:
// 1 (YES);
// 1 (SHOVEL);
// 2 (POT OF GOLD);
// 3 (DOOR);
// 3 (EAST);
// 1 (NORTH);
// 1 (Enter the cabin);
// 1 (Take the map);
// 1 (Return to the fork);
// 3 (EAST);
// 1 (Use map);
// 1 (NORTH);
// 2 (Ignore the object);
// 1 (NORTH)
// 1 (START CAR)
// 1 (LEAVE)
// END

const accountFilePath = '../Account/AccountInfo.txt';
const save_conquistas = '../Account/Achievementsavefile.bin'
let Login
let overwrite = "S"
let skipaccount = false
let check = false
let SECRET_ENDING = false


function conquistaannoying(nomeArquivo){
    const Achievementspasta = '../Achievements'
    const caminhocompleto = path.join(Achievementspasta, nomeArquivo)

    return fs.existsSync(caminhocompleto)
}

const arquivoconquistasecreta = 'SECRET_ENDING.bin'
let jogadortem = false


if(conquistaannoying(arquivoconquistasecreta)){
    jogadortem = true
} else {

}

function lerNumeroDoArquivo(nomeDoArquivo) {
    const pastaDosArquivos = '../'; 
    const caminhoCompleto = path.join(pastaDosArquivos, nomeDoArquivo);
  
    try {
      const conteudoDoArquivo = fs.readFileSync(caminhoCompleto, 'utf8');
      
      const numeroLido = parseInt(conteudoDoArquivo.trim(), 10); 
  
      if (isNaN(numeroLido)) {
        return 0; 
      }
  
      return numeroLido;
      
    } catch (erro) {
      return 0; 
    }
  }

  const numero = lerNumeroDoArquivo('HAHAHAHAHAHAHA.txt')
let jafoinorte = false

centertext("")
centertext("██████╗  █████╗ ██╗     ███████╗              ███████████        ");
centertext("██╔══██╗██╔══██╗██║     ██╔════╝           █████████████████     ");
centertext("██████╔╝███████║██║     █████╗           █████████████████████   ");
centertext("██╔═══╝ ██╔══██║██║     ██╔══╝          ███████████████████████  ");
centertext("██║     ██║  ██║███████╗███████╗      ███████████████████████████");
centertext("╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝      ███████████████████████████");
centertext("██╗     ██╗   ██╗███╗   ██╗ █████╗    ███████████████████████████");
centertext("██║     ██║   ██║████╗  ██║██╔══██╗   ███████████████████████████");
centertext("██║     ██║   ██║██╔██╗ ██║███████║     ███████████████████████  ");
centertext("██║     ██║   ██║██║╚██╗██║██╔══██║      █████████████████████   ");
centertext("███████╗╚██████╔╝██║ ╚████║██║  ██║        █████████████████     ");
centertext("╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝           ███████████        ");
centertext("===========================================================================")
centertext("--- TERMINAL EDITION - CREATED BY 2-12 STUDIO ---")
centertext("===========================================================================")
centertext("--- VERSION 3.0 ---")
centertext("===========================================================================")
centertext("-> Rule [01]: Enter numbers only (1, 2, 3, and 4).");
centertext("-> Rule [02]: Do not use special characters.   ");
centertext("-> Rule [03]: Keep the game in full screen!         ");
centertext("-> Rule [04]: Have fun 😉                       ");
pausarParaContinuar()

const folderPath = '../Achievements';
const count = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin')).length;
const finais = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin'));

while (configinicial) {
console.clear()
logoinicial()
centertext("===========================================================================");
centertext("-> Can we start?");
centertext("===========================================================================")
centertext("[01] Yes");
centertext("[02] No");
centertext("[03] My Endings")
centertext("===========================================================================");
let começar = Number(prompt("> "));

if (count >6 || count < 0) {
    console.clear();
   centertext("===========================================================================");
    centertext("-> [ERROR]: You cannot have more than 6 endings or less than 0 endings, please run the progress eraser!.");
     centertext("===========================================================================");
        process.exit(1); // Encerra o programa com código de saída 1 (falha)
}

if (começar === 2) {
    console.clear()
    centertext("===========================================================================");
    centertext("[CLOSING THE GAME]");
    centertext("===========================================================================");
    process.exit(0); // Encerra o programa com código de saída 0 (sucesso)
} else if (começar == 3) {
    console.clear();
    centertext("===========================================================================");
centertext(`-> Endings completed: [${count}/6]`);
centertext('-> List of endings: ' + finais.join(', '));
pausarParaContinuar()
} else if (começar == 1) {
    configinicial = false
}else if (começar !== 1) {
    Opcãoinvalida()
}

}


console.clear()
let nomejogador
while (inicia) {
    logoinicial()
    centertext("==============================================================")
    centertext("BASIC INFORMATION")
    centertext("==============================================================")
    centertext("PLAYER NAME:")
    centertext("*If the space is left blank, the default name will be 'Michael Nevins'*")
    nomeJogador = prompt(">> ");
    if (nomeJogador.trim() === "") {
        nomeJogador = "Michael Nevins";
        inicia=false
    } else if (nomeJogador.length > 10) {
        console.clear()
        centertext("==============================================================")
    centertext("WARNING")
    centertext("==============================================================")
    centertext("Your name cannot be longer than 10 letters. Try Again!")
    pausarParaContinuar()
    } else {
        jogadorpadrao=false
        inicia=false
    }
}
    centertext("Alright... "+nomeJogador)
    pausarParaContinuar();




console.clear()
centertext("███████████████████████████████████████████████████████████████████")
centertext("██                                                               ██")
centertext("██                     ████████████████                          ██")
centertext("██                     ██            ██                          ██")
centertext("██                     ██   ██████   ██                          ██")
centertext("██                     ██  █      █  ██                          ██")
centertext("██                     ██   ██████   ██                          ██")
centertext("██                     ██  ██        ██                          ██")
centertext("██                     ██            ██                          ██")
centertext("██                     ██            ██                          ██")
centertext("██                     ██            ██                          ██")
centertext("██                     ████████████████                          ██")
centertext("██                                                               ██")
centertext("███████████████████████████████████████████████████████████████████")
centertext("")
centertext("===========================================================================");
centertext("[CONTEXT]")
centertext("===========================================================================");
centertext("-> You are " + nomeJogador + ", an electrical engineer who was called to fix")
centertext("poles, but not everything went as planned and")
centertext("you were kidnapped by someone!")
centertext("===========================================================================");
centertext("-> Your objective is to try to escape!")
pausarParaContinuar()

logoinicial()
    centertext("===========================================================================");
    centertext("-> And remember...")
    const vbsFilePath = path.join(__dirname, 'OnlyEN.vbs');
    const commando_aviso = `wscript.exe //nologo "${vbsFilePath}"`
    exec(commando_aviso)
    
    pausarParaContinuar()
    
// START OF ASCII ART FIX: Room (initial)

while (jogoAtivo) { 
    
    let roomArt;

    if (!papega && !temChave){
        roomArt = [
            "███████████████████████████████████████████████████████████████████",
            "██                                                               ██",
            "██    █      █                                                   ██",
            "██   ███     █                                                   ██",
            "██  (Pot)  ███                                                  ██",
            "██          (Shovel)                                             ██",
            "██                                                            █████",
            "██                               ██                           █  ██",
            "██                             ██████                         █  ██",
            "██                            █  ██  █                      ███  ██",
            "██                               ██                         █ █  ██",
            "██                             ██  ██                         █  ██",
            "██                            ██    ██                        █  ██",                                            
            "███████████████████████████████████████████████████████████████████"
        ];
    } else if (papega && !temChave) {
        roomArt = [
            "███████████████████████████████████████████████████████████████████",
            "██                                                               ██",
            "██    █                                                          ██",
            "██   ███                                                         ██",
            "██  (Pot)                                                        ██",
            "██                                                               ██",
            "██                                                            █████",
            "██                               ██                           █  ██",
            "██                             ██████                         █  ██",
            "██                            █  ██  █                      ███  ██",
            "██                               ██                         █ █  ██",
            "██                             ██  ██                         █  ██",
            "██                            ██    ██                        █  ██",                                            
            "███████████████████████████████████████████████████████████████████"
        ];
    } else if (papega && temChave) {
        roomArt = [
            "███████████████████████████████████████████████████████████████████",
            "██                                                               ██",
            "██                                                               ██",
            "██                                                               ██",
            "██                                                               ██",
            "██                                                               ██",
            "██                                                            █████",
            "██                               ██                           █  ██",
            "██                             ██████                         █  ██",
            "██                            █  ██  █                      ███  ██",
            "██                               ██                         █ █  ██",
            "██                             ██  ██                         █  ██",
            "██                            ██    ██                        █  ██",                                            
            "███████████████████████████████████████████████████████████████████"
        ];
    } else if (!papega && temChave) {
        roomArt = [
            "███████████████████████████████████████████████████████████████████",
            "██                                                               ██",
            "██           █                                                   ██",
            "██           █                                                   ██",
            "██          ███                                                  ██",
            "██          (Shovel)                                             ██",
            "██                                                            █████",
            "██                               ██                           █  ██",
            "██                             ██████                         █  ██",
            "██                            █  ██  █                      ███  ██",
            "██                               ██                         █ █  ██",
            "██                             ██  ██                         █  ██",
            "██                            ██    ██                        █  ██",                                            
            "███████████████████████████████████████████████████████████████████"
        ];
    }
    
    centertext("===========================================================================");
    centertext(" ");
    centerAscii(roomArt);
    centertext(" ");
    centertext("===========================================================================");
    centertext("-> You are in a dark room. Moonlight streams through the window.");
    centertext("-> There is a POT OF GOLD in the corner of the room, along with a SHOVEL. And on the other side there is a DOOR.");
    centertext("===========================================================================");
    centertext("[OPTIONS]");
    centertext("===========================================================================")
    centertext("[01] SHOVEL          ");
    centertext("[02] POT OF GOLD");
    centertext("[03] DOOR       ");
    centertext("===========================================================================");
    centertext("[ACTIONS]");
    centertext("===========================================================================")
    centertext("[04] INVENTORY  ")
    centertext("[05] VIEW SANITY")
    centertext("[06] HEALTH        ");
    centertext("===========================================================================");
    centertext("Command?");
    let inicio = Number(prompt("> "));

if (inicio === 1) {
    if (papega) {
        console.clear();
        centertext("===========================================================================");
        centertext("-> You already picked up the shovel");
    } else if (!papega) {
    console.clear();
    centertext("===========================================================================");
    centertext("-> You picked up the shovel, maybe it will be useful in the future");
    papega = true;
    }
} else if (inicio === 2) {
    if (temChave) {
        console.clear();
        centertext("===========================================================================");
        centertext("-> You already picked up the pot of gold and the key");
    } else if (!temChave) {
    console.clear();
    centertext("===========================================================================");
    centertext("-> You picked up the pot of gold, inside it you found a key");
    temChave = true;
    }
} else if (inicio === 3) {
    console.clear();
    centertext("===========================================================================");
    centertext("-> You tried to open the door...");
    if (temChave) {
        centertext("-> You manage to open the door with the found key!");
        centertext("-> [WARNING] You used the key!");
        temChave = false
        jogoAtivo = false;
        saiudacasa = true;
    } else if (!temChave) {
        centertext("-> You try to open the door but it is locked...");
        centertext("===========================================================================");
    }
} else if (inicio == 4) {
    inventario()
} else if (inicio == 5) {
    sanidade()
} else if (inicio == 6) {
    mostrarVida()
} else {
   Opcãoinvalida()
}
}

// END OF ASCII ART FIX: Room (initial)

console.clear();

// START OF ASCII ART FIX: Forest 1 (First Fork)

while (jogoAtivo1) {
    let floresta1Art;
    if (!N && !L && !O){
        floresta1Art = [
            "██████████████████████████████████████████████████████         ████",
            "                   ██                                              ",
            "                 ██                                       /\\      ",
            "               ██                                        WEST     ",
            "         ██  ██                                                    ",
            "       ██  ██                                                      ",
            "     ██                                                            ",
            "██   ██                            ██                 NORTH >      ",
            "██   ██                          ██████                            ",
            "██   ██                         █  ██  █                           ",
            "██   ██                            ██                              ",
            "██   ██                          ██  ██                 EAST      ",
            "██   ██                         ██    ██                 \\/       ",                                            
            "██████████████████████████████████████████████████████         ████"
        ];
    } else if (!N && L && !O) {
        floresta1Art = [
            "██████████████████████████████████████████████████████         ████",
            "                   ██                                              ",
            "                 ██                                       /\\      ",
            "               ██                                        WEST     ",
            "         ██  ██                                                    ",
            "       ██  ██                                                      ",
            "     ██                                                            ",
            "██   ██                            ██                 NORTH >      ",
            "██   ██                          ██████                            ",
            "██   ██                         █  ██  █                           ",
            "██   ██                            ██                 (Already went)     ",
            "██   ██                          ██  ██                 EAST      ",
            "██   ██                         ██    ██                  \\/      ",                                            
            "██████████████████████████████████████████████████████         ████"
        ];
    } else if (N && !L && !O) {
        floresta1Art = [
            "██████████████████████████████████████████████████████         ████",
            "                   ██                                              ",
            "                 ██                                       /\\      ",
            "               ██                                        WEST     ",
            "         ██  ██                                                    ",
            "       ██  ██                                                      ",
            "     ██                                                            ",
            "██   ██                            ██         (Already went) NORTH >     ",
            "██   ██                          ██████                            ",
            "██   ██                         █  ██  █                           ",
            "██   ██                            ██                              ",
            "██   ██                          ██  ██                 EAST      ",
            "██   ██                         ██    ██                  \\/      ",                                            
            "██████████████████████████████████████████████████████         ████"
        ];
    } else if (!N && !L && O) {
        floresta1Art = [
            "██████████████████████████████████████████████████████         ████",
            "                   ██                                              ",
            "                 ██                                       /\\      ",
            "               ██                                        WEST     ",
            "         ██  ██                                         (Already went)   ",
            "       ██  ██                                                      ",
            "     ██                                                            ",
            "██   ██                            ██                 NORTH >      ",
            "██   ██                          ██████                            ",
            "██   ██                         █  ██  █                           ",
            "██   ██                            ██                              ",
            "██   ██                          ██  ██                 EAST      ",
            "██   ██                         ██    ██                  \\/      ",                                            
            "██████████████████████████████████████████████████████         ████"
        ];
    } else if (!N && L && O) {
        floresta1Art = [
            "██████████████████████████████████████████████████████         ████",
            "                   ██                                              ",
            "                 ██                                       /\\      ",
            "               ██                                        WEST     ",
            "         ██  ██                                         (Already went)   ",
            "       ██  ██                                                      ",
            "     ██                                                            ",
            "██   ██                            ██                 NORTH >      ",
            "██   ██                          ██████                            ",
            "██   ██                         █  ██  █                           ",
            "██   ██                            ██                  (Already went)    ",
            "██   ██                          ██  ██                 EAST      ",
            "██   ██                         ██    ██                  \\/      ",
            "██████████████████████████████████████████████████████         ████"
        ];
    } else if (N && L && O) {
        floresta1Art = [
            "██████████████████████████████████████████████████████         ████",
            "                   ██                                              ",
            "                 ██                                       /\\      ",
            "               ██                                        WEST     ",
            "         ██  ██                                         (Already went)   ",
            "       ██  ██                                                      ",
            "     ██                                                            ",
            "██   ██                            ██         (Already went) NORTH >     ",
            "██   ██                          ██████                            ",
            "██   ██                         █  ██  █                           ",
            "██   ██                            ██                  (Already went)    ",
            "██   ██                          ██  ██                 EAST      ",
            "██   ██                         ██    ██                  \\/      ",                                            
            "██████████████████████████████████████████████████████         ████"
        ];
    } else if (N && !L && O) { 
        floresta1Art = [
            "██████████████████████████████████████████████████████         ████",
            "                   ██                                              ",
            "                 ██                                       /\\      ",
            "               ██                                        WEST     ",
            "         ██  ██                                          (Already went)  ",
            "       ██  ██                                                      ",
            "     ██                                                            ",
            "██   ██                            ██         (Already went) NORTH >     ",
            "██   ██                          ██████                            ",
            "██   ██                         █  ██  █                           ",
            "██   ██                            ██                              ",
            "██   ██                          ██  ██                 EAST      ",
            "██   ██                         ██    ██                  \\/      ",                                            
            "██████████████████████████████████████████████████████         ████"
        ];
    } else if (N && L && O) {
        floresta1Art = [
            "██████████████████████████████████████████████████████         ████",
            "                   ██                                              ",
            "                 ██                                       /\\      ",
            "               ██                                        WEST     ",
            "         ██  ██                                         (Already went)   ",
            "       ██  ██                                                      ",
            "     ██                                                            ",
            "██   ██                            ██         (Already went) NORTH >     ",
            "██   ██                          ██████                            ",
            "██   ██                         █  ██  █                           ",
            "██   ██                            ██                  (Already went)    ",
            "██   ██                          ██  ██                 EAST      ",
            "██   ██                         ██    ██                  \\/      ",                                            
            "██████████████████████████████████████████████████████         ████"
        ];
    }
    
    centertext("===========================================================================");
    centertext(" ");
    centerAscii(floresta1Art);
    centertext(" ");
    centertext("===========================================================================");
    centertext("-> Get your reward. The pale moon smiles at you.");
    centertext("-> You are in a forest, there are paths to the NORTH, WEST, and EAST:");
    centertext("===========================================================================");
    centertext("[OPTIONS]");
    centertext("===========================================================================")
    centertext("[01] NORTH");
    centertext("[02] WEST");
    centertext("[03] EAST");
    centertext("===========================================================================");
    centertext("[ACTIONS]");
    centertext("===========================================================================")
    centertext("[04] INVENTORY");
    centertext("[05] SANITY  ");
    centertext("[06] HEALTH      ");
    centertext("===========================================================================");
        
    
    centertext("Command?");
    floresta1 = Number(prompt("> "));

    if (floresta1 === 1) {
        console.clear();

        if (jafoinorte) {
        centertext("===========================================================================")
        centertext("-> You already went North!")
        pausarParaContinuar()
        } else {
        jafoinorte = true
        centertext("===========================================================================");
        centertext("-> You feel more confident going North...");
        N = true
         // Randomização de 50% de chance de sucesso ou falha
         
    if (Math.random() < 0.5) {
        centertext("===========================================================================");
        centertext("-> You trip over a root and fall!");
        centertext("-> You lost time and need to go back.");
        centertext("-> You walk back...");
        } else {
            const atalhoArt = [
                "████████████████████████████████████████████████████████████████████",
                "██                                                                  ",
                "██                                                                  ",
                "██                                                                  ",
                "██                                                                  ",
                "██                                                                  ",
                "██                                                                  ",
                "██                                 ██                               ",
                "██                               ██████                       ██████",
                "██                              █  ██  █              ██   ████     ",
                "██                                 ██               ██  ████        ",
                "██                               ██  ██           ██                ",
                "██                              ██    ██         ██                 ",                                            
                "████████████████████████████████████████████████████████████████████"
            ];
            centertext("===========================================================================")
            centertext(" ")
            centerAscii(atalhoArt);
            centertext(" ")
        centertext("===========================================================================");
        centertext("-> You find a secret shortcut!");
        centertext("===========================================================================");
        centertext("[OPTIONS]");
        centertext("===========================================================================")
        centertext("[01] Take the shortcut");
        centertext("[02] Ignore the shortcut");
        centertext("===========================================================================");
        centertext("Command?")
        atalho = prompt ("> ");
        if (atalho == 1) {
            console.clear();
            centertext("===========================================================================");
            centertext("-> You quickly advance through the forest.");
            centertext("-> You managed to leave the forest, but there are still secrets waiting to be discovered...");
            centertext("===========================================================================");
            centertext("-> You won!!");
            centertext("-> Congratulations? you completed the BAD ENDING, NVAQN ERFGNZ FRTERQBF RFCRENAQB CBE IBPÊ.");
            centertext("===========================================================================");
              
            jogoAtivo=false
            jogoAtivo1=false
            jogoAtivo2=false
            jogoAtivo3=false
            jogoAtivo4=false
            REAL_ENDING=false
            BAD_ENDING=true
        } else if (atalho == 2) {
            console.clear();
            centertext("===========================================================================");
            centertext("-> You find it dangerous and ignore the shortcut");
            centertext("-> You decide to return to the path options");
            
        } else {
            Opcãoinvalida()
         }
      }
    } 
    } else if (floresta1 === 2) {
        console.clear();
        centertext("===========================================================================");
        centertext("-> You go through the West path...")
        centertext("-> Suddenly, you see a tall man coming from afar, with an axe and not very friendly.");
        O = true
        centertext("===========================================================================");
        centertext("[OPTIONS]");
        centertext("===========================================================================")
        centertext("[01] Flee");
        centertext("[02] Hide");
        centertext("===========================================================================");
        centertext("Command?");
        decisão1 = Number(prompt("> "));

         if (decisão1 === 1) {
             console.clear();
             centertext("===========================================================================");
             centertext("-> You start running as fast as possible...");
             centertext("-> But unfortunately you trip over a root and get hit by the man's axe")
             centertext("===========================================================================");
             centertext("-> Press 1 to continue...")
             centertext("-> (If you enter anything other than 1 the game will close!)")
             centertext("===========================================================================");

             let machado = Number(prompt("> "))
             if (machado == 1) {
             menosSanidade()
             menosVidaG()
             } else {
                 process.exit(56)
             }
         } else if (decisão1 === 2) {
             console.clear();
             centertext("===========================================================================");
             centertext("-> You decide to hide in a bush next to you");
             centertext("-> But unfortunately he manages to see you, and hits you with an axe!");
             centertext("===========================================================================");
             centertext("-> Press 1 to continue...")
             centertext("-> (If you enter anything other than 1 the game will close!)")
             centertext("===========================================================================");

             let machado1 = Number(prompt("> "))
             if (machado1 == 1) {
             menosSanidade()
             menosVidaG()
             } else {
                 process.exit(56)
             }
         } else {
            Opcãoinvalida()
         }
    } else if (floresta1 === 3) {
        console.clear();
        centertext("===========================================================================");
        centertext("-> After thinking, you decide to go East...") 
        L = true
        centertext("-> You start entering the dense forest...");
        saiudafloresta = true;
        jogoAtivo1 = false;
        back = false
    } else if (floresta1 == 4) {
        inventario()
    } else if (floresta1 == 5) {
        sanidade()
    } else if (floresta1 == 6) {
        mostrarVida()
    } else {
        Opcãoinvalida()
     }
}

// END OF ASCII ART FIX: Forest 1 (First Fork)

console.clear();

// START OF ASCII ART FIX: Forest 2 (Second Fork)

while (jogoAtivo2) {
    let floresta2Art;
    if (!N && !S && !L) {
        floresta2Art = [
            "██████████████████████████████████████████████████          █████",
            "                   ██                                            ",
            "                 ██                                     /\\      ",
            "               ██                                      NORTH     ",
            "         ██  ██                                                  ",
            "       ██  ██                                                    ",
            "     ██                                                          ",
            "██   ██                            ██                     EAST >",
            "██   ██                          ██████                          ",
            "██   ██                         █  ██  █                         ",
            "██   ██                            ██                   SOUTH      ",
            "██   ██                          ██  ██                 \\/       ",
            "██   ██                         ██    ██                         ",
            "████████████████████████████████████████████████            █████"
        ];
    } else if (N && S && L) {
        floresta2Art = [
            "██████████████████████████████████████████████████          █████",
            "                   ██                                            ",
            "                 ██                                     /\\      ",
            "               ██                                      NORTH     ",
            "         ██  ██                                       (Already went)   ",
            "       ██  ██                                                    ",
            "     ██                                                          ",
            "██   ██                            ██            (Already went) EAST >",
            "██   ██                          ██████                          ",
            "██   ██                         █  ██  █              (Already went)   ",
            "██   ██                            ██                   SOUTH      ",
            "██   ██                          ██  ██                 \\/       ",
            "██   ██                         ██    ██                         ",
            "████████████████████████████████████████████████            █████"
        ];
    } else if (!N && !S && L) {
        floresta2Art = [
            "██████████████████████████████████████████████████          █████",
            "                   ██                                            ",
            "                 ██                                     /\\      ",
            "               ██                                      NORTH     ",
            "         ██  ██                                                  ",
            "       ██  ██                                                    ",
            "     ██                                                          ",
            "██   ██                            ██            (Already went) EAST >",
            "██   ██                          ██████                          ",
            "██   ██                         █  ██  █                         ",
            "██   ██                            ██                   SOUTH      ",
            "██   ██                          ██  ██                 \\/       ",
            "██   ██                         ██    ██                         ",
            "████████████████████████████████████████████████            █████"
        ];
    } else if (!N && S && !L) {
        floresta2Art = [
            "██████████████████████████████████████████████████          █████",
            "                   ██                                            ",
            "                 ██                                     /\\      ",
            "               ██                                      NORTH     ",
            "         ██  ██                                                  ",
            "       ██  ██                                                    ",
            "     ██                                                          ",
            "██   ██                            ██                     EAST >",
            "██   ██                          ██████                          ",
            "██   ██                         █  ██  █              (Already went)   ",
            "██   ██                            ██                   SOUTH      ",
            "██   ██                          ██  ██                 \\/       ",
            "██   ██                         ██    ██                         ",
            "████████████████████████████████████████████████            █████"
        ];
    } else if (N && !S && !L) {
        floresta2Art = [
            "██████████████████████████████████████████████████          █████",
            "                   ██                                            ",
            "                 ██                                     /\\      ",
            "               ██                                      NORTH     ",
            "         ██  ██                                       (Already went)   ",
            "       ██  ██                                                    ",
            "     ██                                                          ",
            "██   ██                            ██                     EAST >",
            "██   ██                          ██████                          ",
            "██   ██                         █  ██  █                         ",
            "██   ██                            ██                   SOUTH      ",
            "██   ██                          ██  ██                 \\/       ",
            "██   ██                         ██    ██                         ",
            "████████████████████████████████████████████████            █████"
        ];
    } else if (!N && S && L) {
        floresta2Art = [
            "██████████████████████████████████████████████████          █████",
            "                   ██                                            ",
            "                 ██                                     /\\      ",
            "               ██                                      NORTH     ",
            "         ██  ██                                                  ",
            "       ██  ██                                                    ",
            "     ██                                                          ",
            "██   ██                            ██            (Already went) EAST >",
            "██   ██                          ██████                          ",
            "██   ██                         █  ██  █              (Already went)   ",
            "██   ██                            ██                   SOUTH      ",
            "██   ██                          ██  ██                 \\/       ",
            "██   ██                         ██    ██                         ",
            "████████████████████████████████████████████████            █████"
        ];
    } else if (N && S && !L) {
        floresta2Art = [
            "██████████████████████████████████████████████████          █████",
            "                   ██                                            ",
            "                 ██                                     /\\      ",
            "               ██                                      NORTH     ",
            "         ██  ██                                       (Already went)   ",
            "       ██  ██                                                    ",
            "     ██                                                          ",
            "██   ██                            ██                     EAST >",
            "██   ██                          ██████                          ",
            "██   ██                         █  ██  █              (Already went)   ",
            "██   ██                            ██                   SOUTH      ",
            "██   ██                          ██  ██                 \\/       ",
            "██   ██                         ██    ██                         ",
            "████████████████████████████████████████████████            █████"
        ];
    } else if (N && !S && L) {
        floresta2Art = [
            "██████████████████████████████████████████████████          █████",
            "                   ██                                            ",
            "                 ██                                     /\\      ",
            "               ██                                      NORTH     ",
            "         ██  ██                                       (Already went)   ",
            "       ██  ██                                                    ",
            "     ██                                                          ",
            "██   ██                            ██            (Already went) EAST >",
            "██   ██                          ██████                          ",
            "██   ██                         █  ██  █                         ",
            "██   ██                            ██                   SOUTH      ",
            "██   ██                          ██  ██                 \\/       ",
            "██   ██                         ██    ██                         ",
            "████████████████████████████████████████████████            █████"
        ];
    }
    
    centertext("===========================================================================");
    centertext(" ");
    centerAscii(floresta2Art);
    centertext(" ");
    centertext("===========================================================================");
    centertext("-> Get your reward. The pale moon smiles at you.");
    centertext("-> You are in a forest, there are paths to the NORTH, SOUTH, and EAST:");
    centertext("===========================================================================");
    centertext("[OPTIONS]");
    centertext("===========================================================================")
    centertext("[01] NORTH.");
    centertext("[02] SOUTH.  ");
    centertext("[03] EAST.");
    centertext("============================================================================");
    centertext("[ACTIONS]");
    centertext("===========================================================================")
    centertext("[04] INVENTORY");
    centertext("[05] SANITY  ");
    centertext("[06] HEALTH      ");
    centertext("===========================================================================");
    centertext("Command?");
    floresta2 = Number(prompt("> "));

    if (floresta2 === 1) {
        if (!tentanovamente1) {
            centertext(" ");
            console.clear();
            centertext("===========================================================================");
            centertext("-> You already went there!");
            centertext("===========================================================================");
        } else if (tentanovamente1) {
        console.clear();
        
        const cabanaArt = [
            "                    █████████████████████████████████               ",
            "                    ██   ██                        ██               ",
            "                   ██  ██                           ██              ",
            "                 ██  ██                               ██            ",
            "                ██  ██                                 ██           ",
            "               ██  ██                                   ██          ",
            "               ██  ██                                   ██          ",
            "               ██  ██                                   ██          ",
            "               ██  ██                                   ██          ",
            "               ██  ██               ████                ██          ",
            "               ██  ██               █  █                ██          ",
            "               ██  ██               █  █                ██          ",
            "               ██  ██               █  █                ██          ",
            "████████████████████████████████████████████████████████████████████"
        ];
        
        centerAscii(cabanaArt);
        centertext(" ")
        centertext("===========================================================================");
        centertext("-> You decide to go North...");
        N = true
        centertext("-> You find an old wooden cabin");
        centertext("===========================================================================");
        centertext("[OPTIONS]");
        centertext("===========================================================================")
        centertext("[01] Enter the cabin");
        centertext("[02] Ignore the cabin");
        centertext("===========================================================================");
        centertext("Command?");
        cabana = prompt("> ");

        if (cabana === "1") {
            console.clear();
            
            const bauArt = [
                "████████████████████████████████████████████████████████████████████",
                "██                                                                ██",
                "██                                                                ██",
                "██                                                                ██",
                "██                                                                ██",
                "██                                                                ██",
                "██                                                                ██",
                "██     ██                                             (Chest)       ██",
                "██   ██████                                        ████████████   ██",
                "██  █  ██  █                                      █            █  ██",
                "██     ██                                         █-----██-----█  ██",
                "██   ██  ██                                       █            █  ██",
                "██  ██    ██                                      █   (Map)   █  ██",                                            
                "████████████████████████████████████████████████████████████████████"
            ];
            
            centertext("===========================================================================")
            centertext(" ")
            centerAscii(bauArt);
            centertext(" ")
            centertext("===========================================================================");
            centertext("-> You enter the cabin and find an old chest");
            centertext("-> Inside the chest you find a scroll with a map");
            centertext("===========================================================================");
            centertext("[OPTIONS]");
            centertext("===========================================================================")
            centertext("[01] Take the map                       ");
            centertext("[02] Go back to the fork           ");
            centertext("[03] Take Medkit (Heals 50% health)");
            centertext("===========================================================================");
            centertext("Command?");
            cabana1 = prompt("> ");

            if (cabana1 === "1") {
                console.clear();
                centertext("===========================================================================");
                centertext("-> You take the map and leave the cabin");
                tentanovamente1 = false;
                mapaachado = true;
                centertext("===========================================================================");
                centertext("[OPTIONS]");
                centertext("===========================================================================")
                centertext("[01] Go back to the fork");
                centertext("===========================================================================");
                centertext("Command?");
                cabana2 = prompt("> ");
                if (cabana2 === "1") {
                    console.clear();
                    centertext(" ")
                    centertext("===========================================================================");
                    centertext("-> You return to the fork...");
                }  else if (cabana2 !== 1) {
                    Opcãoinvalida()
                }
            } else if (cabana1 === "2") {
                console.clear();
                centertext("===========================================================================");
                centertext("-> You return to the fork")
            } else if (cabana1 == "3") {
                if (kitm == true) {
                    console.clear()
                    centertext("===========================================================================");
                    centertext("-> You already took the medkit!")
                    centertext("===========================================================================");
                centertext("-> Press [1] to continue!")
                centertext("===========================================================================");
                let by1 = Number(prompt("> "))
                if (by1 == 1){
                    console.clear()
                } else {
                    Opcãoinvalida()
                }
                } else {
                console.clear()
                centertext("===========================================================================");
                centertext("-> You quickly take the medkit and start your medication and bandages")
                centertext("-> Congratulations, you healed your health by +50.")
                centertext("===========================================================================");
                centertext("-> Press [1] to continue!")
                centertext("===========================================================================");
                kitm = true
                let by = Number(prompt("> "))
                if (by == 1) {
                Vida+=50
                mostrarVida()
                } else {
                    Opcãoinvalida()
                }
            }
            } else {
                Opcãoinvalida()
             }
        } else if (cabana === "2") {
            console.clear();
            
            const ponteArt = [
                "███████████████████████████████████████████████████████████████████     ",
                "██                                                                      ",
                "██                                                                      ",
                "██                                                                      ",
                "██                                                                      ",
                "██                                                                      ",
                "██                                                     █                ",
                "██                    ██                              ██                ",
                "██                  ██████                            ██                ",
                "██                 █  ██  █                           ██                ",
                "██                    ██                              ██                ",
                "██                  ██  ██                            ██-------         ",
                "██                 ██    ██                           ██     ------     ",
                "████████████████████████████████████████████████████████████████████ ---"
            ];
            
            centertext("===========================================================================")
            centertext(" ")
            centerAscii(ponteArt);
            centertext(" ")
            centertext("===========================================================================");
            centertext("-> You ignore the cabin and continue your path...");
            centertext("-> After walking a bit you find a broken bridge");
            centertext("===========================================================================");
            centertext("[OPTIONS]");
           centertext("===========================================================================")
            centertext("[01] Jump the bridge");
            centertext("[02] Go back to the fork");
            centertext("===========================================================================");
            centertext("Command?");
            ponte = prompt("> ");

            if (ponte === "1") {
                console.clear();
                gameover()
                centertext("===========================================================================");
                centertext("-> You try to jump the bridge, but you fall and die");
                centertext("-> You died!!");
                centertext("===========================================================================");
                process.exit(1);




            }  else if (ponte === "2") {
                console.clear();
                centertext("===========================================================================");
                centertext("-> You return to the fork...");
            } else {
                Opcãoinvalida()
             }
        } else {
            Opcãoinvalida()
         }
        }
    } else if (floresta2 == 2) {
        console.clear();
        
        const lagoBarcoArt = [
            "                                                                               ",
            "                                                                               ",
            "                                                                               ",
            "                                                                  ██           ",
            "         ██                                                       █████        ",
            "       ██████                                                     █████        ",
            "      █  ██  █                                                    ██           ",
            "         ██                                                       ██           ",
            "       ██  ██                                         █████████████████████████",
            "      ██    ██                                             ████████████████    ",
            "█████████████████████████████████████████████████                              ",
        ];
        
        centerAscii(lagoBarcoArt);
        centertext(" ")
        centertext("===========================================================================");
        centertext("-> You go South.");
        S = true
        centertext("-> You find a lake, and a boat in front of you");
        centertext("===========================================================================");
        centertext("[OPTIONS]");
        centertext("===========================================================================")
        centertext("[01] Take the boat");
        centertext("[02] Ignore the boat");
        centertext("[03] Go back to the fork");
        centertext("===========================================================================");
        centertext("Command?");
        barco = Number(prompt("> "));
        centertext(" ");

        if (barco === 1) {
            console.clear();
            centertext("===========================================================================");
            centertext("-> You take the boat and start rowing...");
            centertext("-> But the boat starts to sink, inside the river you see a submerged cave!")
            centertext("===========================================================================");
        centertext("[OPTIONS]");
        centertext("===========================================================================")
        centertext("[01] Ignore cave");
        centertext("[02] Enter inside the cave");
        centertext("===========================================================================");
        centertext("Command?");
        barco2 = Number(prompt("> "));
        centertext(" ");

        if (barco2 == 1) {
            console.clear();
            centertext("===========================================================================");
            centertext("-> You ignore the cave and decide to swim back to the trail...");
        } else if (barco2 == 2) {
            console.clear();
            centertext("===========================================================================");
            centertext("-> You enter inside the cave, and inside it you become horrified...")
            centertext("-> Inside you see several tombstones and in the center of the cemetery, there is an open scroll...")
            centertext("===========================================================================");
            centertext("[OPTIONS]")
           centertext("===========================================================================");
            centertext("[01] Read")
            centertext("[02] Do Not Read")
            centertext("[03] DESTROY!")
            centertext("===========================================================================");
            pergaminho = Number(prompt("> "));

            if(pergaminho == 1) {
                console.clear()
                if (destruir == false){
                centertext("===========================================================================");
                centertext("You pick up the scroll and start reading...")
                centertext("===========================================================================");
                centertext("[DAY 01]: Where am I?")
                centertext("===========================================================================");
centertext("I'm not sure where to start.                                                    ");
centertext("My hands are still trembling so much I can barely hold this makeshift pen...");
centertext("a piece of coal I found near one of the... tombstones.                       ");
centertext("In a hidden lake in a forest that was already sinister by itself.                  ");
centertext("I think it's been two days since I got lost from the main trail.                         ");
centertext("I tried to find my way back, but every tree looked the same as the last.       ");
centertext("Night fell, and the fear really started to set in.                         ");
centertext("")
centertext("Today, exhausted and thirsty, I spotted this strangely still lake.                ");
centertext("The water was dark, but the promise of relief made me approach.                    ");
centertext("That's when I saw a dark shadow beneath the surface, near the rocky shore.       ");
centertext("A kind of opening, a submerged crack in the rock.                            ");
centertext("In an impulse of desperation, thinking it might be a grotto for shelter, I dove.  ");
centertext("The water was icy cold. I followed the dark crack, holding my breath.                 ");
centertext("I emerged in an air pocket, spitting water, my heart pounding.                         ");
centertext("")
centertext("My weak flashlight illuminated the unthinkable: the rows of tombstones.              ");
centertext("And in the center of this macabre chamber, on a smooth stone, this scroll.         ");
centertext("I am trapped, lost, and now I have found a submerged cemetery.                   ");
centertext("What kind of madness is this? I need to record everything.                              "); 
centertext("I hope this coal lasts. And that I also last.                               ");
                centertext("===========================================================================");
                centertext("-> Press [1] to continue reading, or press [2] to close")
                centertext("===========================================================================");
teste = Number(prompt("> "))

if (teste == 1) {
    console.clear()
    centertext("===========================================================================");
    centertext("[DAY 02]: Is this real?")
    centertext("===========================================================================");
centertext("I spent the night awake, if there is such a thing as night in this damp hole.               ");
centertext("The light from the flashlight died. Now I only have the darkness and the sound of water.            ");
centertext("Every shadow dancing with the flashlight's flame looked like a moving tombstone.   ");
centertext("I felt the rocky walls, looking for another exit, a crack of hope.     ");
centertext("Nothing. Just the submerged passage where I entered yesterday, like a liquid nightmare.");
centertext("")
centertext("My throat is dry, hunger is churning my stomach.                            ");
centertext("I look at this coal, at these words I write. Is it real?                  ");
centertext("The tombstones are still there, cold, firm. A silent testimony.                ");
centertext("It wasn't a delirium from exhaustion. This place exists.                               ");
centertext("")
centertext("The scroll... I picked it up again. My hands dirty with earth and fear.               ");
centertext("The writing is ancient, almost wiped out by the constant humidity.                        ");
centertext("I managed to decipher some loose words: 'lost', 'water', 'screams'.          ");
centertext("Screams? From whom? I felt a chill run down my spine.                       ");
centertext("This diary is not a good omen. Is it the record of another desperate person?           ");
centertext("I need to conserve the coal. And my strength.                                        ");
centertext("")
centertext("I tried screaming for help earlier, but only the mocking echo replied.            ");
centertext("The forest outside lost me. This cave wants to swallow me.                      ");
centertext("")
centertext("Sanity is a thin line over an abyss of tombstones.                         ");
    centertext("===========================================================================");
    centertext("-> At the end you see a lot of blood and fear for the writer's life...")
    centertext("===========================================================================");
    centertext("-> Press [1] to try to swim back to the path, or [2] to stay in the cave")
    centertext("===========================================================================");

teste2 = Number(prompt("> ")) 
if (teste2 == 1) {
    console.clear()
    centertext("===========================================================================");
    centertext("-> Seeing that you don't have many options, you try to swim back...")

    if (Math.random() < 0.5) {
    centertext("===========================================================================");
    centertext("-> You succeed! ")
    centertext("===========================================================================");
    } else {
        Vida-=100
        centertext("===========================================================================");
        centertext("-> You die drowning!")
        pausarParaContinuar()
        menosVidaG()
        centertext("===========================================================================");
    }
} else if (teste2 == 2) {
    console.clear()
    centertext("===========================================================================");
    centertext("-> You feel afraid to try to go back and decide to stay in the cave.")
    centertext("-> To pass the time you start searching the location and in the corner of a tombstone you see a key!")
    centertext("-> You pick it up...")
    centertext("===========================================================================");
    centertext("[KEY COLLECTED]")
    chavedois = true
    centertext("===========================================================================");
    centertext("2 days later you realize that there is really nothing to do down there.")
    centertext("And then you return to the surface...")
} else {
    Opcãoinvalida()
}

} else if (teste == 2) {
    console.clear()
    centertext("===========================================================================");
    centertext("-> You stop reading, out of fear.")
    centertext("-> Seeing that you don't have many options, you try to swim back...")
    centertext("===========================================================================");
    centertext("-> You succeed! ")
    centertext("===========================================================================");
} else {
    Opcãoinvalida()
}

                } else {
                    console.clear()
                    centertext("===========================================================================")
                    centertext("-> You destroyed the scroll, meaning you can no longer read it!")
                    centertext("===========================================================================")
                    centertext("-> Press [1] to continue")
                    centertext("===========================================================================")
                    let ab = Number(prompt("> "))
                    if (ab == 1) {
                        console.clear()
                    } else {
                        console.clear()
                        centertext("===========================================================================")
                        centertext("[ERROR 678] Invalid Value!")
                        centertext("===========================================================================")
                        process.exit()
                    }
                }

            } else if (pergaminho == 2) {
                console.clear()
                centertext("===========================================================================");
        centertext("-> Seeing that you don't have many options, you try to swim back...")
    centertext("===========================================================================");

            } else if (pergaminho == 3) {
                console.clear()
                destruir = true
                centertext("===========================================================================");
                centertext("-> YOU DESTROYED THE SCROLL!")
                centertext("-> THIS ACTION WILL CAUSE CONSEQUENCES IN THE FUTURE...")
                centertext("===========================================================================");
                centertext("-> Seeing that you don't have many options, you try to swim back...")
                
            } else {
                Opcãoinvalida()
            }
        } else {
            Opcãoinvalida()
        }
        } else if (barco === 2) {
            console.clear();
            centertext("===========================================================================");
            centertext("-> You ignore the boat and continue your path...");
            centertext("-> After walking a bit you find a wolf");
            centertext("===========================================================================");
            centertext("[OPTIONS]");
            centertext("===========================================================================")
            centertext("[01] Run");
            centertext("[02] Hide");
            centertext("===========================================================================");
            centertext("Command?");
            decisão2 = Number(prompt("> "));
            centertext(" ");

            if (decisão2 === 1) {
                console.clear();
                centertext("===========================================================================");
                centertext("-> You start running as fast as possible...");
                centertext("-> But the wolf is faster and bites you, you are wounded at a medium level!");
                centertext("===========================================================================");
                centertext("-> Press [1] to continue")
                centertext("===========================================================================");
                let a1 = Number(prompt("> "))

                if (a1 == 1) {
                menosVidaM()
                } else {
                    Opcãoinvalida()
                }
            } else if (decisão2 === 2) {
                console.clear();
                centertext("===========================================================================");
                centertext("-> You hide in a cave next door");
                centertext("-> Inside it you worsen your situation, as there are several animals that bite you, including the wolf!");
                centertext("-> You are severely wounded.")
                centertext("===========================================================================");
                centertext("-> Press [1] to continue")
                centertext("===========================================================================");
                let a2 = Number(prompt("> "))

                if (a2 == 1) {
                menosVidaMG()
                } else {
                    Opcãoinvalida()
                }

            } else {
                Opcãoinvalida()
             }
    
} else if (barco === 3) {
    console.clear();
    centertext("===========================================================================");
    centertext("-> You return to the fork...");
    } else {
        Opcãoinvalida()
    }
} else if (floresta2 == 3) {
    console.clear();
    centertext("===========================================================================");
    centertext("-> You decide to go East.");
    L = true
    centertext("-> You cross the leaves and branches, and find another fork");
   jogoAtivo2 = false;
   saiudafloresta1 = true;
} else if (floresta2 == 4) {
inventario()
} else if (floresta2 == 5) {
    sanidade()
} else if (floresta2 == 6) {
    mostrarVida()
} else {
    Opcãoinvalida()
 }
}

// END OF ASCII ART FIX: Forest 2 (Second Fork)

console.clear();

// START OF ASCII ART FIX: Forest 3 (Third Fork)

while (jogoAtivo3) {
    
    if (mapaachado) {
        let mapa67 = false
        while (mapa67 == false) {
        centertext("-> Do you want to use the map?");
        centertext("===========================================================================");
        centertext("[OPTIONS]");
        centertext("===========================================================================")
        centertext("[01] Yes");
        centertext("[02] No");
        centertext("===========================================================================");
        centertext("[ACTIONS]");
        centertext("===========================================================================")
        centertext("[03] Inventory")
        centertext("===========================================================================");
        centertext("Command?");
        mapa = prompt("> ");
        centertext(" ");

        if (mapa == 1){
            console.clear();
            mapa67 = true
            centertext("===========================================================================");
            centertext("-> The map says the North path is the correct way");
            centertext("===========================================================================");
            centertext("-> [WARNING] You cannot use the map again");
            pausarParaContinuar()
            mapaachado = false;

        } else if (mapa == 2) {
            console.clear();
            mapa67 = true
            centertext("===========================================================================");
            centertext("-> You decide not to use the map");
            pausarParaContinuar()

        } else if (mapa == 3) {
            inventario()
        } else {
            console.clear();
            centertext("===========================================================================");
            centertext("-> Invalid Options, you lost the chance to use the map!!")
            pausarParaContinuar()
            mapaachado = false
        }
    }
    }
    
    let floresta3Art;
    if (!N && !S && !O) {
        floresta3Art = [
            "██████████████████████████████████████████████             ██",
            "██           ██                                    /\\        ",
            "██           ██                                   NORTH      ",
            "██ ██        ██                                              ",
            "██   ████████                                                ",
            "██ ██               ██                                       ",
            "████              ██████                 ██          WEST > ",            
            "██               █  ██  █        ████████████                ",
            "██                  ██               █ █ ██                  ",
            "██                ██  ██             █ █           SOUTH       ",
            "██               ██    ██            █ █           \\/        ",
            "██████████████████████████████████████████████             ██"
        ];
    } else if (N && S && O) {
        floresta3Art = [
            "██████████████████████████████████████████████             ██",
            "██           ██                                    /\\        ",
            "██           ██                                   NORTH      ",
            "██ ██        ██                                  (Already went)    ",
            "██   ████████                                                ",
            "██ ██               ██                                       ",
            "████              ██████                 ██  (Already went) WEST >",            
            "██               █  ██  █        ████████████                ",
            "██                  ██               █ █ ██      (Already went)    ",
            "██                ██  ██             █ █           SOUTH       ",
            "██               ██    ██            █ █           \\/        ",
            "██████████████████████████████████████████████             ██"
        ];
    } else if (!N && !S && O) {
        floresta3Art = [
            "██████████████████████████████████████████████             ██",
            "██           ██                                    /\\        ",
            "██           ██                                   NORTH      ",
            "██ ██        ██                                              ",
            "██   ████████                                                ",
            "██ ██               ██                                       ",
            "████              ██████                 ██  (Already went) WEST >",            
            "██               █  ██  █        ████████████                ",
            "██                  ██               █ █ ██                  ",
            "██                ██  ██             █ █           SOUTH       ",
            "██               ██    ██            █ █           \\/        ",
            "██████████████████████████████████████████████             ██"
        ];
    } else if (!N && S && !O) {
        floresta3Art = [
            "██████████████████████████████████████████████             ██",
            "██           ██                                    /\\        ",
            "██           ██                                   NORTH      ",
            "██ ██        ██                                              ",
            "██   ████████                                                ",
            "██ ██               ██                                       ",
            "████              ██████                 ██          WEST > ",            
            "██               █  ██  █        ████████████                ",
            "██                  ██               █ █ ██      (Already went)    ",
            "██                ██  ██             █ █           SOUTH       ",
            "██               ██    ██            █ █           \\/        ",
            "██████████████████████████████████████████████             ██"
        ];
    } else if (N && !S && !O) {
        floresta3Art = [
            "██████████████████████████████████████████████             ██",
            "██           ██                                    /\\        ",
            "██           ██                                   NORTH      ",
            "██ ██        ██                                  (Already went)    ",
            "██   ████████                                                ",
            "██ ██               ██                                       ",
            "████              ██████                 ██          WEST > ",            
            "██               █  ██  █        ████████████                ",
            "██                  ██               █ █ ██                  ",
            "██                ██  ██             █ █           SOUTH       ",
            "██               ██    ██            █ █           \\/        ",
            "██████████████████████████████████████████████             ██"
        ];
    } else if (!N && S && O) {
        floresta3Art = [
            "██████████████████████████████████████████████             ██",
            "██           ██                                    /\\        ",
            "██           ██                                   NORTH      ",
            "██ ██        ██                                              ",
            "██   ████████                                                ",
            "██ ██               ██                                       ",
            "████              ██████                 ██  (Already went) WEST >",            
            "██               █  ██  █        ████████████                ",
            "██                  ██               █ █ ██      (Already went)    ",
            "██                ██  ██             █ █           SOUTH       ",
            "██               ██    ██            █ █           \\/        ",
            "██████████████████████████████████████████████             ██"
        ];
    } else if (N && !S && O) {
        floresta3Art = [
            "██████████████████████████████████████████████             ██",
            "██           ██                                    /\\        ",
            "██           ██                                   NORTH      ",
            "██ ██        ██                                  (Already went)    ",
            "██   ████████                                                ",
            "██ ██               ██                                       ",
            "████              ██████                 ██  (Already went) WEST >",
            "██               █  ██  █        ████████████                ",
            "██                  ██               █ █ ██      (Already went)    ",
            "██                ██  ██             █ █           SOUTH       ",
            "██               ██    ██            █ █           \\/        ",
            "██████████████████████████████████████████████             ██"
        ];
    } else if (N && S && !O) {
        floresta3Art = [
            "██████████████████████████████████████████████             ██",
            "██           ██                                    /\\        ",
            "██           ██                                   NORTH      ",
            "██ ██        ██                                  (Already went)    ",
            "██   ████████                                                ",
            "██ ██               ██                                       ",
            "████              ██████                 ██          WEST > ",
            "██               █  ██  █        ████████████                ",
            "██                  ██               █ █ ██      (Already went)    ",
            "██                ██  ██             █ █           SOUTH       ",
            "██               ██    ██            █ █           \\/        ",
            "██████████████████████████████████████████████             ██"
        ];
    } 
    
    centertext("===========================================================================");
    centerAscii(floresta3Art);
    centertext(" ");
    centertext("===========================================================================");
    centertext("-> Get your reward. The pale moon smiles at you.");
    centertext("-> You are in a forest, there are paths to the NORTH, SOUTH, and WEST:");
    centertext("===========================================================================");
    centertext("[OPTIONS]");
    centertext("===========================================================================");
    centertext("[01] NORTH.")
    centertext("[02] SOUTH.");
    centertext("[03] WEST.");
    centertext("===========================================================================");
    centertext("[ACTIONS]");
    centertext("===========================================================================");
    centertext("[04] INVENTORY");
    centertext("[05] SANITY");
    centertext("[06] HEALTH");
    centertext("===========================================================================");
    centertext("Command?");
    floresta3 = Number(prompt("> "));
    centertext(" ");

    if (floresta3 == 1)  { //Norte
        console.clear();
        
        const objetoArt = [
            "█████████████████████████████████████████████████████████████",
            "██           ██                                              ",
            "██           ██                                              ",
            "██ ██        ██                                              ",
            "██   ████████                                                ",
            "██ ██               ██                                       ",
            "████              ██████                                     ",
            "██               █  ██  █                                    ",
            "██                  ██                                       ",
            "██                ██  ██               \\    /                 ",
            "██               ██    ██          -   (Shine)  -           ",
            "█████████████████████████████████████████████████████████████"
        ];
        
        centerAscii(objetoArt);
        centertext(" ")
        centertext("===========================================================================");
        centertext("-> You decide to go North.");
        centertext("-> You pass through the path and find something shiny on the ground");
        centertext("===========================================================================");
        centertext("[OPTIONS]");
        centertext("===========================================================================");
        centertext("[01] Dig the ground");
        centertext("[02] Ignore the object");
        centertext("===========================================================================");
        centertext("Command?");
        objeto = prompt("> ");

        if (objeto == 1) { // Dig the ground
            if (papega) {
                console.clear();
                
                const fotoArt = [
                    "████████████████████████████████",
                    "████████████████████████████████",
                    "██           ██               ██",
                    "██           ██               ██",
                    "██ ██        ██               ██",
                    "██   ████████                 ██",
                    "██ ██                         ██",
                    "████                ██        ██",
                    "██                 ████       ██",
                    "██                █ ██ █      ██",
                    "██                  ██        ██",
                    "██                 █  █       ██",
                    "████████████████████████████████",
                    "████████████████████████████████",
                    "████████████████████████████████",
                    "████████████████████████████████"
                ];
                
                centerAscii(fotoArt);
                centertext(" ")
            centertext("===========================================================================");
            centertext("-> You dig the ground and find a photo of a child");
            centertext("-> On the photo you see something written on the back");
            centertext("===========================================================================");
            centertext("[OPTIONS]");
            centertext("===========================================================================");
            centertext("[01] Read what is written");
            centertext("[02] Ignore the photo");
            centertext("===========================================================================");
            fotopega = true
            centertext("Command?");
            foto = prompt("> ");

            if (foto==1) {
                console.clear();
                centertext("===========================================================================");
                centertext("-> The photo says: 'YOU SHOULDN'T HAVE COME HERE'");
                centertext("===========================================================================");
                centertext("-> You feel a little scared...");
                centertext("-> After a while you decide to continue your path");
                centertext("-> You arrive at a fork");
                pausarParaContinuar()
                    menosSanidade()
                
                fotopega = true
                leufoto = true
                jogoAtivo3 = false;
                saiudafloresta2 = true;
            } else if (foto == 2 ) {
                console.clear();
                centertext("===========================================================================");
                centertext("-> You ignore the photo and continue your path...");
                centertext("-> You arrive at a fork");
                fotopega = true
                leufoto = false
                jogoAtivo3 = false;
                saiudafloresta2 = true;
            }  else {
                Opcãoinvalida()
            }
        } else if (!papega){
            console.clear();
            centertext("===========================================================================");
            centertext("-> You cannot dig, because you do not have a shovel!");
        }
        } else if (objeto == 2) {
            console.clear();
            centertext("===========================================================================");
            centertext("-> You ignore the object and continue your path...");
            centertext("-> You arrive at a fork");
            jogoAtivo3 = false;
            saiudafloresta2 = true;
        } else {
            Opcãoinvalida()
         }
    } else if (floresta3 == 2) {
        console.clear();
        centertext("===========================================================================");
        centertext("-> You go through the South path...");
        centertext("-> You find a wolf");
        centertext("===========================================================================");
        centertext("[OPTIONS]");
        centertext("===========================================================================");
        centertext("[01] Run");
        centertext("[02] Hide");
        centertext("===========================================================================")
        centertext("Command?")
        decisão2 = Number(prompt("> "));
        centertext(" ")

        if (decisão2 === 1) {
            console.clear();
            gameover()
            centertext("===========================================================================");
            centertext("-> You start running as fast as possible...");
            centertext("-> But the wolf is faster and catches you, and kills you");
            centertext("===========================================================================");
            centertext("-> You died!!");
            centertext("===========================================================================");
            process.exit(1);
} else if (decisão2 === 2) {
    console.clear();
    gameover()
    centertext("===========================================================================");
    centertext("-> You hide in a cave next door");
    centertext("-> unfortunately that cave was the wolf's home, and it kills you");
    centertext("===========================================================================");
    centertext("-> You died!!");
    centertext("===========================================================================")
    process.exit(1);
    } else {
        Opcãoinvalida()
    }



} else if (floresta3 == 3) {
    console.clear();
    gameover()
    centertext("===========================================================================");
    centertext("-> You decide to go West");
    centertext("-> You fall into the river and drown");
    centertext("===========================================================================");
    centertext("-> You died!!");
    centertext("===========================================================================");
    process.exit(1);
} else if (floresta3 == 4) {
    inventario()
    } else if (floresta3 == 5) {
        sanidade()
    } else if (floresta3 == 6) {
        mostrarVida()
    } else {
        Opcãoinvalida()
     }
}

// END OF ASCII ART FIX: Forest 3 (Third Fork)

N = false
O = false
L = false
S = false


// START OF ASCII ART FIX: Forest 4 (Final Fork)

while (jogoAtivo4) {
    let floresta4Art;
    if (N && S) {
        floresta4Art = [
            "██████████████████████████████████████████████             ██",
            "██           ██                    █                /\\     ██",
            "██           ██                    █               NORTH   ██",
            "██ ██        ██                    █             (Already went)  ██",
            "██   ████████                      ██                      ██",
            "██ ██               ██           ██████                    ██",
            "████              ██████           ██                      ██",            
            "██               █  ██  █          ██                      ██",
            "██                  ██             ██            (Already went)  ██",
            "██                ██  ██                           SOUTH     ██",
            "██               ██    ██                          \\/      ██",
            "██████████████████████████████████████████████             ██"
        ];
    } else if (!N && S) {
        floresta4Art = [
            "██████████████████████████████████████████████             ██",
            "██           ██                    █                /\\     ██",
            "██           ██                    █               NORTH   ██",
            "██ ██        ██                    █                       ██",
            "██   ████████                      ██                      ██",
            "██ ██               ██           ██████                    ██",
            "████              ██████           ██                      ██",            
            "██               █  ██  █          ██                      ██",
            "██                  ██             ██            (Already went)  ██",
            "██                ██  ██                           SOUTH     ██",
            "██               ██    ██                          \\/      ██",
            "██████████████████████████████████████████████             ██"
        ];
    } else if (N && !S) {
        floresta4Art = [
            "██████████████████████████████████████████████             ██",
            "██           ██                    █                /\\     ██",
            "██           ██                    █               NORTH   ██",
            "██ ██        ██                    █             (Already went)  ██",
            "██   ████████                      ██                      ██",
            "██ ██               ██           ██████                    ██",
            "████              ██████           ██                      ██",            
            "██               █  ██  █          ██                      ██",
            "██                  ██             ██                      ██",
            "██                ██  ██                           SOUTH     ██",
            "██               ██    ██                          \\/      ██",
            "██████████████████████████████████████████████             ██"
        ];
    } else if (!N && !S){
        floresta4Art = [
            "██████████████████████████████████████████████             ██",
            "██           ██                    █                /\\     ██",
            "██           ██                    █               NORTH   ██",
            "██ ██        ██                    █                       ██",
            "██   ████████                      ██                      ██",
            "██ ██               ██           ██████                    ██",
            "████              ██████           ██                      ██",            
            "██               █  ██  █          ██                      ██",
            "██                  ██             ██                      ██",
            "██                ██  ██                           SOUTH     ██",
            "██               ██    ██                          \\/      ██",
            "██████████████████████████████████████████████             ██"
        ];
    }
    
    centertext("===========================================================================");
    centerAscii(floresta4Art);
    centertext(" ");
    centertext("===========================================================================");
centertext("-> Get your reward. The pale moon smiles at you")
centertext("-> In front of you there are paths, to the NORTH and SOUTH");
centertext("===========================================================================");
centertext("[OPTIONS]");
centertext("===========================================================================");
centertext("[01] NORTH");
centertext("[02] SOUTH");
centertext("===========================================================================");
centertext("[ACTIONS]");
centertext("===========================================================================");
centertext("[03] INVENTORY");
centertext("[04] SANITY");
centertext("[05] HEALTH");
centertext("===========================================================================");
    centertext("Command?")
    floresta4 = prompt("> ");
    centertext(" ")

    if (floresta4 == 1) {
        console.clear();
        centertext("===========================================================================");
        centertext("-> You choose to go North...");
        N = true 
        centertext("-> You find a car parked on the side of a road in front of you.")
        centertext("===========================================================================");
        centertext("[OPTIONS]")
        centertext("===========================================================================")
        centertext("[01] Try to start the car.")
        centertext("[02] Ignore the car")
        centertext("[03] Walk away on the road")
        centertext("===========================================================================");
        centertext("Command?")
        carro = Number(prompt("> "))
        centertext(" ")

        if (carro == 1) {
            console.clear();
            centertext("===========================================================================");
            centertext("-> You manage to start the car.")
            centertext("===========================================================================");
            centertext("[OPTIONS]")
            centertext("[01] Leave")
            centertext("[02] Go back to the path")
            centertext("===========================================================================");
            centertext("Command?")
            carro1 = Number(prompt("> "))
            centertext(" ")

            if (carro1 == 1) {
                console.clear()
                centertext("===========================================================================")
                centertext("-> Are you sure? This action will be irreversible!")
                centertext("===========================================================================")
                centertext("-> Press [1] to continue or [2] to cancel!")
                centertext("===========================================================================")

                let br = Number(prompt("> "))
                if (br == 1) {
                
                console.clear();
                centertext("===========================================================================");
                centertext("-> You decide to drive away on the road!")
                if (fotopega && leufoto) {
                    centertext("===========================================================================");
                    centertext("-> Before leaving, you remember the photo of the child...")
                    centertext("-> and decide to call the police as soon as you get home!")
                    centertext("===========================================================================");
                    centertext("-> You completed the [GOOD_ENDING]")
                    centertext("===========================================================================")
                    SECRET_ENDING = false
                    REAL_ENDING = false
                    BAD_ENDING = false
                    BAD_ENDING_2 = false
                    BAD_ENDING_3 = false
                    GOOD_ENDING = true
                    jogoAtivo4=false
                } else if (fotopega && !leufoto) {
                    centertext("===========================================================================");
                    centertext("-> Before leaving, you remember the photo of the child.")
                    centertext("-> but think someone simply dropped it...")
                    centertext("===========================================================================");
                    centertext("-> You completed the [BAD_ENDING_2]")
                    centertext("===========================================================================")
                    SECRET_ENDING = false
                    REAL_ENDING = false
                    BAD_ENDING = false
                    BAD_ENDING_2 = true
                    BAD_ENDING_3 = false
                    GOOD_ENDING = false
                    jogoAtivo4=false
                } else if (!leufoto && !fotopega){
                    centertext("===========================================================================");
                    centertext("-> You drive away without thinking clearly.")
                    centertext("===========================================================================");
                    centertext("-> You completed the [BAD_ENDING_3]")
                    centertext("===========================================================================")
                    SECRET_ENDING = false
                    REAL_ENDING = false
                    BAD_ENDING = false
                    BAD_ENDING_2 = false
                    BAD_ENDING_3 = true
                    GOOD_ENDING = false
                    jogoAtivo4=false
                }
            } else if (carro1 == 2) {
                console.clear();
                centertext("===========================================================================");
                centertext("-> You decide to go back to the initial path")
            } else {
                Opcãoinvalida()
             }
        } else {
            console.clear()
        }
        } else if (carro == 2) {
            console.clear();
            centertext("===========================================================================");
            centertext("-> You ignore the car!")
            centertext("===========================================================================");
            centertext("-> Reaching the end of the path, you realize you wasted time and will have to go back to the initial path")
            centertext("-> You walk back...")

        } else if (carro == 3){
            console.clear();
            gameover()
            centertext("===========================================================================");
            centertext("-> you decide to walk along the road...")
            centertext("-> That was not a good idea!")
            centertext("-> A car without its headlights on, doesn't see you and runs you over and kills you.")
            centertext("===========================================================================");
            centertext("-> You Died!!")
            centertext("===========================================================================");
            process.exit(1);

        } else {
            Opcãoinvalida()
         }
    } else if (floresta4 == 2) {
        console.clear();
        centertext("===========================================================================");
        centertext("-> You decide to go South...")
        S=true
        centertext("-> On this path, you find a house, which seems normal.")
        centertext("===========================================================================");
        centertext("[OPTIONS]")
        centertext("===========================================================================");
        centertext("[01] Enter the house.")
        centertext("[02] Ignore the house and follow the path.")
        centertext("===========================================================================");
        centertext("Command?")
        casa2 = Number(prompt("> "))
        centertext(" ")

        if (casa2 == 1) {
            console.clear();
            centertext("===========================================================================");
centertext("-> Upon entering the house, your footsteps echo frighteningly through the silence.");
centertext("-> Your first instinct is to look for signs of life");
centertext("someone living or perhaps trapped there.");
centertext("===========================================================================");
centertext("-> After a careful search, you find no one. ");
centertext("-> The loneliness of the place is palpable.");
centertext("-> You then start searching the house for something useful, like a telephone.");
centertext("On a dusty table, you find a note with a ");
centertext("rudimentary map drawn with arrows.");
centertext("===========================================================================");
            centertext("[OPTIONS]")
            centertext("===========================================================================");
            centertext("[01] Follow map.")
            centertext("[02] Do not follow the map.")
            centertext("===========================================================================");
            centertext("Command?")
            mapa3 = Number(prompt("> "))
            centertext(" ")

            if (mapa3 == 1) {
                console.clear();
                centertext("===========================================================================");
centertext("-> You follow the map carefully, each turn a step towards the unknown.");
centertext("-> Upon reaching the marked 'X', you step and the floor creaks, sounding hollow under your feet.");
centertext("-> Immediate fear arises. Doubt hangs in the air: dig and face what's underneath or ignore and move on?");
centertext("===========================================================================");
                centertext("[OPTIONS]")
                centertext("===========================================================================");
                centertext("[01] Dig in search of something.")
                centertext("[02] Do not dig.")
                centertext("===========================================================================");
                centertext("Command?")
                cavar = Number(prompt("> "))
                centertext(" ")

                if (cavar == 1) {
                    console.clear();
                    centertext("===========================================================================");
centertext("-> The loose earth gives way easily. Soon, you distinguish the unmistakable shape of a human body.");
centertext("-> As you clear the last layer of earth, your blood runs cold at the sight.");
centertext("===========================================================================");
                   
                   if (destruir == true){
                    centertext("-> The child's body rises, staring fixedly at you...")
                    centertext("-> CHILD: 'YOU DESTROYED MY SCROLL, NOW I WILL DESTROY YOU...'")
                    SECRET_ENDING = true
                    REAL_ENDING = false
                    BAD_ENDING = false
                    BAD_ENDING_2 = false
                    BAD_ENDING_3 = false
                    GOOD_ENDING = false
                    jogoAtivo4 = false
                    centertext("===========================================================================");
                   } else {
                    centertext("-> It is the small, fragile body of a child.");
                    centertext("-> Your heart pounds, hammering against your ribs.");
                    centertext("-> Amidst the panic, suddenly, you hear...");
                    centertext("============================================================================")
                    centertext("-> Congratulations!!")
                    centertext("============================================================================")
                    centertext("—— 40.24248 ——")
                    centertext(" ")
                    centertext("—— -121.4434 ——")
                    centertext("============================================================================")
                    centertext("CRTHR FHN ERPBZCRAFN!!")
                    centertext("============================================================================")
                    jogoAtivo4 = false
                    SECRET_ENDING = false
                    REAL_ENDING = true
                    BAD_ENDING = false
                    BAD_ENDING_2 = false
                    BAD_ENDING_3 = false
                    GOOD_ENDING = false
                   }

                } else if (cavar == 2) {
                    console.clear();
                    gameover()
                    centertext("============================================================================");
centertext("-> You decide not to dig and turn to move on. A fatal mistake.");
centertext("-> From the shadows, a figure moves. Before you can react, a violent impact hits your abdomen.");
centertext("-> The world spins as you fall. The last thing you see is the face of a man, expressionless, watching you die.");
centertext("============================================================================");
centertext("-> YOU DIED!");
centertext("============================================================================")
                    process.exit(1);
                    
                } else {
                    Opcãoinvalida()
                 }

            } else if (mapa3 == 2) {
                console.clear();
                centertext("===========================================================================");
centertext("-> Distrust runs down your spine. The map seems too easy, perhaps a trap.");
centertext("-> You ignore it, deciding to continue your search through the house. Perhaps you missed something.");
centertext("===========================================================================");
centertext("-> Time passes slowly in the darkness, until the door opens: the owner has returned.")
centertext("-> Heavy footsteps approach. You hide in a dusty wardrobe.")
centertext("-> He notices something out of place. The sound of footsteps gets too loud...")
centertext("-> The wardrobe door is opened abruptly.")
pausarParaContinuar()        
gameover()        
centertext("===========================================================================");
                centertext("[You Died!!]")
                centertext("===========================================================================");
                process.exit(1);
                
            } else {
                Opcãoinvalida()
             }

            
        } else if (casa2 == 2) {
            console.clear();
            if (!casafora) {
                casafora = true
                centertext("===========================================================================");
                centertext("-> A shiver of fear stops you. You decide the risk is too great and turn your back on the house.");
                centertext("===========================================================================");
                centertext("-> You resume the trail, but the forest around seems to have changed. It is quieter, darker.");
                centertext("-> The path twists strangely and, after a few minutes, a feeling of 'déjà vu' bothers you.");
                centertext("-> The same twisted tree... the same moss-covered stone. Panic sets in: the path is leading you in circles.");
                centertext("-> There is no other choice. You need to go back to the beginning, to the fork where everything started.");
                centertext("===========================================================================");
            } else if (casafora) {
                console.clear();
                centertext("===========================================================================");
                centertext("-> You already tried to do this...")

            }
        } else {
            Opcãoinvalida()
         }
    } else if (floresta4 == 3) {
        inventario()
    } else if (floresta4 == 4) {
        sanidade()
    } else if (floresta4 == 5) {
        mostrarVida()
    } else {
        Opcãoinvalida()
     }
}

// END OF ASCII ART FIX: Forest 4 (Final Fork)


if (BAD_ENDING) {
    exec('start cmd.exe /c aEN.exe')
    const conteudo = "VOCÊ COMPLETOU O PRIMEIRO FINAL RUIM"; // Keeping content untranslated as it seems to be an internal achievement file content.
fs.writeFileSync('../Achievements/BAD_ENDING.bin', conteudo, 'utf8');
fs.appendFile(save_conquistas, 'BAD_ENDING.bin', (err) => {
    if (err) throw err;
})

} else if (REAL_ENDING) {
    exec('start cmd.exe /c PoliceMonitorEN.exe', (error) => {
    if (error) {
      console.error(`Error executing file: ${error.message}`);
      return;
    }
    fs.appendFile(save_conquistas, 'REAL_ENDING.bin', (err) => {
        if (err) throw err;
    })
    if (REAL_ENDING) {
        const conteudo1 = "VOCÊ COMPLETOU O FINAL REAL"; // Keeping content untranslated as it seems to be an internal achievement file content.
        fs.writeFileSync('../Achievements/REAL_ENDING.bin', conteudo1, 'utf8');

    }
});
} else if (GOOD_ENDING) {
        const conteudo2 = "VOCÊ COMPLETOU O FINAL BOM"; // Keeping content untranslated as it seems to be an internal achievement file content.
        fs.writeFileSync('../Achievements/GOOD_ENDING.bin', conteudo2, 'utf8');
        fs.appendFile(save_conquistas, 'GOOD_ENDING.bin', (err) => {
            if (err) throw err;
        })
    } else if (BAD_ENDING_2) {
        const conteudo3 = "VOCÊ COMPLETOU O SEGUNDO FINAL RUIM"; // Keeping content untranslated as it seems to be an internal achievement file content.
        fs.writeFileSync('../Achievements/BAD_ENDING_2.bin', conteudo3, 'utf8');
        fs.appendFile(save_conquistas, 'BAD_ENDING2.bin', (err) => {
            if (err) throw err;
        })
    } else if (BAD_ENDING_3) {
        const conteudo4 = "VOCÊ COMPLETOU O TERCEIRO FINAL RUIM"; // Keeping content untranslated as it seems to be an internal achievement file content.
        fs.writeFileSync('../Achievements/BAD_ENDING_3.bin', conteudo4, 'utf8');
        fs.appendFile(save_conquistas, 'BAD_ENDING3.bin', (err) => {
            if (err) throw err;
        })
    } else if (SECRET_ENDING){
        const conteudo6 = "VOCÊ COMPLETOU O FINAL SECRETO"; // Keeping content untranslated as it seems to be an internal achievement file content.
        fs.writeFileSync('../Achievements/SECRET_ENDING.bin', conteudo6, 'utf8');
        fs.appendFile(save_conquistas, 'SECRET_ENDING.bin', (err) => {
            if (err) throw err;
        })
    }

N = false
O = false
L = false
S = false

// Property of Sad Berry Games.