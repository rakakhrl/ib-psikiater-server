const Router = require("express").Router();
const controller = require("../controllers/prescriptions");
const authorization = require("../middlewares/authorization");

Router.use(authorization("Psikiater"));

Router.post("/", controller.createPrescription);

module.exports = Router;
