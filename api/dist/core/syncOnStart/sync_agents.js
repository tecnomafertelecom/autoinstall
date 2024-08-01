"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncAgents = exports.storedAgents = void 0;
const agents_service_1 = require("../../feature/agents/agents.service");
const agent_repository_1 = require("../../feature/agents/repository/agent.repository");
const prisma_service_1 = require("../../prisma/prisma.service");
const mysql = require('mysql2/promise');
const fs = require('fs');
exports.storedAgents = new Map();
const prismaService = new prisma_service_1.PrismaService();
const agentRepository = new agent_repository_1.AgentRepository(prismaService);
const agentService = new agents_service_1.AgentsService(agentRepository);
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
async function obterAgentes(issabelConfig) {
    const connection = await mysql.createConnection(issabelConfig);
    try {
        const [rows] = await connection.query('SELECT * FROM agent');
        await rows
            .filter((a) => a.estatus === 'A')
            .map(async (agent) => {
            const createagent = {
                name: agent.name,
                email: '',
                extension: Number(agent.number),
                photo: '',
                login: agent.number,
                password: agent.password,
                token: '',
                refreshToken: '',
            };
            await agentService.create(createagent);
        });
    }
    finally {
        await connection.end();
    }
}
async function SyncAgents() {
    try {
        const senhaMysqlRoot = lerSenhaMysqlRoot();
        const issabelConfig = {
            host: 'localhost',
            user: 'root',
            password: senhaMysqlRoot,
            database: 'call_center',
        };
        await obterAgentes(issabelConfig);
    }
    catch (error) {
        console.error('Erro:', error.message);
    }
}
exports.SyncAgents = SyncAgents;
//# sourceMappingURL=sync_agents.js.map