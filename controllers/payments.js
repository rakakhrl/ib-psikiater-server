"use strict";
const PaymentModel = require("../models/payments");

class PaymentController{
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
}

module.exports = PaymentController;