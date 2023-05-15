const
    executors = require("./executors");

function parse(req, res, next) {
    let 
        url = req.body.url;

        
        url = url.replaceAll(".git", "/main/README.md");
        url = url.replaceAll("https://github.com", "https://raw.githubusercontent.com")

        let command = `curl ${url} > README.md`;
        console.log(command)

        // executors.executeCommandSync(command).then(res => {
        //     console.log(res)
        // }).catch(e => {
        //     console.log(e)
        // });
}

module.exports = {
    parse
}