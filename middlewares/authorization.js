"use strict";

const authorization = (RequestRole = async (req, res, next) => {
  try {
    const { role } = req.user;

    if (role !== RequestRole) {
      throw new Error("not authorize this page");
    }
    next();
  } catch (error) {
    next(error);
  }
});

module.exports = authorization;
