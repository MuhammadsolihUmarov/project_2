const path = require("path")

export default class FilePathManager {
    static getFilePath(fileName: string): string {
        return path.join(__dirname, "../test-files/", fileName);
    }
}
