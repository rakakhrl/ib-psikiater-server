const Router = require("express").Router();
const reviewController = require("../controllers/reviews");
const authorization = require("../middlewares/authorization");
const authentication = require("../middlewares/authentication");
const { PATIENT, PSIKIATER } = require("../constants/role");

Router.get(
  "/appointment/:id",
  reviewController.getOneReviewDataByIdAppointment
);

Router.get("/psikiater/:id", reviewController.getReviewDataByIdPsikiater);

Router.get("/patient/:id", reviewController.getReviewDataByIdPatient);

Router.post(
  "/",
  authentication,
  authorization(PATIENT),
  reviewController.createReview
);

module.exports = Router;
