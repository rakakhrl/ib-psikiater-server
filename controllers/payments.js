// const PaymentModel = require("../models/payments");

class PaymentController {
  static uploadPaymentSlip = async (req, res, next) => {
    try {
      const { filename } = req.file;

      // const uploadSlip = await PaymentModel.findByIdAndUpdate(
      //   req.params.id,
      //   {
      //     slip_url: `http://${SERVER_IP_ADDRESS}:${PORT}/media/${filename}`,
      //   },
      //   {
      //     new: true,
      //   }
      // );

      // if (!uploadSlip) {
      //   throw new Error("Please insert photo");
      // }

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
