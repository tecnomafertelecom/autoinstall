"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncTrunks = exports.trunksServer = void 0;
const utils_1 = require("../../utils/utils");
const mysql = require('mysql2/promise');
exports.trunksServer = new Map();
async function getTrunks(issabelConfig) {
    const connection = await mysql.createConnection(issabelConfig);
    try {
        const [rows] = await connection.query('SELECT * FROM trunks');
        await rows.map(async (trunk) => {
            const trunkInfo = {
                trunkid: trunk.trunkid,
                name: trunk.name,
                tech: trunk.tech,
                channelid: trunk.channelid,
                usercontext: trunk.usercontext,
                disabled: trunk.disabled,
                continue: trunk.continue,
            };
            exports.trunksServer.set(trunk.name, trunkInfo);
        });
    }
    finally {
        await connection.end();
    }
}
async function SyncTrunks() {
    try {
        const senhaMysqlRoot = (0, utils_1.lerSenhaMysqlRoot)();
        const issabelConfig = {
            host: 'localhost',
            user: 'root',
            password: senhaMysqlRoot,
            database: 'asterisk',
        };
        await getTrunks(issabelConfig);
    }
    catch (error) {
        console.error('Erro:', error.message);
    }
}
exports.SyncTrunks = SyncTrunks;
//# sourceMappingURL=sync_trunks.js.map