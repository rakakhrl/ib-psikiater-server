const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/psikiater", {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

const db = mongoose.connection;

db.once("open", function () {
  console.log("conected to mongoDB_Atlas");
});

db.on("error", function (err) {
  console.log(err);
});

module.exports = db;
