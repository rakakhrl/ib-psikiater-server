// const mongoose = require("mongoose");
// const jwt = require("jsonwebtoken");
// const VerifyModel = require("../models/verify");
// const SECRET_KEY = process.env.SECRET_KEY;
// const SERVER_IP_ADDRESS = process.env.SERVER_IP_ADDRESS;
// const PORT = process.env.PORT;
// const emailer = require("../utilities/emailer");
// const { PSIKIATER } = require("../constants/role");
//
// class ApprovalController {
//   static approvalPsikiater = async (req, res, next) => {
//     const { email } = req.body;
//     try {
//       const approvalData = {
//         email: email,
//       };
//
//       const verifyPsikiater = jwt.sign(
//         {
//           email: approvalData.email,
//           role: PSIKIATER,
//         },
//         SECRET_KEY
//       );
//
//       const tokenDoc = await VerifyModel.create({
//         email: approvalData.email,
//       });
//
//       if (!tokenDoc) {
//         throw new Error("Register reject by Admin ");
//       }
//
//       const emailSend = await emailer(
//         psikiater.email,
//         "Verification Link",
//         `<h3><strong>Click this link to verify your account: </strong> http://${SERVER_IP_ADDRESS}:${PORT}/verify-user/verify/${verificationToken}</h3>`
//       );
//
//       if (!emailSend.messageId) {
//         throw new Error("Failed verify email");
//       }
//
//       res.status(201).json({
//         status: "Success",
//         message: "Success create psikiater data.",
//         data: approvalData,
//       });
//     } catch (error) {
//       next(error);
//     }
//   };
// }
// module.exports = ApprovalController;
