#!/bin/bash

# Limpar a tela
clear
echo "Sistema de Arquivos Secretos - Acesso Restrito"
echo

# Definir caminhos
arquivos1="$(xdg-user-dir PICTURES)/Code_01.txt"
arquivos2="$(xdg-user-dir DOCUMENTS)/Code_02.txt"
arquivos3="$(xdg-user-dir MUSIC)/Code_03.txt"


# Criar arquivos com códigos
echo "PoliceMonitorCode: 910145771" > "$arquivos3"
echo "PoliceMonitorCode: 79484671246" > "$arquivos2"
echo "PoliceMonitorCode: 649781256" > "$arquivos1"

echo "[SISTEMA DE ARQUIVOS RESTRITOS]"
echo "Verificando credenciais de acesso..."
sleep 2
echo "Acesso concedido."
sleep 1
echo

echo "Bem-vindo ao servidor da Policia Nacional."
echo "Sua missao: localizar as senhas nos arquivos protegidos."
echo "ATENCAO: Todas as suas acoes estao sendo monitoradas."
echo

# Primeira senha
read -p "Digite a senha do ARQUIVO 1: " senha1
if [ "$senha1" != "649781256" ]; then
    echo "[ERRO] Credenciais invalidas. Tentativa registrada."
    exit 1
fi
echo
echo "[SUCESSO] Primeira senha verificada."
sleep 1

# Segunda senha
read -p "Digite a senha do ARQUIVO 2: " senha2
if [ "$senha2" != "79484671246" ]; then
    echo "[ERRO] Credenciais invalidas. Tentativa registrada."
    exit 1
fi
echo
echo "[SUCESSO] Segunda senha verificada."
sleep 1

# Terceira senha
read -p "Digite a senha do ARQUIVO 3: " senha3
if [ "$senha3" != "910145771" ]; then
    echo "[ERRO] Credenciais invalidas. Tentativa registrada."
    exit 1
fi
clear
echo "[SUCESSO] Todas as senhas foram verificadas com sucesso."
echo

echo "Acesso completo aos arquivos secretos. Continue com cautela."
echo 
echo "[ARQUIVO: EV_20061027_LocalCrime_A.txt (DESKTOP)]"
echo "[ARQUIVO: SOCORRO.TXT (DOCUMENTS)]"
./package.sh
echo
sleep 3
echo "Encerrando sistema..."
sleep 2

