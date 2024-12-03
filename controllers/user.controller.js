const userService = require("../service/user.service")
class UserController {
  async create(req, res) {
    try{
      const {phone, name, email, password, role, linkedStudentId, avatar} = req.body
      const user = await userService.create(name, phone, email, password, role, linkedStudentId, avatar)
      res.json({status: true, message: 'OK', data: {user}})
    } catch(error) {
      res.status(500).json({status: false, message: error?.message, error})
    }
  }
}

module.exports = new UserController()