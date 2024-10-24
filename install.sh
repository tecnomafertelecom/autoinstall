#!/bin/bash

# Função para solicitar IP e porta e substituir em arquivos
# configurar_ip_porta() {
#     # Solicitar o IP e a porta ao usuário
#     read -p "Digite o IP do SERVIDOR WEB: " IP
#     #read -p "Digite a PORTA do SERVIDOR WEB: " PORTA

#     # Verificar se as variáveis foram preenchidas
#     #if [ -z "$IP" ] || [ -z "$PORTA" ]; then
#     if [ -z "$IP" ]; then
#         echo "IP não fornecidos. Abortando a instalação."
#         exit 1
#     fi

#     # Substituir o IP nos arquivos .js
#     substituir_ip_js "$IP"

#     echo "Configuração de IP e porta concluída."
# }

# substituir_ip_js() {
#     local novo_ip=$1
#     local ip_antigo="177.45.80.177"
#     local diretorio="/var/www/html/reports_2/js/"

#     # Verificar se o diretório existe
#     if [ ! -d "$diretorio" ]; then
#         echo "Diretório $diretorio não encontrado."
#         exit 1
#     fi

#     # Encontrar e substituir o IP antigo pelo novo nos arquivos .js
#     for arquivo in "$diretorio"*.js; do
#         if [ -f "$arquivo" ]; then
#             sed -i "s/$ip_antigo/$novo_ip/g" "$arquivo"
#             echo "Substituído IP em $arquivo"
#         fi
#     done
# }

# Função para instalar Docker e Docker Compose no Ubuntu
install_ubuntu() {
    # Desinstalar versões anteriores do Docker
    sudo apt-get remove -y docker* containerd runc

    # Instalar dependências iniciais
    sudo apt-get install -y apt-transport-https ca-certificates curl gnupg lsb-release

    # Adicionar a chave pública do repositório Docker em nossa máquina
    curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

    # Adicionar o repositório remoto na lista do apt
    echo "deb [arch=amd64 signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

    # Atualizar a lista de pacotes e instalar o Docker
    sudo apt-get update
    sudo apt-get install -y docker-ce docker-ce-cli containerd.io

    # Adicionar o usuário ao grupo Docker
    sudo groupadd docker
    sudo usermod -aG docker $USER

    # Habilitar o daemon do Docker para iniciar durante o boot
    sudo systemctl enable docker

    # Iniciar o serviço do Docker
    sudo systemctl start docker

    # Verificar o status do serviço do Docker
    sudo systemctl status docker

    # Instalar o Docker Compose
    sudo curl -L "https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

    # Dar permissão de execução ao Docker Compose
    sudo chmod +x /usr/local/bin/docker-compose

    # Validar a instalação do Docker Compose
    docker-compose --version
}

# Função para instalar Docker e Docker Compose no CentOS 7 ou Rocky Linux 8
install_centos_rocky() {
    # Desinstalar versões anteriores do Docker
    sudo yum remove -y docker* containerd.io

    # Instalar dependências iniciais
    sudo yum install -y yum-utils device-mapper-persistent-data lvm2

    # Adicionar o repositório Docker
    sudo yum-config-manager --add-repo https://download.docker.com/linux/centos/docker-ce.repo

    # Atualizar a lista de pacotes e instalar o Docker
    sudo yum install -y docker-ce docker-ce-cli containerd.io

    # Adicionar o usuário ao grupo Docker
    sudo groupadd docker
    sudo usermod -aG docker $USER

    # Habilitar o daemon do Docker para iniciar durante o boot
    sudo systemctl enable docker

    # Iniciar o serviço do Docker
    sudo systemctl start docker

    # Verificar o status do serviço do Docker
    sudo systemctl status docker

    # Instalar o Docker Compose
    sudo curl -L "https://github.com/docker/compose/releases/download/v2.5.0/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose

    # Dar permissão de execução ao Docker Compose
    sudo chmod +x /usr/local/bin/docker-compose

    # Validar a instalação do Docker Compose
    docker-compose --version
}

cloneRepositorio() {
    
    # Definir a URL do repositório
    REPO_URL="https://github.com/tecnomafertelecom/autoinstall.git"

    # Definir o diretório de destino para clonar o repositório
    CLONE_DIR="/home/tecnomafer"

    # Definir o diretório de origem dos arquivos a serem copiados
    SOURCE_DIR="$CLONE_DIR/frontend/dist"
    SOURCE_DIR_BACKEND="$CLONE_DIR/backend"
    SOURCE_DIR_CALLCENTER_JS="$CLONE_DIR/callcenter/javascript.js"
    SOURCE_DIR_CALLCENTER_TPL="$CLONE_DIR/callcenter/javascript.js"
    # Definir o diretório de destino dos arquivos copiados
    DEST_DIR="/var/www/html/reports_2"
    DEST_DIR_BACKEND="/var/www/html"
    DEST_DIR_CALLCENTER_JS="/var/www/html/modules/agent_console/themes/default/js/"
    DEST_DIR_CALLCENTER_TPL="/var/www/html/modules/agent_console/themes/default/js/"
    # Clonar o repositório
    git clone "$REPO_URL" "$CLONE_DIR"

    # Verificar se o clone foi bem-sucedido
    if [ $? -eq 0 ]; then
        echo "Repositório clonado com sucesso em $CLONE_DIR"
    else
        echo "Falha ao clonar o repositório"
        exit 1
    fi

    # Verificar se o diretório SOURCE_DIR existe
    if [ -d "$SOURCE_DIR" ]; then
        # Criar o diretório de destino, se não existir
        mkdir -p "$DEST_DIR"

        # Copiar os arquivos da pasta dist para o diretório de destino
        cp -r "$SOURCE_DIR/"* "$DEST_DIR"
        cp -r "$SOURCE_DIR_BACKEND/"* "$DEST_DIR_BACKEND"
        cp -r "$SOURCE_DIR_CALLCENTER_JS" "$DEST_DIR_CALLCENTER_JS"
        cp -r "$SOURCE_DIR_CALLCENTER_TPL" "$DEST_DIR_CALLCENTER_TPL"
        # Verificar se a cópia foi bem-sucedida
        if [ $? -eq 0 ]; then
            echo "Arquivos copiados com sucesso para $DEST_DIR"
        else
            echo "Falha ao copiar os arquivos"
            exit 1
        fi
    else
        echo "O diretório $SOURCE_DIR não existe"
        exit 1
    fi
}
install_api() {
    # Verificar e instalar dependências necessárias
    sudo yum install -y curl git

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

    # Instalar o PM2 globalmente
    npm install -g pm2

    # Configurar o PM2 para iniciar no boot
    sudo pm2 startup systemd -u $USER --hp $HOME
    cd /home/tecnomafer/api
    docker compose up -d
    npm install
    npx prisma migrate deploy
    pm2 start /home/tecnomafer/api/dist/main.js --name api
    pm2 save
    sudo systemctl enable pm2-$USER

    echo "Instalação do PM2 concluída com sucesso."
}

# Detectar o sistema operacional
os_name=$(cat /etc/os-release | grep ^ID= | cut -d'=' -f2 | tr -d '"')


case $os_name in
    ubuntu)
        cloneRepositorio
        install_ubuntu
        install_api
        # configurar_ip_porta
        ;;
    centos)
        cloneRepositorio
        install_centos_rocky
        install_api
        # configurar_ip_porta
        ;;
    rocky)
        cloneRepositorio
        install_centos_rocky
        install_api
        # configurar_ip_porta
        ;;
    *)
        echo "Sistema operacional não suportado. Este script suporta apenas Ubuntu, CentOS 7 e Rocky Linux 8."
        exit 1
        ;;
esac
