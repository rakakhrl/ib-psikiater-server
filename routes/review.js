const Router = require("express").Router();
const reviewController = require("../controllers/reviews");
const authorization = require("../middlewares/authorization");
const { PATIENT, PSIKIATER } = require("../constants/role");

Router.get("/:id", reviewController.getReviewDataByIdPsikiater);

Router.get("/:id", reviewController.getReviewDataByIdPatient);

Router.post("/", authorization(PATIENT), reviewController.createReview);

module.exports = Router;
