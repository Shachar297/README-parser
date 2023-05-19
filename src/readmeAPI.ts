import {Request, Response, NextFunction} from 'express';

const
    executors = require("./executors"),
    fileModule = require("./files");

function parse(req: Request, res: Response, next: NextFunction) {
    let 
        url = req.body.url,
        timestamp = new Date().getTime();

        
        url = url.replaceAll(".git", "/main/README.md");
        url = url.replaceAll("https://github.com", "https://raw.githubusercontent.com")

        let command = `curl ${url} > ${timestamp}.md`;
        console.log(command)

        executors.executeCommandSync(command).then((readme: String) => {
            fileModule.readFile(`.`, `${timestamp}.md`)
        }).catch((e: any)=> {
            console.log(e)
        });
}

module.exports = {
    parse
}