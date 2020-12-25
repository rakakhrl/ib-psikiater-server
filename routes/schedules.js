const Router = require("express").Router();
const controller = require("../controllers/schedules");
const authorization = require("../middlewares/authorization");

Router.use(authorization("Psikiater"));

Router.patch("/:id", controller.updateSchedulePsikiater);
module.exports = Router;
