const
    executors = require("./executors");

function parse(req, res, next) {
    const 
        url = req.body.url || "",
        command = `git clone ${url}`;

        exec
}

module.exports = {
    parse
}