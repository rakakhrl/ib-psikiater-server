"use strict";
const AppointmentModel = require("../models/appointments");
const { all } = require("../routes");

class AppointmentController {
  static getAppointmentDataByPatientId = async (req, res, next) => {
    try {
      const { id } = req.params;
      const AppointmentData = await AppointmentModel.findOne({
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
      const AppointmentData = await AppointmentModel.findOne({
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
        appointment_date,
        appointment_time,
        complaint,
        allergy,
        diagnose_name,
        diagnose_date,
      } = req.body;

      const appointmentData = {
        psikiater_id: psikiater_id,
        patient_id: patient_id,
        appointment_date: appointment_date,
        appointment_time: appointment_time,
        complaint: complaint,
        allergy: allergy,
        diagnose: {
          diagnose_name: diagnose_name,
          diagnose_date: diagnose_date,
        },
      };
      const appointment = await AppointmentModel.create(appointmentData);
      res.status(201).json({
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
      const { status } = req.body;
      const AppointmentData = await AppointmentModel.findOneAndUpdate(
        { patient_id: id },
        { status: status },
        { new: true }
      );
      res.status(200).json({
        status: "Success",
        message: "Success get appointment data.",
        data: AppointmentData,
      });
    } catch (error) {
      next(error);
    }
  };

  static updateDiagnoseByidPatient = async (req, res, next) => {
    try {
      const { id } = req.params;
      const { diagnose_name } = req.body;
      const patientData = await PatientModel.findOneAndUpdate(
        { patient_id: id },
        { diagnose_name: diagnose_name },
        { new: true }
      );
      res.status(200).json({
        status: "success",
        message: "Successfully update diagnose data.",
        data: patientData,
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = AppointmentController;
