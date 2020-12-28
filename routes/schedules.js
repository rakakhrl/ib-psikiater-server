const Router = require("express").Router();
const { PSIKIATER } = require("../constants/role");
const controller = require("../controllers/schedules");
const authorization = require("../middlewares/authorization");

Router.use(authorization(PSIKIATER));

Router.patch("/:id", controller.updateSchedulePsikiater);
module.exports = Router;
