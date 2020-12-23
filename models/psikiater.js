const mongoose = require("mongoose");

const psikiatertSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      required: true,
      unique: true,
      minlength: 5,
      maxlength: 10,
    },
    last_name: {
      type: String,
      required: true,
      unique: true,
      minlength: 3,
      maxlength: 10,
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
    Date_of_birth: {
      type: Date,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    experience_year: {
      type: String,
      required: true,
    },
    region: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Psikiaters = mongoose.model("Psikiaters", psikiatertSchema);
module.exports = Psikiaters;
