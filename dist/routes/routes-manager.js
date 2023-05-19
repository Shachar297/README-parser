"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
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
// router.post("/parse", readmeAPI.parse);
exports.default = Router;
