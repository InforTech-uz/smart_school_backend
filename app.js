const express = require("express");
const app = express();
require("dotenv/config")
const mongoose = require("mongoose")
const fileUpload = require('express-fileupload')

// Middlewares
app.use(express.json())
app.use(express.static('static'))
app.use(fileUpload({}))

//Routes
app.use("/api/v1/auth", require('./routes/auth.route'))


const PORT = process.env.PORT || 3000

const bootstrap = async () => {
  try {
    await mongoose
      .connect(process.env.CONNECTION_STRING)
      .then(() => console.log("DB is connected"))
      .catch((err) => console.log(err));

    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  } catch (error) {
    console.log("Error connecting with DB:", error)
  }
}


bootstrap()