const PaymentModel = require("../models/payments");

class PaymentController {
  static getOneById = async (req, res, next) => {
    try {
      const { payment_id } = req.params;

      const payment = await PaymentModel.findById(payment_id);

      res.status(200).json({
        status: "Success",
        message: "Get one payment success",
        data: payment,
      });
    } catch (error) {
      next(error);
    }
  };

  static getAll = async (req, res, next) => {
    try {
      const payments = await PaymentModel.find();

      res.status(200).json({
        status: "Success",
        message: "Get all payment success",
        data: payments,
      });
    } catch (error) {
      next(error);
    }
  };

  static uploadPaymentSlip = async (req, res, next) => {
    try {
      const { filename } = req.file;

      const uploadSlip = await PaymentModel.findByIdAndUpdate(
        req.params.id,
        {
          slip_url: `http://${SERVER_IP_ADDRESS}:${PORT}/media/${filename}`,
        },
        {
          new: true,
        }
      );

      if (!uploadSlip) {
        throw new Error("Please insert photo");
      }

      res.status(200).json({
        status: "Success",
        message: "Upload Success",
        data: uploadSlip,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = PaymentController;
