import express, { Express, Request, Response } from "express";
// import readmeAPI from '../src/readmeAPI';
import FilesModule from "../src/files";

class Router {
  public router = express.Router();
  constructor(filesModule: FilesModule) {
    this.router.get(
      "/.well-known/ai-plugin.json",
      (req: Request, res: Response) => {
        filesModule
          .readFile(`.well-known`, `ai-plugin.json`)
          .then((fileContent: String) => {
            res.send(fileContent);
          })
          .catch((e: any) => {
            console.log(e);
          });
      }
    );
    this.router.get("/openapi.yaml", (req, res) => {
      filesModule
        .readFile(`.`, `openapi.yaml`)
        .then((fileContent: String) => {
          res.send(fileContent);
        })
        .catch((e: any) => {
          console.log(e);
        });
    });
  }
}
const filesModule = new FilesModule();
const router = new Router(filesModule);

// router.post("/parse", readmeAPI.parse);

export default Router;
