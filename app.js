const express = require("express");
const app = express();
const bodyParser = require("body-parser")
require("dotenv/config")
const api = process.env.API_URL;
const morgan = require("morgan")
const mongoose = require("mongoose")
const cors = require("cors")
const authJwt = require("./helpers/jwt");

app.use(cors());
app.options("*", cors());

// Middlewares
app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(authJwt()); // Apply the JWT middleware
app.use("/public/uploads", express.static(__dirname + "/public/uploads"))



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