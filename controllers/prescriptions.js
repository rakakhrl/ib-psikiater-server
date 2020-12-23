const Prescriptions = require("../models/prescriptions");
const PrescriptionsModel = require("../models/prescriptions");

class PrescriptionsController {
  static getPrescriptionData = async (req, res, next) => {
    try {
      const prescriptionsData = await PrescriptionsModel.find();
      if (!prescriptionsData) {
        throw new Error("Unable to get prescriptions data");
      }

      res.status(200).json({
        status: "Success",
        message: "Success to get prescriptions data",
        data: prescriptionsData,
      });
    } catch (error) {
      next(error);
    }
  };
  static updatePrescriptionData = async (req, res, next) => {
    try {
      const prescriptionsData = await PrescriptionsModel.findByIdAndUpdate(
        req.params.id,
        {
          drug_name: req.body.drug_name,
          consume_method: {
            method_name: req.body.method_name,
            time_sequence: [],
          },
        }
      );
    } catch (error) {
      next(error);
    }
  };
}

module.exports = PrescriptionsController;
