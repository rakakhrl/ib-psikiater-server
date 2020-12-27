"use strict";
const PatientModel = require("../models/patients");

class PatientController {
  static getPatientData = async (req, res, next) => {
    try {
      const patientData = await PatientModel.find();
      res.status(200).json({
        status: "success",
        message: "Successfully get patients data.",
        data: patientData,
      });
    } catch (error) {
      next(error);
    }
  };

  static getPatientDataByIdPatient = async (req, res, next) => {
    try {
      const { id } = req.params;
      const patientData = await PatientModel.findById(id);
      res.status(200).json({
        status: "success",
        message: "Successfully get patients data by id patient.",
        data: patientData,
      });
    } catch (error) {
      next(error);
    }
  };

  static updateDiagnoseByidPatient = async (req, res, next) => {
    try {
      const { id } = req.params;
      const patientData = await PatientModel.findByIdAndUpdate(
        { id },
        { diagnose_name: req.body.diagnose_name }
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
}
module.exports = PatientController;
