"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SocketService = exports.agentsOnline = void 0;
const common_1 = require("@nestjs/common");
const asterisk_events_1 = require("../asterisk/event/asterisk.events");
const connectedClients = new Map();
exports.agentsOnline = new Map();
let SocketService = class SocketService {
    handleConnection(socket) {
        const clientId = socket.id;
        console.log('Cliente Conectado ID: ', clientId);
        connectedClients.set(clientId, socket);
        socket.on('Buffer', () => {
            this.emitEvent('Buffer', JSON.stringify(Object.fromEntries(asterisk_events_1.agentInfo)));
        });
        socket.on('Buffer2', () => {
            this.emitEvent('Buffer2', JSON.stringify(asterisk_events_1.pausedWithExceededLimit));
        });
        socket.on('Buffer3', () => {
            this.emitEvent('Buffer3', JSON.stringify(asterisk_events_1.abandonedCalls));
        });
        socket.on('Buffer4', () => {
            this.emitEvent('Buffer4', JSON.stringify(asterisk_events_1.metricsArray));
        });
        socket.on('Buffer5', () => {
            this.emitEvent('Buffer5', JSON.stringify(asterisk_events_1.customMetrics));
        });
        socket.on('clear', () => {
            (0, asterisk_events_1.clearPausedWithExceededLimit)();
            this.emitEvent('ExceededLimit', JSON.stringify(asterisk_events_1.pausedWithExceededLimit));
        });
        socket.on('callDuration', () => {
            (0, asterisk_events_1.getCallDuration)();
        });
        socket.on('disconnect', () => {
            connectedClients.delete(clientId);
            exports.agentsOnline.delete(clientId);
            console.log('Agentes Online:', exports.agentsOnline);
        });
        socket.on('agentLogin', (agentInfo) => {
            exports.agentsOnline.set(clientId, agentInfo);
            console.log('Agentes Online:', exports.agentsOnline);
            this.emitEvent('agentsOnline', JSON.stringify(Object.fromEntries(exports.agentsOnline)));
        });
        socket.on('clientMessage', (message) => {
            console.log('Messagem do Client Socket: ' + JSON.stringify(message));
        });
        socket.emit('message', 'Conectado ao Socket do Servidor!');
    }
    emitEvent(eventName, data) {
        connectedClients.forEach((socket) => {
            socket.emit(eventName, data);
        });
    }
};
exports.SocketService = SocketService;
exports.SocketService = SocketService = __decorate([
    (0, common_1.Injectable)({ scope: common_1.Scope.DEFAULT })
], SocketService);
//# sourceMappingURL=socket.service.js.map