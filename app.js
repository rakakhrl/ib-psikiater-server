"use strict";
require("dotenv").config();

const router = require("./routes");
const express = require("express");
const db = require("./config/connection");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const port = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(router);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server ready on port ${port}`);
});
