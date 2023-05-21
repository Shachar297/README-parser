import express, { Application } from "express";
import https from "https";
import path from "path";
import fs from "fs";
import cors from "cors";
import RouterManager from "./routes/routes-manager";
import FilesModule from './src/files'
require("dotenv").config();

export default class App {
  public server: Application;
  public port: number;
  public routerManager: any;
  constructor(port: number, routerManager: any) {
    this.server = express();
    this.port = port;
    this.routerManager = routerManager;
    this.server.use(cors({ origin: "*" }));
    this.server.use(express.json());
    this.server.use("", routerManager.router);
    this.server.use(
      "/.well-known",
      express.static(path.join(__dirname, ".well-known"))
    );
  }
  public start(): void {
    const httpsOptions = {
      key: fs.readFileSync("./crt/server.key"),
      cert: fs.readFileSync("./crt/server.cert"),
    };

    https.createServer(httpsOptions, this.server).listen(this.port, () => {
      console.log(`Server is listening on ${this.port}`);
    });
  }
}
const 
  filesModule = new FilesModule(),
  routerManager = new RouterManager(filesModule),
  server = new App(443, routerManager);
  
server.start();