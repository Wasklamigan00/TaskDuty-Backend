require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors")

const app = express();
const port = 4000;

const taskRouter = require("./routes/taskRouter");
const notFound = require("./middlewares/notFound")

app.use(express.json()); //this allows access to the req.body in our app

app.use("/api/task", taskRouter);

app.use("/api/task", taskRouter)

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("DB Connected!");
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`); // This is how to listen to your server
    });
  } catch (error) {
    console.log(error);
    console.log("Unable to Connect");
  }
};

start();
