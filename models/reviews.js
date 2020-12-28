const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema(
  {
    psikiater_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Psikiaters",
    },
    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patients",
    },
    appointment_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Appointments",
    },
    rating: {
      type: mongoose.Schema.Types.Decimal128,
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
