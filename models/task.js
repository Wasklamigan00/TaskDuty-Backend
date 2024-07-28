const mongoose = require("mongoose");

const schema = mongoose.Schema;

const taskSchema = new schema({
  title: String,
  description: String,
  tag: String,
});

module.exports = mongoose.model("task", taskSchema);
