const Router = require("express").Router();
const controller = require("../controllers/prescriptions");

Router.post("/", controller.createPrescription);

module.exports = Router;
