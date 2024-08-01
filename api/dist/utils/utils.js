"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dbCallCenterConnection = exports.dbAsteriskcdrConnection = exports.dbAsteriskConnection = exports.lerSenhaMysqlRoot = void 0;
const fs = require('fs');
const mysql = require('mysql2/promise');
function lerSenhaMysqlRoot(confPath = '/etc/issabel.conf') {
    try {
        const conteudoArquivo = fs.readFileSync(confPath, 'utf-8');
        const linhas = conteudoArquivo.split('\n');
        const linhaSenhaMysqlRoot = linhas.find((linha) => linha.includes('mysqlrootpwd'));
        if (linhaSenhaMysqlRoot) {
            const senhaMysqlRoot = linhaSenhaMysqlRoot.split('=')[1].trim();
            return senhaMysqlRoot;
        }
        else {
            throw new Error('A linha mysqlrootpwd não foi encontrada no arquivo de configuração.');
        }
    }
    catch (error) {
        console.error('Erro ao ler a senha mysqlrootpwd do arquivo de configuração:', error.message);
        throw error;
    }
}
exports.lerSenhaMysqlRoot = lerSenhaMysqlRoot;
exports.dbAsteriskConnection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: lerSenhaMysqlRoot(),
    database: 'asterisk',
    connectionLimit: 10,
});
exports.dbAsteriskcdrConnection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: lerSenhaMysqlRoot(),
    database: 'asteriskcdrdb',
    connectionLimit: 10,
});
exports.dbCallCenterConnection = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: lerSenhaMysqlRoot(),
    database: 'call_center',
    connectionLimit: 10,
});
//# sourceMappingURL=utils.js.map