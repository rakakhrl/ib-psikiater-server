const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const VerifyModel = require("../models/verify");
const SECRET_KEY = process.env.SECRET_KEY;
const SERVER_IP_ADDRESS = process.env.SERVER_IP_ADDRESS;
const PORT = process.env.PORT;
const emailer = require("../utilities/emailer");
const { PSIKIATER } = require("../constants/role");

class ApprovalController {
  static approvalPsikiater = async (req, res, next) => {
    const { email } = req.body;
    try {
      const psikiaterData = {
        email: email,
      };

      const verificationToken = jwt.sign(
        {
          email: psikiaterData.email,
          role: PSIKIATER,
        },
        SECRET_KEY
      );

      const accept = await VerifyModel.create({
        email: psikiaterData.email,
        activation_token: verificationToken,
      });

      if (!accept) {
        throw new Error("failed sending email verification");
      }

      const emailSent = await emailer(
        psikiaterData.email,
        "Verification Link",
        `<h3><strong>Clink this link to verify your account: </strong>http://${SERVER_IP_ADDRESS}:${PORT}/verify-user/verify/${verificationToken}</h3>`
      );

      if (!emailSent.messageId) {
        throw new Error("Failed sending email verification");
      }

      const reject = await {
        email: psikiaterData.email,
      };

      if (!reject) {
        throw new Error("failed sending denial verification");
      }

      const emailReject = await emailer(
        psikiaterData.email,
        "Rejected",
        `<h3>Verification rejected by Admin</h3>`
      );

      if (!emailReject.messageId) {
        throw new Error("Failed sending rejected email");
      }

      res.sendStatus(204);
    } catch (error) {
      next(error);
    }
  };
}
module.exports = ApprovalController;
