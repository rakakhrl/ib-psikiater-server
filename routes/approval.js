const express = require("express");
const Router = express.Router();
const ApprovalController = require("../controllers/approval");

Router.post("/approval", ApprovalController.approvalPsikiater);
module.exports = Router;
