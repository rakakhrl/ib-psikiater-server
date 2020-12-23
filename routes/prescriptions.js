const Router = require("express").Router();
const controller = require("../controllers/prescriptions");

Router.get("/", controller.getPrescriptionData);

module.exports = Router;
