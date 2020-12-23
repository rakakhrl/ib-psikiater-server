const Router = require("express").Router();
const reviewRouter = require("./review");
const patientRouter = require("./patient");
const psikiaterRouter = require("./psikiater");

Router.use("/reviews", reviewRouter);

Router.use("/patients", patientRouter);

Router.use("/psikiater", psikiaterRouter);

module.exports = Router;
