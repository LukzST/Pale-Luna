/**
 * ECHOES OF THE NIGHT - Blessed Version (English Translation)
 * * ACHIEVEMENT SYSTEM INTEGRATION (FS/PATH)
 */

const blessed = require('blessed');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process'); 

// --- Game State Variables ---

let playerName = "Michael Nevins";
let Health = 100;
let sanityValue = 100;
let hasShovel = false;
let hasKey = false;
let hasSecondKey = false;
let hasMap = false;
let hasMedkit = false;
let hasPhoto = false;
let readPhoto = false;
let destroyedScroll = false;
let triedNorth = false; 
let outsideHouse = false;

// Visited paths status (N/E/W/S)
let N = false, L = false, W = false, S = false;

// --- Ending Controls ---
let BAD_ENDING = false;
let BAD_ENDING_2 = false;
let BAD_ENDING_3 = false;
let GOOD_ENDING = false;
let REAL_ENDING = false;
let SECRET_ENDING = false;

// --- External File and Achievement Configurations (Translated) ---
const achievementsPath = '../Achievements/';
const saveAchievements = '../Account/Achievementsavefile.bin';

// Achievement Save Function
function saveAchievement(filename, content) {
    try {
        const fullPath = path.join(achievementsPath, filename);
        
        // Ensures the Achievements directory exists
        if (!fs.existsSync(achievementsPath)) {
             fs.mkdirSync(achievementsPath, { recursive: true });
        }
        
        // Saves the .bin file
        fs.writeFileSync(fullPath, content, 'utf8');

        // Adds to the progress file (save file)
        if (!fs.existsSync(path.dirname(saveAchievements))) {
            fs.mkdirSync(path.dirname(saveAchievements), { recursive: true });
        }
        // Checks if the file was already saved to prevent duplication (simplified logic)
        const saveContent = fs.existsSync(saveAchievements) ? fs.readFileSync(saveAchievements, 'utf8') : '';
        if (!saveContent.includes(filename)) {
            fs.appendFileSync(saveAchievements, filename + '\n', 'utf8');
        }

    } catch (err) {
        // Silently ignores disk/permission errors in Blessed TUI
    }
}

// --- Scene Logic ---
let currentScene = 'intro';

// --- ASCII ART (Translated and Cleaned) ---
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
    "██  (Pot)   ███                                                  ██", 
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

const ASCII_FLORESTA_1 = [
    "██████████████████████████████████████████████████████         ████",
    "                   ██                                              ",
    "                 ██                                       /\\      ",
    "               ██                                        WEST      ", 
    "         ██  ██                                                    ",
    "       ██  ██                                                      ",
    "     ██                                                            ",
    "██   ██                            ██                 NORTH >      ", 
    "██   ██                          ██████                            ",
    "██   ██                         █  ██  █                           ",
    "██   ██                            ██                              ",
    "██   ██                          ██  ██                 EAST       ", 
    "██   ██                         ██    ██                 \\/       ",                                            
    "██████████████████████████████████████████████████████         ████"
];

// --- Blessed Components (Modern Aesthetic) ---
const screen = blessed.screen({
    smartCSR: true,
    title: 'ECHOES OF THE NIGHT | TUI Adventure Game',
    dockBorders: true 
});

// Status Bar (Top)
const statusBar = blessed.box({
    top: 0,
    left: 0,
    width: '100%',
    height: 1,
    content: 'STATUS: Loading...',
    tags: true, 
    style: {
        fg: 'white',
        bg: 'blue' 
    },
    align: 'left'
});
screen.append(statusBar);

// Main Content Box
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

// Choice Box
const choiceBox = blessed.list({
    bottom: 0,
    left: 0,
    width: '100%',
    height: '30%',
    content: 'Options:',
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

// --- Helper Functions ---

function renderAscii(asciiArray) {
    const maxLineWidth = Math.max(...asciiArray.map(line => line.length));
    const terminalWidth = screen.width;
    const padding = Math.max(0, Math.floor((terminalWidth - maxLineWidth) / 2));
    const paddedAscii = asciiArray.map(line => ' '.repeat(padding) + line);
    return paddedAscii.join('\n');
}

function updateStatus() {
    let status = `[Health: {green-fg}${Health}%{/}] | [Sanity: {cyan-fg}${sanityValue}%{/}] | [Items: {yellow-fg}`;
    let items = [];
    if (hasShovel) items.push('Shovel');
    if (hasKey) items.push('Key(Pot)');
    if (hasSecondKey) items.push('Key(Tombstone)');
    if (hasMap) items.push('Map');
    if (hasMedkit) items.push('Medkit');
    if (hasPhoto) items.push('Photo');

    status += items.join(', ') || 'None';
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
        content: `{center}${message}\n\nPress {yellow-fg}[ENTER]{/yellow-fg} to continue...{/center}`,
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

// --- State and Effect Functions ---

function checkGameOver() {
    if (Health < 20) {
        return 'DEATH';
    }
    if (sanityValue <= 10) {
        return 'INSANITY';
    }
    return null;
}

/**
 * Changes Health.
 */
function changeHealth(value, showPopup = true) { 
    const oldHealth = Health;
    Health += value;
    if (Health > 100) Health = 100;
    
    if (checkGameOver() === 'DEATH') {
        endGame('You lost too much health!');
        return true; 
    } 
    
    if (showPopup && Health !== oldHealth) {
        let type = value < 0 ? 'DROPPED SEVERELY' : 'INCREASED';
        let color = value < 0 ? 'red' : 'green';

        showModal(`{${color}}[WARNING] YOUR HEALTH ${type}!{/${color}}\n\nYou now have ${Health}% health.`, () => {
            updateStatus();
            transitionTo(currentScene, 0); 
        });
        return true;
    }
    updateStatus(); 
    return false;
}

/**
 * Changes Sanity.
 */
function changeSanity(value, showPopup = true) { 
    const oldSanity = sanityValue;
    sanityValue += value;
    if (sanityValue > 100) sanityValue = 100;

    if (checkGameOver() === 'INSANITY') {
        endGame('You reached a very low level of sanity during the game!\nYou went insane and got lost in the forest forever!');
        return true; 
    } else if (showPopup && sanityValue !== oldSanity) {
        let type = value < 0 ? 'DROPPED' : 'INCREASED';
        let color = value < 0 ? 'red' : 'green';

        showModal(`{${color}}[WARNING] YOUR SANITY ${type}!{/${color}}\n\nYou now have ${sanityValue}% sanity.`, () => {
            updateStatus();
            transitionTo(currentScene, 0); 
        });
        return true;
    }
    updateStatus(); 
    return false;
}

function inventoryScene() {
    let itemsInInventory = 0;
    let inventoryText = "{center}=================================================\n";
    inventoryText += "You have the following items in your inventory:{/center}\n";
    inventoryText += "{center}================================================={/center}\n";

    if (hasShovel) { inventoryText += "{center}- Shovel{/center}\n"; itemsInInventory++; }
    if (hasKey) { inventoryText += "{center}- Key (Pot){/center}\n"; itemsInInventory++; }
    if (hasSecondKey) { inventoryText += "{center}- Key (Tombstone){/center}\n"; itemsInInventory++; }
    if (hasMap) { inventoryText += "{center}- Map{/center}\n"; itemsInInventory++; }
    if (hasMedkit) { inventoryText += "{center}- Medkit{/center}\n"; itemsInInventory++; }
    if (hasPhoto) { inventoryText += "{center}- Photo{/center}\n"; itemsInInventory++; }

    if (itemsInInventory === 0) {
        inventoryText += "{center}You haven't picked up any items yet!{/center}\n";
    }
    inventoryText += "{center}================================================={/center}";

    showModal(inventoryText, () => transitionTo(currentScene));
}

// --- Scene Functions ---

function transitionTo(sceneName, optionSelected = 0) {
    currentScene = sceneName;
    updateStatus();

    if (checkGameOver()) {
        const type = checkGameOver();
        endGame(type === 'DEATH' ? 'You lost too much health!' : 'You went insane and got lost in the forest forever!');
        return;
    }
    
    switch (sceneName) {
        case 'intro':
            sceneIntro();
            break;
        case 'startingRoom':
            sceneStartingRoom(optionSelected);
            break;
        case 'forest1':
            sceneForest1(optionSelected);
            break;
        case 'forest2':
            sceneForest2(optionSelected);
            break;
        case 'forest3':
            sceneForest3(optionSelected);
            break;
        case 'forest4':
            sceneForest4(optionSelected);
            break;
        case 'badEnding':
            endGame('You rush through the forest, but secrets are still waiting to be discovered...');
            break;
    }
}

function sceneIntro() {
    let text = `{center}===========================================================================\n`;
    text += `[CONTEXT]\n`;
    text += `===========================================================================\n`;
    text += `You are {yellow-fg}${playerName}{/}, an electrical engineer called to fix\n`;
    text += `poles, but not everything went as planned and\n`;
    text += `you were kidnapped by someone!\n`;
    text += `===========================================================================\n`;
    text += `Your objective is to try to escape!\n`;
    text += `==========================================================================={/center}`;

    showModal(text, () => transitionTo('startingRoom'));
}

function sceneStartingRoom(choice) {
    // 1. Render ASCII Art of the room
    let asciiArt = renderAscii(ASCII_SALA_ITENS);
    
    // 2. Narrative Text
    const narrativeText = "\n\n{center}You are in a dark room. Moonlight shines through the window.\n" +
                          "There is a POT in the corner of the room, along with a SHOVEL. And on the other side, there is a DOOR.{/center}";
    
    let currentText = asciiArt + narrativeText;

    const choices = [
        { text: `Examine SHOVEL ${hasShovel ? '(TAKEN)' : ''}`, action: 1 },
        { text: `Examine POT ${hasKey ? '(TAKEN)' : ''}`, action: 2 },
        { text: `Try to open DOOR`, action: 3 },
        { text: `INVENTORY`, action: 4, special: true },
        { text: `VIEW STATUS`, action: 5, special: true }
    ];

    if (choice === 1) {
        if (hasShovel) {
            showModal('You already took the shovel!', () => transitionTo('startingRoom'));
        } else {
            hasShovel = true;
            showModal('You took the shovel, perhaps it will be useful in the future.', () => transitionTo('startingRoom'));
        }
        return;
    } else if (choice === 2) {
        if (hasKey) {
            showModal('You already took the pot and the key!', () => transitionTo('startingRoom'));
        } else {
            hasKey = true;
            showModal('You took the pot, inside you found a key.', () => transitionTo('startingRoom'));
        }
        return;
    } else if (choice === 3) {
        if (hasKey) {
            hasKey = false;
            showModal('You manage to open the door with the found key!\n[WARNING] You used the key!', () => transitionTo('forest1'));
        } else {
            showModal('You try to open the door but it is locked...', () => transitionTo('startingRoom'));
        }
        return;
    } else if (choice === 4) {
        inventoryScene();
        return;
    } else if (choice === 5) {
        showModal(`HEALTH: {green-fg}${Health}%{/}\nSANITY: {cyan-fg}${sanityValue}%{/}`, () => transitionTo('startingRoom'));
        return;
    }
    
    displayScene(currentText, choices, (c) => transitionTo('startingRoom', c));
}

function sceneForest1(choice) {
    // 1. Render ASCII Art of Forest 1
    let asciiArt = renderAscii(ASCII_FLORESTA_1);
    
    // 2. Narrative Text
    let narrativeText = "\n\n{center}===========================================================================\n";
    narrativeText += "Take your reward. The pale moon smiles at you.\n";
    narrativeText += "You are in a forest. There are paths to the NORTH, WEST, and EAST:\n";
    narrativeText += "==========================================================================={/center}";
    
    let currentText = asciiArt + narrativeText;

    const choices = [
        // Use triedNorth for marking if the challenge has been used.
        { text: `Go NORTH ${triedNorth ? '(Already tried)' : ''}`, action: 1 },
        { text: `Go WEST ${W ? '(Already tried)' : ''}`, action: 2 },
        { text: `Go EAST`, action: 3 },
        { text: `INVENTORY`, action: 4, special: true },
        { text: `VIEW STATUS`, action: 5, special: true }
    ];

    if (choice === 1) { // NORTH
        if (triedNorth) {
            showModal('You already went North!', () => transitionTo('forest1'));
            return;
        }

        // --- 100% SUCCESS LOGIC (AS REQUESTED) ---
        
        // Mark as tried (so the option changes next time)
        triedNorth = true; 
        
        const choicesShortcut = [
            { text: 'Take the shortcut ({yellow-fg}BAD ENDING{/})', action: 1 },
            { text: 'Ignore the shortcut', action: 2 }
        ];
        
        // Display the shortcut decision screen
        displayScene("{center}You feel more confident going North...\nYou find a secret shortcut!{/center}", choicesShortcut, (c) => {
            if (c === 1) {
                // Chose shortcut -> Ending (BAD ENDING)
                BAD_ENDING = true;
                endGame('You rush quickly through the forest, but secrets are still waiting to be discovered...');
            } else if (c === 2) {
                // Chose to ignore shortcut -> Return to Forest 1
                showModal('You find it dangerous and ignore the shortcut', () => transitionTo('forest1'));
            } else {
                // Invalid option in the sub-menu
                showModal('Invalid Option! Returning to the path.', () => transitionTo('forest1'));
            }
        });
        return; // Ensure the main function doesn't continue rendering
        
    } else if (choice === 2) { // WEST (COMBINED)
        W = true;
        const choicesWest = [
            { text: 'Run away', action: 1 },
            { text: 'Hide', action: 2 }
        ];
        displayScene("{center}You go through the West path...\nA tall, unfriendly man with an axe approaches.{/center}", choicesWest, (c) => {
            let result = '';
            if (c === 1) {
                // Suppress individual pop-ups
                changeSanity(-10, false); 
                changeHealth(-50, false);
                result = 'You start running as fast as possible, trip over a root, and get hit by the man\'s axe.';
            } else if (c === 2) {
                // Suppress individual pop-ups
                changeSanity(-10, false);
                changeHealth(-50, false);
                result = 'You decide to hide in a bush, but he sees you and hits you with the axe!';
            } else {
                showModal('Invalid Option!', () => transitionTo('forest1'));
                return;
            }

            // Check Game Over
            if (checkGameOver()) return;

            // Display combined result and updated status in a single modal
            showModal(`${result}\n\n{red-fg}Damage Received:{/}\n- Current Health: {green-fg}${Health}%{/}\n- Current Sanity: {cyan-fg}${sanityValue}%{/}`, () => transitionTo('forest1'));
        });
        return;

    } else if (choice === 3) { // EAST
        L = true; // L is used for EAST path status
        showModal('After thinking, you decide to go East...\nYou begin to enter the dense forest.', () => transitionTo('forest2'));
        return;
    } else if (choice === 4) {
        inventoryScene();
        return;
    } else if (choice === 5) {
        showModal(`HEALTH: {green-fg}${Health}%{/}\nSANITY: {cyan-fg}${sanityValue}%{/}`, () => transitionTo('forest1'));
        return;
    }
    
    displayScene(currentText, choices, (c) => transitionTo('forest1', c));
}

function sceneForest2(choice) {
    // 1. Render ASCII Art (Placeholder)
    let asciiArt = renderAscii(ASCII_FLORESTA_1); 
    
    // 2. Narrative Text
    let narrativeText = "\n\n{center}===========================================================================\n";
    narrativeText += "Take your reward. The pale moon smiles at you.\n";
    narrativeText += "You are in a forest. There are paths to the NORTH, SOUTH, and EAST:\n";
    narrativeText += "==========================================================================={/center}";
    
    let currentText = asciiArt + narrativeText; 

    const choices = [
        { text: `Go NORTH ${N ? '(Already went)' : ''}`, action: 1 },
        { text: `Go SOUTH ${S ? '(Already went)' : ''}`, action: 2 },
        { text: `Go EAST`, action: 3 },
        { text: `INVENTORY`, action: 4, special: true },
        { text: `VIEW STATUS`, action: 5, special: true }
    ];

    if (choice === 1) { // NORTH (Cabin)
        N = true;
        
        const choicesCabin = [
            { text: 'Enter the cabin', action: 1 },
            { text: 'Ignore the cabin', action: 2 }
        ];
        
        displayScene("{center}You decide to go North...\nYou find an old wooden cabin{/center}", choicesCabin, (c) => {
            if (c === 1) { // Enter the cabin
                const choicesChest = [
                    { text: 'Take the map', action: 1 },
                    { text: 'Return to the junction', action: 2 },
                    { text: `Take Medkit ${hasMedkit ? '(TAKEN)' : ''} (Heals 50% Health)`, action: 3 }
                ];
                
                displayScene("{center}You enter the cabin and find an old chest. Inside, a parchment with a map.{/center}", choicesChest, (c2) => {
                    if (c2 === 1) { // Take the map
                        hasMap = true;
                        showModal('You take the map!', () => transitionTo('forest2', 0)); 
                    } else if (c2 === 2) { // Return
                        transitionTo('forest2', 0);
                    } else if (c2 === 3) { // Medkit
                        if (hasMedkit) {
                            showModal('You already took the medkit!', () => transitionTo('forest2', 0));
                        } else {
                            hasMedkit = true;
                            // Heal: Suppress individual pop-up
                            changeHealth(50, false); 
                            showModal(`{green-fg}[MEDKIT USED]{/}\n\nYour health was restored by 50 points. Current Health: {green-fg}${Health}%{/}`, () => transitionTo('forest2', 0));
                        }
                    } else {
                        showModal('Invalid Option!', () => transitionTo('forest2', 0));
                    }
                });
            } else if (c === 2) { // Ignore the cabin
                const choicesBridge = [
                    { text: 'Jump the bridge', action: 1 },
                    { text: 'Return to the junction', action: 2 }
                ];
                displayScene("{center}You ignore the cabin and continue...\nYou find a broken bridge.{/center}", choicesBridge, (c2) => {
                    if (c2 === 1) {
                        endGame('You try to jump the bridge, but you fall and die');
                    } else if (c2 === 2) {
                        transitionTo('forest2', 0);
                    } else {
                        showModal('Invalid Option!', () => transitionTo('forest2', 0));
                    }
                });
            } else {
                showModal('Invalid Option!', () => transitionTo('forest2', 0));
            }
        });
        return;
    } else if (choice === 2) { // SOUTH (Boat/Scroll)
        S = true;
        const choicesSouth = [
            { text: 'Take the boat', action: 1 },
            { text: 'Ignore the boat', action: 2 },
            { text: 'Return to the junction', action: 3 }
        ];
        
        displayScene("{center}You go South.\nYou find a lake, and a boat in front of you.{/center}", choicesSouth, (c) => {
            if (c === 1) { // Take the boat
                const choicesCave = [
                    { text: 'Ignore cave', action: 1 },
                    { text: 'Enter the submerged cave', action: 2 }
                ];

                displayScene("{center}The boat sinks. You see a submerged cave!{/center}", choicesCave, (c2) => {
                    if (c2 === 1) {
                        showModal('You ignore the cave and decide to swim back.', () => transitionTo('forest2', 0));
                    } else if (c2 === 2) { // Cave / Scroll
                        const choicesParchment = [
                            { text: 'Read (Lose Sanity)', action: 1 },
                            { text: 'Don\'t Read', action: 2 },
                            { text: 'DESTROY! (Alters Secret Ending)', action: 3 }
                        ];

                        displayScene("{center}You find a submerged cemetery with an open parchment...{/center}", choicesParchment, (c3) => {
                            if (c3 === 1) { // Read
                                let sanityLost = false;
                                if (!destroyedScroll) {
                                    // Suppress sanity pop-up to combine
                                    sanityLost = changeSanity(-10, false); 
                                }
                                
                                showModal('The diary is terrifying. You fear for the author.' + 
                                    (sanityLost ? '\n\n{red-fg}[WARNING] Your sanity dropped to {cyan-fg}' + sanityValue + '%{/}' : ''), () => {
                                    
                                    if (checkGameOver()) return; 

                                    const choicesReturn = [
                                        { text: 'Try to swim back (50% chance of drowning)', action: 1 },
                                        { text: 'Stay in the cave and search (Finds Key)', action: 2 }
                                    ];
                                    displayScene("{center}What to do now?{/center}", choicesReturn, (c4) => {
                                        if (c4 === 1) {
                                            if (Math.random() < 0.5) {
                                                showModal('You manage to swim back!', () => transitionTo('forest2', 0));
                                            } else {
                                                // Only call changeHealth with popup, which handles Game Over.
                                                changeHealth(-100); 
                                                if (checkGameOver()) return;
                                            }
                                        } else if (c4 === 2) {
                                            hasSecondKey = true;
                                            showModal('You find a key on the tombstone and return to the surface.', () => transitionTo('forest2', 0));
                                        } else {
                                            showModal('Invalid Option!', () => transitionTo('forest2', 0));
                                        }
                                    });
                                });
                            } else if (c3 === 2) { // Don't Read
                                showModal('You decide not to read and try to swim back.', () => transitionTo('forest2', 0));
                            } else if (c3 === 3) { // DESTROY!
                                destroyedScroll = true;
                                showModal('YOU DESTROYED THE PARCHMENT! THIS WILL AFFECT THE SECRET ENDING...', () => transitionTo('forest2', 0));
                            } else {
                                showModal('Invalid Option!', () => transitionTo('forest2', 0));
                            }
                        });
                    } else {
                        showModal('Invalid Option!', () => transitionTo('forest2', 0));
                    }
                });

            } else if (c === 2) { // Ignore the boat (Wolf)
                const choicesWolf = [
                    { text: 'Run away', action: 1 },
                    { text: 'Hide', action: 2 }
                ];

                displayScene("{center}You ignore the boat and find a wolf.{/center}", choicesWolf, (c2) => {
                    let result = '';
                    let damage = 0;
                    if (c2 === 1) {
                        damage = -20;
                        changeHealth(damage, false);
                        result = 'You run, but the wolf bites you. Wounded at medium level!';
                    } else if (c2 === 2) {
                        damage = -70;
                        changeHealth(damage, false);
                        result = 'You hide in the wolf\'s cave and are severely wounded!';
                    } else {
                        showModal('Invalid Option!', () => transitionTo('forest2', 0));
                        return;
                    }

                    if (checkGameOver()) return;

                    // Combined Popup
                    showModal(`${result}\n\n{red-fg}Damage Received:{/}\n- Current Health: {green-fg}${Health}%{/}`, () => transitionTo('forest2', 0));
                });
            } else if (c === 3) { // Return
                transitionTo('forest2', 0);
            } else {
                showModal('Invalid Option!', () => transitionTo('forest2', 0));
            }
        });
        return;

    } else if (choice === 3) { // EAST (Advance)
        L = true;
        showModal('You cross the leaves and branches, and find another junction', () => transitionTo('forest3'));
        return;
    } else if (choice === 4) {
        inventoryScene();
        return;
    } else if (choice === 5) {
        showModal(`HEALTH: {green-fg}${Health}%{/}\nSANITY: {cyan-fg}${sanityValue}%{/}`, () => transitionTo('forest2'));
        return;
    }

    displayScene(currentText, choices, (c) => transitionTo('forest2', c));
}

function sceneForest3(choice) {
    // 1. Render ASCII Art (Placeholder)
    let asciiArt = renderAscii(ASCII_FLORESTA_1); 
    
    // 2. Narrative Text
    let narrativeText = "\n\n{center}===========================================================================\n";
    narrativeText += "Take your reward. The pale moon smiles at you.\n";
    narrativeText += "You are in a forest. There are paths to the NORTH, SOUTH, and WEST:\n";
    narrativeText += "==========================================================================={/center}";
    
    let currentText = asciiArt + narrativeText; 

    const choices = [
        { text: `Go NORTH`, action: 1 },
        { text: `Go SOUTH`, action: 2 },
        { text: `Go WEST`, action: 3 },
        { text: `INVENTORY`, action: 4, special: true },
        { text: `VIEW STATUS`, action: 5, special: true }
    ];

    if (choice === 1) { // NORTH (Dig/Photo)
        N = true;
        const choicesObject = [
            { text: 'Dig the ground', action: 1 },
            { text: 'Ignore the object', action: 2 }
        ];

        displayScene("{center}You find something shiny on the ground.{/center}", choicesObject, (c) => {
            if (c === 1) { // Dig
                if (hasShovel) {
                    const choicesPhoto = [
                        { text: 'Read what is written (Lose Sanity)', action: 1 },
                        { text: 'Ignore the photo', action: 2 }
                    ];

                    displayScene("{center}You dig and find a photo of a child. There is something written on the back.{/center}", choicesPhoto, (c2) => {
                        hasPhoto = true;
                        if (c2 === 1) {
                            readPhoto = true;
                            // Suppress sanity pop-up to combine
                            changeSanity(-10, false); 
                            
                            if (checkGameOver()) return;

                            showModal("The photo says: 'YOU SHOULDN'T HAVE COME HERE'.\nYour sanity dropped to {cyan-fg}" + sanityValue + "%{/}.\nYou reach a junction.", () => transitionTo('forest4'));
                        } else if (c2 === 2) {
                            readPhoto = false;
                            showModal('You ignore the photo and continue.\nYou reach a junction.', () => transitionTo('forest4'));
                        } else {
                            showModal('Invalid Option!', () => transitionTo('forest3', 0));
                        }
                    });
                } else {
                    showModal('You cannot dig because you don\'t have a shovel!', () => transitionTo('forest3', 0));
                }
            } else if (c === 2) { // Ignore
                showModal('You ignore the object and continue.\nYou reach a junction.', () => transitionTo('forest4'));
            } else {
                showModal('Invalid Option!', () => transitionTo('forest3', 0));
            }
        });
        return;
    } else if (choice === 2) { // SOUTH (Death)
        S = true;
        const choicesWolf = [
            { text: 'Run away', action: 1 },
            { text: 'Hide', action: 2 }
        ];
        
        displayScene("{center}You go through the South path...\nYou find a wolf{/center}", choicesWolf, (c) => {
            if (c === 1) {
                endGame('You run, but the wolf is faster and kills you!');
            } else if (c === 2) {
                endGame('You hide in the wolf\'s cave, and it kills you!');
            } else {
                showModal('Invalid Option!', () => transitionTo('forest3', 0));
            }
        });
        return;
    } else if (choice === 3) { // WEST (Death)
        W = true;
        endGame('You decide to go West, fall into the river and drown!');
        return;
    } else if (choice === 4) {
        inventoryScene();
        return;
    } else if (choice === 5) {
        showModal(`HEALTH: {green-fg}${Health}%{/}\nSANITY: {cyan-fg}${sanityValue}%{/}`, () => transitionTo('forest3'));
        return;
    }

    displayScene(currentText, choices, (c) => transitionTo('forest3', c));
}

function sceneForest4(choice) {
    // 1. Narrative Text
    let text = "{center}===========================================================================\n";
    text += "The pale moon smiles at you\n";
    text += "In front of you are paths, to the NORTH and SOUTH\n";
    text += "==========================================================================={/center}";
    
    let currentText = text; 

    const choices = [
        { text: `Go NORTH (Road)`, action: 1 },
        { text: `Go SOUTH (House)`, action: 2 },
        { text: `INVENTORY`, action: 3, special: true },
        { text: `VIEW STATUS`, action: 4, special: true }
    ];

    if (choice === 1) { // NORTH (Car - BAD/GOOD ENDINGS)
        N = true;
        const choicesCar = [
            { text: 'Try to start the car', action: 1 },
            { text: 'Ignore the car', action: 2 },
            { text: 'Walk along the road (DEATH)', action: 3 }
        ];

        displayScene("{center}You find a car parked on the side of a road.{/center}", choicesCar, (c) => {
            if (c === 1) { // Start the car
                const choicesCarFinal = [
                    { text: 'Drive away (Ending)', action: 1 },
                    { text: 'Return to the path', action: 2 }
                ];
                
                displayScene("{center}You manage to start the car. Drive away?{/center}", choicesCarFinal, (c2) => {
                    if (c2 === 1) { // Drive away
                        if (hasPhoto && readPhoto) {
                            GOOD_ENDING = true;
                            endGame('You call the police (GOOD ENDING)');
                        } else if (hasPhoto && !readPhoto) {
                            BAD_ENDING_2 = true;
                            endGame('You ignore the photo (BAD ENDING 2)');
                        } else {
                            BAD_ENDING_3 = true;
                            endGame('You drive away without thinking (BAD ENDING 3)');
                        }
                    } else if (c2 === 2) {
                        showModal('You decide to return.', () => transitionTo('forest4', 0));
                    } else {
                        showModal('Invalid Option!', () => transitionTo('forest4', 0));
                    }
                });
            } else if (c === 2) { // Ignore the car
                showModal('You ignore the car and have to return to the junction.', () => transitionTo('forest4', 0));
            } else if (c === 3) { // Walk (Death)
                endGame('You are hit by a car without headlights. You Died!');
            } else {
                showModal('Invalid Option!', () => transitionTo('forest4', 0));
            }
        });
        return;
    } else if (choice === 2) { // SOUTH (House - REAL/SECRET ENDING)
        S = true;
        const choicesHouse = [
            { text: 'Enter the house', action: 1 },
            { text: 'Ignore the house and follow the path', action: 2 }
        ]

        displayScene("{center}You find a house that looks normal.{/center}", choicesHouse, (c) => {
            if (c === 1) { // Enter the house
                const choicesMap = [
                    { text: 'Follow the map', action: 1 },
                    { text: 'Do not follow the map (DEATH)', action: 2 }
                ];

                displayScene("{center}You find a note with a rough map drawn with arrows.{/center}", choicesMap, (c2) => {
                    if (c2 === 1) { // Follow the map
                        const choicesDig = [
                            { text: 'Dig in search of something', action: 1 },
                            { text: 'Do not dig (DEATH)', action: 2 }
                        ];

                        displayScene("{center}You follow the map. At the marked \'X\', the ground sounds hollow. What to do?{/center}", choicesDig, (c3) => {
                            if (c3 === 1) { // Dig
                                if (destroyedScroll) {
                                    SECRET_ENDING = true;
                                    endGame("The child\'s body rises: 'YOU DESTROYED MY PARCHMENT...' (SECRET ENDING)");
                                } else {
                                    REAL_ENDING = true;
                                    endGame("You find the body of a child and the coordinate '—— 40.24248 —— -121.4434 ——' (REAL ENDING)");
                                }
                            } else if (c3 === 2) { // Do not dig (Death)
                                endGame('You decide not to dig. A figure attacks and kills you.');
                            } else {
                                showModal('Invalid Option!', () => transitionTo('forest4', 0));
                            }
                        });
                    } else if (c2 === 2) { // Do not follow the map (Death)
                        endGame('You ignore the map. The owner returns and kills you.');
                    } else {
                        showModal('Invalid Option!', () => transitionTo('forest4', 0));
                    }
                });
            } else if (c === 2) { // Ignore the house
                if (!outsideHouse) {
                    outsideHouse = true;
                    showModal('You ignore the house. The path leads you in circles. You must return.', () => transitionTo('forest4', 0));
                } else {
                    showModal('You already tried that, the path is leading you in circles.', () => transitionTo('forest4', 0));
                }
            } else {
                showModal('Invalid Option!', () => transitionTo('forest4', 0));
            }
        });
        return;
    } else if (choice === 3) {
        inventoryScene();
        return;
    } else if (choice === 4) {
        showModal(`HEALTH: {green-fg}${Health}%{/}\nSANITY: {cyan-fg}${sanityValue}%{/}`, () => transitionTo('forest4'));
        return;
    }

    displayScene(currentText, choices, (c) => transitionTo('forest4', c));
}

function endGame(message) {
    let finalType = 'NORMAL ENDING';
    let achievementFilename = '';
    let achievementContent = '';
    
    if (BAD_ENDING) {
        finalType = 'BAD ENDING';
        achievementFilename = 'BAD_ENDING.bin';
        achievementContent = 'YOU COMPLETED THE FIRST BAD ENDING'; // Translated
    } else if (GOOD_ENDING) {
        finalType = 'GOOD ENDING';
        achievementFilename = 'GOOD_ENDING.bin';
        achievementContent = 'YOU COMPLETED THE GOOD ENDING'; // Translated
    } else if (REAL_ENDING) {
        finalType = 'REAL ENDING';
        achievementFilename = 'REAL_ENDING.bin';
        achievementContent = 'YOU COMPLETED THE REAL ENDING'; // Translated
    } else if (SECRET_ENDING) {
        finalType = 'SECRET ENDING';
        achievementFilename = 'SECRET_ENDING.bin';
        achievementContent = 'YOU COMPLETED THE SECRET ENDING'; // Translated
    } else if (BAD_ENDING_2) {
        finalType = 'BAD ENDING 2';
        achievementFilename = 'BAD_ENDING_2.bin';
        achievementContent = 'YOU COMPLETED THE SECOND BAD ENDING'; // Translated
    } else if (BAD_ENDING_3) {
        finalType = 'BAD ENDING 3';
        achievementFilename = 'BAD_ENDING_3.bin';
        achievementContent = 'YOU COMPLETED THE THIRD BAD ENDING'; // Translated
    }

    // 1. Save Achievement (if any)
    if (achievementFilename) {
        saveAchievement(achievementFilename, achievementContent);
    }

    // Display the Final Screen, including ASCII Art
    let content = renderAscii(ASCII_GAMEOVER);
    content += `\n\n{center}=========================================\n\n{red-fg}GAME OVER{/}\n\n${message}\n\nENDING CONCLUDED: [{yellow-fg}${finalType}{/}]\n\n========================================={/center}`;
    
    textBox.setContent(content);
    choiceBox.setItems(['{yellow-fg}[1]{/yellow-fg} Close Game']); // Translated
    choiceBox.removeAllListeners('select');
    choiceBox.on('select', () => process.exit(0));
    choiceBox.focus();
    screen.render();
}

// --- Game Start ---

showModal('Welcome to ECHOES OF THE NIGHT. Press ENTER to begin.\n\n[TIP]: Use the arrow keys to navigate options.', () => {
    updateStatus();
    transitionTo('startingRoom');
});