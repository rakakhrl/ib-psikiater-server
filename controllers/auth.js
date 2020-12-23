const PatientsModel = require("../models/patients");
const PsikiaterModel = require("../models/psikiater");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

class AuthController {
  static registerPatient = async (req, res, next) => {
    try {
      // TODO: Handle registration for patient
    } catch (error) {
      next(error);
    }
  };

  static registerPsikiater = async (req, res, next) => {
    try {
      // const { username, password, role } = req.body;
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
      const psikiater = await PsikiaterModel.create(psikiaterData);

      res.status(201).json({
        status: "created",
        message: "Success create psikiater data.",
        psikiater: psikiater,
      });
    } catch (error) {
      next(error);
    }
  };

  static login = async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const patient = await PatientsModel.findOne({ email: email });
      const psikiater = await PsikiaterModel.findOne({ email: email });

      if (!patient && !psikiater) {
        throw new Error("Email or password is invalid.");
      }

      if (patient && bcrypt.compareSync(password, patient.password)) {
        res.status(200).json({
          status: "success",
          message: "Login successfull.",
          role: "patient",
          token: jwt.sign(
            { user_id: patient._id, role: "patient" },
            process.env.SECRET_KEY
          ),
        });
      }

      if (psikiater && bcrypt.compareSync(password, psikiater.password)) {
        res.status(200).json({
          status: "success",
          message: "Login successfull.",
          role: "psikiater",
          token: jwt.sign(
            { user_id: psikiater._id, role: "psikiater" },
            process.env.SECRET_KEY
          ),
        });
      }
    } catch (error) {
      next(error);
    }
  };
}

module.exports = AuthController;
