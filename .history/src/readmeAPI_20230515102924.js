

function parse(req, res, next) {
    const 
        url = req.body.url || "",
        command = `git clone ${url}`;

        exe
}

module.exports = {
    parse
}