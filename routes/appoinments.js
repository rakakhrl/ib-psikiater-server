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

Router.patch(
  "/update/:id",
  authorization(PSIKIATER),
  AppointmentController.updateDiagnose
);

Router.get("/patient/:id", AppointmentController.getAppointmentDataByPatientId);

Router.get(
  "/psikiater/:id",
  AppointmentController.getAppointmentDataByPsikiaterId
);

Router.patch(
  "/:id",
  authorization(PSIKIATER),
  AppointmentController.updateStatusAppointmentByIdPatient
);

module.exports = Router;
