"use strict";
const reviewModel = require("../models/reviews");

class ReviewController {
  static getReviewData = async (req, res, next) => {
    try {
      const reviewData = await reviewModel.find();
      res.status(200).json({
        status: "Success.",
        message: "Successfully get review data.",
        reviewData: reviewData,
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
      const review = await reviewModel.create(reviewData);
      res.status(200).json({
        message: "Success add review.",
        review: review,
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = ReviewController;
