"use strict";
const appointmentModel = require("../models/appointments");

class AppointmentController {
  static getAppointmentData = async (req, res, next) => {
    try {
      const { id } = req.param;
      const AppointmentData = await appointmentModel.findById({
        patient_id: id,
      });
      res.status(200).json({
        status: "Success",
        message: "Success get appointment data.",
        data: AppointmentData,
      });
    } catch (error) {
      next(error);
    }
  };

  static createAppointment = async (req, res, next) => {
    try {
      const {
        psikiater_id,
        patient_id,
        prescription_id,
        appointment_date,
        appointment_time,
        complaint,
        status,
      } = req.body;
      const appointmentData = {
        psikiater_id: psikiater_id,
        patient_id: patient_id,
        prescription_id: prescription_id,
        appointment_date: appointment_date,
        appointment_time: appointment_time,
        complaint: complaint,
        status: status,
      };
      const appointment = await appointmentModel.create(appointmentData);
      res.status(201).json({
        status: "Success.",
        message: "Success create appointment.",
        data: appointment,
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = AppointmentController;
