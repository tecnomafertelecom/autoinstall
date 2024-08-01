#!/bin/bash

# Baixar e instalar o NVM
if ! command -v nvm &> /dev/null
then
    echo "NVM não está instalado. Instalando o NVM..."
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash
    export NVM_DIR="$HOME/.nvm"
    [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
    [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
else
    echo "NVM já está instalado."
fi

# Instalar a versão 16 do Node.js e definir como padrão
nvm install 16
nvm use 16
nvm alias default 16

# Verificar a versão do Node.js
node -v

# Verificar a versão do npm
npm -v

# Instalar o PM2 globalmente
npm install -g pm2

# Configurar o PM2 para iniciar no boot
pm2 startup systemd -u $USER --hp $HOME

# Exibir a versão do PM2 para verificar a instalação
pm2 -v

echo "Instalação do PM2 concluída com sucesso."
