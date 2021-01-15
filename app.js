"use strict";
require("dotenv").config();
// const Appointments = require("./models/appoinments");

const router = require("./routes");
const express = require("express");
const db = require("./config/connection");
const errorHandler = require("./middlewares/errorHandler");
const app = express();
const port = process.env.PORT;
const path = require("path");
const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, `uploads`)));

app.use("/media/:filename", (req, res) => {
  res.sendFile(path.join(__dirname, `/uploads/${req.params.filename}`));
});

// app.post("/appoinments-tes", async (req, res) => {
//   const {
//     psikiater_id,
//     patient_id,
//     prescription_id,
//     appointment_date,
//     appointment_time,
//     complaint,
//     status,
//     isOnline,
//     allergy,
//     diagnose,
//     diagnose_name,
//     diagnose_date,
//   } = req.body;
//   try {
//     const appoinmentsData = {
//       psikiater_id: psikiater_id,
//       patient_id: patient_id,
//       prescription_id: prescription_id,
//       appointment_date: appointment_date,
//       appointment_time: appointment_time,
//       complaint: complaint,
//       status: status,
//       allergy: allergy,
//       isOnline: isOnline,
//       diagnose: diagnose,
//       diagnose_name: diagnose_name,
//       diagnose_date: diagnose_date,
//     };
//     const appoinments = await Appointments.create(appoinmentsData);
//     res.status(200).json({
//       status: "success",
//       message: "success created data",
//       data: appoinments,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// });

app.use(router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`server ready on port ${port}`);
});
