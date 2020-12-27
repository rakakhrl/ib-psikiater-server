"use strict";
const AppointmentModel = require("../models/appointments");

class AppointmentController {
  static getAppointmentDataByPatientId = async (req, res, next) => {
    try {
      const { id } = req.params;
      const AppointmentData = await AppointmentModel.findById({
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

  static getAppointmentDataByPsikiaterId = async (req, res, next) => {
    try {
      const { id } = req.params;
      const AppointmentData = await AppointmentModel.findById({
        psikiater_id: id,
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
      const appointment = await AppointmentModel.create(appointmentData);
      res.status(200).json({
        status: "Success.",
        message: "Success create appointment.",
        data: appointment,
      });
    } catch (error) {
      next(error);
    }
  };

  static updateStatusAppointmentByIdPatient = async (req, res, next) => {
    try {
      const { id } = req.params;
      const AppointmentData = await AppointmentModel.findByIdAndUpdate(
        {
          patient_id: id,
          status: req.body.status,
        },
        { new: true }
      );
      res.status(201).json({
        status: "Success",
        message: "Success get appointment data.",
        data: AppointmentData,
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = AppointmentController;
