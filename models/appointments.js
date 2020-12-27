const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema(
  {
    psikiater_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Psikiaters",
    },
    patient_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Patients",
    },
    prescription_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Prescriptions",
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
      default: "",
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Appointments = mongoose.model("Appointments", appointmentSchema);
module.exports = Appointments;
