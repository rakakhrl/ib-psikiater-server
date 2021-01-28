const express = require("express");
const Router = express.Router();
const AdminController = require("../controllers/admins");

Router.post("/create-admin", AdminController.createAdmin);
Router.post("/approval", AdminController.approvalPsikiater);
module.exports = Router;
