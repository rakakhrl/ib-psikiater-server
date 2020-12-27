"use strict";
const bcrypt = require("bcrypt");
const PsikiaterModel = require("../models/psikiater");

class PsikiaterController {
  static getPsikiaterData = async (req, res, next) => {
    try {
      const psikiaterData = await PsikiaterModel.find();
      res.status(200).json({
        psikiaterData: psikiaterData,
      });
    } catch (error) {
      next(error);
    }
  };
  
}
module.exports = PsikiaterController;
