const
    { exec, execSync, spawn } = require("child_process");

    function executeCommandSync(config : any) {
        let response : any;
        return new Promise((resolve, reject) => {
            try {
                response = execSync(config);
    
            } catch (error) {
                resolve(error);
            }
    
            resolve(response.toString());
        })
    
    
    }

    
module.exports = {
    executeCommandSync
}