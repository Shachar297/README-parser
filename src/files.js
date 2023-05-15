const fs = require('fs');

function readFile(filePath, fileName) {
    return new Promise((resolve, reject) => {
        fs.readFile(`${filePath}/${fileName}`, "utf8", (e, data) => {
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