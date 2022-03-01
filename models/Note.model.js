const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
  author: {
    required: true,
    type: String,
  },

  note: String,

  student: {
    ref: "Student",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
