
const
    cors = require('cors'),
    express = require('express'),
    server = express(),
    port = process.env.PORT || 8888,
    routersManager = require('./routes/routes-manager'),
    loggerService = require("./src/readmeParser"),
    fs = require('fs'),
    https = require('https'),
    httpsOptions = {
        key: fs.readFileSync('./crt/server.key'),
        cert: fs.readFileSync('./crt/server.cert')
    };

require("dotenv").config()

const httpServer = https.createServer(httpsOptions, server);

server.use("/.well-known", express.static(path.join(__dirname, '.well-known')));

server.use(cors({ origin: '*' }));
server.use(express.json());
server.use('', routersManager);

// server.listen(port, () => console.log('README parser is ready to migrate !\n          Listening at port : ' + port + "         "));

httpServer.listen(process.env.HTTPS_PORT, () => {
    console.log(`https server listening on ${process.env.HTTPS_PORT}`);
});