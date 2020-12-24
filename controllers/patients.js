"use strict";
const bcrypt = require("bcrypt");
const patientModel = require("../models/patients");

class PatientController {
  static getPatientData = async (req, res, next) => {
    try {
      const patientData = await patientModel.find();
      res.status(201).json({
        status: "success",
        message: "Successfully get patients data.",
        data: patientData,
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = PatientController;
