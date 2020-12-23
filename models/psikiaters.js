const mongoose = require("mongoose");

const psikiatertSchema = new mongoose.Schema(
  {
    status: {
      type: Boolean,
    },
    first_name: {
      type: String,
      required: "First Name Is Required",
      unique: true,
      minlength: 3,
      maxlength: 10,
      validate: {
        validator: (v) => {
          return /^[A-Z]/.test(v);
        },
        message: "First Letter Must Capital",
      },
    },
    last_name: {
      type: String,
      required: "Last Name Is Required",
      unique: true,
      minlength: 3,
      maxlength: 10,
      validate: {
        validator: (v) => {
          return /^[A-Z]/.test(v);
        },
      },
    },
    password: {
      type: String,
      required: true,
      unique: true,
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
    avatar_url: String,

    info: {
      experience_year: {
        type: String,
        required: true,
      },
      region: {
        type: String,
        required: true,
      },
    },
    schedule: {
      work_days: [String],
      work_time: [String],
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

//virtual rating

const Psikiaters = mongoose.model("Psikiaters", psikiatertSchema);
module.exports = Psikiaters;
