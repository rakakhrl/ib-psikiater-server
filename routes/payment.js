const Router = require("express").Router();
const PaymentController = require("../controllers/payments");
const authorization = require("../middlewares/authorization");
const { PATIENT } = require("../constants/role");

Router.post("/checkout", authorization(PATIENT),PaymentController.paymentCheckout);

module.exports = Router;