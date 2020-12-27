const mongoose = require("mongoose");

const psikiaterSchema = new mongoose.Schema(
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
    password: {
      type: String,
      required: true,
      unique: true,
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
      work_days: [
        {
          type: String,
          default: "",
        },
      ],
      work_time: [
        {
          type: String,
          default: "",
        },
      ],
    },
    rating: {
      average_rating: {
        type: Number,
        default: 0,
      },
      total_review: {
        type: Number,
        default: 0,
      },
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Psikiaters = mongoose.model("Psikiaters", psikiaterSchema);
module.exports = Psikiaters;
