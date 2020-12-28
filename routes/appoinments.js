const express = require("express");
const Router = express.Router();
const AppointmentController = require("../controllers/appointments");
const authorization = require("../middlewares/authorization");
const { PATIENT, PSIKIATER } = require("../constants/role");

Router.post(
  "/",
  authorization(PATIENT),
  AppointmentController.createAppointment
);

Router.get("/:id", AppointmentController.getAppointmentDataByPatientId);

Router.get("/:id", AppointmentController.getAppointmentDataByPsikiaterId);

Router.get(
  "/:id",
  authorization(PSIKIATER),
  AppointmentController.updateStatusAppointmentByIdPatient
);

module.exports = Router;
