"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const https_1 = __importDefault(require("https"));
const path_1 = __importDefault(require("path"));
const fs_1 = __importDefault(require("fs"));
const cors_1 = __importDefault(require("cors"));
const port = process.env.PORT || 8888, httpsOptions = {
    key: fs_1.default.readFileSync("./crt/server.key"),
    cert: fs_1.default.readFileSync("./crt/server.cert"),
};
require("dotenv").config();
class App {
    constructor(controller, port, routerManager) {
        this.server = (0, express_1.default)();
        this.port = port;
        this.httpsServer = https_1.default.createServer(httpsOptions, this.server);
        this.server.use((0, cors_1.default)({ origin: "*" }));
        this.server.use(express_1.default.json());
        this.server.use("", routerManager.router);
        this.server.use("/.well-known", express_1.default.static(path_1.default.join(__dirname, ".well-known")));
        this.httpsServer.listen(process.env.HTTPS_PORT, () => {
            console.log(`https server listening on ${process.env.HTTPS_PORT}`);
        });
    }
}
// server.listen(port, () => console.log('README parser is ready to migrate !\n          Listening at port : ' + port + "         "));
exports.default = App;
