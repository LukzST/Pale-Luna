// Propriedade de Sad Berry Games.

const prompt = require('prompt-sync')();
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

function Opcãoinvalida() {
    console.clear()
    console.log("===========================================================================");
    console.log("-> Opção invalida!")
    console.log("===========================================================================");
    console.log("-> Pressione [1] para fechar...");
    console.log("===========================================================================");
    while (prompt("> ") !== '1') {
        // Fica em loop até o jogador pressionar 1
    }
    process.exit(90)
}

function pausarParaFechar() {
    console.clear()
    console.log("===========================================================================");
    console.log("-> Pressione [1] para fechar...");
    console.log("===========================================================================");
    while (prompt("> ") !== '1') {
        // Fica em loop até o jogador pressionar 1
    }
    process.exit(90)
}

function pausarParaContinuar() {
    console.log("===========================================================================");
    console.log("-> Pressione [1] para continuar...");
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
        console.log("-> Você tem no seu inventário as seguintes coisas:");
        console.log("===========================================================================");

        // Criamos um contador para saber se algum item foi exibido.
        let itensNoInventario = 0;

        // Agora, verificamos cada item separadamente.
        if (papega) {
            console.log("-> Pá");
            itensNoInventario++; // Aumenta o contador se o item existe.
        }
        if (temChave) {
            console.log("-> Chaves");
            itensNoInventario++;
        }
        if (chavedois) {
            console.log("-> Chave (Lápide)");
            itensNoInventario++;
        }
        // Se você quiser adicionar um novo item, basta adicionar um novo `if` aqui!

        // Se o contador for 0, significa que o inventário está vazio.
        if (itensNoInventario === 0) {
            console.log("-> Você ainda não pegou nenhum item!");
        }

        console.log("===========================================================================");
        console.log("-> Você quer voltar?");
        console.log("===========================================================================");
        console.log("[01] SIM");
        console.log("[02] NÃO");
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
        console.log ("-> Você chegou em um nivel muito baixo de sanidade durante o jogo!")
        console.log ("-> Você enlouqueceu e se perdeu na floresta para sempre!")
        console.log("===========================================================================");
        console.log ("-> Fim de jogo")
        console.log("===========================================================================");
        process.exit(1)
    } else {
        valorsanidade-=10
    while (s2 != 1) {
        console.clear()
    console.log("===========================================================================");
    console.log ("-> AVISO: SUA SANIDADE CAIU!")
    console.log ("-> Você agora tem " ,valorsanidade, "% de sanidade")
    console.log("===========================================================================");
    console.log ("-> Você quer continuar?")
    console.log("===========================================================================");
            console.log ("[01] SIM")
            console.log ("[02] NÃO")
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
            console.log ("-> [AVISO] SUA SANIDADE SUBIU!")
            console.log ("-> Você agora tem " ,valorsanidade, "% de sanidade")
            console.log("===========================================================================");
            console.log ("-> Você quer continuar?")
            console.log("===========================================================================");
                    console.log ("[01] SIM")
                    console.log ("[02] NÃO")
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
    console.log ("-> Sua sanidade está em ",valorsanidade, "%")
    console.log("===========================================================================");
            console.log ("-> Você quer voltar as opções anteriores?")
            console.log("===========================================================================")
            console.log ("[01] SIM")
            console.log ("[02] NÃO")
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
        console.log ("-> Você perdeu muita vida!")
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
    console.log ("-> AVISO: SUA VIDA CAIU GRAVIMENTE!")
    console.log ("-> Você agora tem " ,Vida, "% de vida")
    console.log("===========================================================================");
    console.log ("-> Você quer continuar?")
    console.log("===========================================================================");
            console.log ("[01] SIM")
            console.log ("[02] NÃO")
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
    console.log ("-> Você perdeu muita vida!")
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
        console.log ("-> Você perdeu muita vida!")
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
        console.log ("-> AVISO: SUA VIDA CAIU EM NIVEL MEDIO!")
        console.log ("-> Você agora tem " ,Vida, "% de vida")
        console.log("===========================================================================");
        console.log ("-> Você quer continuar?")
        console.log("===========================================================================");
                console.log ("[01] SIM")
                console.log ("[02] NÃO")
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
        console.log ("-> Você perdeu muita vida!")
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
            console.log ("-> Você perdeu muita vida!")
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
            console.log ("-> AVISO: SUA VIDA CAIU!")
            console.log ("-> Você agora tem " ,Vida, "% de vida")
            console.log("===========================================================================");
            console.log ("-> Você quer continuar?")
            console.log("===========================================================================");
                    console.log ("[01] SIM")
                    console.log ("[02] NÃO")
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
            console.log ("-> Você perdeu muita vida!")
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
                console.log ("-> Você agora tem " ,Vida, "% de vida")
                console.log("===========================================================================");
                console.log ("-> Você quer continuar?")
                console.log("===========================================================================");
                        console.log ("[01] SIM")
                        console.log ("[02] NÃO")
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
                console.log ("-> Você perdeu muita vida!")
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
                console.log ("-> AVISO: SUA VIDA CAIU EXTREMAMENTE!")
                console.log ("-> Você agora tem " ,Vida, "% de vida")
                console.log("===========================================================================");
                console.log ("-> Você quer continuar?")
                console.log("===========================================================================");
                        console.log ("[01] SIM")
                        console.log ("[02] NÃO")
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


  if(numero == 3){
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
console.log ("-> Eu acho que você não entendeu, né?")
console.log ("-> Você NUNCA teve controle neste mundo...")
console.log ("-> E agora eu irei te mostrar como as coisas são por aqui!")
console.log ("===========================================================================")
const conteudo10002 = "3";
    fs.writeFileSync('../HAHAHAHAHAHAHA.txt', conteudo10002, 'utf8');
    process.exit()
} else if (numero == 1) {
console.clear()
console.log ("===========================================================================")
console.log ("-> Você acha mesmo que depois do que você fez eu irei te deixar em paz???")
console.log ("===========================================================================")
    const conteudo10001 = "2";
    fs.writeFileSync('../HAHAHAHAHAHAHA.txt', conteudo10001, 'utf8');
    process.exit()
} else if (jogadortem == true) {
    console.clear()
    console.log ("===========================================================================")
    console.log ("-> Serio? Você acha mesmo que é só fechar e abrir o jogo?")
    console.log ("===========================================================================")
    if (jogadortem == true){
        const conteudo1000 = "1";
        fs.writeFileSync('../HAHAHAHAHAHAHA.txt', conteudo1000, 'utf8');
    }
    process.exit()
}

const conquistasExistem = fs.existsSync(save_conquistas);

const contaExiste = fs.existsSync(accountFilePath);

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
console.log ("--- EDIÇÃO DE TERMINAL - FEITO PELA SAD BERRY GAMES ---")
console.log ("===========================================================================")
console.log ("--- VERSÃO 2.8 ---")
console.log ("===========================================================================")
console.log ("[BEM-VINDO A PALE LUNA - SIGA AS REGRAS PARA QUE NÃO HAJA PROBLEMAS]");
console.log ("===========================================================================")
console.log ("-> Regra [01]: Digite apenas números (1, 2, 3 e 4).");
console.log ("-> Regra [02]: Não utilize caracteres especiais.");
console.log ("-> Regra [03]: Deixe o jogo em tela cheia!")
console.log ("-> Regra [04]: Divirta-se 😉");
console.log ("===========================================================================")
const folderPath = '../Achievements';
const count = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin')).length;
const finais = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin'));
console.log(`-> Finais completados: [${count}/6]`);
console.log('-> Lista de finais:', finais);
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
console.log ("-> Podemos começar?");
console.log ("===========================================================================")
console.log ("[01] Sim");
console.log ("[02] Nao");
console.log ("===========================================================================");
let começar = prompt("> ");

if (count >5 || count < 0) {
    console.clear();
    console.log ("===========================================================================");
    console.log ("-> [ERRO]: Você não pode ter mais de 5 finais ou menos de 0 finais, por favor execute o apagador de progresso!.");
        console.log ("===========================================================================");
        process.exit(1); // Encerra o programa com código de saída 1 (falha)
}

if (começar === "2") {
    console.log (" ");
    console.log("===========================================================================");
    console.log("-> Que pena, vejo você na próxima!");
    console.log("===========================================================================");
    process.exit(0); // Encerra o programa com código de saída 0 (sucesso)
} else if (começar !== "1") {
    Opcãoinvalida()
}


console.clear()
console.log("===========================================================================");
console.log ("[CONTEXTO]")
console.log("===========================================================================");
console.log ("-> Você é Michael Nevins, um engenheiro eletrico que foi chamado para consertar")
console.log ("postes, porém nem tudo ocorreu como planejado e")
console.log ("você foi sequestrado por alguem!")
console.log("===========================================================================");
console.log ("-> Seu objetivo é tentar fugir!")
pausarParaContinuar()
    console.log("===========================================================================");
    console.log ("-> E lembre-se...")
    const vbsFilePath = path.join(__dirname, 'OnlyBR.vbs');
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
console.log ("-> Você está em uma sala escura. A luz da lua raia pela janela.");
console.log ("-> Há um POTE DE OURO no canto da sala, junto com uma PÁ. E do outro lado existe uma PORTA.");
console.log ("===========================================================================");
console.log ("[OPÇÕES]");
console.log ("===========================================================================")
console.log ("[01] PÁ");
console.log ("[02] POTE DE OURO");
console.log ("[03] PORTA");
console.log ("===========================================================================");
console.log ("[AÇÕES]");
console.log ("===========================================================================")
console.log ("[04] INVENTÁRIO")
console.log ("[05] VER SANIDADE")
console.log ("[06] VIDA");
console.log ("===========================================================================");
    console.log ("Comando?");
    let inicio = Number(prompt("> "));

if (inicio === 1) {
    if (papega) {
        console.clear();
        console.log("===========================================================================");
        console.log ("-> Você já pegou a pá");
    } else if (!papega) {
    console.clear();
    console.log("===========================================================================");
    console.log ("-> Você pegou a pá, talvez seja util no futuro");
    console.log ("-> O que você vai fazer agora?");
    papega = true;
    }
} else if (inicio === 2) {
    if (temChave) {
        console.clear();
        console.log("===========================================================================");
        console.log ("-> Você ja pegou o pote de ouro e a chave");
    } else if (!temChave) {
    console.clear();
    console.log("===========================================================================");
    console.log ("-> Você pegou o pote de ouro, dentro dele você achou uma chave");
    console.log ("-> O que você vai fazer agora?");
    temChave = true;
    }
} else if (inicio === 3) {
    console.clear();
    console.log("===========================================================================");
    console.log ("-> Você tentou abrir a porta...");
    if (temChave) {
        console.log ("-> Você consegue abrir a porta com a chave encontrada!");
        console.log ("-> [AVISO] Você usou a chave!");
        temChave = false
        jogoAtivo = false;
        saiudacasa = true;
    } else if (!temChave) {
        console.log ("-> Você tenta abrir a porta porém ela está trancada...");
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
        console.log ("-> Pegue sua recompensa. A lua palida sorri para você.");
        console.log ("-> Você está em uma floresta, Existem caminhos para o NORTE, OESTE e LESTE:");
        console.log ("===========================================================================");
        console.log ("[OPÇÕES]");
        console.log ("===========================================================================")
        console.log ("[01] NORTE.");
        console.log ("[02] OESTE.");
        console.log ("[03] LESTE.");
        console.log("===========================================================================");
        console.log ("[AÇÕES]");
        console.log ("===========================================================================")
        console.log ("[04] INVENTÁRIO");
        console.log ("[05] SANIDADE");
        console.log ("[06] VIDA");
        console.log ("===========================================================================");
        
    
    console.log ("Comando?");
    floresta1 = Number(prompt("> "));

    if (floresta1 === 1) {
        console.clear();

        if (jafoinorte) {
        console.log ("===========================================================================")
        console.log ("-> Você ja foi pelo norte!")
        pausarParaContinuar()
        } else {
        jafoinorte = true
        console.log ("===========================================================================");
        console.log ("-> Você se sente mais confiante em ir pelo norte...");
        N = true
         // Randomização de 50% de chance de sucesso ou falha
         
    if (Math.random() < 0.5) {
        console.log ("===========================================================================");
        console.log ("-> Você tropeça em uma raiz e cai!");
        console.log ("-> Você perdeu tempo e precisa voltar.");
        console.log ("-> Você caminha de volta...");
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
        console.log ("-> Você encontra um atalho secreto!");
        console.log ("===========================================================================");
        console.log ("[OPÇÕES]");
        console.log ("===========================================================================")
        console.log ("[01] Ir pelo atalho");
        console.log ("[02] Ignorar o atalho");
        console.log ("===========================================================================");
        console.log ("Comando?")
        atalho = prompt ("> ");
        if (atalho == 1) {
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> Você avança rapidamente pela floresta.");
            console.log ("-> Você consegue sair da floresta, mas ainda restam segredos esperando para serem descobertos...");
            console.log ("===========================================================================");
            console.log ("-> Você venceu!!");
            console.log ("-> Parabens? você completou o BAD ENDING, NVAQN ERFGNZ FRTERQBF RFCRENAQB CBE IBPÊ.");
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
            console.log ("-> Você acha perigoso e ignora o atalho");
            console.log ("-> Você decidi voltar as opções de caminhos");
            
        } else {
            Opcãoinvalida()
         }
      }
    } 
    } else if (floresta1 === 2) {
        console.clear();
        console.log("===========================================================================");
        console.log ("-> Você vai pelo caminho Oeste...")
        console.log ("-> De repente você de longe vê vindo um homem alto, com um machado e não muito amigavel.");
        O = true
        console.log("===========================================================================");
        console.log ("[OPÇÕES]");
        console.log ("===========================================================================")
        console.log ("[01] Fugir");
        console.log ("[02] Se esconder");
        console.log("===========================================================================");
        console.log ("Comando?");
        decisão1 = Number(prompt("> "));

         if (decisão1 === 1) {
             console.clear();
             console.log("===========================================================================");
             console.log ("-> Você começa a correr o mais rapido possivel...");
             console.log ("-> Porém infelizmente você tropeça em uma raiz e leva uma machadada do homem")
             console.log("===========================================================================");
             console.log ("-> Pressione 1 para continuar...")
             console.log ("-> (Se você digitar diferente de 1 o jogo irá fechar!)")
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
             console.log ("-> Você decidi se esconder em uma moita ao seu lado");
             console.log ("-> Porém, infelizmente ele consegue te ver, e te da uma machadada!");
             console.log ("===========================================================================");
             console.log ("-> Pressione 1 para continuar...")
             console.log ("-> (Se você digitar diferente de 1 o jogo irá fechar!)")
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
        console.log ("-> Depois de pensar, você decidi ir pelo Leste...") 
        L = true
        console.log ("-> Você começa a adentrar a floresta densa...");
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
    console.log ("-> Pegue sua recompensa. A lua palida sorri para você.");
    console.log ("-> Você está em uma floresta, Existem caminhos para o NORTE, SUL e LESTE:");
    console.log ("===========================================================================");
    console.log ("[OPÇÕES]");
    console.log ("===========================================================================")
    console.log ("[01] NORTE.");
    console.log ("[02] SUL.");
    console.log ("[03] LESTE.");
    console.log("============================================================================");
    console.log ("[AÇÕES]");
    console.log ("===========================================================================")
    console.log ("[04] INVENTÁRIO");
    console.log ("[05] SANIDADE");
    console.log ("[06] VIDA");
    console.log ("===========================================================================");
    console.log ("Comando?");
    floresta2 = Number(prompt("> "));

    if (floresta2 === 1) {
        if (!tentanovamente1) {
            console.log (" ");
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> Você ja foi por ai!");
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
        console.log ("-> Você decidi ir pelo Norte...");
        N = true
        console.log ("-> Você encontra uma cabana velha feita de madeira");
        console.log ("===========================================================================");
        console.log ("[OPÇÕES]");
        console.log ("===========================================================================")
        console.log ("[01] Entrar na cabana");
        console.log ("[02] Ignorar a cabana");
        console.log ("===========================================================================");
        console.log ("Comando?");
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
            console.log ("-> Você entra na cabana e encontra um baú velho");
            console.log ("-> Dentro do baú você encontra um pergaminho com um mapa");
            console.log ("===========================================================================");
            console.log ("[OPÇÕES]");
            console.log ("===========================================================================")
            console.log ("[01] Pegar o mapa");
            console.log ("[02] Voltar para a bifurcação");
            console.log ("[03] Pegar Kit Medico (Cura 50% da vida)");
            console.log ("===========================================================================");
            console.log ("Comando?");
            cabana1 = prompt("> ");

            if (cabana1 === "1") {
                console.clear();
                console.log ("===========================================================================");
                console.log ("-> Você pega o mapa e sai da cabana");
                tentanovamente1 = false;
                mapaachado = true;
                console.log ("===========================================================================");
                console.log ("[OPÇÕES]");
                console.log ("===========================================================================")
                console.log ("[01] Voltar para a bifurcação");
                console.log ("===========================================================================");
                console.log ("Comando?");
                cabana2 = prompt("> ");
                if (cabana2 === "1") {
                    console.clear();
                    console.log (" ")
                    console.log ("===========================================================================");
                    console.log ("-> Você volta para a bifurcação...");
                }  else if (cabana2 !== 1) {
                    Opcãoinvalida()
                }
            } else if (cabana1 === "2") {
                console.clear();
                console.log ("===========================================================================");
                console.log ("-> Você volta a bifurcação")
            } else if (cabana1 == "3") {
                if (kitm == true) {
                    console.clear()
                    console.log("===========================================================================");
                    console.log("-> Você já pegou o kit medico!")
                    console.log("===========================================================================");
                console.log ("-> Pressione [1] para continuar!")
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
                console.log ("-> Você pega o kit medico rapido e ja começa os seus medicamentos e bandanas")
                console.log ("-> Parabens, você curou a sua vida em +50.")
                console.log("===========================================================================");
                console.log ("-> Pressione [1] para continuar!")
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
            console.log ("-> Você ignora a cabana e continua o seu caminho...");
            console.log ("-> Após andar um pouco você encontra uma ponte quebrada");
            console.log ("===========================================================================");
            console.log ("[OPÇÕES]");
            console.log ("===========================================================================")
            console.log ("[01] Pular a ponte");
            console.log ("[02] Voltar para a bifurcação");
            console.log ("===========================================================================");
            console.log ("Comando?");
            ponte = prompt("> ");

            if (ponte === "1") {
                console.clear();
                console.log ("===========================================================================");
                console.log ("-> Você tenta pular a ponte, porém você cai e morre");
                console.log ("-> Você morreu!!");
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
                console.log ("-> Você volta para a bifurcação...");
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
        console.log ("-> Você vai pelo Sul.");
        S = true
        console.log ("-> Você encontra um lago, e um barco a sua frente");
        console.log ("===========================================================================");
        console.log ("[OPÇÕES]");
        console.log ("===========================================================================")
        console.log ("[01] Pegar o barco");
        console.log ("[02] Ignorar o barco");
        console.log ("[03] Voltar para a bifurcação");
        console.log ("===========================================================================");
        console.log ("Comando?");
        barco = Number(prompt("> "));
        console.log (" ");

        if (barco === 1) {
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> Você pega o barco e começa a remar...");
            console.log ("-> Porém o barco começa a afundar, dentro do rio você ve uma caverna submersa!")
            console.log ("===========================================================================");
        console.log ("[OPÇÕES]");
        console.log ("===========================================================================")
        console.log ("[01] Ignorar caverna");
        console.log ("[02] Entrar dentro da caverna");
        console.log ("===========================================================================");
        console.log ("Comando?");
        barco2 = Number(prompt("> "));
        console.log (" ");

        if (barco2 == 1) {
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> Você ignora a caverna e decidi voltar nadando  para a trilha...");
        } else if (barco2 == 2) {
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> Você entra dentro da caverna, e dentro dela você fica horrorizado...")
            console.log ("-> Dentro você vê varias lapides e no centro do cemiterio, há um pergaminho aberto...")
            console.log ("===========================================================================");
            console.log ("[OPÇÕES]")
            console.log ("===========================================================================");
            console.log ("[01] Ler")
            console.log ("[02] Não Ler")
            console.log ("[03] DESTRUIR!")
            console.log ("===========================================================================");
            pergaminho = Number(prompt("> "));

            if(pergaminho == 1) {
                console.clear()
                if (destruir == false){
                console.log ("===========================================================================");
                console.log ("Você pega o pergaminho e começa a ler...")
                console.log ("===========================================================================");
                console.log ("[DIA 01]: Onde eu estou?")
                console.log ("===========================================================================");
                console.log("Não sei bem por onde começar.");
console.log("Minhas mãos ainda tremem tanto que mal consigo segurar esta caneta improvisada...");
console.log("um pedaço de carvão que achei perto de uma das... lápides.");
console.log("Num lago escondido numa floresta que já era sinistra por si só.");
console.log("Acho que faz dois dias que me perdi da trilha principal.");
console.log("Tentei achar o caminho de volta, mas cada árvore parecia igual à anterior.");
console.log("A noite caiu, e o medo começou a se instalar de verdade.");
console.log ("")
console.log("Hoje, exausto e com sede, avistei este lago estranhamente parado.");
console.log("A água era escura, mas a promessa de alívio me fez aproximar.");
console.log("Foi quando vi uma sombra escura sob a superfície, perto da margem rochosa.");
console.log("Uma espécie de abertura, uma fenda na pedra submersa.");
console.log("Num impulso de desespero, pensando ser talvez uma gruta para abrigo, mergulhei.");
console.log("A água era gelada. Segui a fenda escura, prendendo a respiração.");
console.log("Emergi num bolsão de ar, cuspindo água, o coração a mil.");
console.log ("")
console.log("Minha lanterna fraca iluminou o impensável: as fileiras de lápides.");
console.log("E no centro desta câmara macabra, sobre uma pedra lisa, este pergaminho.");
console.log("Estou preso, perdido, e agora encontrei um cemitério submerso.");
console.log("Que tipo de loucura é esta? Preciso registrar tudo.");
console.log("Espero que este carvão dure. E que eu também dure.");
console.log ("===========================================================================");
console.log ("-> Pressione [1] para continuar lendo, ou pressione [2] para fechar")
console.log ("===========================================================================");
teste = Number(prompt("> "))

if (teste == 1) {
    console.clear()
    console.log ("===========================================================================");
    console.log ("[DIA 02]: Será que isso é real?")
    console.log ("===========================================================================");
console.log("Passei a noite em claro, se é que existe noite neste buraco úmido.");
console.log("A luz da lanterna morreu. Agora só tenho a escuridão e o som da água.");
console.log("Cada sombra que dançava com a chama da lanterna parecia uma lápide se movendo.");
console.log("Tateei as paredes rochosas, procurando outra saída, uma fresta de esperança.");
console.log("Nada. Apenas a passagem submersa por onde entrei ontem, como um pesadelo líquido.");
console.log ("")
console.log("Minha garganta está seca, a fome revira meu estômago.");
console.log("Olho para este carvão, para estas palavras que escrevo. É real?");
console.log("As lápides continuam lá, frias, firmes. Um testemunho silencioso.");
console.log("Não foi um delírio da exaustão. Este lugar existe.");
console.log ("")
console.log("O pergaminho... peguei-o novamente. As mãos sujas de terra e medo.");
console.log("A escrita é antiga, quase apagada pela umidade constante.");
console.log("Consegui decifrar algumas palavras soltas: 'perdido', 'água', 'gritos'.");
console.log("Gritos? De quem? Senti um arrepio percorrer minha espinha.");
console.log("Este diário não é um bom presságio. É o registro de outro desesperado?");
console.log("Preciso poupar o carvão. E minhas forças.");
console.log ("")
console.log("Tentei gritar por ajuda mais cedo, mas só o eco zombeteiro respondeu.");
console.log("A floresta lá fora me perdeu. Esta caverna quer me engolir.");
console.log ("")
console.log("A sanidade é uma linha tênue sobre um abismo de lápides.");
console.log ("===========================================================================");
console.log ("-> Ao final você vê muito sangue e teme pela vida do escritor...")
console.log ("===========================================================================");
console.log ("-> Pressione [1] para tentar voltar ao caminho nadando, ou [2] para ficar na caverna")
console.log ("===========================================================================");

teste2 = Number(prompt("> ")) 
if (teste2 == 1) {
    console.clear()
    console.log ("===========================================================================");
    console.log ("-> Vendo que você não tem muitas opções, você tenta voltar nadando...")

    if (Math.random() < 0.5) {
    console.log ("===========================================================================");
    console.log ("-> Você consegue! ")
    console.log ("===========================================================================");
    } else {
        Vida-=100
        console.log ("===========================================================================");
        console.log ("-> Você morre afogado!")
        pausarParaContinuar()
        menosVidaG()
        console.log ("===========================================================================");
    }
} else if (teste2 == 2) {
    console.clear()
    console.log ("===========================================================================");
    console.log ("-> Você sente medo de tentar voltar e decidi ficar na caverna.")
    console.log ("-> Para passar o tempo você começa a vasculhar o local e no canto de uma lapide você ve uma chave!")
    console.log ("-> Você pega ela...")
    console.log ("===========================================================================");
    console.log ("[CHAVE COLETADA]")
    chavedois = true
    console.log ("===========================================================================");
    console.log ("2 dias depois você nota que realmente não há nada para se fazer la embaixo.")
    console.log ("E então você volta para a superfice...")
} else {
    Opcãoinvalida()
}

} else if (teste == 2) {
    console.clear()
    console.log ("===========================================================================");
    console.log ("-> Você para de ler, por medo.")
    console.log ("-> Vendo que você não tem muitas opções, você tenta voltar nadando...")
    console.log ("===========================================================================");
    console.log ("-> Você consegue! ")
    console.log ("===========================================================================");
} else {
    Opcãoinvalida()
}

                } else {
                    console.clear()
                    console.log ("===========================================================================")
                    console.log ("-> Você destruiu o pergaminho, ou seja você não pode mais ler ele!")
                    console.log ("===========================================================================")
                    console.log ("-> Pressione [1] para continuar")
                    console.log ("===========================================================================")
                    let ab = Number(prompt("> "))
                    if (ab == 1) {
                        console.clear()
                    } else {
                        console.clear()
                        console.log ("===========================================================================")
                        console.log ("[ERRO 678] Valor Invalido!")
                        console.log ("===========================================================================")
                        process.exit()
                    }
                }

            } else if (pergaminho == 2) {
                console.clear()
                console.log ("===========================================================================");
        console.log ("-> Vendo que você não tem muitas opções, você tenta voltar nadando...")
    console.log ("===========================================================================");

            } else if (pergaminho == 3) {
                console.clear()
                destruir = true
                console.log ("===========================================================================");
                console.log ("-> VOCÊ DESTRUIU O PERGAMINHO!")
                console.log ("-> ESSA AÇÃO PROVOCARÁ CONSEQUENCIAS NO FUTURO...")
                console.log ("===========================================================================");
                console.log ("-> Vendo que você não tem muitas opções, você tenta voltar nadando...")
                
            } else {
                Opcãoinvalida()
            }
        } else {
            Opcãoinvalida()
        }
        } else if (barco === 2) {
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> Você ignora o barco e continua o seu caminho...");
            console.log ("-> Depois de andar um pouco você encontra um lobo");
            console.log ("===========================================================================");
            console.log ("[OPÇÕES]");
            console.log ("===========================================================================")
            console.log ("[01] Correr");
            console.log ("[02] Se esconder");
            console.log ("===========================================================================");
            console.log ("Comando?");
            decisão2 = Number(prompt("> "));
            console.log (" ");

            if (decisão2 === 1) {
                console.clear();
                console.log ("===========================================================================");
                console.log ("-> Você começa a correr o mais rapido possivel...");
                console.log ("-> Porém o lobo é mais rápido e te morde, você está ferido em um nivel medio!");
                console.log ("===========================================================================");
                console.log ("-> Pressione [1] para continuar")
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
                console.log ("-> Você se esconde em uma caverna ao lado");
                console.log ("-> Dentro dela você piora a sua situação, pois há varios animais que te mordem, incluindo o lobo!");
                console.log ("-> Você fica ferido muito gravimente.")
                console.log ("===========================================================================");
                console.log ("-> Pressione [1] para continuar")
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
    console.log ("-> Você volta para a bifurcação...");
    } else {
        Opcãoinvalida()
    }
} else if (floresta2 == 3) {
    console.clear();
    console.log ("===========================================================================");
    console.log ("-> Você decidi ir pelo Leste.");
    L = true
    console.log ("-> Você atravessa as folhas e galhos, e encontra uma outra bifurcação");
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
        console.log ("-> Quer usar o mapa?");
        console.log ("===========================================================================");
        console.log ("[OPÇÕES]");
        console.log ("===========================================================================")
        console.log ("[01] Sim");
        console.log ("[02] Não");
        console.log ("===========================================================================");
        console.log ("[AÇÕES]");
        console.log ("===========================================================================")
        console.log ("[03] Inventario")
        console.log ("===========================================================================");
        console.log ("Comando?");
        mapa = prompt("> ");
        console.log (" ");

        if (mapa == 1){
            console.clear();
            mapa67 = true
            console.log ("===========================================================================");
            console.log ("-> O mapa diz que o caminho do Norte é o caminho certo");
            console.log ("===========================================================================");
            console.log ("-> [AVISO] Você não pode usar o mapa novamente");
            mapaachado = false;

        } else if (mapa == 2) {
            console.clear();
            mapa67 = true
            console.log ("===========================================================================");
            console.log ("-> Você decide não usar o mapa");

        } else if (mapa == 3) {
            inventario()
        } else {
            console.clear();
            console.log("===========================================================================");
            console.log ("-> Opções Invalida, você perdeu a chance de usar o mapa!!")
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
        console.log ("██               █  ██  █        ████████████")
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
    console.log ("-> Pegue sua recompensa. A lua palida sorri para você.");
    console.log ("-> Você está em uma floresta, Existem caminhos para o NORTE, SUL e OESTE:");
    console.log ("===========================================================================");
    console.log ("[OPÇÕES]");
    console.log ("===========================================================================");
    console.log ("[01] NORTE.")
    console.log ("[02] SUL.");
    console.log ("[03] OESTE.");
    console.log("===========================================================================");
    console.log ("[AÇÕES]");
    console.log ("===========================================================================");
    console.log ("[04] INVENTÁRIO");
    console.log ("[05] SANIDADE");
    console.log ("[06] VIDA");
    console.log ("===========================================================================");
    console.log ("Comando?");
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
        console.log ("-> Você decidi ir pelo lado Norte.");
        console.log ("-> Você passa pelo caminho e encontra algo brilhante no chão");
        console.log ("===========================================================================");
        console.log ("[OPÇÕES]");
        console.log ("===========================================================================");
        console.log ("[01] Escavar o chão");
        console.log ("[02] Ignorar o objeto");
        console.log ("===========================================================================");
        console.log ("Comando?");
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
            console.log ("-> Você escava o chão e encontra uma foto de uma criança");
            console.log ("-> Na foto você vê que tem algo escrito atrás");
            console.log ("===========================================================================");
            console.log ("[OPÇÕES]");
            console.log ("===========================================================================");
            console.log ("[01] Ler o que está escrito");
            console.log ("[02] Ignorar a foto");
            console.log ("===========================================================================");
            fotopega = true
            console.log ("Comando?");
            foto = prompt("> ");

            if (foto==1) {
                console.clear();
                console.log ("===========================================================================");
                console.log ("-> A foto diz: 'VOCÊ NÃO DEVERIA TER VINDO AQUI'");
                console.log ("===========================================================================");
                console.log ("-> Você se sente um pouco assustado...");
                console.log ("-> Depois de um tempo você decide continuar o seu caminho");
                console.log ("-> Você chega em uma bifurcação");
                pausarParaContinuar()
                    menosSanidade()
                
                fotopega = true
                leufoto = true
                jogoAtivo3 = false;
                saiudafloresta2 = true;
            } else if (foto == 2 ) {
                console.clear();
                console.log ("===========================================================================");
                console.log ("-> Você ignora a foto e continua o seu caminho...");
                console.log ("-> Você chega em uma bifurcação");
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
            console.log ("-> Você não pode escavar, porque você não tem uma pá!");
        }
        } else if (objeto == 2) {
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> Você ignora o objeto e continua o seu caminho...");
            console.log ("-> Você chega em uma bifurcação");
            jogoAtivo3 = false;
            saiudafloresta2 = true;
        } else {
            Opcãoinvalida()
         }
    } else if (floresta3 == 2) {
        console.clear();
        console.log ("===========================================================================");
        console.log ("-> Você vai pelo caminho do Sul...");
        console.log ("-> Você encontra um lobo");
        console.log ("===========================================================================");
        console.log ("[OPÇÕES]");
        console.log ("===========================================================================");
        console.log ("[01] Correr");
        console.log ("[02] Se esconder");
        console.log ("===========================================================================")
        console.log ("Comando?")
        decisão2 = Number(prompt("> "));
        console.log (" ")

        if (decisão2 === 1) {
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> Você começa a correr o mais rapido possivel...");
            console.log ("-> Porém o lobo é mais rápido e te alcança, e te mata");
            console.log ("===========================================================================");
            console.log ("-> Você morreu!!");
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
    console.log ("-> Você se esconde em uma caverna ao lado");
    console.log ("-> infelizmente aquela caverna era a casa do lobo, e ele te mata");
    console.log ("===========================================================================");
    console.log ("-> Você morreu!!");
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
    console.log ("-> Você decidi ir pelo Oeste");
    console.log ("-> Você cai dentro do rio e morre afogado");
    console.log ("===========================================================================");
    console.log ("-> Você morreu!!");
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
console.log ("-> Pegue sua recompensa, a lua palida sorri para você")
console.log ("-> A sua frente existem caminhos, ao NORTE e SUL");
console.log ("===========================================================================");
console.log ("[OPÇÕES]");
console.log ("===========================================================================");
console.log ("[01] NORTE");
console.log ("[02] SUL");
console.log("===========================================================================");
console.log ("[AÇÕES]");
console.log ("===========================================================================");
console.log ("[03] INVENTÁRIO");
console.log ("[04] SANIDADE");
console.log ("[05] VIDA");
console.log ("===========================================================================");
    console.log ("Comando?")
    floresta4 = prompt("> ");
    console.log (" ")

    if (floresta4 == 1) {
        console.clear();
        console.log ("===========================================================================");
        console.log ("-> Você escolhe ir para o Norte...");
        N = true 
        console.log ("-> Você encontra um carro encostado na beira de uma estrada a sua frente.")
        console.log ("===========================================================================");
        console.log ("[OPÇÕES]")
        console.log ("===========================================================================")
        console.log ("[01] Tentar ligar o carro.")
        console.log ("[02] Ignorar o carro")
        console.log ("[03] Sair andando pela estrada")
        console.log ("===========================================================================");
        console.log ("Comando?")
        carro = Number(prompt("> "))
        console.log (" ")

        if (carro == 1) {
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> Você consegue ligar o carro.")
            console.log ("===========================================================================");
            console.log ("[OPÇÕES]")
            console.log ("[01] Ir embora")
            console.log ("[02] Voltar para o caminho")
            console.log ("===========================================================================");
            console.log ("Comando?")
            carro1 = Number(prompt("> "))
            console.log (" ")

            if (carro1 == 1) {
                console.clear()
                console.log ("===========================================================================")
                console.log("-> Você tem certeza? Essa ação não terá volta!")
                console.log ("===========================================================================")
                console.log ("-> Pressione [1] para continuar ou [2] para cancelar!")
                console.log ("===========================================================================")

                let br = Number(prompt("> "))
                if (br == 1) {
                
                console.clear();
                console.log ("===========================================================================");
                console.log ("-> Você decidi ir embora pela estrada!")
                if (fotopega && leufoto) {
                    console.log ("===========================================================================");
                    console.log ("-> Você antes de ir embora lembra da foto da criança...")
                    console.log ("-> e resolve chamar a policia assim que chegar em sua casa!")
                    console.log ("===========================================================================");
                    console.log ("-> Você completou o [GOOD_ENDING]")
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
                    console.log ("-> Você antes de ir embora lembra da foto da criança.")
                    console.log ("-> mas acha que uma pessoa simplesmente deixou cair...")
                    console.log ("===========================================================================");
                    console.log ("-> Você completou o [BAD_ENDING_2]")
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
                    console.log ("-> Você vai embora sem nem pensar direito.")
                    console.log ("===========================================================================");
                    console.log ("-> Você completou o [BAD_ENDING_3]")
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
                console.log ("-> Você resolve voltar para o caminho inicial")
            } else {
                Opcãoinvalida()
             }
        } else {
            console.clear()
        }
        } else if (carro == 2) {
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> Você ignora o carro!")
            console.log ("===========================================================================");
            console.log ("-> Chegando ao final do caminho, você nota que perdeu tempo e terá que voltar para o caminho inicial")
            console.log ("-> Você caminha devolta...")

        } else if (carro == 3){
            console.clear();
            console.log ("===========================================================================");
            console.log ("-> você decidi ir andando pela estrada...")
            console.log ("-> Isso não foi uma boa ideia!")
            console.log ("-> Um carro sem estar com o farol ligado, não te enxerga e tem mata atropelado.")
            console.log ("===========================================================================");
            console.log ("-> Você Morreu!!")
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
        console.log ("-> Você decidi ir pelo Sul...")
        S=true
        console.log ("-> Nesse caminho, você encontra uma casa, que parece ser normal.")
        console.log ("===========================================================================");
        console.log ("[OPÇÕES]")
        console.log ("===========================================================================");
        console.log ("[01] Entrar na casa.")
        console.log ("[02] Ignorar a casa e seguir o caminho.")
        console.log ("===========================================================================");
        console.log ("Comando?")
        casa2 = Number(prompt("> "))
        console.log (" ")

        if (casa2 == 1) {
            console.clear();
            console.log("===========================================================================");
console.log("-> Ao entrar na casa, seus passos ecoam de forma assustadora pelo silêncio.");
console.log("-> Seu primeiro instinto é procurar por sinais de vida")
console.log("alguém morando ou talvez preso ali.");
console.log("===========================================================================");
console.log("-> Após uma busca cuidadosa, você não encontra ninguém. ")
console.log("-> A solidão do lugar é palpável.");
console.log("-> Você então começa a revistar a casa em busca de algo útil, como um telefone.");
console.log("Sobre uma mesa empoeirada, você encontra um bilhete com um ")
console.log("mapa rudimentar desenhado com setas.");
console.log("===========================================================================");
            console.log ("[OPÇÕES]")
            console.log ("===========================================================================");
            console.log ("[01] Seguir mapa.")
            console.log ("[02] Não seguir o mapa.")
            console.log ("===========================================================================");
            console.log("Comando?")
            mapa3 = Number(prompt("> "))
            console.log (" ")

            if (mapa3 == 1) {
                console.clear();
                console.log("===========================================================================");
console.log("-> Você segue o mapa com atenção, cada curva um passo em direção ao desconhecido.");
console.log("-> Ao chegar no 'X' marcado, você pisa e o chão range, soando oco sob seus pés.");
console.log("-> Um receio imediato surge. A dúvida paira no ar: cavar e encarar o que há embaixo ou ignorar e seguir em frente?");
console.log("===========================================================================");
                console.log ("[OPÇÕES]")
                console.log ("===========================================================================");
                console.log ("[01] Escavar em busca de algo.")
                console.log ("[02] Não escavar.")
                console.log ("===========================================================================");
                console.log ("Comando?")
                cavar = Number(prompt("> "))
                console.log (" ")

                if (cavar == 1) {
                    console.clear();
                    console.log("===========================================================================");
console.log("-> A terra solta cede facilmente. Logo, você distingue a forma inconfundível de um corpo humano.");
console.log("-> Ao limpar a última camada de terra, seu sangue gela com a visão.");
console.log("===========================================================================");
                   
                   if (destruir == true){
                    console.log("-> O corpo da criança levanta olhando fixamente para você...")
                    console.log("-> CRIANÇA: 'VOCÊ DESTRUIU MEU PERGAMINHO, AGORA EU VOU TE DESTRUIR...'")
                    SECRET_ENDING = true
                    REAL_ENDING = false
                    BAD_ENDING = false
                    BAD_ENDING_2 = false
                    BAD_ENDING_3 = false
                    GOOD_ENDING = false
                    jogoAtivo4 = false
                    console.log("===========================================================================");
                   } else {
                    console.log("-> É o corpo pequeno e frágil de uma criança.");
                    console.log("-> Seu coração dispara, martelando contra as costelas.");
                    console.log("-> Em meio ao pânico, de repente, você ouve...");
                    console.log ("============================================================================")
                    console.log ("-> Parabens!!")
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
console.log("-> Você decide não cavar e se vira para seguir em frente. Um erro fatal.");
console.log("-> Das sombras, uma figura se move. Antes que você possa reagir, um impacto violento atinge seu abdômen.");
console.log("-> O mundo gira enquanto você cai. A última coisa que você vê é o rosto de um homem, sem expressão, te observando morrer.");
console.log("============================================================================");
console.log("-> VOCÊ MORREU!");
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
console.log("-> Uma desconfiança percorre sua espinha. O mapa parece fácil demais, talvez uma armadilha.");
console.log("-> Você o ignora, decidindo continuar sua busca pela casa. Talvez tenha deixado algo passar.");
console.log("===========================================================================");
console.log("-> O tempo se arrasta na penumbra. Cada segundo parece uma eternidade, até que um som quebra o silêncio: a porta da frente se abre.");
console.log("-> Passos pesados ecoam pela casa. O dono voltou.");
console.log("-> Você se desespera e mergulha no primeiro esconderijo que encontra: um guarda-roupa escuro e empoeirado.");
console.log("-> Pelas frestas da porta, você o vê. Ele para, nota um objeto fora do lugar e seu corpo enrijece. Ele sabe que há alguém aqui.");
console.log("-> O som dos passos dele se aproxima do seu esconderijo, cada vez mais alto... A porta do guarda-roupa se abre abruptamente.");
                console.log ("===========================================================================");
                console.log ("[Você Morreu!!]")
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
                console.log("-> Um arrepio de pavor te impede. Você decide que o risco é grande demais e dá as costas para a casa.");
                console.log("===========================================================================");
                console.log("-> Você retoma a trilha, mas a floresta ao redor parece ter mudado. Está mais silenciosa, mais escura.");
                console.log("-> O caminho se contorce de forma estranha e, após alguns minutos, uma sensação de 'déjà vu' te incomoda.");
                console.log("-> A mesma árvore retorcida... a mesma pedra coberta de musgo. O pânico se instala: o caminho está te levando em círculos.");
                console.log("-> Não há outra escolha. Você precisa voltar ao início, para a bifurcação onde tudo começou.");
                console.log("===========================================================================");
            } else if (casafora) {
                console.clear();
                console.log ("===========================================================================");
                console.log ("-> Você ja tentou fazer isso...")

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
    exec('start cmd.exe /c aBR.exe')
    const conteudo = "VOCÊ COMPLETOU O PRIMEIRO FINAL RUIM";
fs.writeFileSync('../Achievements/BAD_ENDING.bin', conteudo, 'utf8');
fs.appendFile(save_conquistas, 'BAD_ENDING.bin', (err) => {
    if (err) throw err;
})

} else if (REAL_ENDING) {
    exec('start cmd.exe /c PoliceMonitorBR.exe', (error) => {
    if (error) {
      console.error(`Erro ao executar o arquivo: ${error.message}`);
      return;
    }
    fs.appendFile(save_conquistas, 'REAL_ENDING.bin', (err) => {
        if (err) throw err;
    })
    if (REAL_ENDING) {
        const conteudo1 = "VOCÊ COMPLETOU O FINAL REAL";
        fs.writeFileSync('../Achievements/REAL_ENDING.bin', conteudo1, 'utf8');

    }
});
} else if (GOOD_ENDING) {
        const conteudo2 = "VOCÊ COMPLETOU O FINAL BOM";
        fs.writeFileSync('../Achievements/GOOD_ENDING.bin', conteudo2, 'utf8');
        fs.appendFile(save_conquistas, 'GOOD_ENDING.bin', (err) => {
            if (err) throw err;
        })
    } else if (BAD_ENDING_2) {
        const conteudo3 = "VOCÊ COMPLETOU O SEGUNDO FINAL RUIM";
        fs.writeFileSync('../Achievements/BAD_ENDING_2.bin', conteudo3, 'utf8');
        fs.appendFile(save_conquistas, 'BAD_ENDING2.bin', (err) => {
            if (err) throw err;
        })
    } else if (BAD_ENDING_3) {
        const conteudo4 = "VOCÊ COMPLETOU O TERCEIRO FINAL RUIM";
        fs.writeFileSync('../Achievements/BAD_ENDING_3.bin', conteudo4, 'utf8');
        fs.appendFile(save_conquistas, 'BAD_ENDING3.bin', (err) => {
            if (err) throw err;
        })
    } else if (SECRET_ENDING){
        const conteudo6 = "VOCÊ COMPLETOU O FINAL SECRETO";
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