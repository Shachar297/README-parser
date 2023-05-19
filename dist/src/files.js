"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = __importDefault(require("fs"));
class FilesModule {
    constructor() { }
    readFile(filePath, fileName) {
        return new Promise((resolve, reject) => {
            fs_1.default.readFile(`${filePath}/${fileName}`, "utf8", (e, data) => {
                if (e) {
                    reject(e);
                }
                resolve(data);
            });
        });
    }
}
exports.default = FilesModule;
