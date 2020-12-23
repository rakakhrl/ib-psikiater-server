"use strict";
const bcrypt = require("bcrypt");
const PsikiaterModel = require("../models/psikiaters");

class PsikiaterController {
  static updatePsikiaterData = async (req, res, next) => {
    try {
      const psikiaterData = await PsikiaterModel.findByIdAndUpdate(
        req.params.id,
        {
          status: req.body.status,
          first_name: req.body.first_name,
          last_name: req.body.last_name,
          email: req.body.email,
          password: req.body.password,
          date_of_birth: req.body.date_of_birth,
          info: {
            experience_year: req.body.info.experience_year,
            region: req.body.info.region,
          },
          work_address: req.body.work_address,
          gender: req.body.gender,
        },
        {
          new: true,
          runValidators: true,
        }
      );
      if (!psikiaterData) {
        throw new Error("Unable update data");
      }

      res.status(201).json({
        status: "Success",
        message: "Data was updated",
        data: psikiaterData,
      });
    } catch (error) {
      next(error);
    }
  };

  static uploadAvatar = async (req, res, next) => {
    try {
      const uploadAvatar = await PsikiaterModel.create();

      res.status(201).json({
        status: "Success",
        message: "Upload Succeed",
        data: uploadAvatar,
        file: req.file,
      });
    } catch (error) {
      next(error);
    }
  };

  static getPsikiaterData = async (req, res, next) => {
    try {
      const psikiaterData = await PsikiaterModel.find();

      if (!psikiaterData) {
        throw new Error("Unable to get psikiater data");
      }

      res.status(200).json({
        status: "Success",
        message: "Success get psikiater data",
        data: psikiaterData,
      });
    } catch (error) {
      next(error);
    }
  };
  static deletePsikiaterData = async (req, res, next) => {
    try {
      const psikiaterData = await PsikiaterModel.findByIdAndDelete(
        req.params.id
      );

      if (!psikiaterData) {
        throw new Error("Data already deleted");
      }

      res.status(200).json({
        status: "Success",
        message: "Data deleted",
        data: psikiaterData,
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = PsikiaterController;
