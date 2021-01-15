const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    patient: {
      type: String,
      ref: "Patients",
    },
    payment_type: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    payment_method: {
      type: String,
      required: true,
    },
    payment_status: {
      type: String,
      required: true,
      default: "Pending",
    },
    slip_url: {
      type: String,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
const Payments = mongoose.model("Payments", paymentSchema);
module.exports = Payments;
