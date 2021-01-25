const Router = require("express").Router();
const AdminController = require("../controllers/admin");
// const authorization = require("../middlewares/authorization");
// const { PATIENT } = require("../constants/role");

Router.patch("/status",AdminController.updateStatusByAppointmentID);

module.exports = Router;