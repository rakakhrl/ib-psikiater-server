const PrescriptionsModel = require("../models/prescriptions");
const AppointsmentModel = require("../models/appointments");

class PrescriptionsController {
  static createPrescription = async (req, res, next) => {
    try {
      const { drug_name, method_name, time_sequence } = req.body;
      const { id } = req.params;

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
        throw new Error("Unable to create prescription");
      }

      // mencari id appointment yang ingin kita tambahkan prescription
      const appointmentData = await AppointsmentModel.findByIdAndUpdate(
        id,
        {
          prescription_id: prescriptionData._id,
        },
        { new: true }
      );

      if (!appointmentData) {
        throw new Error("Unable to add prescription");
      }

      res.status(201).json({
        status: "Success",
        message: "Success create prescription",
        data: appointmentData,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = PrescriptionsController;
