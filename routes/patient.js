const Router = require("express").Router();
const PatientController = require("../controllers/patients");
const upload = require("../middlewares/multer");
const authorization = require("../middlewares/authorization");
const { PATIENT, PSIKIATER } = require("../constants/role");

Router.get("/:id", PatientController.getPatientDataByIdPatient);

Router.use(authorization(PATIENT));

Router.post(
  "/upload/:id",
  upload.single("profile_photo"),
  PatientController.uploadAvatar
);

module.exports = Router;
