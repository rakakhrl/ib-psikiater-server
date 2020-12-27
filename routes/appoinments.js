const express = require("express");
const Router = express.Router();
const AppointmentController = require("../controllers/appointments");

Router.post("/", AppointmentController.createAppointment);

Router.get("/:id", AppointmentController.getAppointmentDataByPatientId);

Router.get("/:id", AppointmentController.getAppointmentDataByPsikiaterId);

module.exports = Router;
