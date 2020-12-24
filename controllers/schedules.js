const PsikiaterModel = require("../models/psikiaters");

class ScheduleController {
  static updateSchedule = async (req, res, next) => {
    try {
      const { work_days, work_time } = req.body;
      const scheduleData = await PsikiaterModel.findByIdAndUpdate(
        req.params.id,
        {
          schedule: {
            work_days: [work_days],
            work_time: [work_time],
          },
        },
        {
          new: true,
        }
      );

      if (!scheduleData) {
        throw new Error("Unable to update schedule");
      }

      res.status(201).json({
        status: "Success",
        message: "Success update schedule",
        data: scheduleData,
      });
    } catch (error) {
      next(error);
    }
  };
}
module.exports = ScheduleController;
