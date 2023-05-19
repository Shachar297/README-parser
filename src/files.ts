import fs from "fs";

class FilesModule {
  constructor() {}

  public readFile(filePath: String, fileName: String): any {
    return new Promise((resolve, reject) => {
      fs.readFile(`${filePath}/${fileName}`, "utf8", (e: any, data: String) => {
        if (e) {
          reject(e);
        }
        resolve(data);
      });
    });
  }
}

export default FilesModule;
