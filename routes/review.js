const Router = require("express").Router();
const reviewController = require("../controllers/reviews");
// const authorization = require("../middlewares/authorization");
// const authentication = require("../middlewares/authentication");

Router.get("/", reviewController.getReviewData);

Router.post("/", reviewController.createReview);

module.exports = Router;
