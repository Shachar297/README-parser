const
    executors = require("./executors");

function parse(req, res, next) {
    let 
        url = req.body.url;

        
        url = url.replace("github.com", "raw.githubusercontent.com")
        url = url.replace(".git", "/main/README.md");

        let command = `curl ${url} > README.md`;

        // executors.executeCommandSync(command).then(res => {
        //     console.log(res)
        // }).catch(e => {
        //     console.log(e)
        // });
}

module.exports = {
    parse
}