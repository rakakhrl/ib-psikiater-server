const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
  drugs: {
    drug_name: {
      type: String,
      maxlength: 20,
      validate: {
        validator: (v) => {
          return /^[A-Z]/.test(v);
        },
        message: "First Letter Must Capital",
      },
    },
    consume_method: {
      method_name: {
        type: String,
        maxlength: 100,
        validate: {
          validator: (v) => {
            return /^[A-Z]/.test(v);
          },
          message: "First Letter Must Capital",
        },
      },
      time_sequence: [String], // pagi, siang, malem / 07.00 AM dll
    },
  },
});

const Prescriptions = mongoose.model("Prescriptions", prescriptionSchema);

module.exports = Prescriptions;
