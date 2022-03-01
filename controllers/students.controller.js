const Student = require("../models/Student.model");

module.exports.studentsController = {
  addStudent: async (req, res) => {
    try {
      await Student.create({
        name: req.body.name,
        group: req.body.group,
        status: req.body.status,
        notes: req.body.note,
        paid_status: req.body.paid,
      });
      res.json("Студент добавлен");
    } catch (err) {
      res.json(`Не удалось добавить студента: ${err.message}`);
    }
  },

  editStudent: async (req, res) => {
    try {
      await Student.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        group: req.body.group,
        status: req.body.status,
        notes: req.body.note,
        paid_status: req.body.paid,
      });
      res.json("Информация о студенте обновлена");
    } catch (err) {
      res.json(`Не удалось изменить студента: ${err.message}`);
    }
  },

  deleteStudent: async (req, res) => {
    try {
      await Student.findByIdAndDelete(req.params.id);
      res.json("Студент удален");
    } catch (err) {
      res.json(`Не удалось удалить студента: ${err.message}`);
    }
  },

  getStudents: async (req, res) => {
    try {
      const students = await Student.find()
        .populate("status")
        .populate("paid_status")
        .populate("group");
      res.json(students);
    } catch (err) {
      res.json(`Не удалось вывести авторов: ${err.message}`);
    }
  },

  getStudentsByGroup: async (req, res) => {
    try {
      const students = await Student.findById(req.params.id)
        .populate("status")
        .populate("paid_status")
        .populate("group");
      res.json(students);
    } catch (err) {
      res.json(`Не удалось вывести авторов: ${err.message}`);
    }
  },
};
