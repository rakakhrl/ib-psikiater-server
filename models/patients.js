const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      minlength: 5,
      maxlength: 10,
    },
    last_name: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 10,
    },
    password: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (val) => {
          return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(
            val
          );
        },
        message: `invalid email format`,
      },
    },
    date_of_birth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    avatar_url: {
      type: String,
      default: "",
    },
    address: {
      type: String,
      required: true,
    },
    diagnose: {
      diagnose_name: {
        type: String,
        default: "",
      },
      diagnose_date: {
        type: Date,
        default: "",
      },
      psikiater_id: {
        type: mongoose.Types.ObjectId,
        ref: "Psikiaters",
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Patients = mongoose.model("Patients", patientSchema);
module.exports = Patients;
