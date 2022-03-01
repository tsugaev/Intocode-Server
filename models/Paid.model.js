const mongoose = require("mongoose");

const paidesSchema = mongoose.Schema({
  status: {
    type: String,
    required: true,
  },
});

const Paid = mongoose.model("Paid", paidesSchema);

module.exports = Paid;
