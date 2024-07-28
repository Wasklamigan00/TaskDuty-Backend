const Task = require("../models/task");
const validateID = require("../utils/validateID");

//CRUD

const getAllTask = async (req, res) => {
  const tasks = await Task.find({});
  res.status(200).json({ tasks });
};

const createTask = async (req, res) => {
  const { title, description, tag } = req.body;
  if (!title) {
    return res.status(400).json({ message: "Please Provide a Title" });
  }
  if (!description) {
    return res.status(400).json({ message: "Please Provide a Description" });
  }
  if (!tag) {
    return res.status(400).json({ message: "Please Provide a Tag" });
  }

  const task = await Task.create(req.body);
  res.status(201).json({ message: "Task Created Successfully", newTask: task });
};

const editTask = async (req, res) => {
  const { id } = req.params;

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID ${id} is not valid` });
  }

  const task = await Task.findOneAndUpdate({ _id: id }, { ...req.body });

  if (!task) {
    return res.status(404).json({ message: `No Task with ID: ${id}` });
  }

  res.status(200).json({ message: "Task Updated Successfully" });
};

const deleteTask = async (req, res) => {
  const { id } = req.params;

  if (!validateID(id)) {
    return res.status(400).json({ message: `ID ${id} is not valid` });
  }

  const task = await Task.findOneAndDelete({ _id: id });

  if (!task) {
    return res.status(400).json({ message: `No Task with ID: ${id}` });
  }

  res.status(200).json({ message: "Task Deleted Successfully" });
};

module.exports = { createTask, getAllTask, editTask, deleteTask };
