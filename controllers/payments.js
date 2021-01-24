const PaymentModel = require("../models/payments");

class PaymentController {
  static paymentCheckout = async (req,res,next)=>{
    const {
        patient,
        payment_type,
        amount,
        payment_method,
        payment_status,
        slip_url,
    }= req.body;

    try {
        const paymentData = {
            patient:patient,
            payment_type:payment_type,
            amount:amount,
            payment_method:payment_method,
            payment_status:payment_status,
            slip_url:slip_url, 
        };
        const payment = await PaymentModel.create(paymentData);
        res.status(201).json({
            status: "Success",
            message: "Checkout success",
            data: payment,
        })
    } catch (error) {
        next(error);
    }
}
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
