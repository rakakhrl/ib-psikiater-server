const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
  drugs: {
    drug_name: {
      type: String,
      maxlength: 20,
      validate: {
        validator: (v) => {
          return /^[A-z]/.test(v);
        },
      },
    },
    consume_method: {
      method_name: {
        type: String,
        maxlength: 15,
      },
      time_sequence: [String],
    },
  },
});

const Prescriptions = mongoose.model("Prescriptions", prescriptionSchema);

module.exports = Prescriptions;
