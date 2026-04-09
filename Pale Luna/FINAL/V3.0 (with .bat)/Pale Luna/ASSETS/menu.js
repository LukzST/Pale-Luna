// menu.js - Versão Unificada (Baseada no modelo LIGHT)
// Com sistema de reinicialização via executável para troca de idioma

const { exec, execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const blessed = require('blessed');
const { t, setLanguage, getLanguage } = require('./translate.js');

// ===================== CONFIGURAÇÃO DO EXECUTÁVEL =====================
// ⚠️ ALTERE AQUI para o nome do seu executável
const EXE_NAME = 'PaleLuna.exe';  // ou 'EcosDaNoite.exe', 'PaleLunaClassic.exe', etc.

// ===================== CONSTANTES DE CAMINHO =====================
const BASE_DIR = path.resolve(__dirname, '..');
const ACCOUNT_DIR = path.join(BASE_DIR, 'ACT');
const ACH_FOLDER = path.join(BASE_DIR, 'ACHIEVEMENTS');
const CONFIG_DIR = path.join(BASE_DIR, 'CONFIG');
const ACCOUNT_FILE = path.join(ACCOUNT_DIR, 'AccountInfo.txt');
const ACH_SAVE_FILE = path.join(ACCOUNT_DIR, 'Achievementsavefile.bin');
const ASSETS_DIR = path.join(BASE_DIR, 'assets');
const ET_FILE = path.join(ASSETS_DIR, 'ET.txt');
const MUSIC_PATH = path.join(ASSETS_DIR, 'audios', 'You_Cant_Escape.mp3');
const VLC_EXE = path.join(ASSETS_DIR, 'audios', 'VLC', 'vlc.exe');

// Caminho completo para o executável
const EXE_PATH = path.join(BASE_DIR, EXE_NAME);

// ===================== GARANTIR ESTRUTURA DE PASTAS =====================
function ensureDir(dirPath) {
    try {
        if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
    } catch (e) {
        console.error(`Failed to ensure directory ${dirPath}: ${e.message}`);
    }
}

ensureDir(ACCOUNT_DIR);
ensureDir(ACH_FOLDER);
ensureDir(CONFIG_DIR);
ensureDir(path.join(ASSETS_DIR, 'audios'));

// ===================== VARIÁVEIS DE ESTADO =====================
let screen = null;
let logoBox = null;
let menuList = null;
let contentBox = null;
let footer = null;
let pauseBox = null;
let splashScreenBox = null;
let accountForm = null;

let currentMenu = 'main';
let tocando = false;
let paused = false;

// ===================== LOGOS =====================
const PALE_LUNA_LOGO = '\x1b[0m\n' +
    '██████╗  █████╗ ██╗     ███████╗\n' +
    '██╔══██╗██╔══██╗██║     ██╔════╝\n' +
    '██████╔╝███████║██║     █████╗\n' +
    '██╔═══╝ ██╔══██║██║     ██╔══╝\n' +
    '██║     ██║  ██║███████╗███████╗\n' +
    '╚═╝     ╚═╝  ╚═╝╚══════╝╚══════╝\n' +
    '██╗     ██╗   ██╗███╗   ██╗ █████╗\n' +
    '██║     ██║   ██║████╗  ██║██╔══██╗\n' +
    '██║     ██║   ██║██╔██╗ ██║███████║\n' +
    '██║     ██║   ██║██║╚██╗██║██╔══██║\n' +
    '███████╗╚██████╔╝██║ ╚████║██║  ██║\n' +
    '╚══════╝ ╚═════╝ ╚═╝  ╚═══╝╚═╝  ╚═╝';

const PALE_LUNA_LOGO_ASCII = 
`{bold}
██████   █████  ██      ███████     ██      ██   ██ ███    ██  █████ 
██   ██ ██   ██ ██      ██          ██      ██   ██ ████   ██ ██   ██
██████  ███████ ██      █████       ██      ██   ██ ██ ██  ██ ███████
██      ██   ██ ██      ██          ██      ██   ██ ██  ██ ██ ██   ██
██      ██   ██ ███████ ███████     ███████  █████  ██   ████ ██   ██
{/bold}`;

const STUDIO_LOGO = 
`{center}{bold}{cyan-fg}
PALE LUNA DEV
{/cyan-fg}{/bold}{/center}
{center}{yellow-fg}P R E S E N T S{/yellow-fg}{/center}`;

// ===================== MENUS =====================
const mainMenuItems = () => [
    t('MENU_START'), t('MENU_RESTART'), t('MENU_ACHIEVEMENTS'), t('MENU_SETTINGS'),
    t('MENU_CREDITS'), t('MENU_SUPPORT'), t('MENU_EXIT')
];

const settingsMenuItems = () => [
    t('SETTINGS_AUDIO'), t('SETTINGS_ACCOUNT'), t('SETTINGS_RESTORE'),
    t('SETTINGS_EASTER'), t('SETTINGS_LANGUAGE'), t('SETTINGS_BACK')
];

const musicOptionItems = () => [
    t('AUDIO_ACTIVATE'), t('AUDIO_DEACTIVATE'), t('AUDIO_BACK')
];

const overwriteOptionItems = () => [
    t('ACCOUNT_OVERWRITE_YES'), t('ACCOUNT_OVERWRITE_NO')
];

const easterEggsMenuItems = () => [
    t('EASTER_ACTIVATE'), t('EASTER_DEACTIVATE'), t('EASTER_BACK')
];

const restoreMenuItems = () => [
    t('RESTORE_YES'), t('RESTORE_NO'), t('RESTORE_CHECK')
];

const supportMenuItems = () => [
    t('SUPPORT_YES'), t('SUPPORT_NO')
];

const languageMenuItems = () => [
    t('LANGUAGE_PT'), t('LANGUAGE_EN'), t('LANGUAGE_BACK')
];

const menuConfig = {
    'main': { items: mainMenuItems, label: 'MENU PRINCIPAL' },
    'settings': { items: settingsMenuItems, label: 'CONFIGURAÇÕES' },
    'music': { items: musicOptionItems, label: 'TRILHA SONORA' },
    'overwrite': { items: overwriteOptionItems, label: 'SOBRESCREVER CONTA' },
    'easterEggs': { items: easterEggsMenuItems, label: 'EASTER EGGS' },
    'restore': { items: restoreMenuItems, label: 'RESTAURAR FINAIS' },
    'support': { items: supportMenuItems, label: 'APOIE O JOGO' },
    'language': { items: languageMenuItems, label: 'IDIOMA' }
};

// ===================== FUNÇÃO DE REINICIALIZAÇÃO (ESTILO LIGHT) =====================
function restartApplication() {
    // Mata o processo VLC se estiver tocando
    if (tocando) {
        try { execSync('taskkill /IM vlc.exe /F'); } catch (e) {}
    }
    
    // Verifica se o executável existe
    if (fs.existsSync(EXE_PATH)) {
        // Usa spawn para iniciar o executável de forma desanexada
        const child = spawn(EXE_PATH, [], {
            stdio: 'ignore',
            detached: true,
            windowsHide: false
        });
        child.unref();
    } else {
        // Fallback: tenta iniciar via node menu.js
        console.error(`Executável não encontrado: ${EXE_PATH}`);
        const child = spawn('node', [path.join(__dirname, 'menu.js')], {
            stdio: 'ignore',
            detached: true,
            windowsHide: false
        });
        child.unref();
    }
    
    // Destrói a tela e encerra o processo atual
    if (screen) {
        screen.destroy();
    }
    process.exit(0);
}

// ===================== SISTEMA ANTI-CHEAT (PRESERVADO) =====================
function conquistaannoying(fileName) {
    const fullPath = path.join(ACH_FOLDER, fileName);
    try { return fs.existsSync(fullPath); } catch (e) { return false; }
}

function lerNumeroDoArquivo(relativeFileName) {
    const fullPath = path.join(BASE_DIR, relativeFileName);
    try {
        if (!fs.existsSync(fullPath)) return 0;
        const fileContent = fs.readFileSync(fullPath, 'utf8');
        const readNumber = parseInt(fileContent.trim(), 10);
        return isNaN(readNumber) ? 0 : readNumber;
    } catch (error) {
        return 0;
    }
}

const ARQUIVO_SECRETO = 'SECRET_ENDING.bin';
const ARQUIVO_TRAPACA = 'HAHAHAHAHAHAHA.txt';
let jogadortem = conquistaannoying(ARQUIVO_SECRETO);
const numeroTrap = lerNumeroDoArquivo(ARQUIVO_TRAPACA);

if (numeroTrap === 3) {
    try { exec('start cmd.exe /c goodbye.bat'); } catch (e) {}
    process.exit(0);
} else if (numeroTrap === 2) {
    console.clear();
    console.log('-> Você NUNCA teve controle neste mundo...');
    try { fs.writeFileSync(path.join(BASE_DIR, ARQUIVO_TRAPACA), '3', 'utf8'); } catch(e) {}
    process.exit(0);
} else if (numeroTrap === 1) {
    console.clear();
    try { fs.writeFileSync(path.join(BASE_DIR, ARQUIVO_TRAPACA), '2', 'utf8'); } catch(e) {}
    process.exit(0);
} else if (jogadortem === true) {
    console.clear();
    try { fs.writeFileSync(path.join(BASE_DIR, ARQUIVO_TRAPACA), '1', 'utf8'); } catch(e) {}
    process.exit(0);
}

// ===================== FUNÇÕES BLESSED / UI =====================
function safeDestroyScreen() {
    try {
        if (screen) {
            screen.destroy();
            screen = null;
            logoBox = menuList = contentBox = footer = pauseBox = splashScreenBox = accountForm = null;
        }
    } catch (e) {}
}

function getEnglishLabel(menuName) {
    const labels = {
        'main': 'MAIN MENU',
        'settings': 'SETTINGS',
        'music': 'SOUNDTRACK',
        'overwrite': 'OVERWRITE ACCOUNT',
        'easterEggs': 'EASTER EGGS',
        'restore': 'RESTORE ENDINGS',
        'support': 'SUPPORT',
        'language': 'LANGUAGE'
    };
    return labels[menuName] || menuName.toUpperCase();
}

function startMainMenu() {
    createBlessedScreen(true);
    changeMenu('main');
}

function startFakeLoadingFixed(containerBox) {
    if (containerBox.children.length > 0) {
        containerBox.children.forEach(child => child.destroy());
    }

    const loadingText = blessed.text({
        parent: containerBox,
        top: '70%',
        left: 'center',
        width: 'shrink',
        height: 1,
        content: `{bold}${t('SPLASH_LOADING')}{/bold}`,
        tags: true,
        style: { fg: 'white', bold: true }
    });

    const pixelLoadingBar = blessed.box({
        parent: containerBox,
        top: '73%',
        left: 'center',
        width: 42,
        height: 3,
        content: '',
        style: { fg: 'white', bg: 'black', border: { fg: 'white' } },
        border: { type: 'line' }
    });

    const percentageText = blessed.text({
        parent: containerBox,
        top: '74%',
        left: 'center',
        width: 'shrink',
        height: 1,
        content: '  0%',
        style: { fg: 'white', bold: true }
    });

    percentageText.left = pixelLoadingBar.left + pixelLoadingBar.width + 2;

    const maxTime = 4000;
    const totalSteps = 40;
    const stepInterval = maxTime / totalSteps;
    const progressPerStep = 100 / totalSteps;
    const totalBlocks = 40;
    let currentStep = 0;
    let fakeLoadingInterval = null;

    fakeLoadingInterval = setInterval(() => {
        currentStep++;
        const progress = Math.min(100, Math.floor(currentStep * progressPerStep));
        const filledBlocks = Math.floor(progress / (100 / totalBlocks));
        const emptyBlocks = totalBlocks - filledBlocks;
        const barContent = '█'.repeat(filledBlocks) + ' '.repeat(emptyBlocks);
        pixelLoadingBar.setContent(barContent);
        percentageText.setContent(`${String(progress).padStart(3, ' ')}%`);
        screen.render();

        if (currentStep >= totalSteps) {
            clearInterval(fakeLoadingInterval);
            pixelLoadingBar.setContent('█'.repeat(totalBlocks));
            percentageText.setContent('100%');
            screen.render();

            setTimeout(() => {
                if (containerBox) containerBox.destroy();
                splashScreenBox = null;
                startMainMenu();
            }, stepInterval);
        }
    }, stepInterval);
}

function showSplashScreen() {
    safeDestroyScreen();
    
    screen = blessed.screen({
        smartCSR: true,
        title: 'Pale Luna Classic - Version 5.0'
    });

    splashScreenBox = blessed.box({
        top: 0, left: 0, width: '100%', height: '100%',
        content: STUDIO_LOGO,
        tags: true,
        valign: 'middle',
        style: { fg: 'white', bold: true, bg: 'black' }
    });
    screen.append(splashScreenBox);

    screen.key(['escape', 'q', 'C-c'], function() {
        if (tocando) try { execSync('taskkill /IM vlc.exe /F'); } catch (e) {}
        safeDestroyScreen();
        process.exit(0);
    });

    screen.render();
    
    setTimeout(() => {
        if (!splashScreenBox) return;
        const centeredAsciiLogo = `\n{center}${PALE_LUNA_LOGO_ASCII}{/center}`;
        splashScreenBox.setContent(centeredAsciiLogo);
        splashScreenBox.setLabel('');
        startFakeLoadingFixed(splashScreenBox);
    }, 1000);
}

function createBlessedScreen(isMainMenu = false) {
    if (screen && !isMainMenu) return;

    if (!screen) {
        screen = blessed.screen({
            smartCSR: true,
            title: 'Pale Luna: Echoes Of The Night',
            input: process.stdin,
            terminal: 'xterm-256color'
        });
        
        if (process.stdin.isTTY) {
            process.stdin.setRawMode(true);
            screen.program.key(['up', 'down', 'enter', 'escape'], (ch, key) => {
                screen.emit('keypress', ch, key);
            });
        }
        
        screen.key(['escape', 'q', 'C-c'], function() {
            if (tocando) try { execSync('taskkill /IM vlc.exe /F'); } catch (e) {}
            safeDestroyScreen();
            process.exit(0);
        });
    }
    
    logoBox = blessed.box({
        top: 'top', left: 3, width: '90%', height: 14,
        content: PALE_LUNA_LOGO,
        tags: true,
        style: { fg: 'white', bold: true }
    });
    screen.append(logoBox);

    menuList = blessed.list({
        top: 15, left: 1, width: '30%', height: '100%-16',
        keys: true, mouse: true,
        style: {
            selected: { fg: 'black', bg: 'white' },
            item: { fg: 'white', bg: 'black' },
            border: { fg: 'cyan' }
        },
        border: { type: 'line' },
        label: ' MENU ',
        items: []
    });
    screen.append(menuList);

    contentBox = blessed.box({
        top: 15, left: '32%', width: '67%', height: '90%-16',
        content: t('UI_SELECT_OPTION'),
        tags: true,
        border: { type: 'line' },
        style: { fg: 'white', border: { fg: 'green' } },
        scrollable: true, alwaysScroll: true,
        scrollbar: { ch: ' ', track: { bg: 'gray' }, style: { inverse: true } }
    });
    screen.append(contentBox);

    pauseBox = blessed.box({
        top: 'center', left: 'center', width: '70%', height: '30%',
        hidden: true,
        border: { type: 'line' },
        style: { fg: 'white', bg: '#1a1a1a', border: { fg: 'red' } },
        content: ''
    });
    screen.append(pauseBox);

    footer = blessed.text({
        bottom: 0, left: 0, width: '100%', height: 1,
        content: t('UI_FOOTER'),
        style: { fg: 'yellow', bg: 'black' }
    });
    screen.append(footer);

    menuList.on('select', async (item, index) => {
        if (paused) return;
        menuList.interactive = false;
        try {
            await handleSelection(index);
        } catch (e) {
            blessedPause(`${t('ERROR_CRITICAL_HANDLER')}\n${e.message}`, () => {
                changeMenu(currentMenu);
            });
        } finally {
            if (!paused && !accountForm) {
                menuList.interactive = true;
                try { menuList.focus(); } catch(e) {}
            }
        }
    });

    menuList.focus();
    screen.render();
}

function updateContent(title, content) {
    if (!contentBox) return;
    if (Array.isArray(content)) content = content.join('\n');
    contentBox.setLabel(` ${title} `);
    contentBox.setContent(content);
    if (screen) screen.render();
}

function changeMenu(menuName) {
    currentMenu = menuName;
    if (!menuList) return;
    
    const config = menuConfig[menuName];
    const label = getLanguage() === 'PT' ? config.label : getEnglishLabel(menuName);
    
    menuList.setItems(config.items());
    menuList.setLabel(` ${label} `);
    menuList.select(0);
    
    if (accountForm) {
        accountForm.destroy();
        accountForm = null;
        contentBox.setContent(t('UI_SELECT_OPTION'));
        contentBox.setLabel(` ${label} `);
        contentBox.style.border.fg = 'green';
    }
    
    try { menuList.focus(); } catch (e) {}
    updateContent(label, t('UI_SELECT_OPTION'));
    if (screen) screen.render();
}

function blessedPause(message, callback) {
    paused = true;
    if (menuList) menuList.interactive = false;
    if (accountForm) accountForm.hide();

    const formattedMessage = `\n${t('UI_SYSTEM_ALERT')}\n  \n${message}\n\n${t('UI_PRESS_ANY_KEY')}\n`;
    pauseBox.setLabel(` ${t('UI_ALERT')} `);
    pauseBox.style.border.fg = 'red';
    pauseBox.style.bg = 'black';
    pauseBox.setContent(formattedMessage);
    pauseBox.show();
    pauseBox.focus();
    if (screen) screen.render();

    setTimeout(() => {
        screen.once('keypress', (ch, key) => {
            paused = false;
            pauseBox.hide();
            
            if (accountForm) {
                accountForm.show();
                if (accountForm.children[1]) accountForm.children[1].focus();
            } else if (menuList) {
                menuList.interactive = true;
                try { menuList.focus(); } catch(e) {}
            }

            if (screen) screen.render();
            if (typeof callback === 'function') callback();
        });
    }, 100);
}

// ===================== FUNÇÕES DE AÇÃO =====================
function tocamusic() {
    if (!fs.existsSync(MUSIC_PATH) || !fs.existsSync(VLC_EXE)) {
        blessedPause(t('MUSIC_NOT_FOUND'));
        return;
    }
    const cmd = `"${VLC_EXE}" --play-and-exit --qt-start-minimized "${MUSIC_PATH}"`;
    try {
        exec(`start /min "" ${cmd}`, (err) => {});
    } catch (e) {
        console.error('Failed to start music:', e.message);
    }
}

async function conquistasBlessed() {
    let finais = [];
    try {
        finais = fs.readdirSync(ACH_FOLDER).filter(f => f.endsWith('.bin'));
    } catch (e) {
        updateContent(t('ACHIEVEMENTS_TITLE'), `${t('ACHIEVEMENTS_ERROR')} ${e.message}`);
        if (menuList) menuList.focus();
        return;
    }

    const count = finais.length;
    let content = t('ACHIEVEMENTS_CHECKING');
    if (count > 0) {
        content += `[${count} ${t('ACHIEVEMENTS_FOUND')}]\n${finais.join('\n')}\n\n${t('ACHIEVEMENTS_KEEP')}`;
    } else {
        content += t('ACHIEVEMENTS_NONE');
    }
    updateContent(t('ACHIEVEMENTS_TITLE'), content);
    if (menuList) menuList.focus();
}

function createAccountBlessed(isOverwrite = false) {
    if (accountForm) {
        accountForm.destroy();
        accountForm = null;
    }
    
    contentBox.setContent('');
    contentBox.setLabel(` ${t('SETTINGS_ACCOUNT').toUpperCase()} `);
    contentBox.style.border.fg = 'yellow';
    if (menuList) menuList.interactive = false;
    
    accountForm = blessed.form({
        parent: contentBox,
        keys: true,
        left: 'center',
        top: 'center',
        width: '80%',
        height: '80%',
        content: `\n{center}{bold} ${isOverwrite ? t('ACCOUNT_OVERWRITE_TITLE') : t('ACCOUNT_CREATE')} {/bold}{/center}\n\n`,
        tags: true
    });

    blessed.text({
        parent: accountForm,
        top: 3, left: 2,
        content: `{bold}${t('ACCOUNT_USERNAME')}{/bold}`,
        tags: true
    });
    const usernameInput = blessed.textbox({
        parent: accountForm,
        inputOnFocus: true, mouse: true, keys: true,
        top: 3, left: 19, width: '65%', height: 1,
        style: { fg: 'black', bg: 'white', focus: { bg: 'cyan' } }
    });

    blessed.text({
        parent: accountForm,
        top: 5, left: 2,
        content: `{bold}${t('ACCOUNT_PASSWORD')}{/bold}`,
        tags: true
    });
    const passwordInput = blessed.textbox({
        parent: accountForm,
        inputOnFocus: true, mouse: true, keys: true, censor: true,
        top: 5, left: 19, width: '65%', height: 1,
        style: { fg: 'black', bg: 'white', focus: { bg: 'cyan' } }
    });
    
    const createButton = blessed.button({
        parent: accountForm,
        mouse: true, keys: true, shrink: true,
        padding: { left: 1, right: 1 },
        left: 'center', top: 8,
        content: `{bold}${t('ACCOUNT_CREATE_BTN')}{/bold}`,
        tags: true,
        style: { fg: 'white', bg: 'green', focus: { bg: 'lime', fg: 'black' } }
    });

    const backButton = blessed.button({
        parent: accountForm,
        mouse: true, keys: true, shrink: true,
        padding: { left: 1, right: 1 },
        left: 'center', top: 10,
        content: `{bold}${t('ACCOUNT_CANCEL_BTN')}{/bold}`,
        tags: true,
        style: { fg: 'white', bg: 'red', focus: { bg: 'yellow', fg: 'black' } }
    });

    createButton.on('press', () => {
        const usuario = usernameInput.getValue().trim();
        const senha = passwordInput.getValue();

        if (!usuario || !senha) {
            blessedPause(t('ACCOUNT_ERROR_EMPTY'));
            return;
        }

        const conteudo = `[NOME]: ${usuario}\r\n[SENHA]: ${senha}\r\n[IDIOMA]: ${getLanguage() === 'PT' ? 'Português' : 'English'}\r\n`;
        let resultMessage = '';
        
        try {
            ensureDir(ACCOUNT_DIR);
            fs.writeFileSync(ACCOUNT_FILE, conteudo, 'utf8');

            let finais = [];
            try { finais = fs.readdirSync(ACH_FOLDER).filter(f => f.endsWith('.bin')); } catch (e) {}

            if (finais.length > 0) {
                fs.writeFileSync(ACH_SAVE_FILE, finais.join('\r\n'), 'utf8');
                resultMessage = `${t('ACCOUNT_SUCCESS')}\n${t('ACCOUNT_SUCCESS_ENDINGS')}`;
            } else {
                resultMessage = `${t('ACCOUNT_SUCCESS')}\n${t('ACCOUNT_SUCCESS_NO_ENDINGS')}`;
            }
        } catch (errWrite) {
            resultMessage = `${t('ERROR_ACCOUNT_WRITE')} ${errWrite.message}`;
        }
        
        accountForm.destroy();
        accountForm = null;
        blessedPause(resultMessage, () => changeMenu('settings'));
    });
    
    backButton.on('press', () => {
        accountForm.destroy();
        accountForm = null;
        blessedPause(t('ACCOUNT_CANCELLED'), () => changeMenu('settings'));
    });

    usernameInput.focus();
    screen.render();
}

// ===================== HANDLER DE SELEÇÃO =====================
async function handleSelection(index) {
    if (!menuList) return;
    const itemObj = menuList.getItem(index);
    if (!itemObj) return;
    const selectedItem = (itemObj.getText ? itemObj.getText() : String(itemObj)).trim();

    try {
        // MENU PRINCIPAL
        if (currentMenu === 'main') {
            if (selectedItem === t('MENU_START')) {
                if (tocando) try { execSync('taskkill /IM vlc.exe /F'); } catch(e) {}
                safeDestroyScreen();
                const gameFile = getLanguage() === 'PT' ? 'mainBR.js' : 'mainEN.js';
                try {
                    execSync(`node "${path.join(__dirname, gameFile)}"`, { stdio: 'inherit' });
                } catch (e) {
                    console.error(t('ERROR_START_GAME'), e.message);
                }
                process.exit(0);
            } else if (selectedItem === t('MENU_RESTART')) {
                exec('start cmd.exe /c node eraseData.js', (error) => {
                    const msg = error ? `${t('PROGRESS_ERROR')} ${error.message}]` : t('PROGRESS_SUCCESS');
                    blessedPause(`${t('PROGRESS_RESTARTING')}\n${msg}`);
                });
            } else if (selectedItem === t('MENU_ACHIEVEMENTS')) {
                await conquistasBlessed();
            } else if (selectedItem === t('MENU_SETTINGS')) {
                changeMenu('settings');
            } else if (selectedItem === t('MENU_CREDITS')) {
                updateContent(t('CREDITS_TITLE'), t('CREDITS_CONTENT'));
            } else if (selectedItem === t('MENU_SUPPORT')) {
                changeMenu('support');
                updateContent(t('SUPPORT_TITLE'), t('SUPPORT_CONTENT'));
            } else if (selectedItem === t('MENU_EXIT')) {
                if (tocando) try { execSync('taskkill /IM vlc.exe /F'); } catch(e) {}
                safeDestroyScreen();
                process.exit(0);
            }
        }
        // CONFIGURAÇÕES
        else if (currentMenu === 'settings') {
            if (selectedItem === t('SETTINGS_AUDIO')) {
                changeMenu('music');
            } else if (selectedItem === t('SETTINGS_ACCOUNT')) {
                if (fs.existsSync(ACCOUNT_FILE)) {
                    changeMenu('overwrite');
                    updateContent(t('ACCOUNT_OVERWRITE_TITLE'), t('ACCOUNT_OVERWRITE_MSG'));
                } else {
                    createAccountBlessed(false);
                }
            } else if (selectedItem === t('SETTINGS_RESTORE')) {
                changeMenu('restore');
            } else if (selectedItem === t('SETTINGS_EASTER')) {
                changeMenu('easterEggs');
            } else if (selectedItem === t('SETTINGS_LANGUAGE')) {
                changeMenu('language');
            } else if (selectedItem === t('SETTINGS_BACK')) {
                changeMenu('main');
            }
        }
        // IDIOMA
        else if (currentMenu === 'language') {
            if (selectedItem === t('LANGUAGE_EN')) {
                if (getLanguage() === 'EN') {
                    blessedPause(t('LANGUAGE_ALREADY_EN'), () => changeMenu('settings'));
                    return;
                }
                
                // Salva o novo idioma
                setLanguage('EN');
                
                // Mostra mensagem de reinicialização
                blessedPause(t('LANGUAGE_RESTART_MSG'), () => {
                    restartApplication();
                });
                return;
                
            } else if (selectedItem === t('LANGUAGE_PT')) {
                if (getLanguage() === 'PT') {
                    blessedPause(t('LANGUAGE_ALREADY_PT'), () => changeMenu('settings'));
                    return;
                }
                
                // Salva o novo idioma
                setLanguage('PT');
                
                // Mostra mensagem de reinicialização
                blessedPause(t('LANGUAGE_RESTART_MSG'), () => {
                    restartApplication();
                });
                return;
                
            } else if (selectedItem === t('LANGUAGE_BACK')) {
                changeMenu('settings');
            }
        }
        // MÚSICA
        else if (currentMenu === 'music') {
            let message = '';
            if (selectedItem === t('AUDIO_ACTIVATE')) {
                if (tocando) message = t('MUSIC_ALREADY_PLAYING');
                else { tocamusic(); tocando = true; message = t('MUSIC_STARTED'); }
            } else if (selectedItem === t('AUDIO_DEACTIVATE')) {
                if (tocando) { try { execSync('taskkill /IM vlc.exe /F'); } catch(e){} tocando = false; message = t('MUSIC_STOPPED'); }
                else { message = t('MUSIC_ALREADY_STOPPED'); }
            } else if (selectedItem === t('AUDIO_BACK')) {
                changeMenu('settings');
                return;
            }
            blessedPause(`[TRILHA SONORA]\n${message}`, () => changeMenu('settings'));
        }
        // SOBRESCREVER CONTA
        else if (currentMenu === 'overwrite') {
            if (selectedItem === t('ACCOUNT_OVERWRITE_YES')) {
                createAccountBlessed(true);
            } else {
                blessedPause(t('ACCOUNT_CANCELLED'), () => changeMenu('settings'));
            }
        }
        // EASTER EGGS
        else if (currentMenu === 'easterEggs') {
            let message = '';
            if (selectedItem === t('EASTER_ACTIVATE')) {
                if (fs.existsSync(ET_FILE)) message = t('EASTER_ALREADY_ON');
                else { fs.writeFileSync(ET_FILE, 'Easter Eggs Activated', 'utf8'); message = t('EASTER_ACTIVATED'); }
            } else if (selectedItem === t('EASTER_DEACTIVATE')) {
                if (!fs.existsSync(ET_FILE)) message = t('EASTER_ALREADY_OFF');
                else { fs.unlinkSync(ET_FILE); message = t('EASTER_DEACTIVATED'); }
            } else if (selectedItem === t('EASTER_BACK')) {
                changeMenu('settings');
                return;
            }
            blessedPause(`[EASTER EGGS]\n${message}`, () => changeMenu('settings'));
        }
        // RESTAURAR FINAIS
        else if (currentMenu === 'restore') {
            let message = '';
            let finaisPasta = [];
            try { finaisPasta = fs.readdirSync(ACH_FOLDER).filter(f => f.endsWith('.bin')); } catch (e) {}

            if (selectedItem === t('RESTORE_YES')) {
                if (!fs.existsSync(ACH_SAVE_FILE)) {
                    message = t('RESTORE_NOT_FOUND');
                } else {
                    try {
                        const dados = fs.readFileSync(ACH_SAVE_FILE, 'utf8');
                        const finaisToRestore = dados.split('\n').map(f => f.trim()).filter(f => f.length > 0);
                        const restored = [];
                        finaisToRestore.forEach(final => {
                            const destino = path.join(ACH_FOLDER, final);
                            if (!fs.existsSync(destino)) {
                                fs.writeFileSync(destino, 'a', 'utf8');
                                restored.push(final);
                            }
                        });
                        if (restored.length > 0) message = `${t('RESTORE_SUCCESS')}\n${restored.join('\n')}`;
                        else message = t('RESTORE_ALREADY');
                    } catch (err) {
                        message = `${t('RESTORE_ERROR')} ${err.message}`;
                    }
                }
                blessedPause(`[RESTAURAR FINAIS]\n${message}`, () => changeMenu('settings'));
            } else if (selectedItem === t('RESTORE_NO')) {
                blessedPause(t('RESTORE_CANCELLED'), () => changeMenu('settings'));
            } else if (selectedItem === t('RESTORE_CHECK')) {
                if (finaisPasta.length > 0) {
                    updateContent(t('VERIFY_TITLE'), `${t('VERIFY_FOUND')}\n${finaisPasta.join('\n')}\n\n${t('ACHIEVEMENTS_KEEP')}`);
                } else {
                    updateContent(t('VERIFY_TITLE'), t('VERIFY_NONE'));
                }
                if (menuList) menuList.focus();
            }
        }
        // SUPORTE
        else if (currentMenu === 'support') {
            if (selectedItem === t('SUPPORT_YES')) {
                blessedPause(t('SUPPORT_OPENING'), () => {
                    try { exec('start https://the-last-deploy.itch.io/pale-luna'); } catch (e) {}
                    changeMenu('main');
                });
            } else {
                blessedPause(t('SUPPORT_DECLINED'), () => changeMenu('main'));
            }
        }
    } catch (error) {
        blessedPause(`${t('ERROR_CRITICAL_ACTION')}\n${error.message}`, () => changeMenu('main'));
    }
}

// ===================== INICIALIZAÇÃO =====================
showSplashScreen();