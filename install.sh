#!/bin/bash

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

# Detectar o sistema operacional
os_name=$(cat /etc/os-release | grep ^ID= | cut -d'=' -f2 | tr -d '"')

case $os_name in
    ubuntu)
        install_ubuntu
        ;;
    centos)
        install_centos_rocky
        ;;
    rocky)
        install_centos_rocky
        ;;
    *)
        echo "Sistema operacional não suportado. Este script suporta apenas Ubuntu, CentOS 7 e Rocky Linux 8."
        exit 1
        ;;
esac
