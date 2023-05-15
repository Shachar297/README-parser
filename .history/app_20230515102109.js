
const
    cors = require('cors'),
    express = require('express'),
    server = express(),
    port = process.env.PORT || 8888,
    routersManager = require('./routes/routes-manager'),
    loggerService = require("./src/readmeParser");

server.use(cors({ origin: '*' }));
server.use(express.json());
server.use('/api/v4', routersManager);

server.listen(port, () => console.log('read is ready to migrate !\n          Listening at port : ' + port + "         "));