const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patients",
    },
    product_type: String,
    product_detail: Map,
    product_price: {
      type: String,
    },
    payment_method: {
      type: String,
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
