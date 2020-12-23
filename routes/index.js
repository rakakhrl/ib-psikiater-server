const Router = require("express").Router();
const reviewRouter = require("./review");
const patientRouter = require("./patient");
const psikiaterRouter = require("./psikiater");
const authRoutes = require("./auth");
const scheduleRouter = require("./schedules");
const prescriptionRouter = require("./prescriptions");

Router.use("/auth", authRoutes);

Router.use("/reviews", reviewRouter);

Router.use("/patients", patientRouter);

Router.use("/psikiater", psikiaterRouter);

Router.use("/schedule", scheduleRouter);

Router.use("/prescriptions", prescriptionRouter);

module.exports = Router;
