const Router = require("express").Router();
const psikiaterController = require("../controllers/psikiaters");
const upload = require("../middlewares/multer");
// const authorization = require("../middlewares/authorization");
// const authentication = require("../middlewares/authentication");
Router.patch("/:id", psikiaterController.updatePsikiaterData);
Router.post(
  "/upload",
  upload.single("Avatar"),
  psikiaterController.uploadAvatar
);
Router.get("/", psikiaterController.getPsikiaterData);
Router.delete("/:id", psikiaterController.deletePsikiaterData);

module.exports = Router;
