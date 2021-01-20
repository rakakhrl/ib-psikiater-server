const VerifyModel = require("../models/verify");
const PatientModel = require("../models/patients");
const PsikiaterModel = require("../models/psikiaters");
const jwt = require("jsonwebtoken");

class VerifyController {
  static verifyUser = async (req, res, next) => {
    try {
      const { token } = req.params;

      const verifyData = await VerifyModel.findOne({
        activation_token: token,
      });

      if (!verifyData) {
        throw new Error("Link expired.");
      }

      const { email, role } = jwt.verify(token, process.env.SECRET_KEY);

      if (email !== verifyData.email) {
        throw new Error("Verification failed.");
      }

      if (role === "PATIENT") {
        await PatientModel.updateOne({ email: email }, { is_active: true });
      } else {
        await PsikiaterModel.updateOne({ email: email }, { is_active: true });
      }

      await verifyData.delete();

      res.status(200).json({
        status: "Success",
        message: "Success verified user.",
      });
    } catch (error) {
      next(error);
    }
  };
}

module.exports = VerifyController;
