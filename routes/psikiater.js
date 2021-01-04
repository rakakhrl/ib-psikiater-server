const Router = require("express").Router();
const psikiaterController = require("../controllers/psikiaters");
const upload = require("../middlewares/multer");
const authorization = require("../middlewares/authorization");
const { PATIENT, PSIKIATER } = require("../constants/role");

Router.get("/:id", psikiaterController.getPsikiaterDataById);

Router.get(
  "/search/:region",
  authorization(PATIENT),
  psikiaterController.getPsikiaterDataByRegion
);

Router.use(authorization(PSIKIATER));

Router.patch("/:id", psikiaterController.updatePsikiaterData);

Router.post(
  "/upload/:id",
  upload.single("profile_photo"),
  psikiaterController.uploadAvatar
);

module.exports = Router;
