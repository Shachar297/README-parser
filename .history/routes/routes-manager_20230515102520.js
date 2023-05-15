const
    express = require('express'),
    router = express.Router(),
    readmeAPI = require("../src/readmeAPI.js");


router.post("/parse", readmeAPI.prase);

module.exports = router;