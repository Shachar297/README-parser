const
    executors = require("./executors");

function parse(req, res, next) {
    const 
        url = req.body.url || "",
        command = `git clone ${url}`;

        // executors;
}

module.exports = {
    parse
}