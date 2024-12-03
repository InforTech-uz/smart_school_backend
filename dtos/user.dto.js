module.exports = class UserDto {
  id;
  name;
  phone;
  email;
  role;
  linkedStudentId;
  avatar;

  constructor(model) {
    this.name = model.name;
    this.phone = model.phone;
    this.email = model.email;
    this.role = model.role;
    this.linkedStudentId = model.linkedStudentId;
    this.avatar = model.avatar;
    this.id = model._id;
  }
};
