const mongoose = require("mongoose");

const psikiatertSchema = new mongoose.Schema(
  {
    is_active: {
      type: Boolean,
      default: true,
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
    avatar_url: {
      type: String,
      unique: true,
      default: "",
    },
    info: {
      experience_year: {
        type: String,
        required: true,
        //validator : regex => pertama angka setelahnya huruf
      },
      region: {
        type: String,
        required: true,
        maxlength: 10,
        validate: {
          validator: (v) => {
            return /^[A-Z]/.test(v);
          },
          message: "First Letter Must Capital",
        },
      },
    },
    schedule: {
      work_days: {
        type: [String],
        default: [],
      },
      work_time: {
        type: [String],
        default: [],
      },
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
