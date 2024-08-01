"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SyncPeaks = exports.peaks = void 0;
const utils_1 = require("../../utils/utils");
exports.peaks = {};
async function getPeaks() {
    try {
        const [rows] = await utils_1.dbAsteriskcdrConnection.query(`
            SELECT 
                EXTRACT(SECOND FROM time) as time
            FROM queue_log 
            WHERE event LIKE '%QUEUE%' 
                AND time > DATE_SUB(cast(now() as datetime), INTERVAL 60 SECOND)
            GROUP BY time
            ORDER BY time
        `);
        return (exports.peaks = rows);
    }
    finally {
    }
}
async function SyncPeaks() {
    try {
        const result = await getPeaks();
        return result;
    }
    catch (error) {
        console.error('Erro:', error.message);
    }
}
exports.SyncPeaks = SyncPeaks;
//# sourceMappingURL=peaks.js.map