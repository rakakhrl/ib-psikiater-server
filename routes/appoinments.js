const express = require("express");
const Router = express.Router();
const AppointmentController = require("../controllers/appointments");

Router.post("/", AppointmentController.createAppointment);

Router.get("/", AppointmentController.getAppointmentData);

module.exports = Router;
