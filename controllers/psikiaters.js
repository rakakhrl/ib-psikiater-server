"use strict";
const bcrypt = require("bcrypt");
const psikiaterModel = require("../models/psikiater");

class PsikiaterController {
  static getPsikiaterData = async (req, res, next) => {
    try {
      const psikiaterData = await psikiaterModel.find();
      res.status(201).json({
        psikiaterData: psikiaterData,
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = PsikiaterController;
