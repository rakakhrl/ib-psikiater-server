const PsikiaterModel = require("../models/psikiaters");

class ScheduleController {
  static getSchedule = async (req, res, next) => {
    try {
      const scheduleData = await PsikiaterModel.findOne();
      res.status(200).json({
        status: "Success",
        message: "Success get data",
        data: scheduleData.schedule,
      });
      throw new Error("Unable to get data");
    } catch (error) {
      next(error);
    }
  };
  static updateSchedule = async (req, res, next) => {
    try {
      const { new_work_days, new_work_time } = req.body;
      const workDays = await PsikiaterModel.findById(req.params.id);
      const scheduleData = await PsikiaterModel.findByIdAndUpdate(
        req.params.id,
        {
          schedule: {
            work_days: [...workDays.schedule.work_days, ...new_work_days],
            work_time: [...workDays.schedule.work_time, ...new_work_time],
          },
        },
        {
          new: true,
        }
      );

      res.status(201).json({
        status: "Success",
        message: "Success update schedule",
        data: scheduleData,
      });
      throw new Error("Unable to update schedule");
    } catch (error) {
      next(error);
    }
  };
}
module.exports = ScheduleController;
