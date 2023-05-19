"use strict";
const { exec, execSync, spawn } = require("child_process");
function executeCommandSync(config) {
    let response;
    return new Promise((resolve, reject) => {
        try {
            response = execSync(config);
        }
        catch (error) {
            resolve(error);
        }
        resolve(response.toString());
    });
}
module.exports = {
    executeCommandSync
};
