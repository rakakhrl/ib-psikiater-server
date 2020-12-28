const PatientsModel = require("../models/patients");
const PsikiaterModel = require("../models/psikiaters");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { PATIENT, PSIKIATER } = require("../constants/role");

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
        password: bcrypt.hashSync(req.body.password, 10),
        email: req.body.email,
        date_of_birth: req.body.date_of_birth,
        gender: req.body.gender,
        info: {
          experience_year: req.body.experience_year,
          region: req.body.region,
        },
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
          role: PATIENT,
          token: jwt.sign(
            { user_id: patient._id, role: PATIENT },
            process.env.SECRET_KEY
          ),
        });
      }

      if (psikiater && bcrypt.compareSync(password, psikiater.password)) {
        res.status(200).json({
          status: "success",
          message: "Login successfull.",
          role: PSIKIATER,
          token: jwt.sign(
            { user_id: psikiater._id, role: PSIKIATER },
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
