"use strict";

const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;
const patientsModel = require("../models/psikiater");

const authentication = async (req, res, next) => {
  try {
    const { accesstoken } = req.headers;
    if (!accesstoken) {
      throw new Error("invalid token");
    }
    const payload = jwt.verify(accesstoken, SECRET_KEY);

    const user = await patientsModel.findById(payload.userID);

    req.patient = {
      userID: user._id,
    };

    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authentication;
