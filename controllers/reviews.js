"use strict";
const ReviewModel = require("../models/reviews");

class ReviewController {
  static getReviewDataByIdPsikiater = async (req, res, next) => {
    try {
      const { id } = req.params;

      const reviewData = await ReviewModel.find({ psikiater_id: id })
        .populate("psikiater_id")
        .populate("patient_id")
        .populate("appointment_id");
      res.status(200).json({
        status: "Success.",
        message: "Successfully get review data.",
        data: reviewData,
      });
    } catch (error) {
      next(error);
    }
  };

  static getReviewDataByIdPatient = async (req, res, next) => {
    try {
      const { id } = req.params;
      const reviewData = await ReviewModel.find({ patient_id: id })
        .populate("psikiater_id")
        .populate("patient_id")
        .populate("appointment_id");
      res.status(200).json({
        status: "Success.",
        message: "Successfully get review data.",
        data: reviewData,
      });
    } catch (error) {
      next(error);
    }
  };

  static createReview = async (req, res, next) => {
    try {
      const {
        psikiater_id,
        patient_id,
        appointment_id,
        rating,
        feedback,
      } = req.body;
      const reviewData = {
        psikiater_id: psikiater_id,
        patient_id: patient_id,
        appointment_id: appointment_id,
        rating: rating,
        feedback: feedback,
      };
      const review = await ReviewModel.create(reviewData)
        .populate("psikiater_id")
        .populate("patient_id")
        .populate("appointment_id");

      res.status(201).json({
        status: "Success.",
        message: "Success add review.",
        data: review,
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = ReviewController;
