"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncBreaks = exports.storedBreaks = void 0;
const breaks_service_1 = require("../../feature/breaks/breaks.service");
const utils_1 = require("../../utils/utils");
const prisma_service_1 = require("../../prisma/prisma.service");
const breaks_repository_1 = require("../../feature/breaks/repository/breaks.repository");
const mysql = require('mysql2/promise');
exports.storedBreaks = new Map();
const prismaService = new prisma_service_1.PrismaService();
const breakRepository = new breaks_repository_1.BreaksRepository(prismaService);
const breakService = new breaks_service_1.BreaksService(breakRepository);
async function getBreaks(issabelConfig) {
    const connection = await mysql.createConnection(issabelConfig);
    try {
        const [rows] = await connection.query(`
        SELECT
        id,
        description
        FROM break WHERE status = 'A'
        `);
        for (const breakRow of rows) {
            const { description } = breakRow;
            const breakInfo = {
                reason: description,
                time: 0,
            };
            const breakProps = await breakService.create(breakInfo);
            exports.storedBreaks.set(breakProps, breakProps);
        }
    }
    finally {
        await connection.end();
    }
}
async function SyncBreaks() {
    try {
        const senhaMysqlRoot = (0, utils_1.lerSenhaMysqlRoot)();
        const issabelConfig = {
            host: 'localhost',
            user: 'root',
            password: senhaMysqlRoot,
            database: 'call_center',
        };
        await getBreaks(issabelConfig);
    }
    catch (error) {
        console.error('Erro:', error.message);
    }
}
exports.SyncBreaks = SyncBreaks;
//# sourceMappingURL=sync_breaks.js.map