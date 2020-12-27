const Router = require("express").Router();
const PatientController = require("../controllers/patients");
// const authorization = require("../middlewares/authorization");
// const authentication = require("../middlewares/authentication");

Router.get("/", PatientController.getPatientData);

Router.get("/:id", PatientController.getPatientDataByIdPatient);

Router.get("/:id", PatientController.updateDiagnoseByidPatient);

module.exports = Router;
