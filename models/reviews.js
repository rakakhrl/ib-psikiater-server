const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    psikiater_id: {
      type: mongoose.Types.ObjectId,
      ref: "psikiater_id",
    },
    patient_id: {
      type: mongoose.Types.ObjectId,
      ref: "patient_id",
    },
    appointment_id: {
      type: mongoose.Types.ObjectId,
      ref: "patient_id",
    },
    rating: {
      type: String,
      required: true,
    },
    feedback: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Review = mongoose.model("Reviews", reviewSchema);
module.exports = Review;
