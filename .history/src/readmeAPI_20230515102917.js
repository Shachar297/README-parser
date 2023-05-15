

function parse(req, res, next) {
    const 
        url = req.body.url || "",
        command = `git clone ${url}`;


}

module.exports = {
    parse
}