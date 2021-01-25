const AdminModel = require("../models/admin");
const bcrypt = require("bcrypt");

class AdminController {
  static createAdmin = async (req, res, next) => {
    try {
      const { first_name, last_name, password, email } = req.body;

      const admin = await AdminModel.create({
        first_name,
        last_name,
        password: bcrypt.hashSync(password, 10),
        email,
      });

      if (!admin) {
        throw new Error("Failed creating admin");
      }

      res
        .status(202)
        .json({
          status: "success",
          message: "Successfully created admin",
          data: admin,
        });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = AdminController;
