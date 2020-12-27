const PatientsModel = require("../models/patients");
const PsikiaterModel = require("../models/psikiater");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;

class AuthController {
  static registerPatient = async (req, res, next) => {
    const {
      first_name,
      last_name,
      email,
      password,
      date_of_birth,
      gender,
      avatar_url,
      address,
      diagnose_name,
      diagnose_date,
      psikiater_id,
    } = req.body;

    try {
      const patientData = {
        first_name: first_name,
        last_name: last_name,
        email: email,
        password: bcrypt.hashSync(password, 10),
        date_of_birth: date_of_birth,
        gender: gender,
        avatar_url: avatar_url,
        address: address,
        diagnose: {
          diagnose_name: diagnose_name,
          diagnose_date: diagnose_date,
          psikiater_id: psikiater_id,
        },
      };

      const patient = await PatientsModel.create(patientData);

      const tokenPayload = {
        email: patient.email,
      };

      const jwtToken = jwt.sign(tokenPayload, SECRET_KEY);

      res.status(201).json({
        status: "Success",
        message: "Success create user.",
        data: patient,
        token: jwtToken,
      });
    } catch (error) {
      next(error);
    }
  };

  static registerPsikiater = async (req, res, next) => {
    try {
      const {
        first_name,
        last_name,
        password,
        email,
        date_of_birth,
        gender,
        experience_year,
        region,
      } = req.body;

      const psikiaterData = {
        first_name: first_name,
        last_name: last_name,
        password: bcrypt.hashSync(password, 10),
        email: email,
        date_of_birth: date_of_birth,
        gender: gender,
        experience_year: experience_year,
        region: region,
      };
      const psikiater = await PsikiaterModel.create(psikiaterData);

      const tokenPayload = {
        email: psikiater.email,
      };

      const jwtToken = jwt.sign(tokenPayload, SECRET_KEY);

      res.status(201).json({
        status: "created",
        message: "Success create psikiater data.",
        data: psikiater,
        token: jwtToken,
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
