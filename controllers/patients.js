"use strict";
const PatientModel = require("../models/patients");

class PatientController {
  static getPatientDataByIdPatient = async (req, res, next) => {
    try {
      const { id } = req.params;
      const patientData = await PatientModel.findById(id);

      if (!patientData) {
        throw new Error("Data patient not found.");
      }

      res.status(200).json({
        status: "success",
        message: "Successfully get patients data by id patient.",
        data: patientData,
      });
    } catch (error) {
      next(error);
    }
  };

  static updatePatientData = async (req, res, next) => {
    try {
      const {
        first_name,
        last_name,
        email,
        password,
        date_of_birth,
        gender,
        address,
        diagnose_name,
        diagnose_date,
        psikiater_id,
      } = req.body;

      const { id } = req.params;

      const patientData = await PatientModel.findByIdAndUpdate(
        id,
        {
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: bcrypt.hashSync(password, 10),
          date_of_birth: date_of_birth,
          gender: gender,
          address: address,
          diagnose: {
            diagnose_name: diagnose_name,
            diagnose_date: diagnose_date,
            psikiater_id: psikiater_id,
          },
        },
        {
          new: true,
          runValidators: true,
        }
      );
      if (!patientData) {
        throw new Error("Unable to update data");
      }

      res.status(200).json({
        status: "Success",
        message: "Data was updated",
        data: patientData,
      });
    } catch (error) {
      next(error);
    }
  };

  static updateDiagnoseByidPatient = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { diagnose_name } = req.body;
      const patientData = await PatientModel.findByIdAndUpdate(
        id,
        { diagnose_name: diagnose_name },
        { new: true }
      );
      res.status(200).json({
        status: "success",
        message: "Successfully get patients data by id patient.",
        data: patientData,
      });
    } catch (error) {
      next(error);
    }
  };

  static uploadAvatar = async (req, res, next) => {
    try {
      const { filename } = req.file;

      const uploadAvatar = await PatientModel.findByIdAndUpdate(
        req.params.id,
        {
          avatar_url: `http://localhost:${PORT}/media/${filename}`,
        },
        {
          new: true,
        }
      );

      if (!uploadAvatar) {
        throw new Error("Please insert photo");
      }

      res.status(200).json({
        status: "Success",
        message: "Upload Success",
        data: uploadAvatar,
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = PatientController;
