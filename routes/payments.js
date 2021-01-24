const Router = require("express").Router();
const PaymentController = require("../controllers/payments");
const upload = require("../middlewares/multer");
const authorization = require("../middlewares/authorization");
const { PATIENT } = require("../constants/role");

Router.get("/", PaymentController.getAll);
Router.get("/:payment_id", PaymentController.getOneById);

Router.post("/payment-status/:id", PaymentController.approvalPayment);

Router.use(authorization(PATIENT));

Router.post(
  "/upload-slip/:payment_id",
  upload.single("profile_photo"),
  PaymentController.uploadPaymentSlip
);

module.exports = Router;
