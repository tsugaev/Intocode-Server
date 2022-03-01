const mongoose = require("mongoose");

const groupSchema = mongoose.Schema({
  group: {
    required: true,
    type: Number,
  },

  week_studies: {
    type: Number,
  },

  isGraduated: {
    type: Boolean,
    default: false,
  },
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;
