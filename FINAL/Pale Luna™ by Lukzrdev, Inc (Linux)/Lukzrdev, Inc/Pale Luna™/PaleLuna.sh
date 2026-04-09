#!/bin/bash

# Título no terminal
echo "Pale Luna"
echo

# Verificar se o Node.js está instalado
if ! command -v node &> /dev/null; then
  echo "Node.js nao encontrado. Instale para continuar."
  exit 1
fi

echo
echo "Aviso: Sistemas mais antigos podem ter problemas ao exibir algumas coisas."
echo

# Menu de opções
echo "Escolha uma das opcoes abaixo:"
echo "[1] Abrir o jogo"
echo "[2] Cancelar"
echo

# Ler entrada do usuário
read -p "Digite o numero correspondente: " escolha

# Executar conforme a escolha do usuário
if [[ "$escolha" == "1" ]]; then
  echo "Voce aceitou continuar."
  cd assets || { echo "Erro: Pasta 'assets' nao encontrada."; exit 1; }

  if [[ ! -f "Pale Luna.js" ]]; then
    echo "Erro: Arquivo 'Pale Luna.js' nao encontrado na pasta 'assets'."
    exit 1
  fi

  node "Pale Luna.js"
  echo "Jogo encerrado."
  exit 0

elif [[ "$escolha" == "2" ]]; then
  echo "Operacao abortada."
  exit 1

else
  echo "Opcao invalida. Tente novamente."
  exit 1
fi
