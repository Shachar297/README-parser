
const
    cors = require('cors'),
    express = require('express'),
    // init server.
    server = express(),
    port = process.env.PORT || 8888,
    routersManager = require('./routes/routes-manager'),
    loggerService = require("./src/logService");


// nugetModule = require("./services/Packages/Package");
// nugetModule.uploadNuget()

server.use(cors({ origin: '*' }));
server.use(express.json());
server.use('/api/v4', routersManager);

// const
//     cleaner = require("./services/git/project-cleaner"),
//     isCleaning = false;
// if (isCleaning) {
//     cleaner()
// }

server.listen(port, () => loggerService.logApplicationStatusMessage('Git migration is ready to migrate !\n          Listening at port : ' + port + "         "));