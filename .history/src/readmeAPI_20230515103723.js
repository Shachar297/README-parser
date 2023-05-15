const
    executors = require("./executors");

function parse(req, res, next) {
    let 
        url = req.body.url || "";
        let command = `git clone ${url}`;

        executors.executeCommandSync(command).then(res => {
            console.log(res)
        }).catch(e => {
            console.log(e)
        });
}

module.exports = {
    parse
}