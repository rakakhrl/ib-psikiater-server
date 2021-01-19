const PsikiaterModel = require("../models/psikiaters");
const PORT = process.env.PORT;
const SERVER_IP_ADDRESS = process.env.SERVER_IP_ADDRESS;

class PsikiaterController {
  static updatePsikiaterData = async (req, res, next) => {
    try {
      const {
        is_active,
        first_name,
        last_name,
        email,
        password,
        date_of_birth,
        work_address,
        experience_year,
        region,
        gender,
        fees,
      } = req.body;

      const psikiaterData = await PsikiaterModel.findByIdAndUpdate(
        req.params.id,
        {
          is_active: is_active,
          first_name: first_name,
          last_name: last_name,
          password: password,
          email: email,
          date_of_birth: date_of_birth,
          work_address: work_address,
          info: {
            experience_year: experience_year,
            region: region,
          },
          work_address: work_address,
          gender: gender,
          fees: fees,
        },
        {
          new: true,
          runValidators: true,
        }
      );
      if (!psikiaterData) {
        throw new Error("Unable update data");
      }

      res.status(200).json({
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
      const { filename } = req.file;

      const uploadAvatar = await PsikiaterModel.findByIdAndUpdate(
        req.params.id,
        {
          avatar_url: `http://${SERVER_IP_ADDRESS}:${PORT}/media/${filename}`,
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

  static getSearching = async (req, res, next) => {
    try {
      const { region, first_name } = req.query;
      const searchingRegion = new RegExp(region, "i");
      const searchingName = new RegExp(first_name, "i");
      const psikiaterData = await PsikiaterModel.find({
        "info.region": {
          $regex: searchingRegion,
        },
        first_name: {
          $regex: searchingName,
        },
      });

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
  static getPsikiaterDataById = async (req, res, next) => {
    try {
      const { id } = req.params;
      const psikiaterData = await PsikiaterModel.findById(id);

      if (!psikiaterData) {
        throw new Error("Psikiater Not Found");
      }

      res.status(200).json({
        status: "Success",
        message: "Success Get Psikiater Data",
        data: psikiaterData,
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = PsikiaterController;
