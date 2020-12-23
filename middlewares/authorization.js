"use strict";

const authorization = async (req, res, next) => {
  try {
    const { role } = req.user;

    if (role !== "psikiater") {
      throw new Error("not authorize this page");
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authorization;
