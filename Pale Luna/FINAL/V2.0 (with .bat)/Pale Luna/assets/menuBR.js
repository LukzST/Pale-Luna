const readline = require('readline'); // Importa o módulo readline para lidar com a entrada de linha de comando.
const { exec, execSync } = require('child_process'); // Importa exec e execSync de child_process para executar comandos externos.
const prompt = require('prompt-sync')(); // Importa prompt-sync para entrada síncrona do usuário.
const folderPath = '../Achievements';
const fs = require('fs');
const path = require('path');
// Cria uma interface readline para ler a entrada e escrever a saída no console.
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define os itens do menu principal em português.
const menuItems = [
    'Iniciar Jogo',
    'Excluir Progresso',
    'Ver Conquistas',
    'Sair'
];

let selectedIndex = 0; // Mantém o controle do item de menu atualmente selecionado (índice).

// Objeto que mapeia códigos de cores (hex e numéricos) para nomes de cores e vice-versa.
const cores = {
    "0": "Preto", "1": "Azul Escuro", "2": "Verde Escuro", "3": "Ciano Escuro",
    "4": "Vermelho Escuro", "5": "Roxo Escuro", "6": "Amarelo (Oliva)", "7": "Branco (Cinza Claro)",
    "8": "Cinza Escuro", "9": "Azul Claro", "A": "Verde Claro", "B": "Ciano Claro",
    "C": "Vermelho Claro", "D": "Roxo Claro (Magenta Claro)", "E": "Amarelo Claro", "F": "Branco Brilhante",
    "Preto": "0", "Azul Escuro": "1", "Verde Escuro": "2", "Ciano Escuro": "3", "Vermelho Escuro": "4", "Roxo Escuro": "5",
    "Amarelo": "6", "Branco": "7", "Cinza Escuro": "8", "Azul Claro": "9", "Verde Claro": "A",
    "Ciano Claro": "B", "Vermelho Claro": "C", "Roxo Claro": "D", "Amarelo Claro": "E",
    "Branco Brilhante": "F"
};

// Define várias constantes de texto usadas para exibir mensagens e títulos.
const linhaDivisoria = "---------------------------------------------------------------------------";
const tituloConfigs = "CONFIGURAÇÕES";
const tituloCorTerminal = "// COR DO TERMINAL \\\\";
const tituloFundo = "*Definir uma cor de fundo:";
const tituloTexto = "*Definir uma cor de texto:";

// Listas de cores de fundo e texto com seus códigos correspondentes.
const listaFundo = [
    "0 = Preto", "1 = Azul Escuro", "2 = Verde Escuro", "3 = Ciano Escuro", "4 = Vermelho Escuro", "5 = Roxo Escuro",
    "6 = Amarelo", "7 = Branco", "8 = Cinza Escuro", "9 = Azul Claro"
];

const listaTexto = [
    "A = Verde Claro", "B = Ciano Claro", "C = Vermelho Claro",
    "D = Roxo Claro", "E = Amarelo Claro", "F = Branco Brilhante"
];

// Função para normalizar a entrada de cor (por exemplo, "preto" para "Preto" ou "0" para "0").
function arrumarEntradaCor(entrada) {
    if (!entrada) return '';
    entrada = entrada.trim();
    if (entrada.length === 1 && cores[entrada.toUpperCase()]) {
        return entrada.toUpperCase();
    }
    return entrada.split(' ').map(palavra => palavra.charAt(0).toUpperCase() + palavra.slice(1).toLowerCase()).join(' ');
}

// Função para desenhar o menu principal no console.
function desenharMenu() {
    console.clear(); // Limpa a tela do console.
    // Logo em arte ASCII.
    console.log ("██████╗  █████╗ ██╗     ███████╗ TM           ███████████");
    console.log ("██╔══██╗██╔══██╗██║     ██╔════╝           █████████████████ ");
    console.log ("██████╔╝███████║██║     █████╗           █████████████████████ ");
    console.log ("██╔═══╝ ██╔══██║██║     ██╔══╝          ███████████████████████ ");
    console.log ("██║     ██║  ██║███████╗███████╗      ███████████████████████████");
    console.log ("╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝      ███████████████████████████");
    console.log ("██╗     ██╗   ██╗███╗   ██╗ █████╗    ███████████████████████████");
    console.log ("██║     ██║   ██║████╗  ██║██╔══██╗   ███████████████████████████");
    console.log ("██║     ██║   ██║██╔██╗ ██║███████║     ███████████████████████");
    console.log ("██║     ██║   ██║██║╚██╗██║██╔══██║      █████████████████████ ");
    console.log ("███████╗╚██████╔╝██║ ╚████║██║  ██║        █████████████████");
    console.log ("╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝           ███████████ ");
    console.log ("---------------------------------------------------------------");
    console.log ("--- TERMINAL EDITION - FEITO POR SAD BERRY GAMES ---")
    console.log ("---------------------------------------------------------------");

    // Itera sobre os itens do menu e exibe o selecionado com "> <".
    menuItems.forEach((item, index) => {
        if (index === selectedIndex) {
            console.log(`\x1b[91m[> ${item} <] \x1b[96m`);
        } else {
            console.log(`  ${item}`);
        }
    });
    console.log('\nUse as setas para cima/baixo para navegar, Enter para selecionar.');
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
            console.log("-> Verificando a pasta...")

    if (finais != null && finais.length > 0) {
                console.log("---------------------------------------------------------------");
            console.log("-> ARQUIVOS ENCONTRADOS:")
                console.log(finais)
                console.log("---------------------------------------------------------------");
                console.log("-> Se você deseja manter esses finais, NÃO RESTAURE")
            pausarParaContinuar()
    } else {
            console.log("---------------------------------------------------------------");
                console.log("-> Nenhum arquivo de final encontrado!")
            pausarParaContinuar()
    }

     desenharMenu(); // Redraws the main menu after exiting color settings.
    process.stdin.setRawMode(true); // Resumes raw mode for keypress detection.
    process.stdin.resume(); // Resumes stdin.
}

// Função para lidar com os ajustes de cor do terminal.
function ajustarCores() {
    let toNessaTelaDeCor = true; // Flag para continuar o loop na tela de configurações de cor.

    while (toNessaTelaDeCor) {
        console.clear();
        console.log(linhaDivisoria);
        console.log(tituloConfigs);
        console.log(linhaDivisoria);
        console.log(tituloCorTerminal);
        console.log("");
        console.log(tituloFundo);
        listaFundo.forEach(item => console.log(item)); // Exibe as cores de fundo disponíveis.
        console.log("");
        console.log(tituloTexto);
        listaTexto.forEach(item => console.log(item)); // Exibe as cores de texto disponíveis.
        console.log("");
        console.log(linhaDivisoria);
        console.log("-> Para voltar ao Menu Principal, basta pressionar ENTER para ambas as opções.");
        console.log("-> Você pode mudar as cores várias vezes aqui!");
        console.log(linhaDivisoria);

        let inputFundo = prompt("Cor de fundo (digite o nome, ex.: Preto): ");
        let inputTexto = prompt("Cor de texto (digite o nome, ex.: Verde Claro): ");

        // Verifica se o usuário quer voltar ao menu principal.
        if (inputFundo.trim() === '0' || (inputFundo.trim() === '' && inputTexto.trim() === '')) {
            toNessaTelaDeCor = false;
            console.clear();
            console.log("Retornando ao Menu Principal...");
            break;
        }

        // Obtém os códigos das cores a partir da entrada do usuário.
        const codigoDoFundo = cores[arrumarEntradaCor(inputFundo)];
        const codigoDoTexto = cores[arrumarEntradaCor(inputTexto)];
        
        // Validação da entrada de cores.
        if (!codigoDoFundo || !codigoDoTexto) {
            console.clear();
            console.log(linhaDivisoria);
            console.log("-> Erro: Uma ou ambas as cores digitadas estão incorretas!");
            console.log("-> Por favor, digite os nomes ou códigos (0-F) exatamente como aparecem na lista.");
            console.log(linhaDivisoria);
            prompt("Pressione ENTER para tentar novamente...");
        } else if (codigoDoFundo === codigoDoTexto) { // Verifica se as cores de fundo e texto são as mesmas.
            console.clear();
            console.log(linhaDivisoria);
            console.log("-> Erro: A cor de fundo e a de texto não podem ser a mesma! Você não conseguirá ler nada!");
            console.log("-> Por favor, escolha cores diferentes para o fundo e o texto.");
            console.log(linhaDivisoria);
            prompt("Pressione ENTER para tentar novamente...");
        } else {
            // Constrói o comando para mudar as cores do terminal.
            const comandoCor = `COLOR ${codigoDoFundo}${codigoDoTexto}`;
            try {
                execSync(comandoCor, { stdio: 'inherit' }); // Executa o comando de forma síncrona.

                console.clear();
                console.log(linhaDivisoria);
                console.log("-> CORES DO TERMINAL ALTERADAS COM SUCESSO!");
                console.log(linhaDivisoria);
                // Exibe as cores escolhidas.
                console.log(`Fundo: ${listaFundo.find(item => item.startsWith(codigoDoFundo)) || codigoDoFundo}`);
                console.log(`Texto: ${listaTexto.find(item => item.startsWith(codigoDoTexto)) || codigoDoTexto}`);
                console.log(linhaDivisoria);
                console.log("-> As cores do seu terminal agora estão diferentes!");
                prompt("Pressione ENTER para definir mais cores ou voltar...");
            } catch (error) {
                // Tratamento de erro se a alteração das cores falhar (por exemplo, não está no Windows).
                console.clear();
                console.log(linhaDivisoria);
                console.log("-> FALHA ao mudar as cores.");
                console.log("-> Certifique-se de que está executando isto em um terminal Windows (CMD ou PowerShell).");
                console.log(`Erro técnico: ${error.message}`);
                console.log(linhaDivisoria);
                prompt("Pressione ENTER para tentar novamente...");
            }
        }
    }
    desenharMenu(); // Redesenha o menu principal após sair das configurações de cor.
    process.stdin.setRawMode(true); // Retoma o modo bruto para a detecção de teclas.
    process.stdin.resume(); // Retoma a entrada padrão.
}

desenharMenu(); // Desenha o menu inicial.

process.stdin.setRawMode(true); // Define a entrada padrão para o modo bruto para capturar o pressionamento de teclas individuais.
process.stdin.resume(); // Retoma a entrada padrão, permitindo que ela emita eventos 'data'.

// Listener de eventos para dados de entrada (pressionamento de teclas).
process.stdin.on('data', (chunk) => {
    const key = chunk.toString('hex'); // Converte o buffer da tecla para uma string hexadecimal.

    switch (key) {
        case '1b5b41': // Tecla de seta para cima
            selectedIndex = (selectedIndex - 1 + menuItems.length) % menuItems.length; // Move a seleção para cima, com loop.
            desenharMenu();
            break;
        case '1b5b42': // Tecla de seta para baixo
            selectedIndex = (selectedIndex + 1) % menuItems.length; // Move a seleção para baixo, com loop.
            desenharMenu();
            break;
        case '0d': // Tecla Enter
            console.clear();
            
            if (selectedIndex === 0) { // Opção "Iniciar Jogo"
                rl.close(); // Fecha a interface readline.
                process.stdin.pause(); // Pausa a entrada padrão.
                console.log('Iniciando o jogo...');
                require('./lang.js'); // Requer um script externo para iniciar o jogo.
            } else if (selectedIndex === 3) { // Opção "Sair"
                console.log('Saindo do menu...');
                rl.close();
                process.exit(); // Sai do processo Node.js.
            } else if (selectedIndex === 1) { // Opção "Excluir progresso"
                process.stdin.setRawMode(false); // Desativa o modo bruto antes de executar o comando externo.
                process.stdin.pause(); // Pausa a entrada padrão.
                exec('start cmd.exe /c Erase_Data.bat', (error) => { // Executa o arquivo batch em uma nova janela.
                    if (error) {
                        console.error(`Erro ao executar o arquivo: ${error.message}`);
                    } else {
                        console.log('O comando Erase_Data.bat foi executado com sucesso.');
                    }
                    console.log('\nPressione ENTER para voltar ao menu...');
                    prompt(''); // Espera o usuário pressionar Enter.
                    desenharMenu(); // Redesenha o menu.
                    process.stdin.setRawMode(true); // Reabilita o modo bruto.
                    process.stdin.resume(); // Retoma a entrada padrão.
                });
            } else if (selectedIndex === 2) { // Opção "Ver Conquistas"
                process.stdin.setRawMode(false);
                process.stdin.pause();
                conquistas();
            } else if (selectedIndex === 4) { // Opção "Mudar para Inglês"
                require('./menu.js');
            }
            break;
        case '03': // Ctrl+C (SIGINT)
            console.log('\nSaindo do menu...');
            rl.close();
            process.exit();
            break;
        default: // Lida com qualquer outro pressionamento de tecla (não faz nada).
            break;
    }
});

// Listener de eventos para quando a interface readline é fechada.
rl.on('close', () => {
    console.log('\nMenu encerrado.');
});