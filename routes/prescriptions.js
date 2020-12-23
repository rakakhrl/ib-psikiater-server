const Router = require("express").Router();
const controller = require("../controllers/prescriptions");

Router.get("/", controller.getPrescriptionData);

Router.patch("/:id", controller.updatePrescriptionData);

module.exports = Router;
