"use strict";
require("dotenv").config();

const router = require("./routes");
const express = require("express");
const db = require("./config/connection");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const port = process.env.PORT;
const path = require("path");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, `uploads`)));

app.use(router);

Router.get("/media/:filename", (req, res) => {
  res.sendFile(path.join(__dirname, `/uploads/${req.params.filename}`));
});

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server ready on port ${port}`);
});
