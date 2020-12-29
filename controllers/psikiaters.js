const PsikiaterModel = require("../models/psikiaters");
const PORT = process.env.PORT;

class PsikiaterController {
  static updatePsikiaterData = async (req, res, next) => {
    try {
      const {
        status,
        first_name,
        last_name,
        email,
        password,
        date_of_birth,
        experience_year,
        region,
        work_address,
        gender,
      } = req.body;

      const psikiaterData = await PsikiaterModel.findByIdAndUpdate(
        req.params.id,
        {
          status: status,
          first_name: first_name,
          last_name: last_name,
          email: email,
          password: password,
          date_of_birth: date_of_birth,
          info: {
            experience_year: experience_year,
            region: region,
          },
          work_address: work_address,
          gender: gender,
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

  static getPsikiaterDataByRegion = async (req, res, next) => {
    try {
      const { region } = req.params;
      const psikiaterData = await PsikiaterModel.find({
        "info.region": region,
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
}
module.exports = PsikiaterController;
