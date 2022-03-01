const Group = require("../models/Group.model");
const Student = require("../models/Student.model");

module.exports.groupsController = {
  addGroup: async (req, res) => {
    try {
      await Group.create({
        group: req.body.group,
        week_studies: req.body.week,
        isGraduated: req.body.graduated,
      });
      res.json("Группа добавлена");
    } catch (err) {
      res.json(`Не удалось добавить группу: ${err.message}`);
    }
  },

  editGroup: async (req, res) => {
    try {
      await Group.findByIdAndUpdate(req.params.id, {
        group: req.body.group,
        week_studies: req.body.week,
        isGraduated: req.body.graduated,
      });
      res.json("Информация о группе обновлена");
    } catch (err) {
      res.json(`Не удалось редактировать группу: ${err.message}`);
    }
  },

  deleteGroup: async (req, res) => {
    try {
      await Group.findByIdAndDelete(req.params.id);
      res.json("Группа удалена");
    } catch (err) {
      res.json(`Не удалось удалить группу: ${err.message}`);
    }
  },

  getGroups: async (req, res) => {
    try {
      const groups = await Group.find();
      res.json(groups);
    } catch (err) {
      res.json(`Не удалось вывести группы: ${err.message}`);
    }
  },

  getGroupsByWeek: async (req, res) => {
    try {
      const groups = await Group.find({week_studies: req.body.week});
      !groups.length ? res.json("Нет такой группы") : res.json(groups);
    } catch (err) {
      res.json(`Не удалось вывести группы: ${err.message}`);
    }
  },

  getGroupsByWeek: async (req, res) => {
    try {
      const groups = await Group.find({week_studies: req.body.week});
      !groups.length ? res.json("Нет такой группы") : res.json(groups);
    } catch (err) {
      res.json(`Не удалось вывести группы: ${err.message}`);
    }
  },

  getPercentOffersOfGroup: async (req, res) => {
    const offer = "621e08335cac1788ba5dec4c"
    try {
      const studentsOffers = await Student.find({ status: offer })
      const allStudents = await Student.find({group: req.params.id})
      const result = (studentsOffers.length * 100) / allStudents.length
      res.json(`Процент из группы получивших оффер составляет: ${Math.floor(result)}%`);
    } catch (err) {
      res.json(err.message);
    }
  },

  getGroupStudents: async (req, res) => {
    try {
      const students = await Student.find({ group: req.params.id })
        .populate("status")
        .populate("paid_status")
        .populate("group");
      res.json(students);
    } catch (err) {
      res.json(err.message);
    }
  },
};
