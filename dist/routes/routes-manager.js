"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import readmeAPI from '../src/readmeAPI';
const files_1 = __importDefault(require("../src/files"));
class Router {
    constructor(filesModule) {
        this.router = express_1.default.Router();
        this.router.get("/.well-known/ai-plugin.json", (req, res) => {
            filesModule
                .readFile(`.well-known`, `ai-plugin.json`)
                .then((fileContent) => {
                res.send(fileContent);
            })
                .catch((e) => {
                console.log(e);
            });
        });
        this.router.get("/openapi.yaml", (req, res) => {
            filesModule
                .readFile(`.`, `openapi.yaml`)
                .then((fileContent) => {
                res.send(fileContent);
            })
                .catch((e) => {
                console.log(e);
            });
        });
    }
}
const filesModule = new files_1.default();
const router = new Router(filesModule);
// router.post("/parse", readmeAPI.parse);
exports.default = Router;
