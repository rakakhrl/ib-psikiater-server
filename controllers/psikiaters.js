const mongoose = require("mongoose");
const PsikiaterModel = require("../models/psikiaters");
const PORT = process.env.PORT;
const SERVER_IP_ADDRESS = process.env.SERVER_IP_ADDRESS;

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
        work_address,
        experience_year,
        region,
        gender,
        fees,
      } = req.body;

      const psikiaterData = await PsikiaterModel.findByIdAndUpdate(
        req.params.id,
        {
          status: status,
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

  static getPsikiaterDataByRegion = async (req, res, next) => {
    try {
      const { region } = req.query;
      const searchingRegex = new RegExp(region, "i");

      const psikiater = await PsikiaterModel.find({
        "info.region": {
          $regex: searchingRegex,
        },
      });

      if (!psikiater) {
        throw new Error("No psychiatrist found.");
      }

      res.status(200).json({
        status: "Success",
        message: "Success get psychiatrist data",
        data: psikiater,
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

  static getPsychiatristRating = async (req, res, next) => {
    try {
      const { psychiatris_id } = req.params;

      const rating = await PsikiaterModel.aggregate([
        {
          $match: {
            _id: mongoose.Types._ObjectId(psychiatris_id),
          },
        },
        {
          $lookup: {
            from: "reviews",
            localField: "_id",
            foreignField: "psikiater_id",
            as: "review",
          },
        },
        {
          $unwind: { path: "$review", preserveNullAndEmptyArrays: true },
        },
        {
          $group: {
            _id: "$_id",
            total_review: {
              $sum: 1,
            },
            average_score: {
              $avg: "$review.rating",
            },
          },
        },
        {
          $project: {
            review: {
              total_review: "$total_review",
              average_rating: "$average_score",
            },
          },
        },
      ]);

      res.status(200).json({
        status: "Success",
        message: "Success Get Psikiater Rating",
        data: rating,
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = PsikiaterController;
