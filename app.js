const express = require("express");
const db = require("./config/connection");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(3030, () => {
  console.log(`server ready on port 4000`);
});
