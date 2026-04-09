// Propriedade de Sad Berry Games.

const prompt = require('prompt-sync')();
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');


// Vericando se o ET existe!
const ET1 = './ET.txt' 
ET = fs.existsSync(ET1)

function Opcãoinvalida() {
    console.clear()
    centertext("===========================================================================");
    centertext("-> Opção invalida!")
    centertext("===========================================================================");
    centertext("-> Pressione [1] para fechar...");
    centertext("===========================================================================");
    while (prompt("> ") !== '1') {
        // Fica em loop até o jogador pressionar 1
    }
    process.exit(90)
}

function pausarParaFechar() {
    console.clear()
    centertext("===========================================================================");
    centertext("-> Pressione [1] para fechar...");
    centertext("===========================================================================");
    while (prompt("> ") !== '1') {
        // Fica em loop até o jogador pressionar 1
    }
    process.exit(90)
}

function pausarParaContinuar() {
    centertext("===========================================================================");
    centertext("-> Pressione [1] para continuar...");
    centertext("===========================================================================");
    while (prompt("> ") !== '1') {
        // Fica em loop até o jogador pressionar 1
    }
    console.clear();
}

function inventario() {
    // Usamos um loop infinito que só será quebrado quando o jogador escolher sair.
    while (true) {
        console.clear();
        centertext("===========================================================================");
        centertext("-> Você tem no seu inventário as seguintes coisas:");
        centertext("===========================================================================");

        // Criamos um contador para saber se algum item foi exibido.
        let itensNoInventario = 0;

        // Agora, verificamos cada item separadamente.
        if (papega) {
            centertext("-> Pá");
            itensNoInventario++; // Aumenta o contador se o item existe.
        }
        if (temChave) {
            centertext("-> Chaves");
            itensNoInventario++;
        }
        if (chavedois) {
            centertext("-> Chave (Lápide)");
            itensNoInventario++;
        }
        // Se você quiser adicionar um novo item, basta adicionar um novo `if` aqui!

        // Se o contador for 0, significa que o inventário está vazio.
        if (itensNoInventario === 0) {
            centertext("-> Você ainda não pegou nenhum item!");
        }

        centertext("===========================================================================");
        centertext("-> Você quer voltar?");
        centertext("===========================================================================");
        centertext("[01] SIM");
        centertext("[02] NÃO");
        centertext("===========================================================================");
        
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
        centertext("===========================================================================");
        centertext("-> Você chegou em um nivel muito baixo de sanidade durante o jogo!")
        centertext("-> Você enlouqueceu e se perdeu na floresta para sempre!")
        centertext("===========================================================================");
        centertext("-> Fim de jogo")
        centertext("===========================================================================");
        process.exit(1)
    } else {
        valorsanidade-=10
    while (s2 != 1) {
        console.clear()
    centertext("===========================================================================");
    centertext("-> AVISO: SUA SANIDADE CAIU!")
    centertext("-> Você agora tem " + valorsanidade + "% de sanidade")
    centertext("===========================================================================");
    centertext("-> Você quer continuar?")
    centertext("===========================================================================");
            centertext("[01] SIM")
            centertext("[02] NÃO")
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
            centertext("-> [AVISO] SUA SANIDADE SUBIU!")
            centertext("-> Você agora tem " + valorsanidade + "% de sanidade")
            centertext("===========================================================================");
            centertext("-> Você quer continuar?")
            centertext("===========================================================================");
                    centertext("[01] SIM")
                    centertext("[02] NÃO")
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
    centertext("-> Sua sanidade está em " + valorsanidade + "%")
    centertext("===========================================================================");
            centertext("-> Você quer voltar as opções anteriores?")
            centertext("===========================================================================")
            centertext("[01] SIM")
            centertext("[02] NÃO")
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
        centertext("-> Você perdeu muita vida!")
        centertext("===========================================================================");
        process.exit(1);
    }
Vida-= 50
while (v1 != 1) {
    console.clear();
    centertext("===========================================================================");
    centertext("-> AVISO: SUA VIDA CAIU GRAVIMENTE!")
    centertext("-> Você agora tem " + Vida + "% de vida")
    centertext("===========================================================================");
    centertext("-> Você quer continuar?")
    centertext("===========================================================================");
            centertext("[01] SIM")
            centertext("[02] NÃO")
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
    centertext("-> Você perdeu muita vida!")
    centertext("===========================================================================");
    process.exit(1);
}
}

function menosVidaM() {
    if(Vida <20){
        console.clear();
        gameover()
        centertext("===========================================================================");
        centertext("-> Você perdeu muita vida!")
        centertext("===========================================================================");
        process.exit(1);
    }
    Vida-= 20
    while (v2 != 1) {
        console.clear();
        centertext("===========================================================================");
        centertext("-> AVISO: SUA VIDA CAIU EM NIVEL MEDIO!")
        centertext("-> Você agora tem " + Vida + "% de vida")
        centertext("===========================================================================");
        centertext("-> Você quer continuar?")
        centertext("===========================================================================");
                centertext("[01] SIM")
                centertext("[02] NÃO")
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
        centertext("-> Você perdeu muita vida!")
        centertext("===========================================================================");
        process.exit(1);
    }
    }

    function menosVidaP() {
        if(Vida <20){
            console.clear();
            gameover()
            centertext("===========================================================================");
            centertext("-> Você perdeu muita vida!")
            centertext("===========================================================================");
            process.exit(1);
        }
        Vida-= 10
        while (v3 != 1) {
            console.clear();
            centertext("===========================================================================");
            centertext("-> AVISO: SUA VIDA CAIU!")
            centertext("-> Você agora tem " + Vida + "% de vida")
            centertext("===========================================================================");
            centertext("-> Você quer continuar?")
            centertext("===========================================================================");
                    centertext("[01] SIM")
                    centertext("[02] NÃO")
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
            centertext("-> Você perdeu muita vida!")
            centertext("===========================================================================");
            process.exit(1);
        }
        }

        function mostrarVida() {
            while (v4 != 1) {
                console.clear();
                centertext("===========================================================================");
                centertext("-> Você agora tem " + Vida + "% de vida")
                centertext("===========================================================================");
                centertext("-> Você quer continuar?")
                centertext("===========================================================================");
                        centertext("[01] SIM")
                        centertext("[02] NÃO")
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
                centertext("-> Você perdeu muita vida!")
                centertext("===========================================================================");
                process.exit(1);
            }
            Vida-= 70
            while (v5 != 1) {
                console.clear();
                centertext("===========================================================================");
                centertext("-> AVISO: SUA VIDA CAIU EXTREMAMENTE!")
                centertext("-> Você agora tem " + Vida + "% de vida")
                centertext("===========================================================================");
                centertext("-> Você quer continuar?")
                centertext("===========================================================================");
                        centertext("[01] SIM")
                        centertext("[02] NÃO")
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
const maxLineWidth = Math.max(...logo.map(line => line.length));
    const terminalWidth = process.stdout.columns;
    const padding = Math.max(0, Math.floor((terminalWidth - maxLineWidth) / 2));
    const paddedLogo = logo.map(line => ' '.repeat(padding) + line);
    paddedLogo.forEach(line => console.log(line));
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
const maxLineWidth = Math.max(...logo.map(line => line.length));
    const terminalWidth = process.stdout.columns;
    const padding = Math.max(0, Math.floor((terminalWidth - maxLineWidth) / 2));
    const paddedLogo = logo.map(line => ' '.repeat(padding) + line);
paddedLogo.forEach(line => console.log(line));
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
centertext("--- EDIÇÃO DE TERMINAL - FEITO PELA 2-12 STUDIO ---")
centertext("===========================================================================")
centertext("--- VERSÃO 3.0 ---")
centertext("===========================================================================")
centertext("-> Regra [01]: Digite apenas números (1, 2, 3 e 4).");
centertext("-> Regra [02]: Não utilize caracteres especiais.   ");
centertext("-> Regra [03]: Deixe o jogo em tela cheia!         ");
centertext("-> Regra [04]: Divirta-se 😉                       ");
pausarParaContinuar()

const folderPath = '../Achievements';
const count = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin')).length;
const finais = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin'));

while (configinicial) {
console.clear()
logoinicial()
centertext("===========================================================================");
centertext("-> Podemos começar?");
centertext("===========================================================================")
centertext("[01] Sim");
centertext("[02] Nao");
centertext("[03] Meus Finais")
centertext("===========================================================================");
let começar = Number(prompt("> "));

if (count >6 || count < 0) {
    console.clear();
   centertext("===========================================================================");
    centertext("-> [ERRO]: Você não pode ter mais de 6 finais ou menos de 0 finais, por favor execute o apagador de progresso!.");
     centertext("===========================================================================");
        process.exit(1); // Encerra o programa com código de saída 1 (falha)
}

if (começar === 2) {
    console.clear()
    centertext("===========================================================================");
    centertext("[FECHANDO O JOGO]");
    centertext("===========================================================================");
    process.exit(0); // Encerra o programa com código de saída 0 (sucesso)
} else if (começar == 3) {
    console.clear();
    centertext("===========================================================================");
centertext(`-> Finais completados: [${count}/6]`);
centertext('-> Lista de finais: ' + finais.join(', '));
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
    centertext("INFORMAÇÕES BASICAS")
    centertext("==============================================================")
    centertext("NOME DO JOGADOR:")
    centertext("*Caso o espaço seja deixado em branco, o nome padrão será 'Michael Nevins'*")
    nomeJogador = prompt(">> ");
    if (nomeJogador.trim() === "") {
        nomeJogador = "Michael Nevins";
        inicia=false
    } else if (nomeJogador.length > 10) {
        console.clear()
        centertext("==============================================================")
    centertext("AVISO")
    centertext("==============================================================")
    centertext("Você não pode ter um nome maior que 10 letras. Tente Novamente!")
    pausarParaContinuar()
    } else {
        jogadorpadrao=false
        inicia=false
    }
}
    centertext("Certo... "+nomeJogador)
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
centertext("[CONTEXTO]")
centertext("===========================================================================");
centertext("-> Você é " + nomeJogador + ", um engenheiro eletrico que foi chamado para consertar")
centertext("postes, porém nem tudo ocorreu como planejado e")
centertext("você foi sequestrado por alguem!")
centertext("===========================================================================");
centertext("-> Seu objetivo é tentar fugir!")
pausarParaContinuar()

logoinicial()
    centertext("===========================================================================");
    centertext("-> E lembre-se...")
    const vbsFilePath = path.join(__dirname, 'OnlyBR.vbs');
    const commando_aviso = `wscript.exe //nologo "${vbsFilePath}"`
    exec(commando_aviso)
    
    pausarParaContinuar()
while (jogoAtivo) { 
    
    if (!papega && !temChave){
    centertext("===========================================================================")
    centertext(" ")
    centertext("███████████████████████████████████████████████████████████████████")
    centertext("██                                                               ██")
    centertext("██    █      █                                                   ██")
    centertext("██   ███     █                                                   ██")
    centertext("██  (Pote)  ███                                                  ██")
    centertext("██          (Pá)                                                 ██")
    centertext("██                                                            █████")
    centertext("██                               ██                           █  ██")
    centertext("██                             ██████                         █  ██")
    centertext("██                            █  ██  █                      ███  ██")
    centertext("██                               ██                         █ █  ██")
    centertext("██                             ██  ██                         █  ██")
    centertext("██                            ██    ██                        █  ██")                                            
    centertext("███████████████████████████████████████████████████████████████████")
    centertext("")
    } else if (papega && !temChave) {
        centertext("===========================================================================")
    centertext(" ")
    centertext("███████████████████████████████████████████████████████████████████")
    centertext("██                                                               ██")
    centertext("██    █                                                          ██")
    centertext("██   ███                                                         ██")
    centertext("██  (Pote)                                                       ██")
    centertext("██                                                               ██")
    centertext("██                                                            █████")
    centertext("██                               ██                           █  ██")
    centertext("██                             ██████                         █  ██")
    centertext("██                            █  ██  █                      ███  ██")
    centertext("██                               ██                         █ █  ██")
    centertext("██                             ██  ██                         █  ██")
    centertext("██                            ██    ██                        █  ██")                                            
    centertext("███████████████████████████████████████████████████████████████████")
    centertext("")
    } else if (papega && temChave) {
        centertext("===========================================================================")
    centertext(" ")
    centertext("███████████████████████████████████████████████████████████████████")
    centertext("██                                                               ██")
    centertext("██                                                               ██")
    centertext("██                                                               ██")
    centertext("██                                                               ██")
    centertext("██                                                               ██")
    centertext("██                                                            █████")
    centertext("██                               ██                           █  ██")
    centertext("██                             ██████                         █  ██")
    centertext("██                            █  ██  █                      ███  ██")
    centertext("██                               ██                         █ █  ██")
    centertext("██                             ██  ██                         █  ██")
    centertext("██                            ██    ██                        █  ██")                                            
    centertext("███████████████████████████████████████████████████████████████████")
    centertext("")
    } else if (!papega && temChave) {
        centertext("===========================================================================")
    centertext(" ")
    centertext("███████████████████████████████████████████████████████████████████")
    centertext("██                                                               ██")
    centertext("██           █                                                   ██")
    centertext("██           █                                                   ██")
    centertext("██          ███                                                  ██")
    centertext("██          (Pá)                                                 ██")
    centertext("██                                                            █████")
    centertext("██                               ██                           █  ██")
    centertext("██                             ██████                         █  ██")
    centertext("██                            █  ██  █                      ███  ██")
    centertext("██                               ██                         █ █  ██")
    centertext("██                             ██  ██                         █  ██")
    centertext("██                            ██    ██                        █  ██")                                            
    centertext("███████████████████████████████████████████████████████████████████")
    centertext("")
    }
    centertext("===========================================================================");
centertext("-> Você está em uma sala escura. A luz da lua raia pela janela.");
centertext("-> Há um POTE DE OURO no canto da sala, junto com uma PÁ. E do outro lado existe uma PORTA.");
centertext("===========================================================================");
centertext("[OPÇÕES]");
centertext("===========================================================================")
centertext("[01] PÁ          ");
centertext("[02] POTE DE OURO");
centertext("[03] PORTA       ");
centertext("===========================================================================");
centertext("[AÇÕES]");
centertext("===========================================================================")
centertext("[04] INVENTÁRIO  ")
centertext("[05] VER SANIDADE")
centertext("[06] VIDA        ");
centertext("===========================================================================");
    centertext("Comando?");
    let inicio = Number(prompt("> "));

if (inicio === 1) {
    if (papega) {
        console.clear();
        centertext("===========================================================================");
        centertext("-> Você já pegou a pá");
    } else if (!papega) {
    console.clear();
    centertext("===========================================================================");
    centertext("-> Você pegou a pá, talvez seja util no futuro");
    papega = true;
    }
} else if (inicio === 2) {
    if (temChave) {
        console.clear();
        centertext("===========================================================================");
        centertext("-> Você ja pegou o pote de ouro e a chave");
    } else if (!temChave) {
    console.clear();
    centertext("===========================================================================");
    centertext("-> Você pegou o pote de ouro, dentro dele você achou uma chave");
    temChave = true;
    }
} else if (inicio === 3) {
    console.clear();
    centertext("===========================================================================");
    centertext("-> Você tentou abrir a porta...");
    if (temChave) {
        centertext("-> Você consegue abrir a porta com a chave encontrada!");
        centertext("-> [AVISO] Você usou a chave!");
        temChave = false
        jogoAtivo = false;
        saiudacasa = true;
    } else if (!temChave) {
        centertext("-> Você tenta abrir a porta porém ela está trancada...");
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

console.clear();
while (jogoAtivo1) {
    if (!N && !L && !O){
        centertext("===========================================================================")
        centertext(" ")
        centertext("██████████████████████████████████████████████████████         ████")
        centertext("                   ██                                              ")
        centertext("                 ██                                       /\\      ")
        centertext("               ██                                        OESTE     ")
        centertext("         ██  ██                                                    ")
        centertext("       ██  ██                                                      ")
        centertext("     ██                                                            ")
        centertext("██   ██                            ██                 NORTE >      ")
        centertext("██   ██                          ██████                            ")
        centertext("██   ██                         █  ██  █                           ")
        centertext("██   ██                            ██                              ")
        centertext("██   ██                          ██  ██                 LESTE      ")
        centertext("██   ██                         ██    ██                 \\/       ")                                            
        centertext("██████████████████████████████████████████████████████         ████")
        centertext("")
    } else if (!N && L && !O) {
        centertext("===========================================================================")
        centertext(" ")
        centertext("██████████████████████████████████████████████████████         ████")
        centertext("                   ██                                              ")
        centertext("                 ██                                       /\\      ")
        centertext("               ██                                        OESTE     ")
        centertext("         ██  ██                                                    ")
        centertext("       ██  ██                                                      ")
        centertext("     ██                                                            ")
        centertext("██   ██                            ██                 NORTE >      ")
        centertext("██   ██                          ██████                            ")
        centertext("██   ██                         █  ██  █                           ")
        centertext("██   ██                            ██                 (Já foi)     ")
        centertext("██   ██                          ██  ██                 LESTE      ")
        centertext("██   ██                         ██    ██                  \\/      ")                                            
        centertext("██████████████████████████████████████████████████████         ████")
        centertext("")
    } else if (N && !L && !O) {
        centertext("===========================================================================")
        centertext(" ")
        centertext("██████████████████████████████████████████████████████         ████")
        centertext("                   ██                                              ")
        centertext("                 ██                                       /\\      ")
        centertext("               ██                                        OESTE     ")
        centertext("         ██  ██                                                    ")
        centertext("       ██  ██                                                      ")
        centertext("     ██                                                            ")
        centertext("██   ██                            ██         (Já foi) NORTE >     ")
        centertext("██   ██                          ██████                            ")
        centertext("██   ██                         █  ██  █                           ")
        centertext("██   ██                            ██                              ")
        centertext("██   ██                          ██  ██                 LESTE      ")
        centertext("██   ██                         ██    ██                  \\/      ")                                            
        centertext("██████████████████████████████████████████████████████         ████")
        centertext("")
    } else if (!N && !L && O) {
        centertext("===========================================================================")
        centertext(" ")
        centertext("██████████████████████████████████████████████████████         ████")
        centertext("                   ██                                              ")
        centertext("                 ██                                       /\\      ")
        centertext("               ██                                        OESTE     ")
        centertext("         ██  ██                                         (Já foi)   ")
        centertext("       ██  ██                                                      ")
        centertext("     ██                                                            ")
        centertext("██   ██                            ██                 NORTE >      ")
        centertext("██   ██                          ██████                            ")
        centertext("██   ██                         █  ██  █                           ")
        centertext("██   ██                            ██                              ")
        centertext("██   ██                          ██  ██                 LESTE      ")
        centertext("██   ██                         ██    ██                  \\/      ")                                            
        centertext("██████████████████████████████████████████████████████         ████")
    } else if (!N && L && O) {
        centertext("===========================================================================")
        centertext(" ")
        centertext("██████████████████████████████████████████████████████         ████")
        centertext("                   ██                                              ")
        centertext("                 ██                                       /\\      ")
        centertext("               ██                                        OESTE     ")
        centertext("         ██  ██                                         (Já foi)   ")
        centertext("       ██  ██                                                      ")
        centertext("     ██                                                            ")
        centertext("██   ██                            ██                 NORTE >      ")
        centertext("██   ██                          ██████                            ")
        centertext("██   ██                         █  ██  █                           ")
        centertext("██   ██                            ██                  (Já foi)    ")
        centertext("██   ██                          ██  ██                 LESTE      ")
        centertext("██   ██                         ██    ██                  \\/      ")
        centertext("██████████████████████████████████████████████████████         ████")
    } else if (N && L && O) {
        } else if (N && !L && O) {
        centertext("===========================================================================")
        centertext(" ")
        centertext("██████████████████████████████████████████████████████         ████")
        centertext("                   ██                                              ")
        centertext("                 ██                                       /\\      ")
        centertext("               ██                                        OESTE     ")
        centertext("         ██  ██                                          (Já foi)  ")
        centertext("       ██  ██                                                      ")
        centertext("     ██                                                            ")
        centertext("██   ██                            ██         (Já foi) NORTE >     ")
        centertext("██   ██                          ██████                            ")
        centertext("██   ██                         █  ██  █                           ")
        centertext("██   ██                            ██                              ")
        centertext("██   ██                          ██  ██                 LESTE      ")
        centertext("██   ██                         ██    ██                  \\/      ")                                            
        centertext("██████████████████████████████████████████████████████         ████")
    } else if (N && L && O) {
        centertext("===========================================================================")
        centertext(" ")
        centertext("██████████████████████████████████████████████████████         ████")
        centertext("                   ██                                              ")
        centertext("                 ██                                       /\\      ")
        centertext("               ██                                        OESTE     ")
        centertext("         ██  ██                                         (Já foi)   ")
        centertext("       ██  ██                                                      ")
        centertext("     ██                                                            ")
        centertext("██   ██                            ██         (Já foi) NORTE >     ")
        centertext("██   ██                          ██████                            ")
        centertext("██   ██                         █  ██  █                           ")
        centertext("██   ██                            ██                  (Já foi)    ")
        centertext("██   ██                          ██  ██                 LESTE      ")
        centertext("██   ██                         ██    ██                  \\/      ")                                            
        centertext("██████████████████████████████████████████████████████         ████")
    }
        centertext("===========================================================================");
        centertext("-> Pegue sua recompensa. A lua palida sorri para você.");
        centertext("-> Você está em uma floresta, Existem caminhos para o NORTE, OESTE e LESTE:");
        centertext("===========================================================================");
        centertext("[OPÇÕES]");
        centertext("===========================================================================")
        centertext("[01] NORTE");
        centertext("[02] OESTE");
        centertext("[03] LESTE");
        centertext("===========================================================================");
        centertext("[AÇÕES]");
        centertext("===========================================================================")
        centertext("[04] INVENTÁRIO");
        centertext("[05] SANIDADE  ");
        centertext("[06] VIDA      ");
        centertext("===========================================================================");
        
    
    centertext("Comando?");
    floresta1 = Number(prompt("> "));

    if (floresta1 === 1) {
        console.clear();

        if (jafoinorte) {
        centertext("===========================================================================")
        centertext("-> Você ja foi pelo norte!")
        pausarParaContinuar()
        } else {
        jafoinorte = true
        centertext("===========================================================================");
        centertext("-> Você se sente mais confiante em ir pelo norte...");
        N = true
         // Randomização de 50% de chance de sucesso ou falha
         
    if (Math.random() < 0.5) {
        centertext("===========================================================================");
        centertext("-> Você tropeça em uma raiz e cai!");
        centertext("-> Você perdeu tempo e precisa voltar.");
        centertext("-> Você caminha de volta...");
        } else {
            centertext("===========================================================================")
            centertext(" ")
            centertext("████████████████████████████████████████████████████████████████████")
            centertext("██                                                                  ")
            centertext("██                                                                  ")
            centertext("██                                                                  ")
            centertext("██                                                                  ")
            centertext("██                                                                  ")
            centertext("██                                                                  ")
            centertext("██                                 ██                               ")
            centertext("██                               ██████                       ██████")
            centertext("██                              █  ██  █              ██   ████     ")
            centertext("██                                 ██               ██  ████        ")
            centertext("██                               ██  ██           ██                ")
            centertext("██                              ██    ██         ██                 ")                                            
            centertext("████████████████████████████████████████████████████████████████████")
            centertext("")
        centertext("===========================================================================");
        centertext("-> Você encontra um atalho secreto!");
        centertext("===========================================================================");
        centertext("[OPÇÕES]");
        centertext("===========================================================================")
        centertext("[01] Ir pelo atalho");
        centertext("[02] Ignorar o atalho");
        centertext("===========================================================================");
        centertext("Comando?")
        atalho = prompt ("> ");
        if (atalho == 1) {
            console.clear();
            centertext("===========================================================================");
            centertext("-> Você avança rapidamente pela floresta.");
            centertext("-> Você consegue sair da floresta, mas ainda restam segredos esperando para serem descobertos...");
            centertext("===========================================================================");
            centertext("-> Você venceu!!");
            centertext("-> Parabens? você completou o BAD ENDING, NVAQN ERFGNZ FRTERQBF RFCRENAQB CBE IBPÊ.");
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
            centertext("-> Você acha perigoso e ignora o atalho");
            centertext("-> Você decidi voltar as opções de caminhos");
            
        } else {
            Opcãoinvalida()
         }
      }
    } 
    } else if (floresta1 === 2) {
        console.clear();
        centertext("===========================================================================");
        centertext("-> Você vai pelo caminho Oeste...")
        centertext("-> De repente você de longe vê vindo um homem alto, com um machado e não muito amigavel.");
        O = true
        centertext("===========================================================================");
        centertext("[OPÇÕES]");
        centertext("===========================================================================")
        centertext("[01] Fugir");
        centertext("[02] Se esconder");
        centertext("===========================================================================");
        centertext("Comando?");
        decisão1 = Number(prompt("> "));

         if (decisão1 === 1) {
             console.clear();
             centertext("===========================================================================");
             centertext("-> Você começa a correr o mais rapido possivel...");
             centertext("-> Porém infelizmente você tropeça em uma raiz e leva uma machadada do homem")
             centertext("===========================================================================");
             centertext("-> Pressione 1 para continuar...")
             centertext("-> (Se você digitar diferente de 1 o jogo irá fechar!)")
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
             centertext("-> Você decidi se esconder em uma moita ao seu lado");
             centertext("-> Porém, infelizmente ele consegue te ver, e te da uma machadada!");
             centertext("===========================================================================");
             centertext("-> Pressione 1 para continuar...")
             centertext("-> (Se você digitar diferente de 1 o jogo irá fechar!)")
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
        centertext("-> Depois de pensar, você decidi ir pelo Leste...") 
        L = true
        centertext("-> Você começa a adentrar a floresta densa...");
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
        centertext("===========================================================================")
        centertext(" ")
        centertext("██████████████████████████████████████████████████          █████")
        centertext("                   ██                                            ")
        centertext("                 ██                                     /\\      ")
        centertext("               ██                                      NORTE     ")
        centertext("         ██  ██                                                  ")
        centertext("       ██  ██                                                    ")
        centertext("     ██                                                          ")
        centertext("██   ██                            ██                     LESTE >")
        centertext("██   ██                          ██████                          ")
        centertext("██   ██                         █  ██  █                         ")
        centertext("██   ██                            ██                   SUL      ")
        centertext("██   ██                          ██  ██                 \\/       ")
        centertext("██   ██                         ██    ██                         ")
        centertext("████████████████████████████████████████████████            █████")
        centertext("")
    } else if (N && S && L) {
        centertext("===========================================================================")
        centertext(" ")
        centertext("██████████████████████████████████████████████████          █████")
        centertext("                   ██                                            ")
        centertext("                 ██                                     /\\      ")
        centertext("               ██                                      NORTE     ")
        centertext("         ██  ██                                       (Já foi)   ")
        centertext("       ██  ██                                                    ")
        centertext("     ██                                                          ")
        centertext("██   ██                            ██            (Já foi) LESTE >")
        centertext("██   ██                          ██████                          ")
        centertext("██   ██                         █  ██  █              (Já foi)   ")
        centertext("██   ██                            ██                   SUL      ")
        centertext("██   ██                          ██  ██                 \\/       ")
        centertext("██   ██                         ██    ██                         ")
        centertext("████████████████████████████████████████████████            █████")
        centertext("")
    } else if (!N && !S && L) {
        centertext("===========================================================================")
        centertext(" ")
        centertext("██████████████████████████████████████████████████          █████")
        centertext("                   ██                                            ")
        centertext("                 ██                                     /\\      ")
        centertext("               ██                                      NORTE     ")
        centertext("         ██  ██                                                  ")
        centertext("       ██  ██                                                    ")
        centertext("     ██                                                          ")
        centertext("██   ██                            ██            (Já foi) LESTE >")
        centertext("██   ██                          ██████                          ")
        centertext("██   ██                         █  ██  █                         ")
        centertext("██   ██                            ██                   SUL      ")
        centertext("██   ██                          ██  ██                 \\/       ")
        centertext("██   ██                         ██    ██                         ")
        centertext("████████████████████████████████████████████████            █████")
        centertext("")
    } else if (!N && S && !L) {
        centertext("===========================================================================")
        centertext(" ")
        centertext("██████████████████████████████████████████████████          █████")
        centertext("                   ██                                            ")
        centertext("                 ██                                     /\\      ")
        centertext("               ██                                      NORTE     ")
        centertext("         ██  ██                                                  ")
        centertext("       ██  ██                                                    ")
        centertext("     ██                                                          ")
        centertext("██   ██                            ██                     LESTE >")
        centertext("██   ██                          ██████                          ")
        centertext("██   ██                         █  ██  █              (Já foi)   ")
        centertext("██   ██                            ██                   SUL      ")
        centertext("██   ██                          ██  ██                 \\/       ")
        centertext("██   ██                         ██    ██                         ")
        centertext("████████████████████████████████████████████████            █████")
        centertext("")
    } else if (N && !S && !L) {
        centertext("===========================================================================")
        centertext(" ")
        centertext("██████████████████████████████████████████████████          █████")
        centertext("                   ██                                            ")
        centertext("                 ██                                     /\\      ")
        centertext("               ██                                      NORTE     ")
        centertext("         ██  ██                                       (Já foi)   ")
        centertext("       ██  ██                                                    ")
        centertext("     ██                                                          ")
        centertext("██   ██                            ██                     LESTE >")
        centertext("██   ██                          ██████                          ")
        centertext("██   ██                         █  ██  █                         ")
        centertext("██   ██                            ██                   SUL      ")
        centertext("██   ██                          ██  ██                 \\/       ")
        centertext("██   ██                         ██    ██                         ")
        centertext("████████████████████████████████████████████████            █████")
        centertext("")
    } else if (!N && S && L) {
        centertext("===========================================================================")
        centertext(" ")
        centertext("██████████████████████████████████████████████████          █████")
        centertext("                   ██                                            ")
        centertext("                 ██                                     /\\      ")
        centertext("               ██                                      NORTE     ")
        centertext("         ██  ██                                                  ")
        centertext("       ██  ██                                                    ")
        centertext("     ██                                                          ")
        centertext("██   ██                            ██            (Já foi) LESTE >")
        centertext("██   ██                          ██████                          ")
        centertext("██   ██                         █  ██  █              (Já foi)   ")
        centertext("██   ██                            ██                   SUL      ")
        centertext("██   ██                          ██  ██                 \\/       ")
        centertext("██   ██                         ██    ██                         ")
        centertext("████████████████████████████████████████████████            █████")
        centertext("")
    } else if (N && S && !L) {
        centertext("===========================================================================")
        centertext(" ")
        centertext("██████████████████████████████████████████████████          █████")
        centertext("                   ██                                            ")
        centertext("                 ██                                     /\\      ")
        centertext("               ██                                      NORTE     ")
        centertext("         ██  ██                                       (Já foi)   ")
        centertext("       ██  ██                                                    ")
        centertext("     ██                                                          ")
        centertext("██   ██                            ██                     LESTE >")
        centertext("██   ██                          ██████                          ")
        centertext("██   ██                         █  ██  █              (Já foi)   ")
        centertext("██   ██                            ██                   SUL      ")
        centertext("██   ██                          ██  ██                 \\/       ")
        centertext("██   ██                         ██    ██                         ")
        centertext("████████████████████████████████████████████████            █████")
        centertext("")
    } else if (N && !S && L) {
        centertext("===========================================================================")
        centertext(" ")
        centertext("██████████████████████████████████████████████████          █████")
        centertext("                   ██                                            ")
        centertext("                 ██                                     /\\      ")
        centertext("               ██                                      NORTE     ")
        centertext("         ██  ██                                       (Já foi)   ")
        centertext("       ██  ██                                                    ")
        centertext("     ██                                                          ")
        centertext("██   ██                            ██            (Já foi) LESTE >")
        centertext("██   ██                          ██████                          ")
        centertext("██   ██                         █  ██  █                         ")
        centertext("██   ██                            ██                   SUL      ")
        centertext("██   ██                          ██  ██                 \\/       ")
        centertext("██   ██                         ██    ██                         ")
        centertext("████████████████████████████████████████████████            █████")
        centertext("")
    }
    centertext("===========================================================================");
    centertext("-> Pegue sua recompensa. A lua palida sorri para você.");
    centertext("-> Você está em uma floresta, Existem caminhos para o NORTE, SUL e LESTE:");
    centertext("===========================================================================");
    centertext("[OPÇÕES]");
    centertext("===========================================================================")
    centertext("[01] NORTE.");
    centertext("[02] SUL.  ");
    centertext("[03] LESTE.");
    centertext("============================================================================");
    centertext("[AÇÕES]");
    centertext("===========================================================================")
    centertext("[04] INVENTÁRIO");
    centertext("[05] SANIDADE  ");
    centertext("[06] VIDA      ");
    centertext("===========================================================================");
    centertext("Comando?");
    floresta2 = Number(prompt("> "));

    if (floresta2 === 1) {
        if (!tentanovamente1) {
            centertext(" ");
            console.clear();
            centertext("===========================================================================");
            centertext("-> Você ja foi por ai!");
            centertext("===========================================================================");
        } else if (tentanovamente1) {
        console.clear();
        centertext("                    █████████████████████████████████               ")
        centertext("                    ██   ██                        ██               ")
        centertext("                   ██  ██                           ██              ")
        centertext("                 ██  ██                               ██            ")
        centertext("                ██  ██                                 ██           ")
        centertext("               ██  ██                                   ██          ")
        centertext("               ██  ██                                   ██          ")
        centertext("               ██  ██                                   ██          ")
        centertext("               ██  ██                                   ██          ")
        centertext("               ██  ██               ████                ██          ")
        centertext("               ██  ██               █  █                ██          ")
        centertext("               ██  ██               █  █                ██          ")
        centertext("               ██  ██               █  █                ██          ")
        centertext("████████████████████████████████████████████████████████████████████")
        centertext(" ")
        centertext("===========================================================================");
        centertext("-> Você decidi ir pelo Norte...");
        N = true
        centertext("-> Você encontra uma cabana velha feita de madeira");
        centertext("===========================================================================");
        centertext("[OPÇÕES]");
        centertext("===========================================================================")
        centertext("[01] Entrar na cabana");
        centertext("[02] Ignorar a cabana");
        centertext("===========================================================================");
        centertext("Comando?");
        cabana = prompt("> ");

        if (cabana === "1") {
            console.clear();
            centertext("===========================================================================")
        centertext(" ")
        centertext("████████████████████████████████████████████████████████████████████")
        centertext("██                                                                ██")
        centertext("██                                                                ██")
        centertext("██                                                                ██")
        centertext("██                                                                ██")
        centertext("██                                                                ██")
        centertext("██                                                                ██")
        centertext("██     ██                                             (Baú)       ██")
        centertext("██   ██████                                        ████████████   ██")
        centertext("██  █  ██  █                                      █            █  ██")
        centertext("██     ██                                         █-----██-----█  ██")
        centertext("██   ██  ██                                       █            █  ██")
        centertext("██  ██    ██                                      █   (Mapa)   █  ██")                                            
        centertext("████████████████████████████████████████████████████████████████████")
        centertext("")
            centertext("===========================================================================");
            centertext("-> Você entra na cabana e encontra um baú velho");
            centertext("-> Dentro do baú você encontra um pergaminho com um mapa");
            centertext("===========================================================================");
            centertext("[OPÇÕES]");
            centertext("===========================================================================")
            centertext("[01] Pegar o mapa                       ");
            centertext("[02] Voltar para a bifurcação           ");
            centertext("[03] Pegar Kit Medico (Cura 50% da vida)");
            centertext("===========================================================================");
            centertext("Comando?");
            cabana1 = prompt("> ");

            if (cabana1 === "1") {
                console.clear();
                centertext("===========================================================================");
                centertext("-> Você pega o mapa e sai da cabana");
                tentanovamente1 = false;
                mapaachado = true;
                centertext("===========================================================================");
                centertext("[OPÇÕES]");
                centertext("===========================================================================")
                centertext("[01] Voltar para a bifurcação");
                centertext("===========================================================================");
                centertext("Comando?");
                cabana2 = prompt("> ");
                if (cabana2 === "1") {
                    console.clear();
                    centertext(" ")
                    centertext("===========================================================================");
                    centertext("-> Você volta para a bifurcação...");
                }  else if (cabana2 !== 1) {
                    Opcãoinvalida()
                }
            } else if (cabana1 === "2") {
                console.clear();
                centertext("===========================================================================");
                centertext("-> Você volta a bifurcação")
            } else if (cabana1 == "3") {
                if (kitm == true) {
                    console.clear()
                    centertext("===========================================================================");
                    centertext("-> Você já pegou o kit medico!")
                    centertext("===========================================================================");
                centertext("-> Pressione [1] para continuar!")
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
                centertext("-> Você pega o kit medico rapido e ja começa os seus medicamentos e bandanas")
                centertext("-> Parabens, você curou a sua vida em +50.")
                centertext("===========================================================================");
                centertext("-> Pressione [1] para continuar!")
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
            centertext("===========================================================================")
            centertext(" ")
            centertext("███████████████████████████████████████████████████████████████████     ")
            centertext("██                                                                      ")
            centertext("██                                                                      ")
            centertext("██                                                                      ")
            centertext("██                                                                      ")
            centertext("██                                                                      ")
            centertext("██                                                     █                ")
            centertext("██                    ██                              ██                ")
            centertext("██                  ██████                            ██                ")
            centertext("██                 █  ██  █                           ██                ")
            centertext("██                    ██                              ██                ")
            centertext("██                  ██  ██                            ██-------         ")
            centertext("██                 ██    ██                           ██     ------     ")
            centertext("████████████████████████████████████████████████████████████████████ ---")
            centertext("")
            centertext("===========================================================================");
            centertext("-> Você ignora a cabana e continua o seu caminho...");
            centertext("-> Após andar um pouco você encontra uma ponte quebrada");
            centertext("===========================================================================");
            centertext("[OPÇÕES]");
           centertext("===========================================================================")
            centertext("[01] Pular a ponte");
            centertext("[02] Voltar para a bifurcação");
            centertext("===========================================================================");
            centertext("Comando?");
            ponte = prompt("> ");

            if (ponte === "1") {
                console.clear();
                gameover()
                centertext("===========================================================================");
                centertext("-> Você tenta pular a ponte, porém você cai e morre");
                centertext("-> Você morreu!!");
                centertext("===========================================================================");
                process.exit(1);




            }  else if (ponte === "2") {
                console.clear();
                centertext("===========================================================================");
                centertext("-> Você volta para a bifurcação...");
            } else {
                Opcãoinvalida()
             }
        } else {
            Opcãoinvalida()
         }
        }
    } else if (floresta2 == 2) {
        console.clear();
        centertext ("")
        centertext ("                                                                               ")
        centertext ("                                                                               ")
        centertext ("                                                                               ")
        centertext ("                                                                  ██           ")
        centertext ("         ██                                                       █████        ")
        centertext ("       ██████                                                     █████        ")
        centertext ("      █  ██  █                                                    ██           ")
        centertext ("         ██                                                       ██           ")
        centertext ("       ██  ██                                         █████████████████████████")
        centertext ("      ██    ██                                             ████████████████    ")
        centertext ("█████████████████████████████████████████████████                              ")
        centertext (" ")
        centertext("===========================================================================");
        centertext("-> Você vai pelo Sul.");
        S = true
        centertext("-> Você encontra um lago, e um barco a sua frente");
        centertext("===========================================================================");
        centertext("[OPÇÕES]");
        centertext("===========================================================================")
        centertext("[01] Pegar o barco");
        centertext("[02] Ignorar o barco");
        centertext("[03] Voltar para a bifurcação");
        centertext("===========================================================================");
        centertext("Comando?");
        barco = Number(prompt("> "));
        centertext(" ");

        if (barco === 1) {
            console.clear();
            centertext("===========================================================================");
            centertext("-> Você pega o barco e começa a remar...");
            centertext("-> Porém o barco começa a afundar, dentro do rio você ve uma caverna submersa!")
            centertext("===========================================================================");
        centertext("[OPÇÕES]");
        centertext("===========================================================================")
        centertext("[01] Ignorar caverna");
        centertext("[02] Entrar dentro da caverna");
        centertext("===========================================================================");
        centertext("Comando?");
        barco2 = Number(prompt("> "));
        centertext(" ");

        if (barco2 == 1) {
            console.clear();
            centertext("===========================================================================");
            centertext("-> Você ignora a caverna e decidi voltar nadando  para a trilha...");
        } else if (barco2 == 2) {
            console.clear();
            centertext("===========================================================================");
            centertext("-> Você entra dentro da caverna, e dentro dela você fica horrorizado...")
            centertext("-> Dentro você vê varias lapides e no centro do cemiterio, há um pergaminho aberto...")
            centertext("===========================================================================");
            centertext("[OPÇÕES]")
           centertext("===========================================================================");
            centertext("[01] Ler")
            centertext("[02] Não Ler")
            centertext("[03] DESTRUIR!")
            centertext("===========================================================================");
            pergaminho = Number(prompt("> "));

            if(pergaminho == 1) {
                console.clear()
                if (destruir == false){
                centertext("===========================================================================");
                centertext("Você pega o pergaminho e começa a ler...")
                centertext("===========================================================================");
                centertext("[DIA 01]: Onde eu estou?")
                centertext("===========================================================================");
centertext("Não sei bem por onde começar.                                                    ");
centertext("Minhas mãos ainda tremem tanto que mal consigo segurar esta caneta improvisada...");
centertext("um pedaço de carvão que achei perto de uma das... lápides.                       ");
centertext("Num lago escondido numa floresta que já era sinistra por si só.                  ");
centertext("Acho que faz dois dias que me perdi da trilha principal.                         ");
centertext("Tentei achar o caminho de volta, mas cada árvore parecia igual à anterior.       ");
centertext("A noite caiu, e o medo começou a se instalar de verdade.                         ");
centertext("")
centertext("Hoje, exausto e com sede, avistei este lago estranhamente parado.                ");
centertext("A água era escura, mas a promessa de alívio me fez aproximar.                    ");
centertext("Foi quando vi uma sombra escura sob a superfície, perto da margem rochosa.       ");
centertext("Uma espécie de abertura, uma fenda na pedra submersa.                            ");
centertext("Num impulso de desespero, pensando ser talvez uma gruta para abrigo, mergulhei.  ");
centertext("A água era gelada. Segui a fenda escura, prendendo a respiração.                 ");
centertext("Emergi num bolsão de ar, cuspindo água, o coração a mil.                         ");
centertext("")
centertext("Minha lanterna fraca iluminou o impensável: as fileiras de lápides.              ");
centertext("E no centro desta câmara macabra, sobre uma pedra lisa, este pergaminho.         ");
centertext("Estou preso, perdido, e agora encontrei um cemitério submerso.                   ");
centertext("Que tipo de loucura é esta? Preciso registrar tudo.                              "); 
centertext("Espero que este carvão dure. E que eu também dure.                               ");
                centertext("===========================================================================");
                centertext("-> Pressione [1] para continuar lendo, ou pressione [2] para fechar")
                centertext("===========================================================================");
teste = Number(prompt("> "))

if (teste == 1) {
    console.clear()
    centertext("===========================================================================");
    centertext("[DIA 02]: Será que isso é real?")
    centertext("===========================================================================");
centertext("Passei a noite em claro, se é que existe noite neste buraco úmido.               ");
centertext("A luz da lanterna morreu. Agora só tenho a escuridão e o som da água.            ");
centertext("Cada sombra que dançava com a chama da lanterna parecia uma lápide se movendo.   ");
centertext("Tateei as paredes rochosas, procurando outra saída, uma fresta de esperança.     ");
centertext("Nada. Apenas a passagem submersa por onde entrei ontem, como um pesadelo líquido.");
centertext("")
centertext("Minha garganta está seca, a fome revira meu estômago.                            ");
centertext("Olho para este carvão, para estas palavras que escrevo. É real?                  ");
centertext("As lápides continuam lá, frias, firmes. Um testemunho silencioso.                ");
centertext("Não foi um delírio da exaustão. Este lugar existe.                               ");
centertext("")
centertext("O pergaminho... peguei-o novamente. As mãos sujas de terra e medo.               ");
centertext("A escrita é antiga, quase apagada pela umidade constante.                        ");
centertext("Consegui decifrar algumas palavras soltas: 'perdido', 'água', 'gritos'.          ");
centertext("Gritos? De quem? Senti um arrepio percorrer minha espinha.                       ");
centertext("Este diário não é um bom presságio. É o registro de outro desesperado?           ");
centertext("Preciso poupar o carvão. E minhas forças.                                        ");
centertext("")
centertext("Tentei gritar por ajuda mais cedo, mas só o eco zombeteiro respondeu.            ");
centertext("A floresta lá fora me perdeu. Esta caverna quer me engolir.                      ");
centertext("")
centertext("A sanidade é uma linha tênue sobre um abismo de lápides.                         ");
    centertext("===========================================================================");
    centertext("-> Ao final você vê muito sangue e teme pela vida do escritor...")
    centertext("===========================================================================");
    centertext("-> Pressione [1] para tentar voltar ao caminho nadando, ou [2] para ficar na caverna")
    centertext("===========================================================================");

teste2 = Number(prompt("> ")) 
if (teste2 == 1) {
    console.clear()
    centertext("===========================================================================");
    centertext("-> Vendo que você não tem muitas opções, você tenta voltar nadando...")

    if (Math.random() < 0.5) {
    centertext("===========================================================================");
    centertext("-> Você consegue! ")
    centertext("===========================================================================");
    } else {
        Vida-=100
        centertext("===========================================================================");
        centertext("-> Você morre afogado!")
        pausarParaContinuar()
        menosVidaG()
        centertext("===========================================================================");
    }
} else if (teste2 == 2) {
    console.clear()
    centertext("===========================================================================");
    centertext("-> Você sente medo de tentar voltar e decidi ficar na caverna.")
    centertext("-> Para passar o tempo você começa a vasculhar o local e no canto de uma lapide você ve uma chave!")
    centertext("-> Você pega ela...")
    centertext("===========================================================================");
    centertext("[CHAVE COLETADA]")
    chavedois = true
    centertext("===========================================================================");
    centertext("2 dias depois você nota que realmente não há nada para se fazer la embaixo.")
    centertext("E então você volta para a superfice...")
} else {
    Opcãoinvalida()
}

} else if (teste == 2) {
    console.clear()
    centertext("===========================================================================");
    centertext("-> Você para de ler, por medo.")
    centertext("-> Vendo que você não tem muitas opções, você tenta voltar nadando...")
    centertext("===========================================================================");
    centertext("-> Você consegue! ")
    centertext("===========================================================================");
} else {
    Opcãoinvalida()
}

                } else {
                    console.clear()
                    centertext("===========================================================================")
                    centertext("-> Você destruiu o pergaminho, ou seja você não pode mais ler ele!")
                    centertext("===========================================================================")
                    centertext("-> Pressione [1] para continuar")
                    centertext("===========================================================================")
                    let ab = Number(prompt("> "))
                    if (ab == 1) {
                        console.clear()
                    } else {
                        console.clear()
                        centertext("===========================================================================")
                        centertext("[ERRO 678] Valor Invalido!")
                        centertext("===========================================================================")
                        process.exit()
                    }
                }

            } else if (pergaminho == 2) {
                console.clear()
                centertext("===========================================================================");
        centertext("-> Vendo que você não tem muitas opções, você tenta voltar nadando...")
    centertext("===========================================================================");

            } else if (pergaminho == 3) {
                console.clear()
                destruir = true
                centertext("===========================================================================");
                centertext("-> VOCÊ DESTRUIU O PERGAMINHO!")
                centertext("-> ESSA AÇÃO PROVOCARÁ CONSEQUENCIAS NO FUTURO...")
                centertext("===========================================================================");
                centertext("-> Vendo que você não tem muitas opções, você tenta voltar nadando...")
                
            } else {
                Opcãoinvalida()
            }
        } else {
            Opcãoinvalida()
        }
        } else if (barco === 2) {
            console.clear();
            centertext("===========================================================================");
            centertext("-> Você ignora o barco e continua o seu caminho...");
            centertext("-> Depois de andar um pouco você encontra um lobo");
            centertext("===========================================================================");
            centertext("[OPÇÕES]");
            centertext("===========================================================================")
            centertext("[01] Correr");
            centertext("[02] Se esconder");
            centertext("===========================================================================");
            centertext("Comando?");
            decisão2 = Number(prompt("> "));
            centertext(" ");

            if (decisão2 === 1) {
                console.clear();
                centertext("===========================================================================");
                centertext("-> Você começa a correr o mais rapido possivel...");
                centertext("-> Porém o lobo é mais rápido e te morde, você está ferido em um nivel medio!");
                centertext("===========================================================================");
                centertext("-> Pressione [1] para continuar")
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
                centertext("-> Você se esconde em uma caverna ao lado");
                centertext("-> Dentro dela você piora a sua situação, pois há varios animais que te mordem, incluindo o lobo!");
                centertext("-> Você fica ferido muito gravimente.")
                centertext("===========================================================================");
                centertext("-> Pressione [1] para continuar")
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
    centertext("-> Você volta para a bifurcação...");
    } else {
        Opcãoinvalida()
    }
} else if (floresta2 == 3) {
    console.clear();
    centertext("===========================================================================");
    centertext("-> Você decidi ir pelo Leste.");
    L = true
    centertext("-> Você atravessa as folhas e galhos, e encontra uma outra bifurcação");
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
        centertext("-> Quer usar o mapa?");
        centertext("===========================================================================");
        centertext("[OPÇÕES]");
        centertext("===========================================================================")
        centertext("[01] Sim");
        centertext("[02] Não");
        centertext("===========================================================================");
        centertext("[AÇÕES]");
        centertext("===========================================================================")
        centertext("[03] Inventario")
        centertext("===========================================================================");
        centertext("Comando?");
        mapa = prompt("> ");
        centertext(" ");

        if (mapa == 1){
            console.clear();
            mapa67 = true
            centertext("===========================================================================");
            centertext("-> O mapa diz que o caminho do Norte é o caminho certo");
            centertext("===========================================================================");
            centertext("-> [AVISO] Você não pode usar o mapa novamente");
            pausarParaContinuar()
            mapaachado = false;

        } else if (mapa == 2) {
            console.clear();
            mapa67 = true
            centertext("===========================================================================");
            centertext("-> Você decide não usar o mapa");
            pausarParaContinuar()

        } else if (mapa == 3) {
            inventario()
        } else {
            console.clear();
            centertext("===========================================================================");
            centertext("-> Opções Invalida, você perdeu a chance de usar o mapa!!")
            pausarParaContinuar()
            mapaachado = false
        }
    }
    }
    if (!N && !S && !O) {
        centertext("===========================================================================");
        centertext("██████████████████████████████████████████████             ██")
        centertext("██           ██                                    /\\        ")
        centertext("██           ██                                   NORTE      ")
        centertext("██ ██        ██                                              ")
        centertext("██   ████████                                                ")
        centertext("██ ██               ██                                       ")
        centertext("████              ██████                 ██          OESTE > ")            
        centertext("██               █  ██  █        ████████████                ")
        centertext("██                  ██               █ █ ██                  ")
        centertext("██                ██  ██             █ █           SUL       ")
        centertext("██               ██    ██            █ █           \\/        ")
        centertext("██████████████████████████████████████████████             ██")
        centertext(" ")
    } else if (N && S && O) {
        centertext("===========================================================================");
        centertext("██████████████████████████████████████████████             ██")
        centertext("██           ██                                    /\\        ")
        centertext("██           ██                                   NORTE      ")
        centertext("██ ██        ██                                  (Já foi)    ")
        centertext("██   ████████                                                ")
        centertext("██ ██               ██                                       ")
        centertext("████              ██████                 ██  (Já foi) OESTE >")            
        centertext("██               █  ██  █        ████████████                ")
        centertext("██                  ██               █ █ ██      (Já foi)    ")
        centertext("██                ██  ██             █ █           SUL       ")
        centertext("██               ██    ██            █ █           \\/        ")
        centertext("██████████████████████████████████████████████             ██")
        centertext(" ")
    } else if (!N && !S && O) {
        centertext("===========================================================================");
        centertext("██████████████████████████████████████████████             ██")
        centertext("██           ██                                    /\\        ")
        centertext("██           ██                                   NORTE      ")
        centertext("██ ██        ██                                              ")
        centertext("██   ████████                                                ")
        centertext("██ ██               ██                                       ")
        centertext("████              ██████                 ██  (Já foi) OESTE >")            
        centertext("██               █  ██  █        ████████████                ")
        centertext("██                  ██               █ █ ██                  ")
        centertext("██                ██  ██             █ █           SUL       ")
        centertext("██               ██    ██            █ █           \\/        ")
        centertext("██████████████████████████████████████████████             ██")
        centertext(" ")
    } else if (!N && S && !O) {
        centertext("===========================================================================");
        centertext("██████████████████████████████████████████████             ██")
        centertext("██           ██                                    /\\        ")
        centertext("██           ██                                   NORTE      ")
        centertext("██ ██        ██                                              ")
        centertext("██   ████████                                                ")
        centertext("██ ██               ██                                       ")
        centertext("████              ██████                 ██          OESTE > ")            
        centertext("██               █  ██  █        ████████████                ")
        centertext("██                  ██               █ █ ██      (Já foi)    ")
        centertext("██                ██  ██             █ █           SUL       ")
        centertext("██               ██    ██            █ █           \\/        ")
        centertext("██████████████████████████████████████████████             ██")
        centertext(" ")
    } else if (N && !S && !O) {
        centertext("===========================================================================");
        centertext("██████████████████████████████████████████████             ██")
        centertext("██           ██                                    /\\        ")
        centertext("██           ██                                   NORTE      ")
        centertext("██ ██        ██                                  (Já foi)    ")
        centertext("██   ████████                                                ")
        centertext("██ ██               ██                                       ")
        centertext("████              ██████                 ██          OESTE > ")            
        centertext("██               █  ██  █        ████████████                ")
        centertext("██                  ██               █ █ ██                  ")
        centertext("██                ██  ██             █ █           SUL       ")
        centertext("██               ██    ██            █ █           \\/        ")
        centertext("██████████████████████████████████████████████             ██")
        centertext(" ")
    } else if (!N && S && O) {
        centertext("===========================================================================");
        centertext("██████████████████████████████████████████████             ██")
        centertext("██           ██                                    /\\        ")
        centertext("██           ██                                   NORTE      ")
        centertext("██ ██        ██                                              ")
        centertext("██   ████████                                                ")
        centertext("██ ██               ██                                       ")
        centertext("████              ██████                 ██  (Já foi) OESTE >")            
        centertext("██               █  ██  █        ████████████                ")
        centertext("██                  ██               █ █ ██      (Já foi)    ")
        centertext("██                ██  ██             █ █           SUL       ")
        centertext("██               ██    ██            █ █           \\/        ")
        centertext("██████████████████████████████████████████████             ██")
        centertext(" ")
    } else if (N && !S && O) {
        centertext("===========================================================================");
        centertext("██████████████████████████████████████████████             ██")
        centertext("██           ██                                    /\\        ")
        centertext("██           ██                                   NORTE      ")
        centertext("██ ██        ██                                  (Já foi)    ")
        centertext("██   ████████                                                ")
        centertext("██ ██               ██                                       ")
        centertext("████              ██████                 ██  (Já foi) OESTE >")
        centertext("██               █  ██  █        ████████████                ")
        centertext("██                  ██               █ █ ██      (Já foi)    ")
        centertext("██                ██  ██             █ █           SUL       ")
        centertext("██               ██    ██            █ █           \\/        ")
        centertext("██████████████████████████████████████████████             ██")
        centertext(" ")
    } else if (N && S && !O) {
        centertext("===========================================================================");
        centertext("██████████████████████████████████████████████             ██")
        centertext("██           ██                                    /\\        ")
        centertext("██           ██                                   NORTE      ")
        centertext("██ ██        ██                                  (Já foi)    ")
        centertext("██   ████████                                                ")
        centertext("██ ██               ██                                       ")
        centertext("████              ██████                 ██          OESTE > ")
        centertext("██               █  ██  █        ████████████                ")
        centertext("██                  ██               █ █ ██      (Já foi)    ")
        centertext("██                ██  ██             █ █           SUL       ")
        centertext("██               ██    ██            █ █           \\/        ")
        centertext("██████████████████████████████████████████████             ██")
        centertext(" ")
    } 
    centertext("===========================================================================");
    centertext("-> Pegue sua recompensa. A lua palida sorri para você.");
    centertext("-> Você está em uma floresta, Existem caminhos para o NORTE, SUL e OESTE:");
    centertext("===========================================================================");
    centertext("[OPÇÕES]");
    centertext("===========================================================================");
    centertext("[01] NORTE.")
    centertext("[02] SUL.");
    centertext("[03] OESTE.");
    centertext("===========================================================================");
    centertext("[AÇÕES]");
    centertext("===========================================================================");
    centertext("[04] INVENTÁRIO");
    centertext("[05] SANIDADE");
    centertext("[06] VIDA");
    centertext("===========================================================================");
    centertext("Comando?");
    floresta3 = Number(prompt("> "));
    centertext(" ");

    if (floresta3 == 1)  { //Norte
        console.clear();
    centertext("█████████████████████████████████████████████████████████████")
    centertext("██           ██                                              ")
    centertext("██           ██                                              ")
    centertext("██ ██        ██                                              ")
    centertext("██   ████████                                                ")
    centertext("██ ██               ██                                       ")
    centertext("████              ██████                                     ")
    centertext("██               █  ██  █                                    ")
    centertext("██                  ██                                       ")
    centertext("██                ██  ██               \\    /                 ")
    centertext("██               ██    ██          -   (Brilho)  -           ")
    centertext("█████████████████████████████████████████████████████████████")
    centertext(" ")
        centertext("===========================================================================");
        centertext("-> Você decidi ir pelo lado Norte.");
        centertext("-> Você passa pelo caminho e encontra algo brilhante no chão");
        centertext("===========================================================================");
        centertext("[OPÇÕES]");
        centertext("===========================================================================");
        centertext("[01] Escavar o chão");
        centertext("[02] Ignorar o objeto");
        centertext("===========================================================================");
        centertext("Comando?");
        objeto = prompt("> ");

        if (objeto == 1) { // Escavar o chão
            if (papega) {
                console.clear();
    centertext("████████████████████████████████")
    centertext("████████████████████████████████")
    centertext("██           ██               ██")
    centertext("██           ██               ██")
    centertext("██ ██        ██               ██")
    centertext("██   ████████                 ██")
    centertext("██ ██                         ██")
    centertext("████                ██        ██")
    centertext("██                 ████       ██")
    centertext("██                █ ██ █      ██")
    centertext("██                  ██        ██")
    centertext("██                 █  █       ██")
    centertext("████████████████████████████████")
    centertext("████████████████████████████████")
    centertext("████████████████████████████████")
    centertext("████████████████████████████████")
    centertext(" ")
            centertext("===========================================================================");
            centertext("-> Você escava o chão e encontra uma foto de uma criança");
            centertext("-> Na foto você vê que tem algo escrito atrás");
            centertext("===========================================================================");
            centertext("[OPÇÕES]");
            centertext("===========================================================================");
            centertext("[01] Ler o que está escrito");
            centertext("[02] Ignorar a foto");
            centertext("===========================================================================");
            fotopega = true
            centertext("Comando?");
            foto = prompt("> ");

            if (foto==1) {
                console.clear();
                centertext("===========================================================================");
                centertext("-> A foto diz: 'VOCÊ NÃO DEVERIA TER VINDO AQUI'");
                centertext("===========================================================================");
                centertext("-> Você se sente um pouco assustado...");
                centertext("-> Depois de um tempo você decide continuar o seu caminho");
                centertext("-> Você chega em uma bifurcação");
                pausarParaContinuar()
                    menosSanidade()
                
                fotopega = true
                leufoto = true
                jogoAtivo3 = false;
                saiudafloresta2 = true;
            } else if (foto == 2 ) {
                console.clear();
                centertext("===========================================================================");
                centertext("-> Você ignora a foto e continua o seu caminho...");
                centertext("-> Você chega em uma bifurcação");
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
            centertext("-> Você não pode escavar, porque você não tem uma pá!");
        }
        } else if (objeto == 2) {
            console.clear();
            centertext("===========================================================================");
            centertext("-> Você ignora o objeto e continua o seu caminho...");
            centertext("-> Você chega em uma bifurcação");
            jogoAtivo3 = false;
            saiudafloresta2 = true;
        } else {
            Opcãoinvalida()
         }
    } else if (floresta3 == 2) {
        console.clear();
        centertext("===========================================================================");
        centertext("-> Você vai pelo caminho do Sul...");
        centertext("-> Você encontra um lobo");
        centertext("===========================================================================");
        centertext("[OPÇÕES]");
        centertext("===========================================================================");
        centertext("[01] Correr");
        centertext("[02] Se esconder");
        centertext("===========================================================================")
        centertext("Comando?")
        decisão2 = Number(prompt("> "));
        centertext(" ")

        if (decisão2 === 1) {
            console.clear();
            gameover()
            centertext("===========================================================================");
            centertext("-> Você começa a correr o mais rapido possivel...");
            centertext("-> Porém o lobo é mais rápido e te alcança, e te mata");
            centertext("===========================================================================");
            centertext("-> Você morreu!!");
            centertext("===========================================================================");
            process.exit(1);
} else if (decisão2 === 2) {
    console.clear();
    gameover()
    centertext("===========================================================================");
    centertext("-> Você se esconde em uma caverna ao lado");
    centertext("-> infelizmente aquela caverna era a casa do lobo, e ele te mata");
    centertext("===========================================================================");
    centertext("-> Você morreu!!");
    centertext("===========================================================================")
    process.exit(1);
    } else {
        Opcãoinvalida()
    }



} else if (floresta3 == 3) {
    console.clear();
    gameover()
    centertext("===========================================================================");
    centertext("-> Você decidi ir pelo Oeste");
    centertext("-> Você cai dentro do rio e morre afogado");
    centertext("===========================================================================");
    centertext("-> Você morreu!!");
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

N = false
O = false
L = false
S = false


while (jogoAtivo4) {
    if (N && S) {
        centertext("===========================================================================")
        centertext("██████████████████████████████████████████████             ██")
        centertext("██           ██                    █                /\\     ██")
        centertext("██           ██                    █               NORTE   ██")
        centertext("██ ██        ██                    █             (Já foi)  ██")
        centertext("██   ████████                      ██                      ██")
        centertext("██ ██               ██           ██████                    ██")
        centertext("████              ██████           ██                      ██")            
        centertext("██               █  ██  █          ██                      ██")
        centertext("██                  ██             ██            (Já foi)  ██")
        centertext("██                ██  ██                           SUL     ██")
        centertext("██               ██    ██                          \\/      ██")
        centertext("██████████████████████████████████████████████             ██")
        centertext(" ")
    } else if (!N && S) {
        centertext("===========================================================================")
        centertext("██████████████████████████████████████████████             ██")
        centertext("██           ██                    █                /\\     ██")
        centertext("██           ██                    █               NORTE   ██")
        centertext("██ ██        ██                    █                       ██")
        centertext("██   ████████                      ██                      ██")
        centertext("██ ██               ██           ██████                    ██")
        centertext("████              ██████           ██                      ██")            
        centertext("██               █  ██  █          ██                      ██")
        centertext("██                  ██             ██            (Já foi)  ██")
        centertext("██                ██  ██                           SUL     ██")
        centertext("██               ██    ██                          \\/      ██")
        centertext("██████████████████████████████████████████████             ██")
        centertext(" ")
    } else if (N && !S) {
        centertext("===========================================================================")
        centertext("██████████████████████████████████████████████             ██")
        centertext("██           ██                    █                /\\     ██")
        centertext("██           ██                    █               NORTE   ██")
        centertext("██ ██        ██                    █             (Já foi)  ██")
        centertext("██   ████████                      ██                      ██")
        centertext("██ ██               ██           ██████                    ██")
        centertext("████              ██████           ██                      ██")            
        centertext("██               █  ██  █          ██                      ██")
        centertext("██                  ██             ██                      ██")
        centertext("██                ██  ██                           SUL     ██")
        centertext("██               ██    ██                          \\/      ██")
        centertext("██████████████████████████████████████████████             ██")
        centertext(" ")
    } else if (!N && !S){
        centertext("===========================================================================")
        centertext("██████████████████████████████████████████████             ██")
        centertext("██           ██                    █                /\\     ██")
        centertext("██           ██                    █               NORTE   ██")
        centertext("██ ██        ██                    █                       ██")
        centertext("██   ████████                      ██                      ██")
        centertext("██ ██               ██           ██████                    ██")
        centertext("████              ██████           ██                      ██")            
        centertext("██               █  ██  █          ██                      ██")
        centertext("██                  ██             ██                      ██")
        centertext("██                ██  ██                           SUL     ██")
        centertext("██               ██    ██                          \\/      ██")
        centertext("██████████████████████████████████████████████             ██")
        centertext(" ")
    }
    
    centertext("===========================================================================");
centertext("-> Pegue sua recompensa, a lua palida sorri para você")
centertext("-> A sua frente existem caminhos, ao NORTE e SUL");
centertext("===========================================================================");
centertext("[OPÇÕES]");
centertext("===========================================================================");
centertext("[01] NORTE");
centertext("[02] SUL");
centertext("===========================================================================");
centertext("[AÇÕES]");
centertext("===========================================================================");
centertext("[03] INVENTÁRIO");
centertext("[04] SANIDADE");
centertext("[05] VIDA");
centertext("===========================================================================");
    centertext("Comando?")
    floresta4 = prompt("> ");
    centertext(" ")

    if (floresta4 == 1) {
        console.clear();
        centertext("===========================================================================");
        centertext("-> Você escolhe ir para o Norte...");
        N = true 
        centertext("-> Você encontra um carro encostado na beira de uma estrada a sua frente.")
        centertext("===========================================================================");
        centertext("[OPÇÕES]")
        centertext("===========================================================================")
        centertext("[01] Tentar ligar o carro.")
        centertext("[02] Ignorar o carro")
        centertext("[03] Sair andando pela estrada")
        centertext("===========================================================================");
        centertext("Comando?")
        carro = Number(prompt("> "))
        centertext(" ")

        if (carro == 1) {
            console.clear();
            centertext("===========================================================================");
            centertext("-> Você consegue ligar o carro.")
            centertext("===========================================================================");
            centertext("[OPÇÕES]")
            centertext("[01] Ir embora")
            centertext("[02] Voltar para o caminho")
            centertext("===========================================================================");
            centertext("Comando?")
            carro1 = Number(prompt("> "))
            centertext(" ")

            if (carro1 == 1) {
                console.clear()
                centertext("===========================================================================")
                centertext("-> Você tem certeza? Essa ação não terá volta!")
                centertext("===========================================================================")
                centertext("-> Pressione [1] para continuar ou [2] para cancelar!")
                centertext("===========================================================================")

                let br = Number(prompt("> "))
                if (br == 1) {
                
                console.clear();
                centertext("===========================================================================");
                centertext("-> Você decidi ir embora pela estrada!")
                if (fotopega && leufoto) {
                    centertext("===========================================================================");
                    centertext("-> Você antes de ir embora lembra da foto da criança...")
                    centertext("-> e resolve chamar a policia assim que chegar em sua casa!")
                    centertext("===========================================================================");
                    centertext("-> Você completou o [GOOD_ENDING]")
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
                    centertext("-> Você antes de ir embora lembra da foto da criança.")
                    centertext("-> mas acha que uma pessoa simplesmente deixou cair...")
                    centertext("===========================================================================");
                    centertext("-> Você completou o [BAD_ENDING_2]")
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
                    centertext("-> Você vai embora sem nem pensar direito.")
                    centertext("===========================================================================");
                    centertext("-> Você completou o [BAD_ENDING_3]")
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
                centertext("-> Você resolve voltar para o caminho inicial")
            } else {
                Opcãoinvalida()
             }
        } else {
            console.clear()
        }
        } else if (carro == 2) {
            console.clear();
            centertext("===========================================================================");
            centertext("-> Você ignora o carro!")
            centertext("===========================================================================");
            centertext("-> Chegando ao final do caminho, você nota que perdeu tempo e terá que voltar para o caminho inicial")
            centertext("-> Você caminha devolta...")

        } else if (carro == 3){
            console.clear();
            gameover()
            centertext("===========================================================================");
            centertext("-> você decidi ir andando pela estrada...")
            centertext("-> Isso não foi uma boa ideia!")
            centertext("-> Um carro sem estar com o farol ligado, não te enxerga e tem mata atropelado.")
            centertext("===========================================================================");
            centertext("-> Você Morreu!!")
            centertext("===========================================================================");
            process.exit(1);

        } else {
            Opcãoinvalida()
         }
    } else if (floresta4 == 2) {
        console.clear();
        centertext("===========================================================================");
        centertext("-> Você decidi ir pelo Sul...")
        S=true
        centertext("-> Nesse caminho, você encontra uma casa, que parece ser normal.")
        centertext("===========================================================================");
        centertext("[OPÇÕES]")
        centertext("===========================================================================");
        centertext("[01] Entrar na casa.")
        centertext("[02] Ignorar a casa e seguir o caminho.")
        centertext("===========================================================================");
        centertext("Comando?")
        casa2 = Number(prompt("> "))
        centertext(" ")

        if (casa2 == 1) {
            console.clear();
            centertext("===========================================================================");
centertext("-> Ao entrar na casa, seus passos ecoam de forma assustadora pelo silêncio.");
centertext("-> Seu primeiro instinto é procurar por sinais de vida");
centertext("alguém morando ou talvez preso ali.");
centertext("===========================================================================");
centertext("-> Após uma busca cuidadosa, você não encontra ninguém. ");
centertext("-> A solidão do lugar é palpável.");
centertext("-> Você então começa a revistar a casa em busca de algo útil, como um telefone.");
centertext("Sobre uma mesa empoeirada, você encontra um bilhete com um ");
centertext("mapa rudimentar desenhado com setas.");
centertext("===========================================================================");
            centertext("[OPÇÕES]")
            centertext("===========================================================================");
            centertext("[01] Seguir mapa.")
            centertext("[02] Não seguir o mapa.")
            centertext("===========================================================================");
            centertext("Comando?")
            mapa3 = Number(prompt("> "))
            centertext(" ")

            if (mapa3 == 1) {
                console.clear();
                centertext("===========================================================================");
centertext("-> Você segue o mapa com atenção, cada curva um passo em direção ao desconhecido.");
centertext("-> Ao chegar no 'X' marcado, você pisa e o chão range, soando oco sob seus pés.");
centertext("-> Um receio imediato surge. A dúvida paira no ar: cavar e encarar o que há embaixo ou ignorar e seguir em frente?");
centertext("===========================================================================");
                centertext("[OPÇÕES]")
                centertext("===========================================================================");
                centertext("[01] Escavar em busca de algo.")
                centertext("[02] Não escavar.")
                centertext("===========================================================================");
                centertext("Comando?")
                cavar = Number(prompt("> "))
                centertext(" ")

                if (cavar == 1) {
                    console.clear();
                    centertext("===========================================================================");
centertext("-> A terra solta cede facilmente. Logo, você distingue a forma inconfundível de um corpo humano.");
centertext("-> Ao limpar a última camada de terra, seu sangue gela com a visão.");
centertext("===========================================================================");
                   
                   if (destruir == true){
                    centertext("-> O corpo da criança levanta olhando fixamente para você...")
                    centertext("-> CRIANÇA: 'VOCÊ DESTRUIU MEU PERGAMINHO, AGORA EU VOU TE DESTRUIR...'")
                    SECRET_ENDING = true
                    REAL_ENDING = false
                    BAD_ENDING = false
                    BAD_ENDING_2 = false
                    BAD_ENDING_3 = false
                    GOOD_ENDING = false
                    jogoAtivo4 = false
                    centertext("===========================================================================");
                   } else {
                    centertext("-> É o corpo pequeno e frágil de uma criança.");
                    centertext("-> Seu coração dispara, martelando contra as costelas.");
                    centertext("-> Em meio ao pânico, de repente, você ouve...");
                    centertext("============================================================================")
                    centertext("-> Parabens!!")
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
centertext("-> Você decide não cavar e se vira para seguir em frente. Um erro fatal.");
centertext("-> Das sombras, uma figura se move. Antes que você possa reagir, um impacto violento atinge seu abdômen.");
centertext("-> O mundo gira enquanto você cai. A última coisa que você vê é o rosto de um homem, sem expressão, te observando morrer.");
centertext("============================================================================");
centertext("-> VOCÊ MORREU!");
centertext("============================================================================")
                    process.exit(1);
                    
                } else {
                    Opcãoinvalida()
                 }

            } else if (mapa3 == 2) {
                console.clear();
                centertext("===========================================================================");
centertext("-> Uma desconfiança percorre sua espinha. O mapa parece fácil demais, talvez uma armadilha.");
centertext("-> Você o ignora, decidindo continuar sua busca pela casa. Talvez tenha deixado algo passar.");
centertext("===========================================================================");
centertext("-> O tempo passa lentamente na escuridão, até que a porta se abre: o dono voltou.")
centertext("-> Passos pesados se aproximam. Você se esconde em um guarda-roupa empoeirado.")
centertext("-> Ele nota algo fora do lugar. O som dos passos fica alto demais...")
centertext("-> A porta do guarda-roupa é aberta abruptamente.")
pausarParaContinuar()        
gameover()        
centertext("===========================================================================");
                centertext("[Você Morreu!!]")
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
                centertext("-> Um arrepio de pavor te impede. Você decide que o risco é grande demais e dá as costas para a casa.");
                centertext("===========================================================================");
                centertext("-> Você retoma a trilha, mas a floresta ao redor parece ter mudado. Está mais silenciosa, mais escura.");
                centertext("-> O caminho se contorce de forma estranha e, após alguns minutos, uma sensação de 'déjà vu' te incomoda.");
                centertext("-> A mesma árvore retorcida... a mesma pedra coberta de musgo. O pânico se instala: o caminho está te levando em círculos.");
                centertext("-> Não há outra escolha. Você precisa voltar ao início, para a bifurcação onde tudo começou.");
                centertext("===========================================================================");
            } else if (casafora) {
                console.clear();
                centertext("===========================================================================");
                centertext("-> Você ja tentou fazer isso...")

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