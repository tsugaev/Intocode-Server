const Note = require("../models/Note.model");

module.exports.notesController = {
  addNote: async (req, res) => {
    try {
      await Note.create({
        author: req.body.author,
        note: req.body.note,
        student: req.params.id,
      });
      res.json("Заметка добавлена");
    } catch (err) {
      res.json(`Не удалось добавить заметку: ${err.message}`);
    }
  },

  editNote: async (req, res) => {
    try {
      await Note.findByIdAndUpdate(req.params.id, {
        author: req.body.author,
        note: req.body.note,
        student: req.params.id,
      });
      res.json("Информация о заметке обновлена");
    } catch (err) {
      res.json(`Не удалось редактировать заметку: ${err.message}`);
    }
  },

  deleteNote: async (req, res) => {
    try {
      await Note.findByIdAndDelete(req.params.id);
      res.json("Заметка удалена");
    } catch (err) {
      res.json(`Не удалось удалить заметку: ${err.message}`);
    }
  },

  getNotes: async (req, res) => {
    try {
      const notes = await Note.find();
      res.json(notes);
    } catch (err) {
      res.json(`Не удалось вывести заметку: ${err.message}`);
    }
  },

  getStudentNotes: async (req, res) => {
    try {
      const notes = await Note.find({ student: req.params.id }).populate(
        "student"
      );
      res.json(notes);
    } catch (err) {
      res.json(`Не удалось вывести заметку: ${err.message}`);
    }
  },
};
