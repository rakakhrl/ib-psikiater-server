const Router = require("express").Router();
const PatientController = require("../controllers/patients");
const upload = require("../middlewares/multer");
const authorization = require("../middlewares/authorization");
const { PATIENT, PSIKIATER } = require("../constants/role");

Router.get(
  "/:id",
  authorization(PSIKIATER),
  PatientController.updateDiagnoseByidPatient
);

Router.use(authorization(PATIENT));

Router.post(
  "/upload/:id",
  upload.single("profile_photo"),
  PatientController.uploadAvatar
);

Router.get("/:id", PatientController.getPatientDataByIdPatient);

Router.post("/:id", PatientController.updatePatientData);

module.exports = Router;
