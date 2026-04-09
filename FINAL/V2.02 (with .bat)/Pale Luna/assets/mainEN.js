// Propriedade de Sad Berry Games.

const prompt = require('prompt-sync')();
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

function Opcãoinvalida() {
    console.clear()
    console.log("===========================================================================");
    console.log("-> Invalid option!")
    console.log("===========================================================================");
    console.log("-> Press [1] to close...");
    console.log("===========================================================================");
    while (prompt("> ") !== '1') {
        // Fica em loop até o jogador pressionar 1
    }
    process.exit(90)
}

function pausarParaFechar() {
    console.clear()
    console.log("===========================================================================");
    console.log("-> Press [1] to close...");
    console.log("===========================================================================");
    while (prompt("> ") !== '1') {
        // Fica em loop até o jogador pressionar 1
    }
    process.exit(90)
}

function pausarParaContinuar() {
    console.log("===========================================================================");
    console.log("-> Press [1] to continue...");
    console.log("===========================================================================");
    while (prompt("> ") !== '1') {
        // Fica em loop até o jogador pressionar 1
    }
    console.clear();
}

function inventario() {
    // Usamos um loop infinito que só será quebrado quando o jogador escolher sair.
    while (true) {
        console.clear();
        console.log("===========================================================================");
        console.log("-> You have the following items in your inventory:");
        console.log("===========================================================================");

        // Criamos um contador para saber se algum item foi exibido.
        let itensNoInventario = 0;

        // Agora, verificamos cada item separadamente.
        if (papega) {
            console.log("-> Shovel");
            itensNoInventario++; // Aumenta o contador se o item existe.
        }
        if (temChave) {
            console.log("-> Keys");
            itensNoInventario++;
        }
        if (chavedois) {
            console.log("-> Key (Tombstone)");
            itensNoInventario++;
        }
        // Se você quiser adicionar um novo item, basta adicionar um novo `if` aqui!

        // Se o contador for 0, significa que o inventário está vazio.
        if (itensNoInventario === 0) {
            console.log("-> You haven't picked up any items yet!");
        }

        console.log("===========================================================================");
        console.log("-> Do you want to go back?");
        console.log("===========================================================================");
        console.log("[01] YES");
        console.log("[02] NO");
        console.log("===========================================================================");
        
        // Renomeei a variável para não ter o mesmo nome da função.
        let escolha = Number(prompt("> "));

        if (escolha === 1) {
            console.clear();
            break; // Quebra o loop e sai da função de inventário.
        }
        // Se a escolha for 2 (ou qualquer outra coisa), o loop continua e o inventário é mostrado de novo.
    }
}
function menosSanidade() {
    if (valorsanidade <= 10) {
        console.clear()
        console.log("===========================================================================");
        console.log ("-> You have reached a very low level of sanity during the game!")
        console.log ("-> You went insane and are lost in the forest forever!")
        console.log("===========================================================================");
        console.log ("-> Game over")
        console.log("===========================================================================");
        process.exit(1)
    } else {
        valorsanidade-=10
    while (s2 != 1) {
        console.clear()
    console.log("===========================================================================");
    console.log ("-> WARNING: YOUR SANITY HAS DROPPED!")
    console.log ("-> You now have " ,valorsanidade, "% sanity")
    console.log("===========================================================================");
    console.log ("-> Do you want to continue?")
    console.log("===========================================================================");
            console.log ("[01] YES")
            console.log ("[02] NO")
            console.log("===========================================================================");
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
function maisSanidade() {

        valorsanidade+=10
        while (s3 != 1) {
            console.clear()
            console.log("===========================================================================");
            console.log ("-> [WARNING] YOUR SANITY HAS RISEN!")
            console.log ("-> You now have " ,valorsanidade, "% sanity")
            console.log("===========================================================================");
            console.log ("-> Do you want to continue?")
            console.log("===========================================================================");
                    console.log ("[01] YES")
                    console.log ("[02] NO")
                    console.log("===========================================================================");
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


function sanidade() {
    while (s1 != 1) {
        console.clear()
        contagemS++
    console.log("===========================================================================");
    console.log ("-> Your sanity is at " ,valorsanidade, "%")
    console.log("===========================================================================");
            console.log ("-> Do you want to go back to the previous options?")
            console.log("===========================================================================")
            console.log ("[01] YES")
            console.log ("[02] NO")
            console.log("===========================================================================");
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

function menosVidaG() {

    if(Vida <20){
        console.clear();
        console.log ("===========================================================================");
        console.log ("-> You lost a lot of health!")
        console.log ("===========================================================================");
        console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
        console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
        console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
        console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
        console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
        console.log ("===========================================================================");
        process.exit(1);
    }
Vida-= 50
while (v1 != 1) {
    console.clear();
    console.log("===========================================================================");
    console.log ("-> WARNING: YOUR HEALTH HAS DROPPED SEVERELY!")
    console.log ("-> You now have " ,Vida, "% health")
    console.log("===========================================================================");
    console.log ("-> Do you want to continue?")
    console.log("===========================================================================");
            console.log ("[01] YES")
            console.log ("[02] NO")
            console.log("===========================================================================");
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
    console.log ("===========================================================================");
    console.log ("-> You lost a lot of health!")
    console.log ("===========================================================================");
    console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
    console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
    console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
    console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
    console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
    console.log ("===========================================================================");
    process.exit(1);
}
}

function menosVidaM() {
    if(Vida <20){
        console.clear();
        console.log ("===========================================================================");
        console.log ("-> You lost a lot of health!")
        console.log ("===========================================================================");
        console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
        console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
        console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
        console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
        console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
        console.log ("===========================================================================");
        process.exit(1);
    }
    Vida-= 20
    while (v2 != 1) {
        console.clear();
        console.log("===========================================================================");
        console.log ("-> WARNING: YOUR HEALTH HAS DROPPED TO A MEDIUM LEVEL!")
        console.log ("-> You now have " ,Vida, "% health")
        console.log("===========================================================================");
        console.log ("-> Do you want to continue?")
        console.log("===========================================================================");
                console.log ("[01] YES")
                console.log ("[02] NO")
                console.log("===========================================================================");
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
        console.log ("===========================================================================");
        console.log ("-> You lost a lot of health!")
        console.log ("===========================================================================");
        console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
        console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
        console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
        console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
        console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
        console.log ("===========================================================================");
        process.exit(1);
    }
    }

    function menosVidaP() {
        if(Vida <20){
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> You lost a lot of health!")
            console.log ("===========================================================================");
            console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
            console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
            console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
            console.log ("===========================================================================");
            process.exit(1);
        }
        Vida-= 10
        while (v3 != 1) {
            console.clear();
            console.log("===========================================================================");
            console.log ("-> WARNING: YOUR HEALTH HAS DROPPED!")
            console.log ("-> You now have " ,Vida, "% health")
            console.log("===========================================================================");
            console.log ("-> Do you want to continue?")
            console.log("===========================================================================");
                    console.log ("[01] YES")
                    console.log ("[02] NO")
                    console.log("===========================================================================");
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
            console.log ("===========================================================================");
            console.log ("-> You lost a lot of health!")
            console.log ("===========================================================================");
            console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
            console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
            console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
            console.log ("===========================================================================");
            process.exit(1);
        }
        }

        function mostrarVida() {
            while (v4 != 1) {
                console.clear();
                console.log("===========================================================================");
                console.log ("-> You now have " ,Vida, "% health")
                console.log("===========================================================================");
                console.log ("-> Do you want to continue?")
                console.log("===========================================================================");
                        console.log ("[01] YES")
                        console.log ("[02] NO")
                        console.log("===========================================================================");
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

        function menosVidaMG() {
            if(Vida <20){
                console.clear();
                console.log ("===========================================================================");
                console.log ("-> You lost a lot of health!")
                console.log ("===========================================================================");
                console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
                console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
                console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
                console.log ("===========================================================================");
                process.exit(1);
            }
            Vida-= 70
            while (v5 != 1) {
                console.clear();
                console.log("===========================================================================");
                console.log ("-> WARNING: YOUR HEALTH HAS DROPPED EXTREMELY!")
                console.log ("-> You now have " ,Vida, "% health")
                console.log("===========================================================================");
                console.log ("-> Do you want to continue?")
                console.log("===========================================================================");
                        console.log ("[01] YES")
                        console.log ("[02] NO")
                        console.log("===========================================================================");
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

        let temChave = false; // Control of key possession
        let jogoAtivo = true; // Flag to continue the game
        let jogoAtivo1 = true;
        let iniciofalha = false;
        let papega = false;
        let tentanovamente = true;
        let floresta1;
        let atalho = false;
        let gameover = false;
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



//Respostas para o TRUE ENDING:;
// 1 (SIM);
// 1 (PÁ);
// 2 (POTE DE OURO);
// 3 (PORTA);
// 3 (LESTE);
// 1 (NORTE);
// 1 (Entrar na cabana);
// 1 (Pegar o mapa);
// 1 (Voltar para a bifurcação);
// 3 (Leste);
// 1 (Usar mapa);
// 1 (Norte);
// 1 (Escavar o chão);
// 1 (Ler o que está escrito);
// 2 (SUL)
// 1 (ENTRAR NA CASA)
// 1 (SEGUIR MAPA)
// 1 (ESCAVAR)
// FIM

//Respostas para o GOOD ENDING :;
// 1 (SIM);
// 1 (PÁ);
// 2 (POTE DE OURO);
// 3 (PORTA);
// 3 (LESTE);
// 1 (NORTE);
// 1 (Entrar na cabana);
// 1 (Pegar o mapa);
// 1 (Voltar para a bifurcação);
// 3 (Leste);
// 1 (Usar mapa);
// 1 (Norte);
// 1 (Escavar o chão);
// 1 (Ler o que está escrito);
// 1 (NORTE)
// 1 (LIGAR CARRO)
// 1 (IR EMBORA)
// FIM

//Respostas para o BAD ENDING:;
// 1 (SIM);
// 1 (PÁ);
// 2 (POTE DE OURO);
// 3 (PORTA);
// 1 (NORTE) %50 DE CHANCE DE SUCESSO
// 1 (Atalho)

//Respostas para o BAD ENDING 2:;
// 1 (SIM);
// 1 (PÁ);
// 2 (POTE DE OURO);
// 3 (PORTA);
// 3 (LESTE);
// 1 (NORTE);
// 1 (Entrar na cabana);
// 1 (Pegar o mapa);
// 1 (Voltar para a bifurcação);
// 3 (Leste);
// 1 (Usar mapa);
// 1 (Norte);
// 1 (Escavar o chão);
// 2 (Não ler o que está escrito);
// 1 (NORTE)
// 1 (LIGAR CARRO)
// 1 (IR EMBORA)
// FIM

//Respostas para o BAD ENDING 3:
// 1 (SIM);
// 1 (PÁ);
// 2 (POTE DE OURO);
// 3 (PORTA);
// 3 (LESTE);
// 1 (NORTE);
// 1 (Entrar na cabana);
// 1 (Pegar o mapa);
// 1 (Voltar para a bifurcação);
// 3 (Leste);
// 1 (Usar mapa);
// 1 (Norte);
// 2 (Ignorar o objeto);
// 1 (NORTE)
// 1 (LIGAR CARRO)
// 1 (IR EMBORA)
// FIM

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


  /*if(numero == 3){
    exec('start cmd.exe /c goodbye.bat')
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    console.log ("-> HAHAHAHAHHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHAHHAHAHAHHAH")
    
    process.exit()
} else if (numero == 2){
console.clear()
console.log ("===========================================================================")
console.log ("-> I think you didn't understand, did you?")
console.log ("-> You NEVER had control in this world...")
console.log ("-> And now I will show you how things are around here!")
console.log ("===========================================================================")
const conteudo10002 = "3";
    fs.writeFileSync('../HAHAHAHAHAHAHA.txt', conteudo10002, 'utf8');
    process.exit()
} else if (numero == 1) {
console.clear()
console.log ("===========================================================================")
console.log ("-> Do you really think that after what you did I will leave you in peace???")
console.log ("===========================================================================")
    const conteudo10001 = "2";
    fs.writeFileSync('../HAHAHAHAHAHAHA.txt', conteudo10001, 'utf8');
    process.exit()
} else if (jogadortem == true) {
    console.clear()
    console.log ("===========================================================================")
    console.log ("-> Seriously? Do you really think that you can just close and open the game?")
    console.log ("===========================================================================")
    if (jogadortem == true){
        const conteudo1000 = "1";
        fs.writeFileSync('../HAHAHAHAHAHAHA.txt', conteudo1000, 'utf8');
    }
    process.exit()
}

const conquistasExistem = fs.existsSync(save_conquistas);

const contaExiste = fs.existsSync(accountFilePath);
*/
let jafoinorte = false

console.log ("██████╗  █████╗ ██╗     ███████╗              ███████████");
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
console.log ("===========================================================================")
console.log ("--- TERMINAL EDITION - MADE BY SAD BERRY GAMES ---")
console.log ("===========================================================================")
console.log ("--- VERSION 2.9 ---")
console.log ("===========================================================================")
console.log ("[WELCOME TO PALE LUNA - FOLLOW THE RULES TO AVOID PROBLEMS]");
console.log ("===========================================================================")
console.log ("-> Rule [01]: Enter numbers only (1, 2, 3, and 4).");
console.log ("-> Rule [02]: Do not use special characters.");
console.log ("-> Rule [03]: Keep the game in full screen!")
console.log ("-> Rule [04]: Have fun 😉");
console.log ("===========================================================================")
const folderPath = '../Achievements';
const count = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin')).length;
const finais = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin'));
console.log(`-> Endings completed: [${count}/6]`);
console.log('-> List of endings:', finais);
pausarParaContinuar()


console.clear()
console.log ("███████████████████████████████████████████████████████████████████")
console.log ("██                                                               ██")
console.log ("██                           ██████                              ██")
console.log ("██                           ██████                              ██")
console.log ("██                           ██████                              ██")
console.log ("██                           ██████                              ██")
console.log ("██                           ██████                              ██")
console.log ("██                           ██████                              ██")
console.log ("██                           ██████                              ██")
console.log ("██                                                               ██")
console.log ("██                           ██████                              ██")
console.log ("██                           ██████                              ██")
console.log ("██                                                               ██")
console.log ("███████████████████████████████████████████████████████████████████")
console.log ("")
console.log ("===========================================================================");
console.log ("-> Can we start?");
console.log ("===========================================================================")
console.log ("[01] Yes");
console.log ("[02] No");
console.log ("===========================================================================");
let começar = Number(prompt("> "));

if (count >6 || count < 0) {
    console.clear();
    console.log ("===========================================================================");
    console.log ("-> [ERROR]: You cannot have more than 6 endings or less than 0 endings, please run the progress eraser!.");
        console.log ("===========================================================================");
        process.exit(1); // Encerra o programa com código de saída 1 (falha)
}

if (começar == 2) {
    console.log (" ");
    console.log("===========================================================================");
    console.log("-> What a shame, I'll see you next time!");
    console.log("===========================================================================");
    process.exit(0); // Encerra o programa com código de saída 0 (sucesso)
} else if (começar !== 1) {
    Opcãoinvalida()
}


console.clear()
console.log ("███████████████████████████████████████████████████████████████████")
console.log ("██                                                               ██")
console.log ("██                     ████████████████                          ██")
console.log ("██                     ██            ██                          ██")
console.log ("██                     ██   ██████   ██                          ██")
console.log ("██                     ██  █      █  ██                          ██")
console.log ("██                     ██   ██████   ██                          ██")
console.log ("██                     ██  ██        ██                          ██")
console.log ("██                     ██            ██                          ██")
console.log ("██                     ██            ██                          ██")
console.log ("██                     ██            ██                          ██")
console.log ("██                     ████████████████                          ██")
console.log ("██                                                               ██")
console.log ("███████████████████████████████████████████████████████████████████")
console.log ("")
console.log("===========================================================================");
console.log ("[CONTEXT]")
console.log("===========================================================================");
console.log ("-> You are Michael Nevins, an electrical engineer who was called to fix")
console.log ("poles, but not everything went as planned and")
console.log ("you were kidnapped by someone!")
console.log("===========================================================================");
console.log ("-> Your objective is to try and escape!")
pausarParaContinuar()
    console.log("===========================================================================");
    console.log ("-> And remember...")
    const vbsFilePath = path.join(__dirname, 'OnlyEN.vbs');
    const commando_aviso = `wscript.exe //nologo "${vbsFilePath}"`
    exec(commando_aviso)
    
    pausarParaContinuar()
while (jogoAtivo) { 
    
    if (!papega && !temChave){
    console.log ("===========================================================================")
    console.log (" ")
    console.log ("███████████████████████████████████████████████████████████████████")
    console.log ("██                                                               ██")
    console.log ("██    █      █                                                   ██")
    console.log ("██   ███     █                                                   ██")
    console.log ("██  (Pote)  ███                                                  ██")
    console.log ("██          (Pá)                                                 ██")
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
        console.log ("===========================================================================")
    console.log (" ")
    console.log ("███████████████████████████████████████████████████████████████████")
    console.log ("██                                                               ██")
    console.log ("██    █                                                          ██")
    console.log ("██   ███                                                         ██")
    console.log ("██  (Pote)                                                       ██")
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
        console.log ("===========================================================================")
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
        console.log ("===========================================================================")
    console.log (" ")
    console.log ("███████████████████████████████████████████████████████████████████")
    console.log ("██                                                               ██")
    console.log ("██           █                                                   ██")
    console.log ("██           █                                                   ██")
    console.log ("██          ███                                                  ██")
    console.log ("██          (Pá)                                                 ██")
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
    console.log ("===========================================================================");
console.log ("-> You are in a dark room. The moonlight shines through the window.");
console.log ("-> There is a GOLD POT in the corner of the room, along with a SHOVEL. And on the other side, there is a DOOR.");
console.log ("===========================================================================");
console.log ("[OPTIONS]");
console.log ("===========================================================================")
console.log ("[01] SHOVEL");
console.log ("[02] GOLD POT");
console.log ("[03] DOOR");
console.log ("===========================================================================");
console.log ("[ACTIONS]");
console.log ("===========================================================================")
console.log ("[04] INVENTORY")
console.log ("[05] VIEW SANITY")
console.log ("[06] HEALTH");
console.log ("===========================================================================");
    console.log ("Command?");
    let inicio = Number(prompt("> "));

if (inicio === 1) {
    if (papega) {
        console.clear();
        console.log("===========================================================================");
        console.log ("-> You have already taken the shovel");
    } else if (!papega) {
    console.clear();
    console.log("===========================================================================");
    console.log ("-> You picked up the shovel, it might be useful in the future");
    console.log ("-> What are you going to do now?");
    papega = true;
    }
} else if (inicio === 2) {
    if (temChave) {
        console.clear();
        console.log("===========================================================================");
        console.log ("-> You have already taken the gold pot and the key");
    } else if (!temChave) {
    console.clear();
    console.log("===========================================================================");
    console.log ("-> You took the gold pot, and inside you found a key");
    console.log ("-> What are you going to do now?");
    temChave = true;
    }
} else if (inicio === 3) {
    console.clear();
    console.log("===========================================================================");
    console.log ("-> You tried to open the door...");
    if (temChave) {
        console.log ("-> You are able to open the door with the key you found!");
        console.log ("-> [WARNING] You used the key!");
        temChave = false
        jogoAtivo = false;
        saiudacasa = true;
    } else if (!temChave) {
        console.log ("-> You try to open the door, but it is locked...");
        console.log("===========================================================================");
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

console.clear();
while (jogoAtivo1) {
    if (!N && !L && !O){
        console.log ("===========================================================================")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                       /\\      ")
        console.log ("               ██                                        OESTE     ")
        console.log ("         ██  ██                                                    ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                            ")
        console.log ("██   ██                            ██                 NORTE >      ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █                           ")
        console.log ("██   ██                            ██                              ")
        console.log ("██   ██                          ██  ██                 LESTE         ")
        console.log ("██   ██                         ██    ██                  \\/         ")                                            
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("")
    } else if (!N && L && !O) {
        console.log ("===========================================================================")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                       /\\      ")
        console.log ("               ██                                        OESTE     ")
        console.log ("         ██  ██                                                    ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                            ")
        console.log ("██   ██                            ██                 NORTE >      ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █                           ")
        console.log ("██   ██                            ██                  (Já foi)           ")
        console.log ("██   ██                          ██  ██                 LESTE         ")
        console.log ("██   ██                         ██    ██                  \\/         ")                                            
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("")
    } else if (N && !L && !O) {
        console.log ("===========================================================================")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                       /\\      ")
        console.log ("               ██                                        OESTE     ")
        console.log ("         ██  ██                                                    ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                            ")
        console.log ("██   ██                            ██        (Já foi) NORTE >      ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █                           ")
        console.log ("██   ██                            ██                              ")
        console.log ("██   ██                          ██  ██                 LESTE         ")
        console.log ("██   ██                         ██    ██                  \\/         ")                                            
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("")
    } else if (!N && !L && O) {
        console.log ("===========================================================================")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                       /\\      ")
        console.log ("               ██                                        OESTE     ")
        console.log ("         ██  ██                                         (Já foi)           ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                            ")
        console.log ("██   ██                            ██                 NORTE >      ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █                           ")
        console.log ("██   ██                            ██                              ")
        console.log ("██   ██                          ██  ██                 LESTE         ")
        console.log ("██   ██                         ██    ██                  \\/         ")                                            
        console.log ("██████████████████████████████████████████████████████         ████")
    } else if (!N && L && O) {
        console.log ("===========================================================================")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                       /\\      ")
        console.log ("               ██                                        OESTE     ")
        console.log ("         ██  ██                                         (Já foi)              ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                            ")
        console.log ("██   ██                            ██                 NORTE >      ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █                           ")
        console.log ("██   ██                            ██                  (Já foi)           ")
        console.log ("██   ██                          ██  ██                 LESTE         ")
        console.log ("██   ██                         ██    ██                  \\/         ")                                            
        console.log ("██████████████████████████████████████████████████████         ████")
    } else if (N && L && O) {
        console.log ("===========================================================================")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                       /\\      ")
        console.log ("               ██                                        OESTE     ")
        console.log ("         ██  ██                                         (Já foi)              ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                            ")
        console.log ("██   ██                            ██        (Já foi) NORTE >      ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █                           ")
        console.log ("██   ██                            ██                  (Já foi)           ")
        console.log ("██   ██                          ██  ██                 LESTE         ")
        console.log ("██   ██                         ██    ██                  \\/         ")                                            
        console.log ("██████████████████████████████████████████████████████         ████")
    } else if (N && !L && O) {
        console.log ("===========================================================================")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                       /\\     ")
        console.log ("               ██                                        OESTE     ")
        console.log ("         ██  ██                                         (Já foi)           ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                            ")
        console.log ("██   ██                            ██        (Já foi) NORTE >      ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █                           ")
        console.log ("██   ██                            ██                              ")
        console.log ("██   ██                          ██  ██                 LESTE         ")
        console.log ("██   ██                         ██    ██                  \\/         ")                                            
        console.log ("██████████████████████████████████████████████████████         ████")
    } else if (N && L && O) {
        console.log ("===========================================================================")
        console.log (" ")
        console.log ("██████████████████████████████████████████████████████         ████")
        console.log ("                   ██                                            ")
        console.log ("                 ██                                       /\\      ")
        console.log ("               ██                                        OESTE     ")
        console.log ("         ██  ██                                         (Já foi)              ")
        console.log ("       ██  ██                                                      ")
        console.log ("     ██                                                            ")
        console.log ("██   ██                            ██        (Já foi) NORTE >      ")
        console.log ("██   ██                          ██████                            ")
        console.log ("██   ██                         █  ██  █                           ")
        console.log ("██   ██                            ██                  (Já foi)           ")
        console.log ("██   ██                          ██  ██                 LESTE         ")
        console.log ("██   ██                         ██    ██                  \\/         ")                                            
        console.log ("██████████████████████████████████████████████████████         ████")
    }
        console.log ("===========================================================================");
        console.log ("-> Take your reward. The pale moon smiles at you.");
        console.log ("-> You are in a forest, there are paths to the NORTH, WEST, and EAST:");
        console.log ("===========================================================================");
        console.log ("[OPTIONS]");
        console.log ("===========================================================================")
        console.log ("[01] NORTH.");
        console.log ("[02] WEST.");
        console.log ("[03] EAST.");
        console.log("===========================================================================");
        console.log ("[ACTIONS]");
        console.log ("===========================================================================")
        console.log ("[04] INVENTORY");
        console.log ("[05] SANITY");
        console.log ("[06] HEALTH");
        console.log ("===========================================================================");
        
    
    console.log ("Command?");
    floresta1 = Number(prompt("> "));

    if (floresta1 === 1) {
        console.clear();

        if (jafoinorte) {
        console.log ("===========================================================================")
        console.log ("-> You've already gone north!")
        pausarParaContinuar()
        } else {
        jafoinorte = true
        console.log ("===========================================================================");
        console.log ("-> You feel more confident going north...");
        N = true
         // Randomização de 50% de chance de sucesso ou falha
         
    if (Math.random() < 0.5) {
        console.log ("===========================================================================");
        console.log ("-> You trip on a root and fall!");
        console.log ("-> You lost time and need to go back.");
        console.log ("-> You walk back...");
        } else {
            console.log ("===========================================================================");
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
        console.log ("===========================================================================");
        console.log ("-> You find a secret shortcut!");
        console.log ("===========================================================================");
        console.log ("[OPTIONS]");
        console.log ("===========================================================================")
        console.log ("[01] Take the shortcut");
        console.log ("[02] Ignore the shortcut");
        console.log ("===========================================================================");
        console.log ("Command?")
        atalho = prompt ("> ");
        if (atalho == 1) {
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> You advance quickly through the forest.");
            console.log ("-> You manage to get out of the forest, but there are still secrets waiting to be discovered...");
            console.log ("===========================================================================");
            console.log ("-> You won!!");
            console.log ("-> Congratulations? you completed the BAD ENDING, NVAQN ERFGNZ FRTERQBF RFCRENAQB CBE IBPÊ.");
            console.log ("===========================================================================");
              
            jogoAtivo=false
            jogoAtivo1=false
            jogoAtivo2=false
            jogoAtivo3=false
            jogoAtivo4=false
            REAL_ENDING=false
            BAD_ENDING=true
        } else if (atalho == 2) {
            console.clear();
            console.log("===========================================================================");
            console.log ("-> You find it dangerous and ignore the shortcut");
            console.log ("-> You decide to go back to the path options");
            
        } else {
            Opcãoinvalida()
         }
      }
    } 
    } else if (floresta1 === 2) {
        console.clear();
        console.log("===========================================================================");
        console.log ("-> You go through the West path...")
        console.log ("-> Suddenly, you see a tall man coming from afar, with an axe and not very friendly.");
        O = true
        console.log("===========================================================================");
        console.log ("[OPTIONS]");
        console.log ("===========================================================================")
        console.log ("[01] Run away");
        console.log ("[02] Hide");
        console.log("===========================================================================");
        console.log ("Command?");
        decisão1 = Number(prompt("> "));

         if (decisão1 === 1) {
             console.clear();
             console.log("===========================================================================");
             console.log ("-> You start running as fast as possible...");
             console.log ("-> But unfortunately you trip on a stone, and get hit by the man's axe")
             console.log("===========================================================================");
             console.log ("-> Press 1 to continue...")
             console.log ("-> (If you type anything other than 1 the game will close!)")
             console.log("===========================================================================");

             let machado = Number(prompt("> "))
             if (machado == 1) {
             menosSanidade()
             menosVidaG()
             } else {
                 process.exit(56)
             }
         } else if (decisão1 === 2) {
             console.clear();
             console.log ("===========================================================================");
             console.log ("-> You decide to hide in a bush next to you");
             console.log ("-> However, he unfortunately manages to see you, and hits you with an axe!");
             console.log ("===========================================================================");
             console.log ("-> Press 1 to continue...")
             console.log ("-> (If you type anything other than 1 the game will close!)")
             console.log("===========================================================================");

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
        console.log("===========================================================================");
        console.log ("-> After thinking, you decide to go East...") 
        L = true
        console.log ("-> You start entering the dense forest...");
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
console.clear();
N = false
O = false
L = false
S = false

while (jogoAtivo2) {
    if (!N && !S && !L) {
        console.log("===========================================================================")
        console.log(" ")
        console.log("██████████████████████████████████████████████████            █████")
        console.log("                   ██                                            ")
        console.log("                 ██                                     /\\         ")
        console.log("               ██                                      NORTE          ")
        console.log("         ██  ██                                                    ")
        console.log("       ██  ██                                                      ")
        console.log("     ██                                                          ")
        console.log("██   ██                            ██                     LESTE >        ")
        console.log("██   ██                          ██████                            ")
        console.log("██   ██                         █  ██  █                           ")
        console.log("██   ██                            ██                   SUL           ")
        console.log("██   ██                          ██  ██                 \\/            ")
        console.log("██   ██                         ██    ██                           ")
        console.log("████████████████████████████████████████████████            █████")
        console.log("")
    } else if (N && S && L) {
        console.log("===========================================================================")
        console.log(" ")
        console.log("██████████████████████████████████████████████████            █████")
        console.log("                   ██                                            ")
        console.log("                 ██                                     /\\         ")
        console.log("               ██                                      NORTE          ")
        console.log("         ██  ██                                       (Já foi)           ")
        console.log("       ██  ██                                                      ")
        console.log("     ██                                                          ")
        console.log("██   ██                            ██             (Já foi) LESTE >        ")
        console.log("██   ██                          ██████                            ")
        console.log("██   ██                         █  ██  █              (Já foi)            ")
        console.log("██   ██                            ██                   SUL           ")
        console.log("██   ██                          ██  ██                 \\/            ")
        console.log("██   ██                         ██    ██                           ")
        console.log("████████████████████████████████████████████████            █████")
        console.log("")
    } else if (!N && !S && L) {
        console.log("===========================================================================")
        console.log(" ")
        console.log("██████████████████████████████████████████████████            █████")
        console.log("                   ██                                            ")
        console.log("                 ██                                     /\\         ")
        console.log("               ██                                      NORTE          ")
        console.log("         ██  ██                                                    ")
        console.log("       ██  ██                                                      ")
        console.log("     ██                                                          ")
        console.log("██   ██                            ██              (Já foi)   LESTE >        ")
        console.log("██   ██                          ██████                            ")
        console.log("██   ██                         █  ██  █                           ")
        console.log("██   ██                            ██                   SUL           ")
        console.log("██   ██                          ██  ██                 \\/            ")
        console.log("██   ██                         ██    ██                           ")
        console.log("████████████████████████████████████████████████            █████")
        console.log("")
    } else if (!N && S && !L) {
        console.log("===========================================================================")
        console.log(" ")
        console.log("██████████████████████████████████████████████████            █████")
        console.log("                   ██                                            ")
        console.log("                 ██                                     /\\         ")
        console.log("               ██                                      NORTE          ")
        console.log("         ██  ██                                                    ")
        console.log("       ██  ██                                                      ")
        console.log("     ██                                                          ")
        console.log("██   ██                            ██                     LESTE >        ")
        console.log("██   ██                          ██████                            ")
        console.log("██   ██                         █  ██  █              (Já foi)             ")
        console.log("██   ██                            ██                   SUL           ")
        console.log("██   ██                          ██  ██                 \\/            ")
        console.log("██   ██                         ██    ██                           ")
        console.log("████████████████████████████████████████████████            █████")
        console.log("")
    } else if (N && !S && !L) {
        console.log("===========================================================================")
        console.log(" ")
        console.log("██████████████████████████████████████████████████            █████")
        console.log("                   ██                                            ")
        console.log("                 ██                                     /\\         ")
        console.log("               ██                                      NORTE          ")
        console.log("         ██  ██                                       (Já foi)              ")
        console.log("       ██  ██                                                      ")
        console.log("     ██                                                          ")
        console.log("██   ██                            ██                     LESTE >        ")
        console.log("██   ██                          ██████                            ")
        console.log("██   ██                         █  ██  █                           ")
        console.log("██   ██                            ██                   SUL           ")
        console.log("██   ██                          ██  ██                 \\/            ")
        console.log("██   ██                         ██    ██                           ")
        console.log("████████████████████████████████████████████████            █████")
        console.log("")
    } else if (!N && S && L) {
        console.log("===========================================================================")
        console.log(" ")
        console.log("██████████████████████████████████████████████████            █████")
        console.log("                   ██                                            ")
        console.log("                 ██                                     /\\         ")
        console.log("               ██                                      NORTE          ")
        console.log("         ██  ██                                                    ")
        console.log("       ██  ██                                                      ")
        console.log("     ██                                                          ")
        console.log("██   ██                            ██              (Já foi)   LESTE >        ")
        console.log("██   ██                          ██████                            ")
        console.log("██   ██                         █  ██  █              (Já foi)            ")
        console.log("██   ██                            ██                   SUL           ")
        console.log("██   ██                          ██  ██                 \\/            ")
        console.log("██   ██                         ██    ██                           ")
        console.log("████████████████████████████████████████████████            █████")
        console.log("")
    } else if (N && S && !L) {
        console.log("===========================================================================")
        console.log(" ")
        console.log("██████████████████████████████████████████████████            █████")
        console.log("                   ██                                            ")
        console.log("                 ██                                     /\\         ")
        console.log("               ██                                      NORTE          ")
        console.log("         ██  ██                                       (Já foi)            ")
        console.log("       ██  ██                                                      ")
        console.log("     ██                                                          ")
        console.log("██   ██                            ██                     LESTE >        ")
        console.log("██   ██                          ██████                            ")
        console.log("██   ██                         █  ██  █              (Já foi)             ")
        console.log("██   ██                            ██                   SUL           ")
        console.log("██   ██                          ██  ██                 \\/            ")
        console.log("██   ██                         ██    ██                           ")
        console.log("████████████████████████████████████████████████            █████")
        console.log("")
    } else if (N && !S && L) {
        console.log("===========================================================================")
        console.log(" ")
        console.log("██████████████████████████████████████████████████            █████")
        console.log("                   ██                                            ")
        console.log("                 ██                                     /\\         ")
        console.log("               ██                                      NORTE          ")
        console.log("         ██  ██                                       (Já foi)             ")
        console.log("       ██  ██                                                      ")
        console.log("     ██                                                          ")
        console.log("██   ██                            ██              (Já foi) LESTE >        ")
        console.log("██   ██                          ██████                            ")
        console.log("██   ██                         █  ██  █                           ")
        console.log("██   ██                            ██                   SUL           ")
        console.log("██   ██                          ██  ██                 \\/            ")
        console.log("██   ██                         ██    ██                           ")
        console.log("████████████████████████████████████████████████            █████")
        console.log("")
    }
    console.log ("===========================================================================");
    console.log ("-> Take your reward. The pale moon smiles at you.");
    console.log ("-> You are in a forest, there are paths to the NORTH, SOUTH, and EAST:");
    console.log ("===========================================================================");
    console.log ("[OPTIONS]");
    console.log ("===========================================================================")
    console.log ("[01] NORTH.");
    console.log ("[02] SOUTH.");
    console.log ("[03] EAST.");
    console.log("============================================================================");
    console.log ("[ACTIONS]");
    console.log ("===========================================================================")
    console.log ("[04] INVENTORY");
    console.log ("[05] SANITY");
    console.log ("[06] HEALTH");
    console.log ("===========================================================================");
    console.log ("Command?");
    floresta2 = Number(prompt("> "));

    if (floresta2 === 1) {
        if (!tentanovamente1) {
            console.log (" ");
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> You've already been there!");
            console.log ("===========================================================================");
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
        console.log ("===========================================================================");
        console.log ("-> You decide to go North...");
        N = true
        console.log ("-> You find an old wooden cabin");
        console.log ("===========================================================================");
        console.log ("[OPTIONS]");
        console.log ("===========================================================================")
        console.log ("[01] Enter the cabin");
        console.log ("[02] Ignore the cabin");
        console.log ("===========================================================================");
        console.log ("Command?");
        cabana = prompt("> ");

        if (cabana === "1") {
            console.clear();
            console.log ("===========================================================================")
        console.log (" ")
        console.log ("████████████████████████████████████████████████████████████████████")
        console.log ("██                                                                ██")
        console.log ("██                                                                ██")
        console.log ("██                                                                ██")
        console.log ("██                                                                ██")
        console.log ("██                                                                ██")
        console.log ("██                                                                ██")
        console.log ("██     ██                                             (Baú)       ██")
        console.log ("██   ██████                                        ████████████   ██")
        console.log ("██  █  ██  █                                      █            █  ██")
        console.log ("██     ██                                         █-----██-----█  ██")
        console.log ("██   ██  ██                                       █            █  ██")
        console.log ("██  ██    ██                                      █   (Mapa)   █  ██")                                            
        console.log ("████████████████████████████████████████████████████████████████████")
        console.log ("")
            console.log ("===========================================================================");
            console.log ("-> You enter the cabin and find an old chest");
            console.log ("-> Inside the chest you find a scroll with a map");
            console.log ("===========================================================================");
            console.log ("[OPTIONS]");
            console.log ("===========================================================================")
            console.log ("[01] Take the map");
            console.log ("[02] Go back to the bifurcation");
            console.log ("[03] Take Medical Kit (Heals 50% health)");
            console.log ("===========================================================================");
            console.log ("Command?");
            cabana1 = prompt("> ");

            if (cabana1 === "1") {
                console.clear();
                console.log ("===========================================================================");
                console.log ("-> You take the map and leave the cabin");
                tentanovamente1 = false;
                mapaachado = true;
                console.log ("===========================================================================");
                console.log ("[OPTIONS]");
                console.log ("===========================================================================")
                console.log ("[01] Go back to the bifurcation");
                console.log ("===========================================================================");
                console.log ("Command?");
                cabana2 = prompt("> ");
                if (cabana2 === "1") {
                    console.clear();
                    console.log (" ")
                    console.log ("===========================================================================");
                    console.log ("-> You go back to the bifurcation...");
                }  else if (cabana2 !== 1) {
                    Opcãoinvalida()
                }
            } else if (cabana1 === "2") {
                console.clear();
                console.log ("===========================================================================");
                console.log ("-> You go back to the bifurcation")
            } else if (cabana1 == "3") {
                if (kitm == true) {
                    console.clear()
                    console.log("===========================================================================");
                    console.log("-> You have already taken the medical kit!")
                    console.log("===========================================================================");
                console.log ("-> Press [1] to continue!")
                console.log("===========================================================================");
                let by1 = Number(prompt("> "))
                if (by1 == 1){
                    console.clear()
                } else {
                    Opcãoinvalida()
                }
                } else {
                console.clear()
                console.log("===========================================================================");
                console.log ("-> You quickly take the medical kit and start with your medications and bandages")
                console.log ("-> Congratulations, you healed your health by +50.")
                console.log("===========================================================================");
                console.log ("-> Press [1] to continue!")
                console.log("===========================================================================");
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
            console.log("===========================================================================")
            console.log(" ")
            console.log("███████████████████████████████████████████████████████████████████")
            console.log("██                                                               ")
            console.log("██                                                               ")
            console.log("██                                                               ")
            console.log("██                                                      ")
            console.log("██                                                     ")
            console.log("██                                                     █        ")
            console.log("██                    ██                              ██")
            console.log("██                  ██████                            ██")
            console.log("██                 █  ██  █                           ██")
            console.log("██                    ██                              ██")
            console.log("██                  ██  ██                            ██-------")
            console.log("██                 ██    ██                           ██     ------")
            console.log("████████████████████████████████████████████████████████████████████ ---")
            console.log("")
            console.log ("===========================================================================");
            console.log ("-> You ignore the cabin and continue on your way...");
            console.log ("-> After walking for a bit, you find a broken bridge");
            console.log ("===========================================================================");
            console.log ("[OPTIONS]");
            console.log ("===========================================================================")
            console.log ("[01] Jump the bridge");
            console.log ("[02] Go back to the bifurcation");
            console.log ("===========================================================================");
            console.log ("Command?");
            ponte = prompt("> ");

            if (ponte === "1") {
                console.clear();
                console.log ("===========================================================================");
                console.log ("-> You try to jump the bridge, but you fall and die");
                console.log ("-> You died!!");
                console.log ("===========================================================================");
                console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
                console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
                console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
                console.log ("===========================================================================");
                process.exit(1);




            }  else if (ponte === "2") {
                console.clear();
                console.log ("===========================================================================");
                console.log ("-> You go back to the bifurcation...");
            } else {
                Opcãoinvalida()
             }
        } else {
            Opcãoinvalida()
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
        console.log ("===========================================================================");
        console.log ("-> You go South.");
        S = true
        console.log ("-> You find a lake, and a boat in front of you");
        console.log ("===========================================================================");
        console.log ("[OPTIONS]");
        console.log ("===========================================================================")
        console.log ("[01] Take the boat");
        console.log ("[02] Ignore the boat");
        console.log ("[03] Go back to the bifurcation");
        console.log ("===========================================================================");
        console.log ("Command?");
        barco = Number(prompt("> "));
        console.log (" ");

        if (barco === 1) {
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> You take the boat and start rowing...");
            console.log ("-> But the boat starts to sink, and inside the river you see a submerged cave!")
            console.log ("===========================================================================");
        console.log ("[OPTIONS]");
        console.log ("===========================================================================")
        console.log ("[01] Ignore the cave");
        console.log ("[02] Enter the cave");
        console.log ("===========================================================================");
        console.log ("Command?");
        barco2 = Number(prompt("> "));
        console.log (" ");

        if (barco2 == 1) {
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> You ignore the cave and decide to swim back to the trail...");
        } else if (barco2 == 2) {
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> You enter the cave, and inside you are horrified...")
            console.log ("-> Inside, you see several tombstones and in the center of the cemetery, there is an open scroll...")
            console.log ("===========================================================================");
            console.log ("[OPTIONS]")
            console.log ("===========================================================================");
            console.log ("[01] Read")
            console.log ("[02] Do not Read")
            console.log ("[03] DESTROY!")
            console.log ("===========================================================================");
            pergaminho = Number(prompt("> "));

            if(pergaminho == 1) {
                console.clear()
                if (destruir == false){
                console.log ("===========================================================================");
                console.log ("You take the scroll and start reading...")
                console.log ("===========================================================================");
                console.log ("[DAY 01]: Where am I?")
                console.log ("===========================================================================");
                console.log("I don't really know where to start.");
console.log("My hands are still trembling so much that I can barely hold this improvised pen...");
console.log("a piece of charcoal I found near one of the... tombstones.");
console.log("In a lake hidden in a forest that was already sinister on its own.");
console.log("I think it's been two days since I got lost from the main trail.");
console.log("I tried to find my way back, but every tree looked the same as the last.");
console.log("Night fell, and fear began to truly set in.");
console.log ("")
console.log("Today, exhausted and thirsty, I spotted this strangely still lake.");
console.log("The water was dark, but the promise of relief made me approach.");
console.log("That's when I saw a dark shadow beneath the surface, near the rocky shore.");
console.log("A kind of opening, a fissure in the submerged rock.");
console.log("In an impulse of desperation, thinking it might be a grotto for shelter, I dove in.");
console.log("The water was freezing. I followed the dark fissure, holding my breath.");
console.log("I emerged into an air pocket, spitting out water, my heart pounding.");
console.log ("")
console.log("My weak flashlight illuminated the unthinkable: the rows of tombstones.");
console.log("And in the center of this macabre chamber, on a smooth stone, this scroll.");
console.log("I'm trapped, lost, and now I've found a submerged cemetery.");
console.log("What kind of madness is this? I need to write everything down.");
console.log("I hope this charcoal lasts. And that I do, too.");
console.log ("===========================================================================");
console.log ("-> Press [1] to continue reading, or press [2] to close")
console.log ("===========================================================================");
teste = Number(prompt("> "))

if (teste == 1) {
    console.clear()
    console.log ("===========================================================================");
    console.log ("[DAY 02]: Could this be real?")
    console.log ("===========================================================================");
console.log("I spent the night awake, if there even is a night in this damp hole.");
console.log("The flashlight's light died. Now I only have darkness and the sound of water.");
console.log("Every shadow that danced with the flashlight's flame seemed like a tombstone moving.");
console.log("I fumbled at the rocky walls, looking for another way out, a sliver of hope.");
console.log("Nothing. Just the submerged passage I entered yesterday, like a liquid nightmare.");
console.log ("")
console.log("My throat is dry, hunger turns my stomach.");
console.log("I look at this charcoal, at these words I'm writing. Is it real?");
console.log("The tombstones are still there, cold, firm. A silent testimony.");
console.log("It wasn't a delusion from exhaustion. This place exists.");
console.log ("")
console.log("The scroll... I picked it up again. My hands are dirty with soil and fear.");
console.log("The writing is ancient, almost erased by the constant dampness.");
console.log("I managed to decipher a few loose words: 'lost', 'water', 'screams'.");
console.log("Screams? From whom? I felt a chill run down my spine.");
console.log("This diary is not a good omen. Is it the record of another desperate person?");
console.log("I need to save the charcoal. And my strength.");
console.log ("")
console.log("I tried to scream for help earlier, but only the mocking echo replied.");
console.log("The forest outside has lost me. This cave wants to swallow me.");
console.log ("")
console.log("Sanity is a thin line over an abyss of tombstones.");
console.log ("===========================================================================");
console.log ("-> In the end you see a lot of blood and fear for the writer's life...")
console.log ("===========================================================================");
console.log ("-> Press [1] to try and swim back to the path, or [2] to stay in the cave")
console.log ("===========================================================================");

teste2 = Number(prompt("> ")) 
if (teste2 == 1) {
    console.clear()
    console.log ("===========================================================================");
    console.log ("-> Seeing that you don't have many options, you try to swim back...")

    if (Math.random() < 0.5) {
    console.log ("===========================================================================");
    console.log ("-> You succeed! ")
    console.log ("===========================================================================");
    } else {
        Vida-=100
        console.log ("===========================================================================");
        console.log ("-> You drown!")
        pausarParaContinuar()
        menosVidaG()
        console.log ("===========================================================================");
    }
} else if (teste2 == 2) {
    console.clear()
    console.log ("===========================================================================");
    console.log ("-> You feel afraid to try and go back and decide to stay in the cave.")
    console.log ("-> To pass the time you start searching the area and in the corner of a tombstone you see a key!")
    console.log ("-> You take it...")
    console.log ("===========================================================================");
    console.log ("[KEY COLLECTED]")
    chavedois = true
    console.log ("===========================================================================");
    console.log ("2 days later you realize there is really nothing to do down there.")
    console.log ("And then you return to the surface...")
} else {
    Opcãoinvalida()
}

} else if (teste == 2) {
    console.clear()
    console.log ("===========================================================================");
    console.log ("-> You stop reading, out of fear.")
    console.log ("-> Seeing that you don't have many options, you try to swim back...")
    console.log ("===========================================================================");
    console.log ("-> You succeed! ")
    console.log ("===========================================================================");
} else {
    Opcãoinvalida()
}

                } else {
                    console.clear()
                    console.log ("===========================================================================")
                    console.log ("-> You destroyed the scroll, which means you can no longer read it!")
                    console.log ("===========================================================================")
                    console.log ("-> Press [1] to continue")
                    console.log ("===========================================================================")
                    let ab = Number(prompt("> "))
                    if (ab == 1) {
                        console.clear()
                    } else {
                        console.clear()
                        console.log ("===========================================================================")
                        console.log ("[ERROR 678] Invalid Value!")
                        console.log ("===========================================================================")
                        process.exit()
                    }
                }

            } else if (pergaminho == 2) {
                console.clear()
                console.log ("===========================================================================");
        console.log ("-> Seeing that you don't have many options, you try to swim back...")
    console.log ("===========================================================================");

            } else if (pergaminho == 3) {
                console.clear()
                destruir = true
                console.log ("===========================================================================");
                console.log ("-> YOU DESTROYED THE SCROLL!")
                console.log ("-> THIS ACTION WILL HAVE CONSEQUENCES IN THE FUTURE...")
                console.log ("===========================================================================");
                console.log ("-> Seeing that you don't have many options, you try to swim back...")
                
            } else {
                Opcãoinvalida()
            }
        } else {
            Opcãoinvalida()
        }
        } else if (barco === 2) {
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> You ignore the boat and continue on your way...");
            console.log ("-> After walking for a bit, you find a wolf");
            console.log ("===========================================================================");
            console.log ("[OPTIONS]");
            console.log ("===========================================================================")
            console.log ("[01] Run");
            console.log ("[02] Hide");
            console.log ("===========================================================================");
            console.log ("Comando?");
            decisão2 = Number(prompt("> "));
            console.log (" ");

            if (decisão2 === 1) {
                console.clear();
                console.log ("===========================================================================");
                console.log ("-> You start running as fast as possible...");
                console.log ("-> But the wolf is faster and bites you, you are injured at a medium level!");
                console.log ("===========================================================================");
                console.log ("-> Press [1] to continue")
                console.log ("===========================================================================");
                let a1 = Number(prompt("> "))

                if (a1 == 1) {
                menosVidaM()
                } else {
                    Opcãoinvalida()
                }
            } else if (decisão2 === 2) {
                console.clear();
                console.log ("===========================================================================");
                console.log ("-> You hide in a cave nearby");
                console.log ("-> Inside, you worsen your situation, as there are several animals that bite you, including the wolf!");
                console.log ("-> You get very seriously injured.")
                console.log ("===========================================================================");
                console.log ("-> Press [1] to continue")
                console.log ("===========================================================================");
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
    console.log ("===========================================================================");
    console.log ("-> You go back to the bifurcation...");
    } else {
        Opcãoinvalida()
    }
} else if (floresta2 == 3) {
    console.clear();
    console.log ("===========================================================================");
    console.log ("-> You decide to go East.");
    L = true
    console.log ("-> You cross the leaves and branches, and find another bifurcation");
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
console.clear();
N = false
O = false
L = false
S = false

while (jogoAtivo3) {
    
    if (mapaachado) {
        let mapa67 = false
        while (mapa67 == false) {
        console.log ("-> Do you want to use the map?");
        console.log ("===========================================================================");
        console.log ("[OPTIONS]");
        console.log ("===========================================================================")
        console.log ("[01] Yes");
        console.log ("[02] No");
        console.log ("===========================================================================");
        console.log ("[ACTIONS]");
        console.log ("===========================================================================")
        console.log ("[03] Inventory")
        console.log ("===========================================================================");
        console.log ("Command?");
        mapa = prompt("> ");
        console.log (" ");

        if (mapa == 1){
            console.clear();
            mapa67 = true
            console.log ("===========================================================================");
            console.log ("-> The map says the North path is the right way");
            console.log ("===========================================================================");
            console.log ("-> [WARNING] You cannot use the map again");
            mapaachado = false;

        } else if (mapa == 2) {
            console.clear();
            mapa67 = true
            console.log ("===========================================================================");
            console.log ("-> You decide not to use the map");

        } else if (mapa == 3) {
            inventario()
        } else {
            console.clear();
            console.log("===========================================================================");
            console.log ("-> Invalid Options, you lost the chance to use the map!!");
            mapaachado = false
        }
    }
    }
    if (!N && !S && !O) {
    console.log ("===========================================================================")
    console.log (" ")
    console.log ("██████████████████████████████████████████████             ██")
    console.log ("██           ██                                    /\\")
    console.log ("██           ██                                   NORTE")
    console.log ("██ ██        ██")
    console.log ("██   ████████")
    console.log ("██ ██               ██")
    console.log ("████              ██████                 ██          OESTE >   ")            
    console.log ("██               █  ██  █        ████████████")
    console.log ("██                  ██               █ █ ██")
    console.log ("██                ██  ██             █ █           SUL")
    console.log ("██               ██    ██            █ █           \\/")
    console.log ("██████████████████████████████████████████████             ██")
    console.log (" ")
    } else if (N && S && O) {
        console.log ("===========================================================================")
    console.log (" ")
    console.log ("██████████████████████████████████████████████             ██")
    console.log ("██           ██                                    /\\")
    console.log ("██           ██                                   NORTE")
    console.log ("██ ██        ██                                  (Já foi)")
    console.log ("██   ████████")
    console.log ("██ ██               ██")
    console.log ("████              ██████                 ██  (Já foi) OESTE >   ")            
    console.log ("██               █  ██  █        ████████████")
    console.log ("██                  ██               █ █ ██      (Já foi)")
    console.log ("██                ██  ██             █ █           SUL")
    console.log ("██               ██    ██            █ █           \\/")
    console.log ("██████████████████████████████████████████████             ██")
    console.log (" ")
    } else if (!N && !S && O) {
        console.log ("===========================================================================")
        console.log (" ")
        console.log ("██████████████████████████████████████████████             ██")
        console.log ("██           ██                                    /\\")
        console.log ("██           ██                                   NORTE")
        console.log ("██ ██        ██")
        console.log ("██   ████████")
        console.log ("██ ██               ██")
        console.log ("████              ██████                 ██  (Já foi) OESTE >   ")            
        console.log ("██               █  ██  █        ████████████")
        console.log ("██                  ██               █ █ ██")
        console.log ("██                ██  ██             █ █           SUL")
        console.log ("██               ██    ██            █ █           \\/")
        console.log ("██████████████████████████████████████████████             ██")
        console.log (" ")
    } else if (!N && S && !O) {
        console.log ("===========================================================================")
        console.log (" ")
        console.log ("██████████████████████████████████████████████             ██")
        console.log ("██           ██                                    /\\")
        console.log ("██           ██                                   NORTE")
        console.log ("██ ██        ██")
        console.log ("██   ████████")
        console.log ("██ ██               ██")
        console.log ("████              ██████                 ██          OESTE >   ")            
        console.log ("██               █  ██  █        ████████████")
        console.log ("██                  ██               █ █ ██      (Já foi)")
        console.log ("██                ██  ██             █ █           SUL")
        console.log ("██               ██    ██            █ █           \\/")
        console.log ("██████████████████████████████████████████████             ██")
        console.log (" ")
    } else if (N && !S && !O) {
        console.log ("===========================================================================")
        console.log (" ")
        console.log ("██████████████████████████████████████████████             ██")
        console.log ("██           ██                                    /\\")
        console.log ("██           ██                                   NORTE")
        console.log ("██ ██        ██                                  (Já foi)")
        console.log ("██   ████████")
        console.log ("██ ██               ██")
        console.log ("████              ██████                 ██          OESTE >   ")            
        console.log ("██               █  ██  █        ████████████")
        console.log ("██                  ██               █ █ ██")
        console.log ("██                ██  ██             █ █           SUL")
        console.log ("██               ██    ██            █ █           \\/")
        console.log ("██████████████████████████████████████████████             ██")
        console.log (" ")
    } else if (!N && S && O) {
        console.log ("===========================================================================")
        console.log (" ")
        console.log ("██████████████████████████████████████████████             ██")
        console.log ("██           ██                                    /\\")
        console.log ("██           ██                                   NORTE")
        console.log ("██ ██        ██")
        console.log ("██   ████████")
        console.log ("██ ██               ██")
        console.log ("████              ██████                 ██  (Já foi) OESTE >   ")            
        console.log ("██               █  ██  █        ████████████")
        console.log ("██                  ██               █ █ ██      (Já foi)")
        console.log ("██                ██  ██             █ █           SUL")
        console.log ("██               ██    ██            █ █           \\/")
        console.log ("██████████████████████████████████████████████             ██")
        console.log (" ")
    } else if (N && S && !O) {
        console.log ("===========================================================================")
        console.log (" ")
        console.log ("██████████████████████████████████████████████             ██")
        console.log ("██           ██                                    /\\")
        console.log ("██           ██                                   NORTE")
        console.log ("██ ██        ██                                  (Já foi)")
        console.log ("██   ████████")
        console.log ("██ ██               ██")
        console.log ("████              ██████                 ██          OESTE >   ")            
        console.log ("██               █  ██  █      (Já foi)  ██")
        console.log ("██                  ██               █ █ ██      (Já foi)")
        console.log ("██                ██  ██             █ █           SUL")
        console.log ("██               ██    ██            █ █           \\/")
        console.log ("██████████████████████████████████████████████             ██")
        console.log (" ")
    } else if (N && !S && O) {
        console.log ("===========================================================================")
        console.log (" ")
        console.log ("██████████████████████████████████████████████             ██")
        console.log ("██           ██                                    /\\")
        console.log ("██           ██                                   NORTE")
        console.log ("██ ██        ██                                  (Já foi)")
        console.log ("██   ████████")
        console.log ("██ ██               ██")
        console.log ("████              ██████                 ██  (Já foi) OESTE >   ")            
        console.log ("██               █  ██  █        ████████████")
        console.log ("██                  ██               █ █ ██")
        console.log ("██                ██  ██             █ █           SUL")
        console.log ("██               ██    ██            █ █           \\/")
        console.log ("██████████████████████████████████████████████             ██")
        console.log (" ")
    }
    console.log ("===========================================================================");
    console.log ("-> Take your reward. The pale moon smiles at you.");
    console.log ("-> You are in a forest, there are paths to the NORTH, SOUTH, and WEST:");
    console.log ("===========================================================================");
    console.log ("[OPTIONS]");
    console.log ("===========================================================================");
    console.log ("[01] NORTH.")
    console.log ("[02] SOUTH.");
    console.log ("[03] WEST.");
    console.log("===========================================================================");
    console.log ("[ACTIONS]");
    console.log ("===========================================================================");
    console.log ("[04] INVENTORY");
    console.log ("[05] SANITY");
    console.log ("[06] HEALTH");
    console.log ("===========================================================================");
    console.log ("Command?");
    floresta3 = Number(prompt("> "));
    console.log (" ");

    if (floresta3 == 1)  { //Norte
        console.clear();
        console.log ("===========================================================================")
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
    console.log ("██               ██    ██          -   (Brilho)  -    ")
    console.log ("█████████████████████████████████████████████████████████████")
    console.log (" ")
        console.log ("===========================================================================");
        console.log ("-> You decide to go North.");
        console.log ("-> You walk down the path and find something shiny on the ground");
        console.log ("===========================================================================");
        console.log ("[OPTIONS]");
        console.log ("===========================================================================");
        console.log ("[01] Dig the ground");
        console.log ("[02] Ignore the object");
        console.log ("===========================================================================");
        console.log ("Command?");
        objeto = prompt("> ");

        if (objeto == 1) { // Escavar o chão
            if (papega) {
                console.clear();
                console.log ("===========================================================================")
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
            console.log ("===========================================================================");
            console.log ("-> You dig the ground and find a photo of a child");
            console.log ("-> On the photo, you see that there is something written on the back");
            console.log ("===========================================================================");
            console.log ("[OPTIONS]");
            console.log ("===========================================================================");
            console.log ("[01] Read what is written");
            console.log ("[02] Ignore the photo");
            console.log ("===========================================================================");
            fotopega = true
            console.log ("Command?");
            foto = prompt("> ");

            if (foto==1) {
                console.clear();
                console.log ("===========================================================================");
                console.log ("-> The photo says: 'YOU SHOULDN'T HAVE COME HERE'");
                console.log ("===========================================================================");
                console.log ("-> You feel a little scared...");
                console.log ("-> After a while, you decide to continue on your way");
                console.log ("-> You arrive at a bifurcation");
                pausarParaContinuar()
                    menosSanidade()
                
                fotopega = true
                leufoto = true
                jogoAtivo3 = false;
                saiudafloresta2 = true;
            } else if (foto == 2 ) {
                console.clear();
                console.log ("===========================================================================");
                console.log ("-> You ignore the photo and continue on your way...");
                console.log ("-> You arrive at a bifurcation");
                fotopega = true
                leufoto = false
                jogoAtivo3 = false;
                saiudafloresta2 = true;
            }  else {
                Opcãoinvalida()
            }
        } else if (!papega){
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> You can't dig, because you don't have a shovel!");
        }
        } else if (objeto == 2) {
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> You ignore the object and continue on your way...");
            console.log ("-> You arrive at a bifurcation");
            jogoAtivo3 = false;
            saiudafloresta2 = true;
        } else {
            Opcãoinvalida()
         }
    } else if (floresta3 == 2) {
        console.clear();
        console.log ("===========================================================================");
        console.log ("-> You go down the South path...");
        console.log ("-> You find a wolf");
        console.log ("===========================================================================");
        console.log ("[OPTIONS]");
        console.log ("===========================================================================");
        console.log ("[01] Run");
        console.log ("[02] Hide");
        console.log ("===========================================================================")
        console.log ("Comando?")
        decisão2 = Number(prompt("> "));
        console.log (" ")

        if (decisão2 === 1) {
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> You start running as fast as possible...");
            console.log ("-> But the wolf is faster and catches up to you, and kills you");
            console.log ("===========================================================================");
            console.log ("-> You died!!");
            console.log ("===========================================================================");
            console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
            console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
            console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
            console.log ("===========================================================================");
            process.exit(1);
} else if (decisão2 === 2) {
    console.clear();
    console.log ("===========================================================================");
    console.log ("-> You hide in a cave nearby");
    console.log ("-> unfortunately that cave was the wolf's home, and it kills you");
    console.log ("===========================================================================");
    console.log ("-> You died!!");
    console.log ("===========================================================================");
    console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
    console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
    console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
    console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
    console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
    console.log ("===========================================================================");
    process.exit(1);
    } else {
        Opcãoinvalida()
    }



} else if (floresta3 == 3) {
    console.clear();
    console.log ("===========================================================================");
    console.log ("-> You decide to go West");
    console.log ("-> You fall into the river and drown");
    console.log ("===========================================================================");
    console.log ("-> You died!!");
    console.log ("===========================================================================");
    console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
    console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
    console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
    console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
    console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
    console.log ("===========================================================================");
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

N = false
O = false
L = false
S = false


while (jogoAtivo4) {
    if (N && S) {
    console.log ("===========================================================================")
        console.log (" ")
        console.log ("██████████████████████████████████████████████             ██")
        console.log ("██           ██                    █                /\\    ██")
        console.log ("██           ██                    █               NORTE   ██")
        console.log ("██ ██        ██                    █             (Já foi)  ██")
        console.log ("██   ████████                      ██                      ██")
        console.log ("██ ██               ██           ██████                    ██")
        console.log ("████              ██████           ██                      ██")            
        console.log ("██               █  ██  █          ██                      ██")
        console.log ("██                  ██             ██            (Já foi)  ██")
        console.log ("██                ██  ██                           SUL     ██")
        console.log ("██               ██    ██                          \\/     ██")
        console.log ("██████████████████████████████████████████████             ██")
        console.log (" ")
    } else if (!N && S) {
        console.log ("===========================================================================")
        console.log (" ")
        console.log ("██████████████████████████████████████████████             ██")
        console.log ("██           ██                    █                /\\    ██")
        console.log ("██           ██                    █               NORTE   ██")
        console.log ("██ ██        ██                    █                       ██")
        console.log ("██   ████████                      ██                      ██")
        console.log ("██ ██               ██           ██████                    ██")
        console.log ("████              ██████           ██                      ██")            
        console.log ("██               █  ██  █          ██                      ██")
        console.log ("██                  ██             ██            (Já foi)  ██")
        console.log ("██                ██  ██                           SUL     ██")
        console.log ("██               ██    ██                          \\/     ██")
        console.log ("██████████████████████████████████████████████             ██")
        console.log (" ")
    } else if (N && !S) {
        console.log ("===========================================================================")
        console.log (" ")
        console.log ("██████████████████████████████████████████████             ██")
        console.log ("██           ██                    █                /\\    ██")
        console.log ("██           ██                    █               NORTE   ██")
        console.log ("██ ██        ██                    █             (Já foi)  ██")
        console.log ("██   ████████                      ██                      ██")
        console.log ("██ ██               ██           ██████                    ██")
        console.log ("████              ██████           ██                      ██")            
        console.log ("██               █  ██  █          ██                      ██")
        console.log ("██                  ██             ██                      ██")
        console.log ("██                ██  ██                           SUL     ██")
        console.log ("██               ██    ██                          \\/     ██")
        console.log ("██████████████████████████████████████████████             ██")
        console.log (" ")
    } else if (!N && !S){
        console.log ("===========================================================================")
        console.log (" ")
        console.log ("██████████████████████████████████████████████             ██")
        console.log ("██           ██                    █                /\\    ██")
        console.log ("██           ██                    █               NORTE   ██")
        console.log ("██ ██        ██                    █                       ██")
        console.log ("██   ████████                      ██                      ██")
        console.log ("██ ██               ██           ██████                    ██")
        console.log ("████              ██████           ██                      ██")            
        console.log ("██               █  ██  █          ██                      ██")
        console.log ("██                  ██             ██                      ██")
        console.log ("██                ██  ██                           SUL     ██")
        console.log ("██               ██    ██                          \\/     ██")
        console.log ("██████████████████████████████████████████████             ██")
        console.log (" ")
    }
    
    console.log ("===========================================================================");
console.log ("-> Take your reward, the pale moon smiles at you")
console.log ("-> In front of you there are paths, to the NORTH and SOUTH");
console.log ("===========================================================================");
console.log ("[OPTIONS]");
console.log ("===========================================================================");
console.log ("[01] NORTH");
console.log ("[02] SOUTH");
console.log("===========================================================================");
console.log ("[ACTIONS]");
console.log ("===========================================================================");
console.log ("[03] INVENTORY");
console.log ("[04] SANITY");
console.log ("[05] HEALTH");
console.log ("===========================================================================");
    console.log ("Command?")
    floresta4 = prompt("> ");
    console.log (" ")

    if (floresta4 == 1) {
        console.clear();
        console.log ("===========================================================================");
        console.log ("-> You choose to go North...");
        N = true 
        console.log ("-> You find a car parked on the side of a road in front of you.")
        console.log ("===========================================================================");
        console.log ("[OPTIONS]")
        console.log ("===========================================================================")
        console.log ("[01] Try to start the car.")
        console.log ("[02] Ignore the car")
        console.log ("[03] Walk away on the road")
        console.log ("===========================================================================");
        console.log ("Command?")
        carro = Number(prompt("> "))
        console.log (" ")

        if (carro == 1) {
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> You manage to start the car.")
            console.log ("===========================================================================");
            console.log ("[OPTIONS]")
            console.log ("[01] Leave")
            console.log ("[02] Go back to the path")
            console.log ("===========================================================================");
            console.log ("Command?")
            carro1 = Number(prompt("> "))
            console.log (" ")

            if (carro1 == 1) {
                console.clear()
                console.log ("===========================================================================")
                console.log("-> Are you sure? This action will not have a way back!")
                console.log ("===========================================================================")
                console.log ("-> Press [1] to continue or [2] to cancel!")
                console.log ("===========================================================================")

                let br = Number(prompt("> "))
                if (br == 1) {
                
                console.clear();
                console.log ("===========================================================================");
                console.log ("-> You decide to leave on the road!")
                if (fotopega && leufoto) {
                    console.log ("===========================================================================");
                    console.log ("-> Before you leave, you remember the photo of the child...")
                    console.log ("-> and decide to call the police as soon as you get home!")
                    console.log ("===========================================================================");
                    console.log ("-> You completed the [GOOD_ENDING]")
                    console.log ("===========================================================================")
                    SECRET_ENDING = false
                    REAL_ENDING = false
                    BAD_ENDING = false
                    BAD_ENDING_2 = false
                    BAD_ENDING_3 = false
                    GOOD_ENDING = true
                    jogoAtivo4=false
                } else if (fotopega && !leufoto) {
                    console.log ("===========================================================================");
                    console.log ("-> Before you leave, you remember the photo of the child.")
                    console.log ("-> but you think someone simply dropped it...")
                    console.log ("===========================================================================");
                    console.log ("-> You completed the [BAD_ENDING_2]")
                    console.log ("===========================================================================")
                    SECRET_ENDING = false
                    REAL_ENDING = false
                    BAD_ENDING = false
                    BAD_ENDING_2 = true
                    BAD_ENDING_3 = false
                    GOOD_ENDING = false
                    jogoAtivo4=false
                } else if (!leufoto && !fotopega){
                    console.log ("===========================================================================");
                    console.log ("-> You leave without thinking straight.")
                    console.log ("===========================================================================");
                    console.log ("-> You completed the [BAD_ENDING_3]")
                    console.log ("===========================================================================")
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
                console.log ("===========================================================================");
                console.log ("-> You decide to go back to the initial path")
            } else {
                Opcãoinvalida()
             }
        } else {
            console.clear()
        }
        } else if (carro == 2) {
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> You ignore the car!")
            console.log ("===========================================================================");
            console.log ("-> Reaching the end of the path, you realize you lost time and will have to go back to the initial path")
            console.log ("-> You walk back...")

        } else if (carro == 3){
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> you decide to walk on the road...")
            console.log ("-> That was not a good idea!")
            console.log ("-> A car without its headlights on, doesn't see you and hits you, killing you.")
            console.log ("===========================================================================");
            console.log ("-> You Died!!");
            console.log ("===========================================================================");
            console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
            console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
            console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
            console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
            console.log ("===========================================================================");
            process.exit(1);

        } else {
            Opcãoinvalida()
         }
    } else if (floresta4 == 2) {
        console.clear();
        console.log ("===========================================================================");
        console.log ("-> You decide to go South...")
        S=true
        console.log ("-> On this path, you find a house, which seems normal.")
        console.log ("===========================================================================");
        console.log ("[OPTIONS]")
        console.log ("===========================================================================");
        console.log ("[01] Enter the house.")
        console.log ("[02] Ignore the house and follow the path.")
        console.log ("===========================================================================");
        console.log ("Comando?")
        casa2 = Number(prompt("> "))
        console.log (" ")

        if (casa2 == 1) {
            console.clear();
            console.log("===========================================================================");
console.log("-> As you enter the house, your steps echo in a terrifying way through the silence.");
console.log("-> Your first instinct is to look for signs of life")
console.log("someone living or perhaps trapped there.");
console.log("===========================================================================");
console.log("-> After a careful search, you find no one. ")
console.log("-> The loneliness of the place is palpable.");
console.log("-> You then start searching the house for something useful, like a phone.");
console.log("On a dusty table, you find a note with a ")
console.log("rudimentary map drawn with arrows.");
console.log("===========================================================================");
            console.log ("[OPTIONS]")
            console.log ("===========================================================================");
            console.log ("[01] Follow map.")
            console.log ("[02] Do not follow the map.")
            console.log ("===========================================================================");
            console.log("Comando?")
            mapa3 = Number(prompt("> "))
            console.log (" ")

            if (mapa3 == 1) {
                console.clear();
                console.log("===========================================================================");
console.log("-> You follow the map carefully, each turn a step towards the unknown.");
console.log("-> Upon reaching the marked 'X', you step and the ground creaks, sounding hollow under your feet.");
console.log("-> An immediate apprehension arises. Doubt hangs in the air: dig and face what's underneath or ignore it and move on?");
console.log("===========================================================================");
                console.log ("[OPTIONS]")
                console.log ("===========================================================================");
                console.log ("[01] Dig in search of something.")
                console.log ("[02] Do not dig.")
                console.log ("===========================================================================");
                console.log ("Comando?")
                cavar = Number(prompt("> "))
                console.log (" ")

                if (cavar == 1) {
                    console.clear();
                    console.log("===========================================================================");
console.log("-> The loose earth gives way easily. Soon, you distinguish the unmistakable shape of a human body.");
console.log("-> As you clear the last layer of earth, your blood runs cold at the sight.");
console.log("===========================================================================");
                   
                   if (destruir == true){
                    console.log("-> The child's body rises, staring intently at you...")
                    console.log("-> CHILD: 'YOU DESTROYED MY SCROLL, NOW I WILL DESTROY YOU...'")
                    SECRET_ENDING = true
                    REAL_ENDING = false
                    BAD_ENDING = false
                    BAD_ENDING_2 = false
                    BAD_ENDING_3 = false
                    GOOD_ENDING = false
                    jogoAtivo4 = false
                    console.log("===========================================================================");
                   } else {
                    console.log("-> It is the small and fragile body of a child.");
                    console.log("-> Your heart pounds, hammering against your ribs.");
                    console.log("-> Amid the panic, you suddenly hear...");
                    console.log ("============================================================================")
                    console.log ("-> Congratulations!!")
                    console.log ("============================================================================")
                    console.log ("—— 40.24248 ——")
                    console.log (" ")
                    console.log ("—— -121.4434 ——")
                    console.log ("============================================================================")
                    console.log ("CRTHR FHN ERPBZCRAFN!!")
                    console.log ("============================================================================")
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
                    console.log("============================================================================");
console.log("-> You decide not to dig and turn to move forward. A fatal mistake.");
console.log("-> From the shadows, a figure moves. Before you can react, a violent impact hits your abdomen.");
console.log("-> The world spins as you fall. The last thing you see is the face of a man, expressionless, watching you die.");
console.log("============================================================================");
console.log("-> YOU DIED!");
console.log("============================================================================");
                    console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
                    console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
                    console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
                    console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
                    console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
                    console.log ("===========================================================================");
                    process.exit(1);
                    
                } else {
                    Opcãoinvalida()
                 }

            } else if (mapa3 == 2) {
                console.clear();
                console.log("===========================================================================");
console.log("-> A distrust runs down your spine. The map seems too easy, perhaps a trap.");
console.log("-> You ignore it, deciding to continue your search of the house. Maybe you missed something.");
console.log("===========================================================================");
console.log("-> Time drags on in the gloom. Every second feels like an eternity, until a sound breaks the silence: the front door opens.");
console.log("-> Heavy footsteps echo through the house. The owner has returned.");
console.log("-> You panic and dive into the first hiding spot you find: a dark, dusty closet.");
console.log("-> Through the cracks in the door, you see him. He stops, notices an object out of place, and his body tenses. He knows someone is here.");
console.log("-> The sound of his footsteps gets closer to your hiding spot, louder and louder... The closet door abruptly opens.");
                console.log ("===========================================================================");
                console.log ("[You Died!!]")
                console.log ("===========================================================================");
                console.log(" ██████   █████   ███    ███ ███████      ██████   ██    ██ ███████ ██████");
                console.log("██       ██   ██  ████  ████ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log("██   ███ ███████  ██ ████ ██ █████       ██    ██  ██    ██ █████   ██████  ");
                console.log("██    ██ ██   ██  ██  ██  ██ ██          ██    ██  ██    ██ ██      ██   ██");
                console.log(" ██████  ██   ██  ██      ██ ███████      ██████    ██████  ███████ ██   ██ ");
                console.log ("===========================================================================");
                process.exit(1);
                
            } else {
                Opcãoinvalida()
             }

            
        } else if (casa2 == 2) {
            console.clear();
            if (!casafora) {
                casafora = true
                console.log("===========================================================================");
                console.log("-> A shiver of fear stops you. You decide the risk is too great and turn your back on the house.");
                console.log("===========================================================================");
                console.log("-> You resume the trail, but the forest around you seems to have changed. It is quieter, darker.");
                console.log("-> The path twists strangely and, after a few minutes, a feeling of 'déjà vu' bothers you.");
                console.log("-> The same twisted tree... the same moss-covered stone. Panic sets in: the path is leading you in circles.");
                console.log("-> There is no other choice. You need to go back to the beginning, to the bifurcation where it all started.");
                console.log("===========================================================================");
            } else if (casafora) {
                console.clear();
                console.log ("===========================================================================");
                console.log ("-> You have already tried that...")

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

if (BAD_ENDING) {
    exec('start cmd.exe /c aEN.exe')
    const conteudo = "YOU COMPLETED THE FIRST BAD ENDING";
fs.writeFileSync('../Achievements/BAD_ENDING.bin', conteudo, 'utf8');
fs.appendFile(save_conquistas, 'BAD_ENDING.bin', (err) => {
    if (err) throw err;
})

} else if (REAL_ENDING) {
    exec('start cmd.exe /c PoliceMonitorEN.exe', (error) => {
    if (error) {
      console.error(`Erro ao executar o arquivo: ${error.message}`);
      return;
    }
    fs.appendFile(save_conquistas, 'REAL_ENDING.bin', (err) => {
        if (err) throw err;
    })
    if (REAL_ENDING) {
        const conteudo1 = "YOU COMPLETED THE REAL ENDING";
        fs.writeFileSync('../Achievements/REAL_ENDING.bin', conteudo1, 'utf8');

    }
});
} else if (GOOD_ENDING) {
        const conteudo2 = "YOU COMPLETED THE GOOD ENDING";
        fs.writeFileSync('../Achievements/GOOD_ENDING.bin', conteudo2, 'utf8');
        fs.appendFile(save_conquistas, 'GOOD_ENDING.bin', (err) => {
            if (err) throw err;
        })
    } else if (BAD_ENDING_2) {
        const conteudo3 = "YOU COMPLETED THE SECOND BAD ENDING";
        fs.writeFileSync('../Achievements/BAD_ENDING_2.bin', conteudo3, 'utf8');
        fs.appendFile(save_conquistas, 'BAD_ENDING2.bin', (err) => {
            if (err) throw err;
        })
    } else if (BAD_ENDING_3) {
        const conteudo4 = "YOU COMPLETED THE THIRD BAD ENDING";
        fs.writeFileSync('../Achievements/BAD_ENDING_3.bin', conteudo4, 'utf8');
        fs.appendFile(save_conquistas, 'BAD_ENDING3.bin', (err) => {
            if (err) throw err;
        })
    } else if (SECRET_ENDING){
        const conteudo6 = "YOU COMPLETED THE SECRET ENDING";
        fs.writeFileSync('../Achievements/SECRET_ENDING.bin', conteudo6, 'utf8');
        fs.appendFile(save_conquistas, 'SECRET_ENDING.bin', (err) => {
            if (err) throw err;
        })
    }

N = false
O = false
L = false
S = false

// Propriedade de Sad Berry Games.