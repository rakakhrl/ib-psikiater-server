const PrescriptionsModel = require("../models/prescriptions");

class PrescriptionsController {
  static createPrescription = async (req, res, next) => {
    try {
      const { drug_name, method_name, time_sequence } = req.body;

      const prescriptionData = await PrescriptionsModel.create({
        drugs: {
          drug_name: drug_name,
          consume_method: {
            method_name: method_name,
            time_sequence: time_sequence,
          },
        },
      });

      if (!prescriptionData) {
        throw new Error("Unable to add prescription");
      }

      res.status(201).json({
        status: "Success",
        message: "Success create prescription",
        data: prescriptionData,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = PrescriptionsController;
