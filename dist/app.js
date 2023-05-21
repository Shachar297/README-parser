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
const routes_manager_1 = __importDefault(require("./routes/routes-manager"));
const files_1 = __importDefault(require("./src/files"));
require("dotenv").config();
class App {
    constructor(port, routerManager) {
        this.server = (0, express_1.default)();
        this.port = port;
        this.routerManager = routerManager;
        this.server.use((0, cors_1.default)({ origin: "*" }));
        this.server.use(express_1.default.json());
        this.server.use("", routerManager.router);
        this.server.use("/.well-known", express_1.default.static(path_1.default.join(__dirname, ".well-known")));
    }
    start() {
        const httpsOptions = {
            key: fs_1.default.readFileSync("./crt/server.key"),
            cert: fs_1.default.readFileSync("./crt/server.cert"),
        };
        https_1.default.createServer(httpsOptions, this.server).listen(this.port, () => {
            console.log(`Server is listening on ${this.port}`);
        });
    }
}
exports.default = App;
const filesModule = new files_1.default(), routerManager = new routes_manager_1.default(filesModule), server = new App(443, routerManager);
server.start();
