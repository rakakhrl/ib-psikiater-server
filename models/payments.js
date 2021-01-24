const mongoose = require("mongoose");

const paymentSchema = new mongoose.Schema(
  {
    patient: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patients",
      required: true,
    },
    product_type: {
      type: String,
      required: true,
    },
    product_detail: {
      type: Object,
      required: true,
    },
    product_price: {
      type: mongoose.Schema.Types.Number,
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
