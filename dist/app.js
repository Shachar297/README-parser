"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors = require('cors'), server = (0, express_1.default)(), port = process.env.PORT || 8888, routersManager = require('./routes/routes-manager'), fs = require('fs'), https = require('https'), path = require('path'), httpsOptions = {
    key: fs.readFileSync('./crt/server.key'),
    cert: fs.readFileSync('./crt/server.cert')
};
require("dotenv").config();
const httpServer = https.createServer(httpsOptions, server);
server.use("/.well-known", express_1.default.static(path.join(__dirname, '.well-known')));
server.use(cors({ origin: '*' }));
server.use(express_1.default.json());
server.use('', routersManager);
// server.listen(port, () => console.log('README parser is ready to migrate !\n          Listening at port : ' + port + "         "));
httpServer.listen(process.env.HTTPS_PORT, () => {
    console.log(`https server listening on ${process.env.HTTPS_PORT}`);
});
