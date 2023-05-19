"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router(), readmeAPI = require("../src/readmeAPI.js"), filesModule = require("../src/files.js"), path = require("path");
router.post("/parse", readmeAPI.parse);
router.get("/.well-known/ai-plugin.json", (req, res) => {
    filesModule.readFile(`.well-known`, `ai-plugin.json`).then((fileContent) => {
        res.send(fileContent);
    }).catch((e) => {
        console.log(e);
    });
});
router.get("/openapi.yaml", (req, res) => {
    filesModule.readFile(`.`, `openapi.yaml`).then((fileContent) => {
        res.send(fileContent);
    }).catch((e) => {
        console.log(e);
    });
});
module.exports = router;
