const
    executors = require("./executors");

function parse(req, res, next) {
    let 
        url = req.body.url,
        timestamp = new Date().getTime();

        
        url = url.replaceAll(".git", "/main/README.md");
        url = url.replaceAll("https://github.com", "https://raw.githubusercontent.com")

        let command = `curl ${url} > ${timestamp}.md`;
        console.log(command)

        executors.executeCommandSync(command).then(res => {
            console.log(res)
        }).catch(e => {
            console.log(e)
        });
}

module.exports = {
    parse
}