const express = require("express");
const Router = express.Router();
const AuthController = require("../controllers/auth");

Router.post("/register-patient", AuthController.registerPatient);
Router.post("/register-psikiater", AuthController.registerPsikiater);
Router.post("/login", AuthController.login);

module.exports = Router;
