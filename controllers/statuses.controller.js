const Status = require("../models/Status.model");
const Student = require("../models/Student.model");

module.exports.statusController = {
  addStatus: async (req, res) => {
    try {
      await Status.create({
        status: req.body.status,
      });
      res.json("Статус добавлен");
    } catch (err) {
      res.json(`Не удалось добавить статус: ${err.message}`);
    }
  },

  editStatus: async (req, res) => {
    try {
      await Status.findByIdAndUpdate(req.params.id, {
        status: req.body.status,
      });
      res.json("Информация о статусе обновлена");
    } catch (err) {
      res.json(`Не удалось редактировать статус: ${err.message}`);
    }
  },

  deleteStatus: async (req, res) => {
    try {
      await Status.findByIdAndDelete(req.params.id);
      res.json("Статус удален");
    } catch (err) {
      res.json(`Не удалось удалить статус: ${err.message}`);
    }
  },

  getStatuses: async (req, res) => {
    try {
      const statuses = await Status.find();
      res.json(statuses);
    } catch (err) {
      res.json(`Не удалось вывести заметку: ${err.message}`);
    }
  },

  getStudentByStatus: async (req, res) => {
    try {
      const students = await Student.find({ status: req.params.id })
        .populate("status")
        .populate("paid_status")
        .populate("group");
      res.json(students);
    } catch (err) {
      res.json(`Не удалось вывести заметку: ${err.message}`);
    }
  },
};
