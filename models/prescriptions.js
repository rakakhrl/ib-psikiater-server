const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const prescriptionSchema = new Schema({
  drugs: {
    drug_name: {
      type: String,
      maxlength: 20,
      set: (v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase(),
    },
    consume_method: {
      method_name: {
        type: String,
        maxlength: 100,
        set: (v) => v.charAt(0).toUpperCase() + v.slice(1).toLowerCase(),
      },
      time_sequence: [String], // pagi, siang, malem / 07.00 AM dll
    },
  },
});

const Prescriptions = mongoose.model("Prescriptions", prescriptionSchema);

module.exports = Prescriptions;
