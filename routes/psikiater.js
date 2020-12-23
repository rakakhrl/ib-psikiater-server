const Router = require("express").Router();
const { deletePsikiaterData } = require("../controllers/psikiaters");
const psikiaterController = require("../controllers/psikiaters");
// const authorization = require("../middlewares/authorization");
// const authentication = require("../middlewares/authentication");

Router.get("/", psikiaterController.getPsikiaterData);

Router.post("/register", psikiaterController.register);

Router.patch("/:id", psikiaterController.updatePsikiaterData);

Router.delete("/:id", psikiaterController.deletePsikiaterData);

module.exports = Router;
