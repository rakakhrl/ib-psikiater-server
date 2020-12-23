"use strict";
const bcrypt = require("bcrypt");
const psikiaterModel = require("../models/psikiater");

class PsikiaterController {
  static register = async (req, res, next) => {
    try {
      const { username, password } = req.body;
      const psikiaterData = {
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        password: bcrypt.hashSync(req.body.password),
        email: req.body.email,
        Date_of_birth: req.body.Date_of_birth,
        gender: req.body.gender,
        experience_year: req.body.experience_year,
        region: req.body.region,
      };
      const psikiater = await psikiaterModel.create(psikiaterData);

      res.status(200).json({
        message: "Success create psikiater data.",
        psikiater: psikiater,
      });
    } catch (error) {
      next(error);
    }
  };

  //   static login = async (req, res, next) => {
  //     try {
  //       const { username, password } = req.body;
  //       const user = await userModel.findOne({
  //         username: username,
  //       });
  //       if (!user) {
  //         throw new Error("invalid username/password");
  //       }
  //       if (!bcrypt.compareSync(password, user.password)) {
  //         throw new Error("invalid username/password");
  //       }

  //       const tokenPayload = {
  //         userID: user._id,
  //       };

  //       const jwtToken = jwt.sign(tokenPayload, "r4hasi4");

  //       res.status(200).json({
  //         message: "login success",
  //         accessToken: jwtToken,
  //       });
  //     } catch (error) {
  //       next(error);
  //     }
  //   };

  static getPsikiaterData = async (req, res, next) => {
    try {
      const psikiaterData = await psikiaterModel.find();
      res.status(200).json({
        psikiaterData: psikiaterData,
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = PsikiaterController;
