import express, {Express, Request, Response} from 'express';
const
    router = express.Router(),
    readmeAPI = require("../src/readmeAPI.js"),
    filesModule = require("../src/files.js"),
    path = require("path");


router.post("/parse", readmeAPI.parse);



router.get("/.well-known/ai-plugin.json", (req: Request, res: Response) => {

    filesModule.readFile(`.well-known`, `ai-plugin.json`).then((fileContent : String) => {
        res.send(fileContent)
    }).catch((e: any) => {
        console.log(e)
    })
})

router.get("/openapi.yaml", (req, res) => {
    filesModule.readFile(`.`, `openapi.yaml`).then((fileContent : String) => {
        res.send(fileContent)
    }).catch((e: any) => {
        console.log(e)
    })
})

module.exports = router;