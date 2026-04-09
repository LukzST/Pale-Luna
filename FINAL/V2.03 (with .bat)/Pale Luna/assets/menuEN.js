const readline = require('readline');
const { exec, execSync, spawn } = require('child_process');
const prompt = require('prompt-sync')();
const folderPath = '../Achievements';
const fs = require('fs');
const path = require('path');
const couaaant1a = fs.existsSync('../assets/ET.txt');


function checkAchievement(fileName){
    const achievementsFolder = '../Achievements'
    const fullPath = path.join(achievementsFolder, fileName)

    return fs.existsSync(fullPath)
}

const secretAchievementFile = 'SECRET_ENDING.bin'
let playerHasSecretEnding = false


if(checkAchievement(secretAchievementFile)){
    playerHasSecretEnding = true
} else {

}

function readNumberFromFile(fileName) {
    const filesFolder = '../'; 
    const fullPath = path.join(filesFolder, fileName);
  
    try {
      const fileContent = fs.readFileSync(fullPath, 'utf8');
      
      const readNumber = parseInt(fileContent.trim(), 10); 
  
      if (isNaN(readNumber)) {
        return 0; 
      }
  
      return readNumber;
      
    } catch (error) {
      return 0; 
    }
  }

  const number = readNumberFromFile('HAHAHAHAHAHAHA.txt')

  if(number == 3){
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
    
    process.exit()
} else if (number == 2){
console.clear()
console.log ("===========================================================================")
console.log ("-> I guess you didn't understand, did you?")
console.log ("-> You NEVER had control in this world...")
console.log ("-> And now I'll show you how things are around here!")
console.log ("===========================================================================")
const content10002 = "3";
    fs.writeFileSync('../HAHAHAHAHAHAHA.txt', content10002, 'utf8');
    process.exit()
} else if (number == 1) {
console.clear()
console.log ("===========================================================================")
console.log ("-> Do you really think that after what you did I will leave you alone???")
console.log ("===========================================================================")
    const content10001 = "2";
    fs.writeFileSync('../HAHAHAHAHAHAHA.txt', content10001, 'utf8');
    process.exit()
} else if (playerHasSecretEnding == true) {
    console.clear()
    console.log ("===========================================================================")
    console.log ("-> Seriously? Do you really think you just close and open the game?")
    console.log ("===========================================================================")
    if (playerHasSecretEnding == true){
        const content1000 = "1";
        fs.writeFileSync('../HAHAHAHAHAHAHA.txt', content1000, 'utf8');
    }
    process.exit()
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let currentMenu = 'main';
let selectedIndex = 0;
let portugues = true; // Assume Portuguese as default language - Keeping this variable name for minimal change
let english = false;
let menu = true;

function centerText(text) {
    const terminalWidth = process.stdout.columns;
    const padding = Math.max(0, Math.floor((terminalWidth - text.length) / 2));
    console.log(' '.repeat(padding) + text);
}

function invalidOption() {
    console.clear();
    centerText("===========================================================================");
    centerText("[ERROR: INVALID OPTION]");
    centerText("===========================================================================");
    centerText("[PRESS ANY KEY TO GO BACK]");
    centerText("===========================================================================");
    process.stdin.once('data', () => {
        drawMenu(mainMenuItems);
    });
}

let skip11111 = false;
let lang1 = true; // Assume selected language is true for BR menu - Keeping this variable name for minimal change
let config2 = false;
let FN = false;
let lang = 1; // 1 for Portuguese - Keeping this variable name for minimal change
let isPlaying = false;
const accountFilePath = '../Account/AccountInfo.txt';
const save_conquistas = '../Account/Achievementsavefile.bin'; // Keeping original variable name for path
let Login;
let overwrite = "S";
let skipaccount = false;
let check = false;
const achievementsExist = fs.existsSync(save_conquistas);
const count = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin')).length;
const endings = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin'));
const accountExists = fs.existsSync(accountFilePath);
let ET = false;

// New menus for account and soundtrack options
const accountOptionItems = [
    'Create Account',
    'Skip',
    'Back to settings'
];

const overwriteOptionItems = [
    'Yes',
    'No'
];

const musicOptionItems = [
    'Yes',
    'No'
];

async function showAccountMenu() {
    currentMenu = 'account';
    selectedIndex = 0;
    drawAccountMenu();
}

function playMusic() {
    const command = `start /min "" "./audios/VLC/vlc.exe" --play-and-exit --qt-start-minimized "./audios/You_Cant_Escape.mp3"`;
// remember that "" is the cmd title
    exec(`cmd.exe /c "${command}"`, (error, stdout, stderr) => {
        // action to suppress any messages in the console.
    });
}

function drawAccountMenu() {
    console.clear();
    centerText("███████████████████████████████████████████████████████████████████");
    centerText("██                                                               ██");
    centerText("██                           ██████                              ██");
    centerText("██                         ██████████                            ██");
    centerText("██                        ████████████                           ██");
    centerText("██                        ████████████                           ██");
    centerText("██                         ██████████                            ██");
    centerText("██                           ██████                              ██");
    centerText("██                          ████████                             ██");
    centerText("██                      ███████████████                          ██");
    centerText("██                      ███████████████                          ██");
    centerText("██                                                               ██");
    centerText("███████████████████████████████████████████████████████████████████");
    centerText("");
    centerText("===========================================================================");
    centerText("[DO YOU WANT TO CREATE A LOCAL ACCOUNT?]");
    centerText("===========================================================================");
    accountOptionItems.forEach((item, index) => {
        centerText(index === selectedIndex ? `[> ${item} <]` : `  ${item}`);
    });
    centerText("===========================================================================");
}

async function showMusicMenu() {
    currentMenu = 'music';
    selectedIndex = 0;
    drawMusicMenu();
}

function drawMusicMenu() {
    console.clear();
    centerText("███████████████████████████████████████████████████████████████████");
    centerText("██                                                               ██");
    centerText("██                              ███                              ██");
    centerText("██                              ███████                          ██");
    centerText("██                              ███   ███                        ██");
    centerText("██                              ███                              ██");
    centerText("██                              ███                              ██");
    centerText("██                         ████████                              ██");
    centerText("██                        █████████                              ██");
    centerText("██                         ████████                              ██");
    centerText("██                                                               ██");
    centerText("██                                                               ██");
    centerText("███████████████████████████████████████████████████████████████████");
    centerText("");
    centerText("===========================================================================");
    centerText("[ACTIVATE SOUNDTRACK]");
    centerText("===========================================================================");
    musicOptionItems.forEach((item, index) => {
        centerText(index === selectedIndex ? `[> ${item} <]` : `  ${item}`);
    });
    centerText("===========================================================================");
}

async function handleAccountSelection() {
    if (selectedIndex === 0) { // Create Account
        if (fs.existsSync(accountFilePath)) {
            currentMenu = 'overwrite';
            selectedIndex = 0;
            drawOverwriteMenu();
        } else {
            await createAccount();
            settingsMenu();
        }
    } else if (selectedIndex === 1) { // Skip
        centerText("[ACCOUNT CREATION SKIPPED]");
        await pauseToContinue();
        settingsMenu();
    } else if (selectedIndex === 2) { // Back
        settingsMenu();
    }
}

async function handleOverwriteSelection() {
    if (selectedIndex === 0) { // Yes
        await createAccount();
        settingsMenu();
    } else { // No
        centerText("[ACCOUNT CREATION SKIPPED]");
        await pauseToContinue();
        settingsMenu();
    }
}

async function handleMusicSelection() {
    if (selectedIndex === 0) { // Yes
        if (isPlaying) {
            centerText("[MUSIC IS ALREADY PLAYING]");
            await pauseToContinue();
        } else {
            console.clear()
    centerText("███████████████████████████████████████████████████████████████████");
    centerText("██                                                               ██");
    centerText("██                              ███                              ██");
    centerText("██                              ███████                          ██");
    centerText("██                              ███   ███                        ██");
    centerText("██                              ███                              ██");
    centerText("██                              ███                              ██");
    centerText("██                         ████████                              ██");
    centerText("██                        █████████                              ██");
    centerText("██                         ████████                              ██");
    centerText("██                                                               ██");
    centerText("██                                                               ██");
    centerText("███████████████████████████████████████████████████████████████████");
    centerText("");
            centerText("===========================================================================")
            centerText("[SOUNDTRACK STARTED]")
            playMusic()
            isPlaying = true;
            await pauseToContinue();
        }
        settingsMenu();
    } else { // No
        if (isPlaying) {
            exec('taskkill /IM vlc.exe /F');
            centerText("[MUSIC STOPPED]");
            isPlaying = false;
            await pauseToContinue();
        }
        settingsMenu();
    }
}

async function createAccount() {
    console.clear();
    centerText("███████████████████████████████████████████████████████████████████");
    centerText("██                                                               ██");
    centerText("██                           ██████                              ██");
    centerText("██                         ██████████                            ██");
    centerText("██                        ████████████                           ██");
    centerText("██                        ████████████                           ██");
    centerText("██                         ██████████                            ██");
    centerText("██                           ██████                              ██");
    centerText("██                          ████████                             ██");
    centerText("██                      ███████████████                          ██");
    centerText("██                      ███████████████                          ██");
    centerText("██                                                               ██");
    centerText("███████████████████████████████████████████████████████████████████");
    centerText("");
    centerText("===========================================================================");
    const Username = prompt("[USERNAME]: ");
    const Password = prompt("[PASSWORD]: ");
    centerText("===========================================================================");
    const content = `[NAME]: ${Username}\r\n[PASSWORD]: ${Password}\r\n[LANGUAGE]: Portuguese \r\n`;
    fs.writeFileSync(accountFilePath, content, 'utf8');

    const hasEndings = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin')).length > 0;
    if (hasEndings) {
        fs.writeFileSync(save_conquistas, endings.join('\r\n'), 'utf8');
        centerText("[SYSTEM]: Account created successfully! Your endings are saved.");
    } else {
        centerText("[SYSTEM]: Account created successfully! You do not have any endings yet.");
    }
    await pauseToContinue();
}

function drawOverwriteMenu() {
    console.clear();
    centerText("███████████████████████████████████████████████████████████████████");
    centerText("██                                                               ██");
    centerText("██                           ██████                              ██");
    centerText("██                       █████   ██████                          ██");
    centerText("██                      ████        ██████                       ██");
    centerText("██                                 ██████                        ██");
    centerText("██                               ██████                          ██");
    centerText("██                             ██████                            ██");
    centerText("██                           ██████                              ██");
    centerText("██                                                               ██");
    centerText("██                           ██████                              ██");
    centerText("██                           ██████                              ██");
    centerText("██                                                               ██");
    centerText("███████████████████████████████████████████████████████████████████");
    centerText("");
    centerText("===========================================================================");
    centerText("[THERE IS A SAVE FILE, DO YOU WANT TO OVERWRITE IT?]");
    centerText("===========================================================================");
    overwriteOptionItems.forEach((item, index) => {
        centerText(index === selectedIndex ? `[> ${item} <]` : `  ${item}`);
    });
    centerText("===========================================================================");
}

const mainMenuItems = [
    'START GAME',
    'RESET PROGRESS',
    'ACHIEVEMENTS',
    'SETTINGS',
    'CREDITS',
    'SUPPORT',
    'EXIT'
];

const settingsMenuItems = [
    'Soundtrack',
    'Account Creation',
    'Restore Endings',
    'Include Easter Eggs',
    'Back to main menu'
];

const easterEggsMenuItems = [
    'Activate Easter Eggs',
    'Deactivate Easter Eggs',
    'Back to settings menu'
];

const restoreMenuItems = [
    'Yes',
    'No',
    'Check Folder'
];

const supportMenuItems = [
    'Yes',
    'No'
];

function drawMenu(menuItems) {
    console.clear();
    const logoLines = [
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
    ];

    const maxLineWidth = Math.max(...logoLines.map(line => line.length));
    const terminalWidth = process.stdout.columns;
    const padding = Math.max(0, Math.floor((terminalWidth - maxLineWidth) / 2));
    const paddedLogo = logoLines.map(line => ' '.repeat(padding) + line);
    paddedLogo.forEach(line => console.log(line));
    centerText(" ");

    menuItems.forEach((item, index) => {
        const itemPadding = Math.max(0, Math.floor((terminalWidth - item.length - 4) / 2));
        const centeredItem = ' '.repeat(itemPadding) + (index === selectedIndex ? `[> ${item} <]` : `  ${item}`);
        console.log(centeredItem);
    });
    centerText('');
    centerText('Use up/down arrows to navigate, Enter to select.');
}

function settingsMenu() {
    currentMenu = 'settings';
    selectedIndex = 0;
    process.stdin.setRawMode(true);
    process.stdin.resume();
    drawSettingsMenu();
}

function drawSettingsMenu() {
    console.clear();
    centerText("===========================================================================");
    centerText("[SETTINGS]");
    centerText("===========================================================================");
    settingsMenuItems.forEach((item, index) => {
        centerText(index === selectedIndex ? `[> ${item} <]` : `  ${item}`);
    });
    centerText("===========================================================================");
}

function easterEggsMenu() {
    currentMenu = 'easterEggs';
    selectedIndex = 0;
    process.stdin.setRawMode(true);
    process.stdin.resume();
    drawEasterEggsMenu();
}

function drawEasterEggsMenu() {
    console.clear();
    centerText("===========================================================================");
    centerText("[EASTER EGGS]");
    centerText("===========================================================================");
    easterEggsMenuItems.forEach((item, index) => {
        centerText(index === selectedIndex ? `[> ${item} <]` : `  ${item}`);
    });
    centerText("===========================================================================");
}

function restoreMenu() {
    currentMenu = 'restore';
    selectedIndex = 0;
    process.stdin.setRawMode(true);
    process.stdin.resume();
    drawRestoreMenu();
}

function drawRestoreMenu() {
    console.clear();
    centerText("===========================================================================");
    centerText("[DO YOU WANT TO RESTORE?]");
    centerText("===========================================================================");
    restoreMenuItems.forEach((item, index) => {
        centerText(index === selectedIndex ? `[> ${item} <]` : `  ${item}`);
    });
    centerText("===========================================================================");
}

function supportMenu() {
    currentMenu = 'support';
    selectedIndex = 0;
    process.stdin.setRawMode(true);
    process.stdin.resume();
    drawSupportMenu();
}

function drawSupportMenu() {
    console.clear();
    centerText("===========================================================================");
    centerText("[SUPPORT THE GAME]");
    centerText("===========================================================================");
    centerText("-> If you want to support the game's development, you can make a donation,");
    centerText("any amount is welcome and helps a lot with the game's development!");
    centerText("-> You can also leave a review on the game's page!");
    centerText("===========================================================================");
    centerText("-> Donation link: https://massivestudios.itch.io/pale-luna");
    centerText("===========================================================================");
    centerText("[OPEN?]");
    centerText("===========================================================================");
    supportMenuItems.forEach((item, index) => {
        centerText(index === selectedIndex ? `[> ${item} <]` : `  ${item}`);
    });
    centerText("===========================================================================");
}


async function pauseToContinue() {
    centerText("===========================================================================");
    centerText("[PRESS ANY KEY TO CONTINUE]");
    centerText("===========================================================================");
    return new Promise(resolve => {
        process.stdin.once('data', () => {
            console.clear();
            resolve();
        });
    });
}

async function achievements() {
    const count = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin')).length;
    const endings = fs.readdirSync(folderPath).filter(f => f.endsWith('.bin'));
    console.clear();
    centerText("███████████████████████████████████████████████████████████████████");
    centerText("██                                                               ██");
    centerText("██                              ██████                           ██");
    centerText("██                            ██      ██                         ██");
    centerText("██                          ██          ██                       ██");
    centerText("██                          ██          ██                       ██");
    centerText("██                            ██      ██                         ██");
    centerText("██                          ██  ██████                           ██");
    centerText("██                        ██                                     ██");
    centerText("██                      ██                                       ██");
    centerText("██                                                               ██");
    centerText("███████████████████████████████████████████████████████████████████");
    centerText("");
    centerText("===========================================================================");
    centerText("[CHECKING FOLDERS]");

    if (count > 0) {
        centerText("===========================================================================");
        centerText("[FILES FOUND]");
        centerText(endings);
        centerText("===========================================================================");
        centerText("-> If you want to keep these endings, DO NOT RESTORE THEM");
        await pauseToContinue();
    } else {
        centerText("===========================================================================");
        centerText("-> No ending file found!");
        await pauseToContinue();
    }
    drawMenu(mainMenuItems);
}

drawMenu(mainMenuItems);

let gameStarted = false;

process.stdin.on('data', async (chunk) => {
    if (!menu) return;

    const key = chunk.toString('hex');
    const menus = {
        'main': mainMenuItems,
        'settings': settingsMenuItems,
        'easterEggs': easterEggsMenuItems,
        'restore': restoreMenuItems,
        'support': supportMenuItems,
        'account': accountOptionItems,
        'overwrite': overwriteOptionItems,
        'music': musicOptionItems,
    };
    const menuItems = menus[currentMenu];

    if (key === '1b5b41') { // Up Arrow
        selectedIndex = (selectedIndex - 1 + menuItems.length) % menuItems.length;
        drawCurrentMenu();
    } else if (key === '1b5b42') { // Down Arrow
        selectedIndex = (selectedIndex + 1) % menuItems.length;
        drawCurrentMenu();
    } else if (key === '0d') { // Enter
        await handleSelection();
    } else if (key === '03') { // Ctrl+C
        rl.close();
        process.exit();
    }
});

function getMenuItems() {
    switch (currentMenu) {
        case 'main': return mainMenuItems;
        case 'settings': return settingsMenuItems;
        case 'easterEggs': return easterEggsMenuItems;
        case 'restore': return restoreMenuItems;
        case 'support': return supportMenuItems;
        case 'account': return accountOptionItems;
        case 'overwrite': return overwriteOptionItems;
        case 'music': return musicOptionItems;
    }
}

function drawCurrentMenu() {
    switch (currentMenu) {
        case 'main': drawMenu(mainMenuItems); break;
        case 'settings': drawSettingsMenu(); break;
        case 'easterEggs': drawEasterEggsMenu(); break;
        case 'restore': drawRestoreMenu(); break;
        case 'support': drawSupportMenu(); break;
        case 'account': drawAccountMenu(); break;
        case 'overwrite': drawOverwriteMenu(); break;
        case 'music': drawMusicMenu(); break;
    }
}

async function handleSelection() {
    console.clear();
    switch (currentMenu) {
        case 'main':
            switch (selectedIndex) {
                case 0: // Start Game
                    process.stdin.setRawMode(false);
                    process.stdin.pause();
                    menu = false;
                    
                    require('./mainEN.js'); // Assuming the main game file remains 'mainBR.js'
                    break;
                case 1: // Reset Progress
                    process.stdin.setRawMode(false);
                    process.stdin.pause();
                    exec('start cmd.exe /c node eraseData.js', async (error) => {
                        if (error) {
                            centerText("===========================================================================");
                            console.error(`[ERROR: FILE FAILED ${error.message}]`);
                        } else {
                            centerText("===========================================================================");
                            centerText('[PROGRESS RESET]');
                        }
                        centerText("===========================================================================");
                        centerText('[PRESS [ENTER] TO RETURN TO THE MENU]');
                        centerText("===========================================================================");
                        prompt('');
                        drawMenu(mainMenuItems);
                        process.stdin.setRawMode(true);
                        process.stdin.resume();
                    });
                    break;
                case 2: // Achievements
                    await achievements();
                    break;
                case 3: // Settings
                    settingsMenu();
                    break;
                case 4: // Credits
                    process.stdin.setRawMode(false);
                    process.stdin.pause();
                    centerText("===========================================================================");
                    centerText("[CREDITS]");
                    centerText("===========================================================================");
                    centerText("[OUR TEAM]");
                    centerText("===========================================================================");
                    centerText("-> Programming: Lucas Eduardo");
                    centerText("-> Beta Testers: Kayc Félix, Isabella Sanches and some friends");
                    centerText("-> Script: Lucas Eduardo");
                    centerText("-> Inspiration: Creepypasta Pale Luna")
                    centerText("-> Arts: Lucas Eduardo");
                    centerText("-> Music: Ryan Creep (Youtube.com)");
                    centerText("-> Special Thanks: Kayc Félix, Isabella Sanches and SENAI Team")
                    centerText("===========================================================================");
                    centerText("-> THANK YOU FOR PLAYING OUR GAME!");
                    centerText("===========================================================================");
                    centerText('[PRESS [ENTER] TO RETURN TO THE MENU]');
                    centerText("===========================================================================");
                    prompt('');
                    drawMenu(mainMenuItems);
                    process.stdin.setRawMode(true);
                    process.stdin.resume();
                    break;
                case 5: // Support
                    supportMenu();
                    break;
                case 6: // Exit
                    rl.close();
                    process.exit();
                    break;
            }
            break;
        case 'settings':
            switch (selectedIndex) {
                case 0: showMusicMenu(); break;
                case 1: showAccountMenu(); break;
                case 2: restoreMenu(); break;
                case 3: easterEggsMenu(); break;
                case 4: currentMenu = 'main'; selectedIndex = 3; drawMenu(mainMenuItems); break;
            }
            break;
        case 'easterEggs':
            switch (selectedIndex) {
                case 0: // Activate
                    const ET1 = fs.existsSync('../assets/ET.txt');
                    if (ET1) {
                        centerText("[EASTER EGGS ARE ALREADY ACTIVATED]");
                    } else {
                        centerText("[EASTER EGGS ACTIVATED!]");
                        fs.writeFileSync('../assets/ET.txt', 'Easter Eggs Activated', 'utf8');
                    }
                    await pauseToContinue();
                    settingsMenu();
                    break;
                case 1: // Deactivate
                    const ET2 = fs.existsSync('../assets/ET.txt');
                    if (!ET2) {
                        centerText("[EASTER EGGS ARE ALREADY DEACTIVATED]");
                    } else {
                        centerText("[EASTER EGGS DEACTIVATED!]");
                        fs.unlinkSync('../assets/ET.txt');
                    }
                    await pauseToContinue();
                    settingsMenu();
                    break;
                case 2: settingsMenu(); break;
            }
            break;
        case 'restore':
            const local_conta = save_conquistas; // Keeping original variable name for path
            const count1 = fs.existsSync(local_conta);
            check = false;
            switch (selectedIndex) {
                case 0: // Yes
                    if (FN) {
                        centerText("[ENDINGS ALREADY RESTORED]");
                        await pauseToContinue();
                    } else if (!count1) {
                        centerText("[ENDINGS FILE NOT FOUND]");
                        await pauseToContinue();
                    } else {
                        try {
                            const data = fs.readFileSync(save_conquistas, 'utf8');
                            centerText("[ENDINGS TO BE RESTORED]");
                            centerText([data]);
                            await pauseToContinue();
                            FN = true;
                            if (data.includes('BAD_ENDING.bin')) fs.writeFileSync('../Achievements/BAD_ENDING.bin', 'a', 'utf8');
                            if (data.includes('REAL_ENDING.bin')) fs.writeFileSync('../Achievements/REAL_ENDING.bin', 'a', 'utf8');
                            if (data.includes('GOOD_ENDING.bin')) fs.writeFileSync('../Achievements/GOOD_ENDING.bin', 'a', 'utf8');
                            if (data.includes('BAD_ENDING2.bin')) fs.writeFileSync('../Achievements/BAD_ENDING2.bin', 'a', 'utf8');
                            if (data.includes('BAD_ENDING3.bin')) fs.writeFileSync('../Achievements/BAD_ENDING3.bin', 'a', 'utf8');
                            if (data.includes('SECRET_ENDING.bin')) fs.writeFileSync('../Achievements/SECRET_ENDING.bin', 'a', 'utf8');
                            if (data.includes('undefined')) {
                                centerText("[NO ENDING DETECTED]");
                                await pauseToContinue();
                            }
                        } catch (err) {
                            centerText('[ERROR]: Failed to read files!');
                            await pauseToContinue();
                        }
                    }
                    settingsMenu();
                    break;
                case 1: // No
                    centerText("[RESTORATION CANCELED]");
                    await pauseToContinue();
                    settingsMenu();
                    break;
                case 2: // Check Folder
                    centerText("[CHECKING FOLDERS]");
                    if (endings.length > 0) {
                        centerText("[FILES FOUND]");
                        centerText(endings);
                        centerText("-> If you want to keep these endings, DO NOT RESTORE THEM");
                    } else {
                        centerText("[YOU HAVE NO SAVED ENDINGS]");
                    }
                    await pauseToContinue();
                    restoreMenu();
                    break;
            }
            break;
        case 'support':
            switch (selectedIndex) {
                case 0: // Yes
                    centerText("[OPENING LINK IN DEFAULT BROWSER...]");
                    exec('start https://massivestudios.itch.io/pale-luna');
                    await pauseToContinue();
                    drawMenu(mainMenuItems);
                    currentMenu = 'main';
                    break;
                case 1: // No
                    centerText("[OPTION REFUSED]");
                    await pauseToContinue();
                    drawMenu(mainMenuItems);
                    currentMenu = 'main';
                    break;
            }
            break;
        case 'account':
            await handleAccountSelection();
            break;
        case 'overwrite':
            await handleOverwriteSelection();
            break;
        case 'music':
            await handleMusicSelection();
            break;
    }
}


rl.on('close', () => {
    centerText("===========================================================================");
    centerText('[EXITING GAME]');
    centerText("===========================================================================");
});