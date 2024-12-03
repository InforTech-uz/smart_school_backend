const UserDto = require("../dtos/user.dto");
const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
class UserService {
  async create(
    name,
    phone,
    email,
    password,
    role,
    linkedStudentId = null,
    avatar = null
  ) {
    const existUser =
      (await userModel.findOne({ email })) ||
      (await userModel.findOne({ phone }));
    if (existUser) throw new Error("Email or Phone is already exist in the DB");

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      name,
      phone,
      password: hashedPassword,
      role,
      linkedStudentId,
      avatar
    });

    const userDto = new UserDto(user)

    return userDto;
  }
}

module.exports = new UserService();
