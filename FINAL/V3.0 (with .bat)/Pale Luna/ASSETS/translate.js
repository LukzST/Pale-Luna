const fs = require('fs');
const path = require('path');

const strings = {
    'PT': {
        // ==================== MENU PRINCIPAL ====================
        'MENU_START': 'INICIAR JOGO',
        'MENU_RESTART': 'REINICIAR PROGRESSO',
        'MENU_ACHIEVEMENTS': 'CONQUISTAS',
        'MENU_SETTINGS': 'CONFIGURAÇÕES',
        'MENU_CREDITS': 'CRÉDITOS',
        'MENU_SUPPORT': 'SUPORTE',
        'MENU_EXIT': 'SAIR',
        
        // ==================== CONFIGURAÇÕES ====================
        'SETTINGS_AUDIO': 'Trilha Sonora',
        'SETTINGS_ACCOUNT': 'Criação de conta',
        'SETTINGS_RESTORE': 'Restauração de finais',
        'SETTINGS_EASTER': 'Easter Eggs',
        'SETTINGS_LANGUAGE': 'Idioma',
        'SETTINGS_BACK': 'Voltar para o menu principal',
        
        // ==================== ÁUDIO ====================
        'AUDIO_ACTIVATE': 'Ativar Trilha Sonora',
        'AUDIO_DEACTIVATE': 'Desativar Trilha Sonora',
        'AUDIO_BACK': 'Voltar',
        
        // ==================== CONTA ====================
        'ACCOUNT_CREATE': 'Criar Conta',
        'ACCOUNT_SKIP': 'Pular',
        'ACCOUNT_BACK': 'Voltar',
        'ACCOUNT_OVERWRITE_YES': 'Sim, Sobrescrever',
        'ACCOUNT_OVERWRITE_NO': 'Não, Voltar',
        'ACCOUNT_USERNAME': 'NOME DE USUÁRIO:',
        'ACCOUNT_PASSWORD': 'SENHA:',
        'ACCOUNT_CREATE_BTN': 'CRIAR CONTA',
        'ACCOUNT_CANCEL_BTN': 'CANCELAR / VOLTAR',
        'ACCOUNT_SUCCESS': '[SISTEMA]: Conta criada com sucesso!',
        'ACCOUNT_SUCCESS_ENDINGS': 'Seus finais estão salvos.',
        'ACCOUNT_SUCCESS_NO_ENDINGS': 'Você não tem finais ainda.',
        'ACCOUNT_ERROR_EMPTY': '[ERRO]\nNome de usuário e senha não podem estar vazios.',
        'ACCOUNT_CANCELLED': '[CRIAÇÃO DE CONTA CANCELADA]',
        'ACCOUNT_OVERWRITE_TITLE': 'SOBRESCREVER CONTA',
        'ACCOUNT_OVERWRITE_MSG': '[EXISTE UM ARQUIVO DE CONTA, DESEJA SOBRESCREVE-LO?]',
        
        // ==================== EASTER EGGS ====================
        'EASTER_ACTIVATE': 'Ativar Easter Eggs',
        'EASTER_DEACTIVATE': 'Desativar Easter Eggs',
        'EASTER_BACK': 'Voltar ao menu de configurações',
        'EASTER_ALREADY_ON': '[EASTER EGGS JÁ ESTÃO ATIVADOS]',
        'EASTER_ACTIVATED': '[EASTER EGGS ATIVADOS!]',
        'EASTER_ALREADY_OFF': '[EASTER EGGS JÁ ESTÃO DESATIVADOS]',
        'EASTER_DEACTIVATED': '[EASTER EGGS DESATIVADOS!]',
        
        // ==================== RESTAURAÇÃO ====================
        'RESTORE_YES': 'Sim, Restaurar',
        'RESTORE_NO': 'Não, Voltar',
        'RESTORE_CHECK': 'Verificar Pasta',
        'RESTORE_NOT_FOUND': '[ARQUIVO DE FINAIS SALVOS NÃO ENCONTRADO]',
        'RESTORE_SUCCESS': '[FINAIS RESTAURADOS COM SUCESSO]:',
        'RESTORE_ALREADY': '[FINAIS JÁ ESTAVAM PRESENTES NA PASTA]',
        'RESTORE_CANCELLED': '[RESTAURAÇÃO CANCELADA]',
        'RESTORE_ERROR': '[ERRO]: Falha ao ler ou restaurar arquivos:',
        
        // ==================== SUPORTE ====================
        'SUPPORT_YES': 'Sim, Abrir Link',
        'SUPPORT_NO': 'Não, Voltar',
        'SUPPORT_OPENING': '[ABRINDO LINK NO NAVEGADOR PADRÃO...]',
        'SUPPORT_DECLINED': '[OPÇÃO RECUSADA]',
        
        // ==================== IDIOMA ====================
        'LANGUAGE_PT': 'PT (BR)',
        'LANGUAGE_EN': 'EN (US)',
        'LANGUAGE_BACK': 'Voltar',
        'LANGUAGE_ALREADY_PT': '[SISTEMA]\nJá está em Português (BR).',
        'LANGUAGE_ALREADY_EN': '[SISTEMA]\nJá está em Inglês (US).',
        'LANGUAGE_RESTART_TITLE': 'REINICIANDO...',
        'LANGUAGE_RESTART_MSG': 'O idioma foi alterado com sucesso.\n\nO jogo será reiniciado para aplicar as mudanças.',
        
        // ==================== MÚSICA ====================
        'MUSIC_ALREADY_PLAYING': '[A MÚSICA JÁ ESTÁ TOCANDO]',
        'MUSIC_STARTED': '[TRILHA SONORA INICIADA]',
        'MUSIC_STOPPED': '[MÚSICA PARADA]',
        'MUSIC_ALREADY_STOPPED': '[A MÚSICA JÁ ESTÁ PARADA]',
        'MUSIC_NOT_FOUND': '[TRILHA SONORA]\nArquivo de áudio ou vlc.exe não encontrado.',
        
        // ==================== PROGRESSO ====================
        'PROGRESS_RESTARTING': '[REINICIAR PROGRESSO]',
        'PROGRESS_SUCCESS': '[PROGRESSO REINICIADO]',
        'PROGRESS_ERROR': '[ERRO: ARQUIVO FALHOU',
        
        // ==================== CONQUISTAS ====================
        'ACHIEVEMENTS_TITLE': 'CONQUISTAS',
        'ACHIEVEMENTS_CHECKING': '\nVERIFICANDO PASTAS...\n\n',
        'ACHIEVEMENTS_FOUND': '[ARQUIVOS ENCONTRADOS]',
        'ACHIEVEMENTS_NONE': '[NENHUM ARQUIVO DE FINAL ENCONTRADO]',
        'ACHIEVEMENTS_KEEP': '-> Se você quiser manter esses finais, NÃO OS RESTAURE.',
        'ACHIEVEMENTS_ERROR': '[ERRO DE ARQUIVO]: Não foi possível ler a pasta de conquistas.',
        
        // ==================== CRÉDITOS ====================
        'CREDITS_TITLE': 'CRÉDITOS',
        'CREDITS_CONTENT': '[NOSSA EQUIPE]\nProgramação:\nLucas Eduardo\n\nTestadores Beta:\nIsabella Sanches, Kayc Felix e Luiz Otávio\n\nRoteiro:\nLucas Eduardo\n\nArtes:\nLucas Eduardo\n\nMúsica:\nRyan Creep (Youtube.com)\n\nAgradecimentos especiais:\nEquipe do SENAI\n\nOBRIGADO POR JOGAR NOSSO JOGO!',
        
        // ==================== SUPORTE ====================
        'SUPPORT_TITLE': 'APOIE O JOGO',
        'SUPPORT_CONTENT': 'Se você quiser apoiar o desenvolvimento do jogo, você pode fazer uma doação,\nqualquer valor é bem-vindo e ajuda muito com o desenvolvimento do jogo!\nVocê também pode deixar uma avaliação na página do jogo!\n\nLink para doação: https://the-last-deploy.itch.io/pale-luna\n\n[ABRIR?]',
        
        // ==================== SPLASH / BOOT ====================
        'SPLASH_LOADING': 'CARREGANDO...',
        'SPLASH_PRESS_ENTER': 'Bem-vindo a ECOS DA NOITE. Pressione ENTER para começar.\n\n[DICA]: Use as setas do teclado para navegar nas opções.',
        
        // ==================== UI GERAL ====================
        'UI_SELECT_OPTION': 'Selecione uma opção ao lado.\nUse as setas para navegar e Enter para selecionar.',
        'UI_FOOTER': 'Use as setas ↑/↓ e Enter. Pressione Q ou Ctrl+C para sair.',
        'UI_ALERT': 'ALERTA',
        'UI_SYSTEM_ALERT': '[ALERTA DO SISTEMA]',
        'UI_PRESS_ANY_KEY': '[PRESSIONE QUALQUER TECLA PARA CONTINUAR]',
        'UI_ERROR_CRITICAL': '[ERRO CRÍTICO]',
        
        // ==================== VERIFICAÇÃO DE FINAIS ====================
        'VERIFY_TITLE': 'VERIFICAÇÃO DE FINAIS',
        'VERIFY_FOUND': '[ARQUIVOS ENCONTRADOS NO PROGRESSO ATUAL]:',
        'VERIFY_NONE': '[NENHUM FINAL ENCONTRADO!]',
        
        // ==================== CONQUISTAS (NOMES) ====================
        'ACH_BAD_ENDING': 'VOCÊ COMPLETOU O PRIMEIRO FINAL RUIM',
        'ACH_BAD_ENDING_2': 'VOCÊ COMPLETOU O SEGUNDO FINAL RUIM',
        'ACH_BAD_ENDING_3': 'VOCÊ COMPLETOU O TERCEIRO FINAL RUIM',
        'ACH_GOOD_ENDING': 'VOCÊ COMPLETOU O FINAL BOM',
        'ACH_REAL_ENDING': 'VOCÊ COMPLETOU O FINAL REAL',
        'ACH_SECRET_ENDING': 'VOCÊ COMPLETOU O FINAL SECRETO',
        
        // ==================== ERROS ====================
        'ERROR_CRITICAL_HANDLER': '[ERRO CRÍTICO NO HANDLER]',
        'ERROR_CRITICAL_ACTION': '[ERRO CRÍTICO NA AÇÃO]',
        'ERROR_START_GAME': 'Erro ao iniciar jogo:',
        'ERROR_ACCOUNT_WRITE': '[ERRO CRÍTICO]: Falha ao criar arquivo de conta ou salvamento.',
        'ERROR_EXE_NOT_FOUND': '[ERRO]\nExecutável não encontrado: {exe}\n\nVerifique se o arquivo existe na pasta raiz.',
    },
    
    'EN': {
        // ==================== MAIN MENU ====================
        'MENU_START': 'START GAME',
        'MENU_RESTART': 'RESTART PROGRESS',
        'MENU_ACHIEVEMENTS': 'ACHIEVEMENTS',
        'MENU_SETTINGS': 'OPTIONS',
        'MENU_CREDITS': 'CREDITS',
        'MENU_SUPPORT': 'SUPPORT',
        'MENU_EXIT': 'EXIT',
        
        // ==================== SETTINGS ====================
        'SETTINGS_AUDIO': 'AUDIO',
        'SETTINGS_ACCOUNT': 'ACCOUNT',
        'SETTINGS_RESTORE': 'RESTORE DATA',
        'SETTINGS_EASTER': 'EASTER EGGS',
        'SETTINGS_LANGUAGE': 'LANGUAGE',
        'SETTINGS_BACK': 'MAIN MENU',
        
        // ==================== AUDIO ====================
        'AUDIO_ACTIVATE': 'Activate Soundtrack',
        'AUDIO_DEACTIVATE': 'Deactivate Soundtrack',
        'AUDIO_BACK': 'Back',
        
        // ==================== ACCOUNT ====================
        'ACCOUNT_CREATE': 'Create Account',
        'ACCOUNT_SKIP': 'Skip',
        'ACCOUNT_BACK': 'Back',
        'ACCOUNT_OVERWRITE_YES': 'Yes, Overwrite',
        'ACCOUNT_OVERWRITE_NO': 'No, Go Back',
        'ACCOUNT_USERNAME': 'USERNAME:',
        'ACCOUNT_PASSWORD': 'PASSWORD:',
        'ACCOUNT_CREATE_BTN': 'CREATE ACCOUNT',
        'ACCOUNT_CANCEL_BTN': 'CANCEL / BACK',
        'ACCOUNT_SUCCESS': '[SYSTEM]: Account created successfully!',
        'ACCOUNT_SUCCESS_ENDINGS': 'Your endings are saved.',
        'ACCOUNT_SUCCESS_NO_ENDINGS': 'You do not have any endings yet.',
        'ACCOUNT_ERROR_EMPTY': '[ERROR]\nUsername and password cannot be empty.',
        'ACCOUNT_CANCELLED': '[ACCOUNT CREATION CANCELED]',
        'ACCOUNT_OVERWRITE_TITLE': 'OVERWRITE ACCOUNT',
        'ACCOUNT_OVERWRITE_MSG': '[AN ACCOUNT FILE EXISTS, DO YOU WANT TO OVERWRITE IT?]',
        
        // ==================== EASTER EGGS ====================
        'EASTER_ACTIVATE': 'Activate Easter Eggs',
        'EASTER_DEACTIVATE': 'Deactivate Easter Eggs',
        'EASTER_BACK': 'Back to settings menu',
        'EASTER_ALREADY_ON': '[EASTER EGGS ARE ALREADY ACTIVATED]',
        'EASTER_ACTIVATED': '[EASTER EGGS ACTIVATED!]',
        'EASTER_ALREADY_OFF': '[EASTER EGGS ARE ALREADY DEACTIVATED]',
        'EASTER_DEACTIVATED': '[EASTER EGGS DEACTIVATED!]',
        
        // ==================== RESTORE ====================
        'RESTORE_YES': 'Yes, Restore',
        'RESTORE_NO': 'No, Go Back',
        'RESTORE_CHECK': 'Check Folder',
        'RESTORE_NOT_FOUND': '[SAVED ENDINGS FILE NOT FOUND]',
        'RESTORE_SUCCESS': '[ENDINGS RESTORED SUCCESSFULLY]:',
        'RESTORE_ALREADY': '[ENDINGS WERE ALREADY PRESENT IN THE FOLDER]',
        'RESTORE_CANCELLED': '[RESTORATION CANCELED]',
        'RESTORE_ERROR': '[ERROR]: Failed to read or restore files:',
        
        // ==================== SUPPORT ====================
        'SUPPORT_YES': 'Yes, Open Link',
        'SUPPORT_NO': 'No, Go Back',
        'SUPPORT_OPENING': '[OPENING LINK IN DEFAULT BROWSER...]',
        'SUPPORT_DECLINED': '[OPTION DECLINED]',
        
        // ==================== LANGUAGE ====================
        'LANGUAGE_PT': 'PT (BR)',
        'LANGUAGE_EN': 'EN (US)',
        'LANGUAGE_BACK': 'Back',
        'LANGUAGE_ALREADY_PT': '[SYSTEM]\nAlready in Portuguese (BR).',
        'LANGUAGE_ALREADY_EN': '[SYSTEM]\nAlready in English (US).',
        'LANGUAGE_RESTART_TITLE': 'RESTARTING...',
        'LANGUAGE_RESTART_MSG': 'Language changed successfully.\n\nThe game will restart to apply changes.',
        
        // ==================== MUSIC ====================
        'MUSIC_ALREADY_PLAYING': '[MUSIC IS ALREADY PLAYING]',
        'MUSIC_STARTED': '[SOUNDTRACK STARTED]',
        'MUSIC_STOPPED': '[MUSIC STOPPED]',
        'MUSIC_ALREADY_STOPPED': '[MUSIC IS ALREADY STOPPED]',
        'MUSIC_NOT_FOUND': '[SOUNDTRACK]\nAudio file or vlc.exe not found.',
        
        // ==================== PROGRESS ====================
        'PROGRESS_RESTARTING': '[RESTART PROGRESS]',
        'PROGRESS_SUCCESS': '[PROGRESS RESTARTED]',
        'PROGRESS_ERROR': '[ERROR: FILE FAILED',
        
        // ==================== ACHIEVEMENTS ====================
        'ACHIEVEMENTS_TITLE': 'ACHIEVEMENTS',
        'ACHIEVEMENTS_CHECKING': '\nCHECKING FOLDERS...\n\n',
        'ACHIEVEMENTS_FOUND': '[FILES FOUND]',
        'ACHIEVEMENTS_NONE': '[NO ENDING FILES FOUND]',
        'ACHIEVEMENTS_KEEP': '-> If you want to keep these endings, DO NOT RESTORE THEM.',
        'ACHIEVEMENTS_ERROR': '[FILE ERROR]: Could not read the achievements folder.',
        
        // ==================== CREDITS ====================
        'CREDITS_TITLE': 'CREDITS',
        'CREDITS_CONTENT': '[OUR TEAM]\nProgramming:\nLucas Eduardo\n\nBeta Testers:\nIsabella Sanches, Kayc Felix and Luiz Otávio\n\nScript:\nLucas Eduardo\n\nArt:\nLucas Eduardo\n\nMusic:\nRyan Creep (Youtube.com)\n\nSpecial Thanks:\nSENAI Team\n\nTHANK YOU FOR PLAYING OUR GAME!',
        
        // ==================== SUPPORT ====================
        'SUPPORT_TITLE': 'SUPPORT THE GAME',
        'SUPPORT_CONTENT': 'If you want to support the game\'s development, you can make a donation,\nany amount is welcome and helps a lot with the game\'s development!\nYou can also leave a review on the game page!\n\nDonation link: https://the-last-deploy.itch.io/pale-luna\n\n[OPEN?]',
        
        // ==================== SPLASH / BOOT ====================
        'SPLASH_LOADING': 'LOADING...',
        'SPLASH_PRESS_ENTER': 'Welcome to ECHOES OF THE NIGHT. Press ENTER to begin.\n\n[TIP]: Use the arrow keys to navigate options.',
        
        // ==================== UI GENERAL ====================
        'UI_SELECT_OPTION': 'Select an option on the side.\nUse arrow keys to navigate and Enter to select.',
        'UI_FOOTER': 'Use the ↑/↓ arrow keys and Enter. Press Q or Ctrl+C to exit.',
        'UI_ALERT': 'ALERT',
        'UI_SYSTEM_ALERT': '[SYSTEM ALERT]',
        'UI_PRESS_ANY_KEY': '[PRESS ANY KEY TO CONTINUE]',
        'UI_ERROR_CRITICAL': '[CRITICAL ERROR]',
        
        // ==================== VERIFY ENDINGS ====================
        'VERIFY_TITLE': 'ENDING VERIFICATION',
        'VERIFY_FOUND': '[FILES FOUND IN CURRENT PROGRESS]:',
        'VERIFY_NONE': '[NO ENDINGS FOUND!]',
        
        // ==================== ACHIEVEMENT NAMES ====================
        'ACH_BAD_ENDING': 'YOU COMPLETED THE FIRST BAD ENDING',
        'ACH_BAD_ENDING_2': 'YOU COMPLETED THE SECOND BAD ENDING',
        'ACH_BAD_ENDING_3': 'YOU COMPLETED THE THIRD BAD ENDING',
        'ACH_GOOD_ENDING': 'YOU COMPLETED THE GOOD ENDING',
        'ACH_REAL_ENDING': 'YOU COMPLETED THE REAL ENDING',
        'ACH_SECRET_ENDING': 'YOU COMPLETED THE SECRET ENDING',
        
        // ==================== ERRORS ====================
        'ERROR_CRITICAL_HANDLER': '[CRITICAL HANDLER ERROR]',
        'ERROR_CRITICAL_ACTION': '[CRITICAL ACTION ERROR]',
        'ERROR_START_GAME': 'Error starting game:',
        'ERROR_ACCOUNT_WRITE': '[CRITICAL ERROR]: Failed to create account or save file.',
        'ERROR_EXE_NOT_FOUND': '[ERROR]\nExecutable not found: {exe}\n\nCheck if the file exists in the root folder.',
    }
};

// ===================== CONFIGURAÇÃO DE IDIOMA =====================
let currentLang = 'PT';
const langPath = path.join(__dirname, '../CONFIG/LANG.txt');

try {
    const configDir = path.join(__dirname, '../CONFIG');
    if (!fs.existsSync(configDir)) {
        fs.mkdirSync(configDir, { recursive: true });
    }
    
    if (fs.existsSync(langPath)) {
        const savedLang = fs.readFileSync(langPath, 'utf8').trim().toUpperCase();
        if (savedLang === 'PT' || savedLang === 'EN') {
            currentLang = savedLang;
        }
    } else {
        fs.writeFileSync(langPath, currentLang, 'utf8');
    }
} catch (e) {
    // Se falhar, mantém PT como padrão
}

function t(key, replacements = {}) {
    let text = strings[currentLang]?.[key] || strings['PT']?.[key] || key;
    
    Object.keys(replacements).forEach(r => {
        text = text.replace(new RegExp(`{${r}}`, 'g'), replacements[r]);
    });
    
    return text;
}

function setLanguage(lang) {
    if (lang !== 'PT' && lang !== 'EN') return false;
    currentLang = lang;
    try {
        const configDir = path.join(__dirname, '../CONFIG');
        if (!fs.existsSync(configDir)) {
            fs.mkdirSync(configDir, { recursive: true });
        }
        fs.writeFileSync(langPath, lang, 'utf8');
    } catch (e) {}
    return true;
}

function getLanguage() {
    return currentLang;
}

module.exports = { t, setLanguage, getLanguage };