const
    express = require('express'),
    router = express.Router(),
    readmeAPI = require("../src/readmeAPI.js"),
    filesModule = require("../src/files.js");


router.post("/parse", readmeAPI.parse);

router.get("/.well-known/ai-plugin.json", (req, res) => {
    filesModule.readFile(`.well-known`, `ai-plugin.json`).then(file => {
        res.send(file)
    }).catch(e => {
        console.log(e)
    })
})

router.get("/openapi.yaml", (req, res) => {
    filesModule.readFile(`.`, `openapi.yaml`).then(file => {
        res.send(file)
    }).catch(e => {
        console.log(e)
    })
})

module.exports = router;