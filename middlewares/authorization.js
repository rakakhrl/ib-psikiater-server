"use strict";

const authorization = (requiredRole) => async (req, res, next) => {
  try {
    const { role } = req.user;

    if (role !== requiredRole) {
      throw new Error("not authorize this page");
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = authorization;
