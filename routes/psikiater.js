const Router = require("express").Router();
const psikiaterController = require("../controllers/psikiaters");
const upload = require("../middlewares/multer");
const authorization = require("../middlewares/authorization");
const authentication = require("../middlewares/authentication");
const { PATIENT, PSIKIATER } = require("../constants/role");

Router.get("/search", psikiaterController.getSearching);

Router.use(authentication);

Router.get("/:id", psikiaterController.getPsikiaterDataById);

Router.use(authorization(PSIKIATER));

Router.patch("/:id", psikiaterController.updatePsikiaterData);

Router.post(
  "/upload/:id",
  upload.single("profile_photo"),
  psikiaterController.uploadAvatar
);

module.exports = Router;
