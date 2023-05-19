import express, { Application } from "express";
import https from "https";
import path from "path";
import fs from "fs";
import cors from "cors";
import RouterManager from "./routes/routes-manager";

const port = process.env.PORT || 8888,
  httpsOptions = {
    key: fs.readFileSync("./crt/server.key"),
    cert: fs.readFileSync("./crt/server.cert"),
  };

require("dotenv").config();

class App {
  public server: Application;
  public port: number;
  public httpsServer;
  constructor(controller: any, port: number, routerManager: RouterManager) {
    this.server = express();
    this.port = port;
    this.httpsServer = https.createServer(httpsOptions, this.server);

    this.server.use(cors({ origin: "*" }));
    this.server.use(express.json());
    this.server.use("", routerManager.router);
    this.server.use(
      "/.well-known",
      express.static(path.join(__dirname, ".well-known"))
    );

    this.httpsServer.listen(process.env.HTTPS_PORT, () => {
      console.log(`https server listening on ${process.env.HTTPS_PORT}`);
    });
  }
}
// server.listen(port, () => console.log('README parser is ready to migrate !\n          Listening at port : ' + port + "         "));

export default App;
