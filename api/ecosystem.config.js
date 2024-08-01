module.exports = {
  apps: [
    {
      name: 'nestjs-app',
      script: 'dist/main.js',
      instances: 'max', // Use 'max' para rodar a aplicação em todos os núcleos disponíveis
      exec_mode: 'cluster', // Modo de execução em cluster
      watch: false, // Desative o watch para o ambiente de produção
      interpreter: '~/.nvm/versions/node/v16.0.0/bin/node', // Caminho para o Node.js 16
      // env: {
      //   NODE_ENV: 'development',
      // },
      // env_production: {
      //   NODE_ENV: 'production',
      // },
    },
  ],
};
