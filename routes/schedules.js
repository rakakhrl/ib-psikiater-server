const Router = require("express").Router();
const controller = require("../controllers/schedules");

// Router.post("/", controller.createSchedule);
Router.get("/", controller.getSchedule);
Router.patch("/:id", controller.updateSchedule);

module.exports = Router;
