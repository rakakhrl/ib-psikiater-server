const Router = require("express").Router();
const reviewRouter = require("./review");
const patientRouter = require("./patient");
const psikiaterRouter = require("./psikiater");
const authRoutes = require("./auth");
const scheduleRouter = require("./schedules");
const prescriptionRouter = require("./prescriptions");
const appointmentRouter = require("./appoinments");
const paymentRouter = require("./payments");
const verifyRouter = require("./verify");
const approvalRouter = require("./approval");
const path = require("path");

const authentication = require("../middlewares/authentication");

Router.use("/approval-psikiater", approvalRouter);

Router.use("/auth", authRoutes);

Router.use("/psikiater", psikiaterRouter);

Router.use("/verify-user", verifyRouter);

Router.use("/reviews", reviewRouter);

Router.use(authentication);

Router.use("/appointments", appointmentRouter);

Router.use("/patients", patientRouter);

Router.use("/schedule", scheduleRouter);

Router.use("/prescriptions", prescriptionRouter);

Router.use("/payments", paymentRouter);

module.exports = Router;
