"use strict";
const bcrypt = require("bcrypt");
const patientModel = require("../models/patients");

class PatientController {
  static getPsikiaterData = async (req, res, next) => {
    try {
      const psikiaterData = await psikiaterModel.find();
      res.status(201).json({
        status: "success",
        message: "Successfully get patients data.",
        data: psikiaterData,
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = PatientController;
