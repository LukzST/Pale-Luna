/**
 * ECOS DA NOITE - Versão Blessed (Estética Moderna e Correções Finais)
 * * INTEGRAÇÃO: Salvar Finais e Conquistas (Reintrodução de FS/PATH)
 */

const blessed = require('blessed');
const fs = require('fs');         // Reintrodução
const path = require('path');     // Reintrodução
const { exec } = require('child_process'); // Reintrodução (para futura compatibilidade)

// --- Variáveis de Estado do Jogo ---

let nomeJogador = "Michael Nevins";
let Vida = 100;
let valorsanidade = 100;
let papega = false;
let temChave = false;
let chavedois = false;
let mapaachado = false;
let kitm = false;
let fotopega = false;
let leufoto = false;
let destruir = false;
let jafoinorte = false; 
let casafora = false;

// Estado dos caminhos visitados (para desenhos TUI, se mantidos)
let N = false, L = false, O = false, S = false;

// --- Controles de Finais ---
let BAD_ENDING = false;
let BAD_ENDING_2 = false;
let BAD_ENDING_3 = false;
let GOOD_ENDING = false;
let REAL_ENDING = false;
let SECRET_ENDING = false;

// --- Configurações de Arquivos Externos e Conquistas ---
const achievementsPath = '../Achievements/';
const saveConquistas = '../Account/Achievementsavefile.bin';

// Funções de Conquista (Auxiliar)
function saveAchievement(filename, content) {
    try {
        const fullPath = path.join(achievementsPath, filename);
        
        // Garante que o diretório Achievements existe
        if (!fs.existsSync(achievementsPath)) {
             fs.mkdirSync(achievementsPath, { recursive: true });
        }
        
        // Salva o arquivo .bin
        fs.writeFileSync(fullPath, content, 'utf8');

        // Adiciona ao arquivo de progresso (save file)
        if (!fs.existsSync(path.dirname(saveConquistas))) {
            fs.mkdirSync(path.dirname(saveConquistas), { recursive: true });
        }
        // Verifica se o arquivo já foi salvo para evitar duplicação (lógica simplificada)
        const saveContent = fs.readFileSync(saveConquistas, 'utf8');
        if (!saveContent.includes(filename)) {
            fs.appendFileSync(saveConquistas, filename + '\n', 'utf8');
        }

    } catch (err) {
        // Ignora erros de disco/permissão no Blessed TUI para não travar o jogo
    }
}

// --- Lógica de Cenas ---
let currentScene = 'intro';

// --- ARTE ASCII (Baseada no seu código original) ---
const ASCII_GAMEOVER = [
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
    ""
];

const ASCII_SALA_ITENS = [
    "███████████████████████████████████████████████████████████████████",
    "██                                                               ██",
    "██    █      █                                                   ██",
    "██   ███     █                                                   ██",
    "██  (Pote)  ███                                                  ██",
    "██          (Pá)                                                 ██",
    "██                                                            █████",
    "██                               ██                           █  ██",
    "██                             ██████                         █  ██",
    "██                            █  ██  █                      ███  ██",
    "██                               ██                         █ █  ██",
    "██                             ██  ██                         █  ██",
    "██                            ██    ██                        █  ██",                                            
    "███████████████████████████████████████████████████████████████████"
];

const ASCII_FLORESTA_1 = [
    "██████████████████████████████████████████████████████         ████",
    "                   ██                                              ",
    "                 ██                                       /\\      ",
    "               ██                                        OESTE     ",
    "         ██  ██                                                    ",
    "       ██  ██                                                      ",
    "     ██                                                            ",
    "██   ██                            ██                 NORTE >      ",
    "██   ██                          ██████                            ",
    "██   ██                         █  ██  █                           ",
    "██   ██                            ██                              ",
    "██   ██                          ██  ██                 LESTE      ",
    "██   ██                         ██    ██                 \\/       ",                                            
    "██████████████████████████████████████████████████████         ████"
];

// --- Componentes Blessed (Estética Moderna) ---
const screen = blessed.screen({
    smartCSR: true,
    title: 'ECOS DA NOITE | Jogo de Aventura TUI',
    dockBorders: true 
});

// Status Bar (Top: Modernizado)
const statusBar = blessed.box({
    top: 0,
    left: 0,
    width: '100%',
    height: 1,
    content: 'STATUS: Carregando...',
    tags: true, 
    style: {
        fg: 'white',
        bg: 'blue' 
    },
    align: 'left'
});
screen.append(statusBar);

// Caixa principal de texto (Content Box)
const textBox = blessed.box({
    top: 1, 
    left: 0,
    width: '100%',
    height: '69%',
    content: '',
    tags: true, 
    border: {
        type: 'line'
    },
    style: {
        fg: 'white',
        bg: 'black',
        border: {
            fg: 'grey' 
        }
    },
    scrollable: true,
    alwaysScroll: true,
    scrollbar: {
        ch: ' ',
        track: { bg: 'grey' },
        style: { inverse: true }
    }
});
screen.append(textBox);

// Caixa de opções
const choiceBox = blessed.list({
    bottom: 0,
    left: 0,
    width: '100%',
    height: '30%',
    content: 'Opções:',
    tags: true, 
    border: {
        type: 'line'
    },
    style: {
        fg: 'white',
        bg: 'black',
        border: {
            fg: 'yellow' 
        },
        selected: {
            bg: 'cyan', 
            fg: 'black'
        }
    },
    keys: true, 
    mouse: true,
    vi: true,
    scrollbar: {
        ch: ' ',
        track: { bg: 'grey' },
        style: { inverse: true }
    }
});
screen.append(choiceBox);

screen.key(['escape', 'q', 'C-c'], function(ch, key) {
    return process.exit(0);
});

// --- Funções de Ajuda da Interface Blessed ---

function renderAscii(asciiArray) {
    const maxLineWidth = Math.max(...asciiArray.map(line => line.length));
    const terminalWidth = screen.width;
    const padding = Math.max(0, Math.floor((terminalWidth - maxLineWidth) / 2));
    const paddedAscii = asciiArray.map(line => ' '.repeat(padding) + line);
    return paddedAscii.join('\n');
}

function updateStatus() {
    let status = `[Vida: {green-fg}${Vida}%{/}] | [Sanidade: {cyan-fg}${valorsanidade}%{/}] | [Itens: {yellow-fg}`;
    let itens = [];
    if (papega) itens.push('Pá');
    if (temChave) itens.push('Chave(Pote)');
    if (chavedois) itens.push('Chave(Lápide)');
    if (mapaachado) itens.push('Mapa');
    if (kitm) itens.push('Kit Médico');
    if (fotopega) itens.push('Foto');

    status += itens.join(', ') || 'Nenhum';
    status += '{/} ]';
    statusBar.setContent(status);
    screen.render();
}

function showModal(message, callback) {
    const modal = blessed.box({
        top: 'center',
        left: 'center',
        width: '50%',
        height: '20%',
        content: `{center}${message}\n\nPressione {yellow-fg}[ENTER]{/yellow-fg} para continuar...{/center}`,
        tags: true, 
        border: { type: 'line' },
        style: { 
            fg: 'white', 
            bg: 'grey', 
            border: { fg: 'red' } 
        }
    });

    screen.append(modal);
    screen.render();
    modal.focus(); 

    modal.key('enter', function() {
        screen.remove(modal);
        screen.render();
        choiceBox.focus(); 
        if (callback) callback();
    });
}

function displayScene(text, choices, choiceHandler) {
    textBox.setContent(text);

    const items = choices.map((c, i) => `{yellow-fg}[${i + 1}]{/yellow-fg} ${c.text}`);
    
    choiceBox.setItems(items);
    choiceBox.on('select', function(item, index) {
        choiceBox.removeAllListeners('select'); 
        choiceBox.clearItems();
        screen.render();

        choiceHandler(index + 1); 
    });
    
    choiceBox.focus();
    screen.render();
}

// --- Funções de Estado e Efeitos ---

function checkGameOver() {
    if (Vida < 20) {
        return 'MORTE';
    }
    if (valorsanidade <= 10) {
        return 'LOUCURA';
    }
    return null;
}

/**
 * Altera a Vida.
 */
function alterarVida(valor, showPopup = true) { 
    const oldVida = Vida;
    Vida += valor;
    if (Vida > 100) Vida = 100;
    
    if (checkGameOver() === 'MORTE') {
        endGame('Você perdeu muita vida!');
        return true; 
    } 
    
    if (showPopup && Vida !== oldVida) {
        let tipo = valor < 0 ? 'CAIU GRAVEMENTE' : 'SUBIU';
        let cor = valor < 0 ? 'red' : 'green';

        showModal(`{${cor}}[AVISO] SUA VIDA ${tipo}!{/${cor}}\n\nVocê agora tem ${Vida}% de vida.`, () => {
            updateStatus();
            transitionTo(currentScene, 0); 
        });
        return true;
    }
    updateStatus(); 
    return false;
}

/**
 * Altera a Sanidade.
 */
function alterarSanidade(valor, showPopup = true) { 
    const oldSanidade = valorsanidade;
    valorsanidade += valor;
    if (valorsanidade > 100) valorsanidade = 100;

    if (checkGameOver() === 'LOUCURA') {
        endGame('Você chegou em um nível muito baixo de sanidade durante o jogo!\nVocê enlouqueceu e se perdeu na floresta para sempre!');
        return true; 
    } else if (showPopup && valorsanidade !== oldSanidade) {
        let tipo = valor < 0 ? 'CAIU' : 'SUBIU';
        let cor = valor < 0 ? 'red' : 'green';

        showModal(`{${cor}}[AVISO] SUA SANIDADE ${tipo}!{/${cor}}\n\nVocê agora tem ${valorsanidade}% de sanidade.`, () => {
            updateStatus();
            transitionTo(currentScene, 0); 
        });
        return true;
    }
    updateStatus(); 
    return false;
}

function inventarioScene() {
    let itensNoInventario = 0;
    let inventarioText = "{center}=================================================\n";
    inventarioText += "Você tem no seu inventário:{/center}\n";
    inventarioText += "{center}================================================={/center}\n";

    if (papega) { inventarioText += "{center}- Pá{/center}\n"; itensNoInventario++; }
    if (temChave) { inventarioText += "{center}- Chaves (Pote){/center}\n"; itensNoInventario++; }
    if (chavedois) { inventarioText += "{center}- Chave (Lápide){/center}\n"; itensNoInventario++; }
    if (mapaachado) { inventarioText += "{center}- Mapa{/center}\n"; itensNoInventario++; }
    if (kitm) { inventarioText += "{center}- Kit Médico{/center}\n"; itensNoInventario++; }
    if (fotopega) { inventarioText += "{center}- Foto{/center}\n"; itensNoInventario++; }

    if (itensNoInventario === 0) {
        inventarioText += "{center}Você ainda não pegou nenhum item!{/center}\n";
    }
    inventarioText += "{center}================================================={/center}";

    showModal(inventarioText, () => transitionTo(currentScene));
}

// --- Funções de Cenas ---

function transitionTo(sceneName, optionSelected = 0) {
    currentScene = sceneName;
    updateStatus();

    if (checkGameOver()) {
        const type = checkGameOver();
        endGame(type === 'MORTE' ? 'Você perdeu muita vida!' : 'Você enlouqueceu e se perdeu na floresta para sempre!');
        return;
    }
    
    switch (sceneName) {
        case 'intro':
            sceneIntro();
            break;
        case 'salaInicial':
            sceneSalaInicial(optionSelected);
            break;
        case 'floresta1':
            sceneFloresta1(optionSelected);
            break;
        case 'floresta2':
            sceneFloresta2(optionSelected);
            break;
        case 'floresta3':
            sceneFloresta3(optionSelected);
            break;
        case 'floresta4':
            sceneFloresta4(optionSelected);
            break;
        case 'badEnding':
            endGame('Você avança rapidamente pela floresta, mas ainda restam segredos esperando para serem descobertos...');
            break;
    }
}

function sceneIntro() {
    let text = `{center}===========================================================================\n`;
    text += `[CONTEXTO]\n`;
    text += `===========================================================================\n`;
    text += `Você é {yellow-fg}${nomeJogador}{/}, um engenheiro elétrico que foi chamado para consertar\n`;
    text += `postes, porém nem tudo ocorreu como planejado e\n`;
    text += `você foi sequestrado por alguém!\n`;
    text += `===========================================================================\n`;
    text += `Seu objetivo é tentar fugir!\n`;
    text += `==========================================================================={/center}`;

    showModal(text, () => transitionTo('salaInicial'));
}

function sceneSalaInicial(choice) {
    // 1. Renderiza a Arte ASCII da sala
    let asciiArt = renderAscii(ASCII_SALA_ITENS);
    
    // 2. Texto Narrativo
    const narrativeText = "\n\n{center}Você está em uma sala escura. A luz da lua raia pela janela.\n" +
                          "Há um POTE de OURO no canto da sala, junto com uma PÁ. E do outro lado existe uma PORTA.{/center}";
    
    let currentText = asciiArt + narrativeText;

    const choices = [
        { text: `Examinar PÁ ${papega ? '(PEGO)' : ''}`, action: 1 },
        { text: `Examinar POTE de OURO ${temChave ? '(PEGO)' : ''}`, action: 2 },
        { text: `Tentar abrir PORTA`, action: 3 },
        { text: `INVENTÁRIO`, action: 4, special: true },
        { text: `VER STATUS`, action: 5, special: true }
    ];

    if (choice === 1) {
        if (papega) {
            showModal('Você já pegou a pá!', () => transitionTo('salaInicial'));
        } else {
            papega = true;
            showModal('Você pegou a pá, talvez seja útil no futuro.', () => transitionTo('salaInicial'));
        }
        return;
    } else if (choice === 2) {
        if (temChave) {
            showModal('Você já pegou o pote de ouro e a chave!', () => transitionTo('salaInicial'));
        } else {
            temChave = true;
            showModal('Você pegou o pote de ouro, dentro dele você achou uma chave.', () => transitionTo('salaInicial'));
        }
        return;
    } else if (choice === 3) {
        if (temChave) {
            temChave = false;
            showModal('Você consegue abrir a porta com a chave encontrada!\n[AVISO] Você usou a chave!', () => transitionTo('floresta1'));
        } else {
            showModal('Você tenta abrir a porta, porém ela está trancada...', () => transitionTo('salaInicial'));
        }
        return;
    } else if (choice === 4) {
        inventarioScene();
        return;
    } else if (choice === 5) {
        showModal(`VIDA: {green-fg}${Vida}%{/}\nSANIDADE: {cyan-fg}${valorsanidade}%{/}`, () => transitionTo('salaInicial'));
        return;
    }
    
    displayScene(currentText, choices, (c) => transitionTo('salaInicial', c));
}

function sceneFloresta1(choice) {
    // 1. Renderiza a Arte ASCII da Floresta 1
    let asciiArt = renderAscii(ASCII_FLORESTA_1);
    
    // 2. Texto Narrativo
    let narrativeText = "\n\n{center}===========================================================================\n";
    narrativeText += "Pegue sua recompensa. A lua pálida sorri para você.\n";
    narrativeText += "Você está em uma floresta, Existem caminhos para o NORTE, OESTE e LESTE:\n";
    narrativeText += "==========================================================================={/center}";
    
    let currentText = asciiArt + narrativeText;

    const choices = [
        // Usa jafoinorte para marcar se o desafio foi usado.
        { text: `Ir para NORTE ${jafoinorte ? '(Já tentou)' : ''}`, action: 1 },
        { text: `Ir para OESTE ${O ? '(Já tentou)' : ''}`, action: 2 },
        { text: `Ir para LESTE`, action: 3 },
        { text: `INVENTÁRIO`, action: 4, special: true },
        { text: `VER STATUS`, action: 5, special: true }
    ];

    if (choice === 1) { // NORTE
        if (jafoinorte) {
            showModal('Você já foi pelo Norte!', () => transitionTo('floresta1'));
            return;
        }

        // --- LÓGICA DE 100% SUCESSO ---
        
        // Marca como tentado (para que a opção mude na próxima vez)
        jafoinorte = true; 
        
        const choicesAtalho = [
            { text: 'Ir pelo atalho ({yellow-fg}BAD ENDING{/})', action: 1 },
            { text: 'Ignorar o atalho', action: 2 }
        ];
        
        // Exibe a tela de decisão do atalho
        displayScene("{center}Você se sente mais confiante em ir pelo norte...\nVocê encontra um atalho secreto!{/center}", choicesAtalho, (c) => {
            if (c === 1) {
                // Escolheu ir pelo atalho -> Final (BAD ENDING)
                BAD_ENDING = true;
                endGame('Você avança rapidamente pela floresta, mas ainda restam segredos esperando para serem descobertos...');
            } else if (c === 2) {
                // Escolheu ignorar o atalho -> Volta para a Floresta 1
                showModal('Você acha perigoso e ignora o atalho', () => transitionTo('floresta1'));
            } else {
                // Opção inválida no sub-menu
                showModal('Opção Inválida! Voltando ao caminho.', () => transitionTo('floresta1'));
            }
        });
        return; // Garante que a função principal não continue a renderização
        
    } else if (choice === 2) { // OESTE (COMBINADO)
        O = true;
        const choicesOeste = [
            { text: 'Fugir', action: 1 },
            { text: 'Se esconder', action: 2 }
        ];
        displayScene("{center}Você vai pelo caminho Oeste...\nUm homem alto, com um machado e não muito amigável se aproxima.{/center}", choicesOeste, (c) => {
            let resultado = '';
            if (c === 1) {
                // Suprime pop-up individual
                alterarSanidade(-10, false); 
                alterarVida(-50, false);
                resultado = 'Você começa a correr, tropeça em uma raiz e leva uma machadada do homem.';
            } else if (c === 2) {
                // Suprime pop-up individual
                alterarSanidade(-10, false);
                alterarVida(-50, false);
                resultado = 'Você decide se esconder, mas ele te vê e te dá uma machadada!';
            } else {
                showModal('Opção Inválida!', () => transitionTo('floresta1'));
                return;
            }

            // Checa Game Over
            if (checkGameOver()) return;

            // Exibe o resultado combinado e o status atualizado em um único modal
            showModal(`${resultado}\n\n{red-fg}Dano Recebido:{/}\n- Vida atual: {green-fg}${Vida}%{/}\n- Sanidade atual: {cyan-fg}${valorsanidade}%{/}`, () => transitionTo('floresta1'));
        });
        return;

    } else if (choice === 3) { // LESTE
        L = true;
        showModal('Depois de pensar, você decide ir pelo Leste...\nVocê começa a adentrar a floresta densa...', () => transitionTo('floresta2'));
        return;
    } else if (choice === 4) {
        inventarioScene();
        return;
    } else if (choice === 5) {
        showModal(`VIDA: {green-fg}${Vida}%{/}\nSANIDADE: {cyan-fg}${valorsanidade}%{/}`, () => transitionTo('floresta1'));
        return;
    }
    
    displayScene(currentText, choices, (c) => transitionTo('floresta1', c));
}

function sceneFloresta2(choice) {
    // 1. Renderiza a Arte ASCII da Floresta 1 (mantendo o desenho genérico)
    let asciiArt = renderAscii(ASCII_FLORESTA_1); // Usando a arte da Floresta 1 como placeholder
    
    // 2. Texto Narrativo
    let narrativeText = "\n\n{center}===========================================================================\n";
    narrativeText += "Pegue sua recompensa. A lua pálida sorri para você.\n";
    narrativeText += "Você está em uma floresta, Existem caminhos para o NORTE, SUL e LESTE:\n";
    narrativeText += "==========================================================================={/center}";
    
    let currentText = asciiArt + narrativeText; // Definição de currentText aqui

    const choices = [
        { text: `Ir para NORTE ${N ? '(Já foi)' : ''}`, action: 1 },
        { text: `Ir para SUL ${S ? '(Já foi)' : ''}`, action: 2 },
        { text: `Ir para LESTE`, action: 3 },
        { text: `INVENTÁRIO`, action: 4, special: true },
        { text: `VER STATUS`, action: 5, special: true }
    ];

    if (choice === 1) { // NORTE (Cabana)
        N = true;
        
        const choicesCabana = [
            { text: 'Entrar na cabana', action: 1 },
            { text: 'Ignorar a cabana', action: 2 }
        ];
        
        displayScene("{center}Você decide ir pelo Norte...\nVocê encontra uma cabana velha feita de madeira{/center}", choicesCabana, (c) => {
            if (c === 1) { // Entrar na cabana
                const choicesBau = [
                    { text: 'Pegar o mapa', action: 1 },
                    { text: 'Voltar para a bifurcação', action: 2 },
                    { text: `Pegar Kit Médico ${kitm ? '(PEGO)' : ''} (Cura 50% da vida)`, action: 3 }
                ];
                
                displayScene("{center}Você entra na cabana e encontra um baú velho. Dentro dele, um pergaminho com um mapa.{/center}", choicesBau, (c2) => {
                    if (c2 === 1) { // Pegar o mapa
                        mapaachado = true;
                        showModal('Você pega o mapa!', () => transitionTo('floresta2', 0)); 
                    } else if (c2 === 2) { // Voltar
                        transitionTo('floresta2', 0);
                    } else if (c2 === 3) { // Kit Médico
                        if (kitm) {
                            showModal('Você já pegou o kit médico!', () => transitionTo('floresta2', 0));
                        } else {
                            kitm = true;
                            // Cura: Não exibe pop-up individual
                            alterarVida(50, false); 
                            showModal(`{green-fg}[KIT MÉDICO USADO]{/}\n\nSua vida foi restaurada em 50 pontos. Vida atual: {green-fg}${Vida}%{/}`, () => transitionTo('floresta2', 0));
                        }
                    } else {
                        showModal('Opção Inválida!', () => transitionTo('floresta2', 0));
                    }
                });
            } else if (c === 2) { // Ignorar a cabana
                const choicesPonte = [
                    { text: 'Pular a ponte', action: 1 },
                    { text: 'Voltar para a bifurcação', action: 2 }
                ];
                displayScene("{center}Você ignora a cabana e continua...\nEncontra uma ponte quebrada.{/center}", choicesPonte, (c2) => {
                    if (c2 === 1) {
                        endGame('Você tenta pular a ponte, porém você cai e morre');
                    } else if (c2 === 2) {
                        transitionTo('floresta2', 0);
                    } else {
                        showModal('Opção Inválida!', () => transitionTo('floresta2', 0));
                    }
                });
            } else {
                showModal('Opção Inválida!', () => transitionTo('floresta2', 0));
            }
        });
        return;
    } else if (choice === 2) { // SUL (Barco/Pergaminho)
        S = true;
        const choicesSul = [
            { text: 'Pegar o barco', action: 1 },
            { text: 'Ignorar o barco', action: 2 },
            { text: 'Voltar para a bifurcação', action: 3 }
        ];
        
        displayScene("{center}Você vai pelo Sul.\nVocê encontra um lago, e um barco a sua frente.{/center}", choicesSul, (c) => {
            if (c === 1) { // Pegar o barco
                const choicesCaverna = [
                    { text: 'Ignorar caverna', action: 1 },
                    { text: 'Entrar dentro da caverna', action: 2 }
                ];

                displayScene("{center}O barco afunda. Você vê uma caverna submersa!{/center}", choicesCaverna, (c2) => {
                    if (c2 === 1) {
                        showModal('Você ignora a caverna e decide voltar nadando.', () => transitionTo('floresta2', 0));
                    } else if (c2 === 2) { // Caverna / Pergaminho
                        const choicesPergaminho = [
                            { text: 'Ler (Perde Sanidade)', action: 1 },
                            { text: 'Não Ler', action: 2 },
                            { text: 'DESTRUIR! (Altera Final Secreto)', action: 3 }
                        ];

                        displayScene("{center}Você encontra um cemitério submerso com um pergaminho aberto...{/center}", choicesPergaminho, (c3) => {
                            if (c3 === 1) { // Ler
                                let sanidadePerdida = false;
                                if (!destruir) {
                                    // Suprime o pop-up de sanidade para combinar
                                    sanidadePerdida = alterarSanidade(-10, false); 
                                }
                                
                                showModal('O diário é assustador. Você teme pelo autor.' + 
                                    (sanidadePerdida ? '\n\n{red-fg}[AVISO] Sua sanidade caiu para {cyan-fg}' + valorsanidade + '%{/}' : ''), () => {
                                    
                                    if (checkGameOver()) return; 

                                    const choicesVoltar = [
                                        { text: 'Tentar voltar nadando (50% de chance de afogar)', action: 1 },
                                        { text: 'Ficar na caverna e procurar (Encontra Chave)', action: 2 }
                                    ];
                                    displayScene("{center}O que fazer agora?{/center}", choicesVoltar, (c4) => {
                                        if (c4 === 1) {
                                            if (Math.random() < 0.5) {
                                                showModal('Você consegue voltar!', () => transitionTo('floresta2', 0));
                                            } else {
                                                // Apenas chama alterarVida com pop-up, que cuida do Game Over.
                                                alterarVida(-100); 
                                                if (checkGameOver()) return;
                                            }
                                        } else if (c4 === 2) {
                                            chavedois = true;
                                            showModal('Você encontra uma chave na lápide e volta à superfície.', () => transitionTo('floresta2', 0));
                                        } else {
                                            showModal('Opção Inválida!', () => transitionTo('floresta2', 0));
                                        }
                                    });
                                });
                            } else if (c3 === 2) { // Não Ler
                                showModal('Você decide não ler e tenta voltar nadando.', () => transitionTo('floresta2', 0));
                            } else if (c3 === 3) { // DESTRUIR!
                                destruir = true;
                                showModal('VOCÊ DESTRUIU O PERGUMINHO! ISSO AFETARÁ O FINAL SECRETO...', () => transitionTo('floresta2', 0));
                            } else {
                                showModal('Opção Inválida!', () => transitionTo('floresta2', 0));
                            }
                        });
                    } else {
                        showModal('Opção Inválida!', () => transitionTo('floresta2', 0));
                    }
                });

            } else if (c === 2) { // Ignorar o barco (Lobo)
                const choicesLobo = [
                    { text: 'Correr', action: 1 },
                    { text: 'Se esconder', action: 2 }
                ];

                displayScene("{center}Você ignora o barco e encontra um lobo.{/center}", choicesLobo, (c2) => {
                    let resultado = '';
                    let dano = 0;
                    if (c2 === 1) {
                        dano = -20;
                        alterarVida(dano, false);
                        resultado = 'Você corre, mas o lobo te morde. Ferido em nível médio!';
                    } else if (c2 === 2) {
                        dano = -70;
                        alterarVida(dano, false);
                        resultado = 'Você se esconde na caverna do lobo e é gravemente ferido!';
                    } else {
                        showModal('Opção Inválida!', () => transitionTo('floresta2', 0));
                        return;
                    }

                    if (checkGameOver()) return;

                    // Pop-up Combinado
                    showModal(`${resultado}\n\n{red-fg}Dano Recebido:{/}\n- Vida atual: {green-fg}${Vida}%{/}`, () => transitionTo('floresta2', 0));
                });
            } else if (c === 3) { // Voltar
                transitionTo('floresta2', 0);
            } else {
                showModal('Opção Inválida!', () => transitionTo('floresta2', 0));
            }
        });
        return;

    } else if (choice === 3) { // LESTE (Avançar)
        L = true;
        showModal('Você atravessa as folhas e galhos, e encontra uma outra bifurcação', () => transitionTo('floresta3'));
        return;
    } else if (choice === 4) {
        inventarioScene();
        return;
    } else if (choice === 5) {
        showModal(`VIDA: {green-fg}${Vida}%{/}\nSANIDADE: {cyan-fg}${valorsanidade}%{/}`, () => transitionTo('floresta2'));
        return;
    }

    displayScene(currentText, choices, (c) => transitionTo('floresta2', c));
}

function sceneFloresta3(choice) {
    // 1. Renderiza a Arte ASCII da Floresta 1 (mantendo o desenho genérico)
    let asciiArt = renderAscii(ASCII_FLORESTA_1); // Usando a arte da Floresta 1 como placeholder
    
    // 2. Texto Narrativo
    let narrativeText = "\n\n{center}===========================================================================\n";
    narrativeText += "Pegue sua recompensa. A lua pálida sorri para você.\n";
    narrativeText += "Você está em uma floresta, Existem caminhos para o NORTE, SUL e OESTE:\n";
    narrativeText += "==========================================================================={/center}";
    
    let currentText = asciiArt + narrativeText; // Definição de currentText aqui

    const choices = [
        { text: `Ir para NORTE`, action: 1 },
        { text: `Ir para SUL`, action: 2 },
        { text: `Ir para OESTE`, action: 3 },
        { text: `INVENTÁRIO`, action: 4, special: true },
        { text: `VER STATUS`, action: 5, special: true }
    ];

    if (choice === 1) { // NORTE (Escavar/Foto)
        N = true;
        const choicesObjeto = [
            { text: 'Escavar o chão', action: 1 },
            { text: 'Ignorar o objeto', action: 2 }
        ];

        displayScene("{center}Você encontra algo brilhante no chão.{/center}", choicesObjeto, (c) => {
            if (c === 1) { // Escavar
                if (papega) {
                    const choicesFoto = [
                        { text: 'Ler o que está escrito (Perde Sanidade)', action: 1 },
                        { text: 'Ignorar a foto', action: 2 }
                    ];

                    displayScene("{center}Você escava e encontra uma foto de uma criança. Há algo escrito atrás.{/center}", choicesFoto, (c2) => {
                        fotopega = true;
                        if (c2 === 1) {
                            leufoto = true;
                            // Suprime o pop-up de sanidade para combinar
                            alterarSanidade(-10, false); 
                            
                            if (checkGameOver()) return;

                            showModal("A foto diz: 'VOCÊ NÃO DEVERIA TER VINDO AQUI'.\nSua sanidade caiu para {cyan-fg}" + valorsanidade + "%{/}.\nVocê chega em uma bifurcação.", () => transitionTo('floresta4'));
                        } else if (c2 === 2) {
                            leufoto = false;
                            showModal('Você ignora a foto e continua.\nVocê chega em uma bifurcação.', () => transitionTo('floresta4'));
                        } else {
                            showModal('Opção Inválida!', () => transitionTo('floresta3', 0));
                        }
                    });
                } else {
                    showModal('Você não pode escavar, porque você não tem uma pá!', () => transitionTo('floresta3', 0));
                }
            } else if (c === 2) { // Ignorar
                showModal('Você ignora o objeto e continua.\nVocê chega em uma bifurcação.', () => transitionTo('floresta4'));
            } else {
                showModal('Opção Inválida!', () => transitionTo('floresta3', 0));
            }
        });
        return;
    } else if (choice === 2) { // SUL (Morte)
        S = true;
        const choicesLobo = [
            { text: 'Correr', action: 1 },
            { text: 'Se esconder', action: 2 }
        ];
        
        displayScene("{center}Você vai pelo caminho do Sul...\nVocê encontra um lobo{/center}", choicesLobo, (c) => {
            if (c === 1) {
                endGame('Você corre, mas o lobo é mais rápido e te mata!');
            } else if (c === 2) {
                endGame('Você se esconde na caverna do lobo, e ele te mata!');
            } else {
                showModal('Opção Inválida!', () => transitionTo('floresta3', 0));
            }
        });
        return;
    } else if (choice === 3) { // OESTE (Morte)
        O = true;
        endGame('Você decide ir pelo Oeste, cai dentro do rio e morre afogado!');
        return;
    } else if (choice === 4) {
        inventarioScene();
        return;
    } else if (choice === 5) {
        showModal(`VIDA: {green-fg}${Vida}%{/}\nSANIDADE: {cyan-fg}${valorsanidade}%{/}`, () => transitionTo('floresta3'));
        return;
    }

    displayScene(currentText, choices, (c) => transitionTo('floresta3', c));
}

function sceneFloresta4(choice) {
    // 1. Texto Narrativo
    let text = "{center}===========================================================================\n";
    text += "A lua pálida sorri para você\n";
    text += "A sua frente existem caminhos, ao NORTE e SUL\n";
    text += "==========================================================================={/center}";
    
    let currentText = text; // Definição de currentText aqui

    const choices = [
        { text: `Ir para NORTE (Estrada)`, action: 1 },
        { text: `Ir para SUL (Casa)`, action: 2 },
        { text: `INVENTÁRIO`, action: 3, special: true },
        { text: `VER STATUS`, action: 4, special: true }
    ];

    if (choice === 1) { // NORTE (Carro - ENDINGS RUINS/BONS)
        N = true;
        const choicesCarro = [
            { text: 'Tentar ligar o carro', action: 1 },
            { text: 'Ignorar o carro', action: 2 },
            { text: 'Sair andando pela estrada (MORTE)', action: 3 }
        ];

        displayScene("{center}Você encontra um carro encostado na beira de uma estrada.{/center}", choicesCarro, (c) => {
            if (c === 1) { // Ligar o carro
                const choicesCarroFinal = [
                    { text: 'Ir embora (Final)', action: 1 },
                    { text: 'Voltar para o caminho', action: 2 }
                ];
                
                displayScene("{center}Você consegue ligar o carro. Ir embora?{/center}", choicesCarroFinal, (c2) => {
                    if (c2 === 1) { // Ir embora
                        if (fotopega && leufoto) {
                            GOOD_ENDING = true;
                            endGame('Você chama a polícia (GOOD ENDING)');
                        } else if (fotopega && !leufoto) {
                            BAD_ENDING_2 = true;
                            endGame('Você ignora a foto (BAD ENDING 2)');
                        } else {
                            BAD_ENDING_3 = true;
                            endGame('Você vai embora sem pensar (BAD ENDING 3)');
                        }
                    } else if (c2 === 2) {
                        showModal('Você resolve voltar.', () => transitionTo('floresta4', 0));
                    } else {
                        showModal('Opção Inválida!', () => transitionTo('floresta4', 0));
                    }
                });
            } else if (c === 2) { // Ignorar o carro
                showModal('Você ignora o carro e precisa voltar para a bifurcação.', () => transitionTo('floresta4', 0));
            } else if (c === 3) { // Andar (Morte)
                endGame('Você é atropelado por um carro sem farol. Você Morreu!');
            } else {
                showModal('Opção Inválida!', () => transitionTo('floresta4', 0));
            }
        });
        return;
    } else if (choice === 2) { // SUL (Casa - REAL/SECRET ENDING)
        S = true;
        const choicesCasa = [
            { text: 'Entrar na casa', action: 1 },
            { text: 'Ignorar a casa e seguir o caminho', action: 2 }
        ]

        displayScene("{center}Você encontra uma casa que parece normal.{/center}", choicesCasa, (c) => {
            if (c === 1) { // Entrar na casa
                const choicesMapa = [
                    { text: 'Seguir mapa', action: 1 },
                    { text: 'Não seguir o mapa (MORTE)', action: 2 }
                ];

                displayScene("{center}Você encontra um bilhete com um mapa rudimentar desenhado com setas.{/center}", choicesMapa, (c2) => {
                    if (c2 === 1) { // Seguir mapa
                        const choicesCavar = [
                            { text: 'Escavar em busca de algo', action: 1 },
                            { text: 'Não escavar (MORTE)', action: 2 }
                        ];

                        displayScene("{center}Você segue o mapa. No 'X' marcado, o chão soa oco. O que fazer?{/center}", choicesCavar, (c3) => {
                            if (c3 === 1) { // Escavar
                                if (destruir) {
                                    SECRET_ENDING = true;
                                    endGame("O corpo da criança levanta: 'VOCÊ DESTRUIU MEU PERGUMINHO...' (FINAL SECRETO)");
                                } else {
                                    REAL_ENDING = true;
                                    endGame("Você encontra o corpo de uma criança e a coordenada '—— 40.24248 —— -121.4434 ——' (FINAL REAL)");
                                }
                            } else if (c3 === 2) { // Não escavar (Morte)
                                endGame('Você decide não cavar. Uma figura o ataca e o mata.');
                            } else {
                                showModal('Opção Inválida!', () => transitionTo('floresta4', 0));
                            }
                        });
                    } else if (c2 === 2) { // Não seguir o mapa (Morte)
                        endGame('Você ignora o mapa. O dono volta e o mata.');
                    } else {
                        showModal('Opção Inválida!', () => transitionTo('floresta4', 0));
                    }
                });
            } else if (c === 2) { // Ignorar a casa
                if (!casafora) {
                    casafora = true;
                    showModal('Você ignora a casa. O caminho o leva em círculos. Você precisa voltar.', () => transitionTo('floresta4', 0));
                } else {
                    showModal('Você já tentou fazer isso, o caminho está te levando em círculos.', () => transitionTo('floresta4', 0));
                }
            } else {
                showModal('Opção Inválida!', () => transitionTo('floresta4', 0));
            }
        });
        return;
    } else if (choice === 3) {
        inventarioScene();
        return;
    } else if (choice === 4) {
        showModal(`VIDA: {green-fg}${Vida}%{/}\nSANIDADE: {cyan-fg}${valorsanidade}%{/}`, () => transitionTo('floresta4'));
        return;
    }

    displayScene(currentText, choices, (c) => transitionTo('floresta4', c));
}

function endGame(message) {
    let finalType = 'NORMAL ENDING';
    let achievementFilename = '';
    let achievementContent = '';
    
    if (BAD_ENDING) {
        finalType = 'BAD ENDING';
        achievementFilename = 'BAD_ENDING.bin';
        achievementContent = 'VOCÊ COMPLETOU O PRIMEIRO FINAL RUIM';
    } else if (GOOD_ENDING) {
        finalType = 'GOOD ENDING';
        achievementFilename = 'GOOD_ENDING.bin';
        achievementContent = 'VOCÊ COMPLETOU O FINAL BOM';
    } else if (REAL_ENDING) {
        finalType = 'REAL ENDING';
        achievementFilename = 'REAL_ENDING.bin';
        achievementContent = 'VOCÊ COMPLETOU O FINAL REAL';
    } else if (SECRET_ENDING) {
        finalType = 'SECRET ENDING';
        achievementFilename = 'SECRET_ENDING.bin';
        achievementContent = 'VOCÊ COMPLETOU O FINAL SECRETO';
    } else if (BAD_ENDING_2) {
        finalType = 'BAD ENDING 2';
        achievementFilename = 'BAD_ENDING_2.bin';
        achievementContent = 'VOCÊ COMPLETOU O SEGUNDO FINAL RUIM';
    } else if (BAD_ENDING_3) {
        finalType = 'BAD ENDING 3';
        achievementFilename = 'BAD_ENDING_3.bin';
        achievementContent = 'VOCÊ COMPLETOU O TERCEIRO FINAL RUIM';
    }

    // 1. Salva a Conquista (se houver)
    if (achievementFilename) {
        saveAchievement(achievementFilename, achievementContent);
    }

    // Exibe o Final na Tela, incluindo a Arte ASCII
    let content = renderAscii(ASCII_GAMEOVER);
    content += `\n\n{center}=========================================\n\n{red-fg}FIM DE JOGO{/}\n\n${message}\n\nFINAL CONCLUÍDO: [{yellow-fg}${finalType}{/}]\n\n========================================={/center}`;
    
    textBox.setContent(content);
    choiceBox.setItems(['{yellow-fg}[1]{/yellow-fg} Fechar o jogo']);
    choiceBox.removeAllListeners('select');
    choiceBox.on('select', () => process.exit(0));
    choiceBox.focus();
    screen.render();
}

// --- Início do Jogo ---

showModal('Bem-vindo a ECOS DA NOITE. Pressione ENTER para começar.\n\n[DICA]: Use as setas do teclado para navegar nas opções.', () => {
    updateStatus();
    transitionTo('salaInicial');
});