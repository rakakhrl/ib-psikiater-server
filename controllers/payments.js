const PaymentModel = require("../models/payments");

class PaymentController {
  static paymentCheckout = async (req, res, next) => {
    const { patient, product_type, product_detail, product_price } = req.body;

    try {
      const paymentData = {
        patient: patient,
        product_type: product_type,
        product_detail: product_detail,
        product_price: product_price,
      };
      const payment = await PaymentModel.create(paymentData);
      res.status(201).json({
        status: "Success",
        message: "Checkout success",
        data: payment,
      });
    } catch (error) {
      next(error);
    }
  };
  static getOneById = async (req, res, next) => {
    try {
      const { payment_id } = req.params;

      const payment = await PaymentModel.findById(payment_id)
        .populate({
          path: "product_detail",
          populate: {
            path: "psikiater_id",
            model: "Psikiaters",
          },
        })
        .populate({
          path: "product_detail",
          populate: {
            path: "patient_id",
            model: "Patients",
          },
        });

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
        req.params.payment_id,
        {
          slip_url: `http://${process.env.SERVER_IP_ADDRESS}:${process.env.PORT}/media/${filename}`,
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
