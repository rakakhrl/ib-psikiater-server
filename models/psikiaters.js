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
      minlength: 3,
      maxlength: 10,
      set: (v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase(),
    },
    last_name: {
      type: String,
      required: "Last Name Is Required",
      minlength: 3,
      maxlength: 10,
      set: (v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase(),
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
        set: (v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase(),
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

// psikiatertSchema.pre("save", function (next) {
//   // capitalize
//   (v) => this.info.region.charAt(0).toUpperCase(v);
//   next();
// });

const Psikiaters = mongoose.model("Psikiaters", psikiatertSchema);
module.exports = Psikiaters;
