const PaymentModel = require("../models/payments");
const AppointmentModel = require("../models/appointments");
const emailer = require("../utilities/emailer");
const jwt = require("jsonwebtoken");
const { PATIENT } = require("../constants/role");
const SECRET_KEY = process.env.SECRET_KEY;
const SERVER_IP_ADDRESS = process.env.SERVER_IP_ADDRESS;
const PORT = process.env.PORT;

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

  static getAllPending = async (req, res, next) => {
    try {
      const payments = await PaymentModel.find({ payment_status: "Pending" })
        .populate("patient")
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
        message: "Get all pending payment success",
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

  static approvalPayment = async (req, res, next) => {
    try {
      const { id, email } = req.params;
      const { status } = req.body;
      const accept = await AppointmentModel.findByIdAndUpdate(
        id,
        {
          status: status,
          email: email,
        },
        { new: true }
      );

      if (!accept) {
        throw new Error("Failed sending payment status to email");
      }
      const emailSent = await emailer(
        email,
        "Payment Received",
        `<h3>Payment success status has been paid</h3>`
      );

      if (!emailSent) {
        throw new Error("Failed sending payment status to email");
      }

      res.status(200).json({
        message: "success",
        data: accept,
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = PaymentController;
