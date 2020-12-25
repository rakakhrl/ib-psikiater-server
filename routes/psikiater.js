const Router = require("express").Router();
const psikiaterController = require("../controllers/psikiaters");
const upload = require("../middlewares/multer");
const authorization = require("../middlewares/authorization");

Router.use(authorization("Patient"));

Router.get("/:region", psikiaterController.getPsikiaterDataByRegion);

Router.use(authorization("Psikiater"));

Router.patch("/:id", psikiaterController.updatePsikiaterData);

Router.post(
  "/upload/:id",
  upload.single("profile_photo"),
  psikiaterController.uploadAvatar
);

module.exports = Router;
