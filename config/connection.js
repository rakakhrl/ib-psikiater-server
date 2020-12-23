const mongoose = require("mongoose");
const DB_URI = process.env.DB_URI;

mongoose.connect(DB_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.once("open", function () {
  console.log("conected to mongoDB");
});

db.on("error", function (err) {
  console.log(err);
});

module.exports = db;
