const mongoose = require("mongoose");
const emailer = require("../utilities/emailer");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const AdminModel = require("../models/admin");
const VerifyModel = require("../models/verify");
const SECRET_KEY = process.env.SECRET_KEY;
const SERVER_IP_ADDRESS = process.env.SERVER_IP_ADDRESS;
const PORT = process.env.PORT;
const { PSIKIATER } = require("../constants/role");

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

      res.status(202).json({
        status: "success",
        message: "Successfully created admin",
        data: admin,
      });
    } catch (error) {
      next(error);
    }
  };
  static approvalPsikiater = async (req, res, next) => {
    const { email, action } = req.body;
    try {
      if (action === "reject") {
        const emailSent = await emailer(
          email,
          "Reject",
          `<h3>Oops sorry! registration has been reject Admin</h3>`
        );
        res.sendStatus(204);
      }

      const verificationToken = jwt.sign(
        {
          email: email,
          role: PSIKIATER,
        },
        SECRET_KEY
      );

      const tokenVerify = await VerifyModel.create({
        email: email,
        activation_token: verificationToken,
      });

      if (!tokenVerify) {
        throw new Error("Failed storing verification token");
      }

      const emailSent = await emailer(
        email,
        "Verification Link",
        `<h3><strong>Clink this link to verify your account: </strong>http://${SERVER_IP_ADDRESS}:${PORT}/verify-user/verify/${verificationToken}</h3>`
      );
      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  };
}

module.exports = AdminController;
