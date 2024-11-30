const {v4: uuidv4} = require('uuid')
const fs = require("fs")
const path = require('path')
class FileService {
  save(file) {
    try{

    }catch (error) {
      throw new Error(`Error saving file: ${error}`)
    }
  }
}