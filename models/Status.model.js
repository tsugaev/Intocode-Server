const mongoose = require("mongoose");

const statusSchema = mongoose.Schema({
  status: {
    type: String,
    required: true,
  },
});

const Status = mongoose.model("Status", statusSchema);

module.exports = Status;
