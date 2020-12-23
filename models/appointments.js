const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    psikiater_id: {
      type: mongoose.Types.ObjectId,
      ref: "psikiater_id",
    },
    patient_id: {
      type: mongoose.Types.ObjectId,
      ref: "patient_id",
    },
    prescription_id: {
      type: mongoose.Types.ObjectId,
      ref: "prescription_id",
    },
    appoinment_date: {
      type: Date,
      required: true,
    },
    appoinment_time: {
      type: String,
      required: true,
    },
    complaint: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Appointments = mongoose.model("Appointments", appointmentSchema);
module.exports = Appointments;
