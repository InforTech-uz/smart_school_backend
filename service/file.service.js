const {v4: uuidv4} = require('uuid')
const fs = require("fs")
const path = require('path')

class FileService {
  save(file) {
    try {
      const fileName = uuidv4() + '.jpg'; //Generate filename
      const currentDir = __dirname;
      const staticDir = path.join(currentDir, '..', 'static') // Address of static folder
      const filePath = path.join(staticDir, fileName) //address of file which we will create

      //If static folder doesn't exist we will create it
      if (!fs.existsSync(staticDir)){
        fs.mkdirSync(staticDir, {recursive: true})
      }
      //Then we move that file to static folder then we will return the file name
      file.mv(filePath)

      return fileName
    } catch (error) {
      throw new Error(`Error saving file: ${error}`)
    }
  }
}

module.exports = new FileService()