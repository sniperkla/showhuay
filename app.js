const express = require("express");
const app = express();

const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const Schema = require("./schema");

app.use(cors());
app.use(bodyParser.json());
app.use(express.static("public"));

mongoose
  .connect("mongodb://147.50.227.164:27017/data", { useNewUrlParser: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Could not connect to MongoDB", err));

app.get("/fetch", async (req, res) => {
  Schema.find()
    .then((result) => {
      res.status(200).send(result);
    })
    .catch((error) => {
      console.error(error);
    });
});
app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
