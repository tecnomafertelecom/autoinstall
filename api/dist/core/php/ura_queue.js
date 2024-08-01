"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncUraQueues = exports.uraqueuesServer = void 0;
const utils_1 = require("../../utils/utils");
exports.uraqueuesServer = {};
async function getUraQueues() {
    try {
        const [rows] = await utils_1.dbAsteriskcdrConnection.query(`
      SELECT 
          (SELECT COUNT(*)
           FROM cdr
           WHERE SUBSTRING(dcontext, 1, 3) = 'ivr'
             AND DATE_FORMAT(calldate, '%d/%m/%Y') 
             AND calldate > DATE_SUB(now(), INTERVAL 30 MINUTE)
          ) AS ura,
          (SELECT COUNT(*)
           FROM cdr
           WHERE SUBSTRING(dcontext, 1, 10) = 'ext-queues'
             AND DATE_FORMAT(calldate, '%d/%m/%Y') 
             AND calldate > DATE_SUB(now(), INTERVAL 30 MINUTE)
          ) AS fila
  `);
        return (exports.uraqueuesServer = rows);
    }
    finally {
    }
}
async function SyncUraQueues() {
    try {
        return await getUraQueues();
    }
    catch (error) {
        console.error('Erro:', error.message);
    }
}
exports.SyncUraQueues = SyncUraQueues;
//# sourceMappingURL=ura_queue.js.map