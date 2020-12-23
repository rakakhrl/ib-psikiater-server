const Router = require("express").Router();
const psikiaterController = require("../controllers/psikiaters");
// const authorization = require("../middlewares/authorization");
// const authentication = require("../middlewares/authentication");

Router.get("/", psikiaterController.getPsikiaterData);

Router.post("/register", psikiaterController.register);

module.exports = Router;
