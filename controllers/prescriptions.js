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
      const timeSequence = await PrescriptionsModel.findById(req.params.id);

      const { drug_name, new_time_sequence, method_name } = req.body;
      const prescriptionsData = await PrescriptionsModel.findByIdAndUpdate(
        req.params.id,
        {
          drug_name: drug_name,
          consume_method: {
            method_name: method_name,
            time_sequence: [
              ...timeSequence.consume_method.time_sequence,
              new_time_sequence,
            ],
          },
        }
      );

      if (!prescriptionsData) {
        throw new Error("Cannot update");
      }

      res.status(201).json({
        status: "Success",
        message: "Success update prescription data",
        data: prescriptionsData,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = PrescriptionsController;
