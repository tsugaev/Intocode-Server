const Paid = require("../models/Paid.model");
const Student = require("../models/Student.model");

module.exports.paidesController = {
  addPaid: async (req, res) => {
    try {
      await Paid.create({
        status: req.body.status,
      });
      res.json("Успешно");
    } catch (err) {
      res.json(err.message);
    }
  },

  editPaid: async (req, res) => {
    try {
      await Paid.findByIdAndUpdate(req.params.id, {
        status: req.body.status,
      });
      res.json("Успешно");
    } catch (err) {
      res.json(err.message);
    }
  },

  deletePaid: async (req, res) => {
    try {
      await Paid.findByIdAndDelete(req.params.id);
      res.json("УСпешно");
    } catch (err) {
      res.json(err.message);
    }
  },

  getPaides: async (req, res) => {
    try {
      const paides = await Paid.find();
      res.json(paides);
    } catch (err) {
      res.json(err.message);
    }
  },

  getPayingStudents: async (req, res) => {
    const status = "621e0beadead65f7212d5a4f";
    try {
      const students = await Student.find({ paid_status: status })
        .populate("status")
        .populate("paid_status")
        .populate("group");
      res.json(students);
    } catch (err) {
      res.json(`Не удалось вывести заметку: ${err.message}`);
    }
  },

  getNotPayingStudents: async (req, res) => {
    const status = "621e0c04dead65f7212d5a53";
    try {
      const students = await Student.find({ paid_status: status })
        .populate("status")
        .populate("paid_status")
        .populate("group");
      res.json(students);
    } catch (err) {
      res.json(`Не удалось вывести заметку: ${err.message}`);
    }
  },

  getPayingHalfStudents: async (req, res) => {
    const status = "621e0bf9dead65f7212d5a51";
    try {
      const students = await Student.find({ paid_status: status })
        .populate("status")
        .populate("paid_status")
        .populate("group");
      res.json(students);
    } catch (err) {
      res.json(`Не удалось вывести заметку: ${err.message}`);
    }
  },
};
