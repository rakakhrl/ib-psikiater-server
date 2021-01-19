const VerifyModel = require("../models/verify");
const jwt = require("jsonwebtoken");

class VerifyController {
  static verifyUser = async (req, res, next) => {
    try {
      const { token } = req.params;
      const verifyData = await VerifyModel.findOne({
        token: token,
      });

      if (!verifyData) {
        throw new Error("Verification failed");
      }
      if (verifyData && token) {
        res.status(204).send({
          message: "success verification",
        });
      }
    } catch (error) {
      next(error);
    }
  };
}

module.exports = VerifyController;
