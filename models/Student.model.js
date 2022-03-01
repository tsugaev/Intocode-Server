const mongoose = require("mongoose");

const studentSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },

  group: {
    ref: "Group",
    type: mongoose.Schema.Types.ObjectId,
  },

  status: {
    ref: "Status",
    type: mongoose.Schema.Types.ObjectId,
  },

  paid_status: {
    ref: "Paid",
    type: mongoose.Schema.Types.ObjectId,
  },
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
