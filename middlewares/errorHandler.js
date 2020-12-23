"use strict";

const errorHandler = (err, req, res, next) => {
  console.log("error");
  res.status(400).json({
    message: err.message,
  });
};

module.exports = errorHandler;
