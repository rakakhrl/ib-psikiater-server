const Router = require("express").Router();
const controller = require("../controllers/prescriptions");
const authorization = require("../middlewares/authorization");
const { PSIKIATER } = require("../constants/role");

Router.use(authorization(PSIKIATER));

Router.post("/", controller.createPrescription);

module.exports = Router;
