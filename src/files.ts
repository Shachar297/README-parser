const fs = require('fs');

function readFile(filePath: String, fileName: String) {
    return new Promise((resolve, reject) => {
        fs.readFile(`${filePath}/${fileName}`, "utf8", (e: any, data: String) => {
            if(e) {
                reject(e)
            }
            resolve(data)
        })
    })
}


module.exports = {
    readFile
}