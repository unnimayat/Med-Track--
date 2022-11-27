const express = require("express");
require("./config");
const Patient = require("./content");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());

app.post("/add", async (req, res) => {
  let patient = new Patient(req.body);
  let result = await patient.save();
  result = await result.toObject();
  res.send(result);
});
app.get("/content", async (req, res) => {
  let patient = await Patient.find();
  if (patient.length > 0) res.send(patient);
  else res.send({ result: "error" });
});
app.get("/content/:id", async (req, res) => {
  let result = await Patient.findOne({ id: req.params.id })
  if (result) res.send(result);
  else res.send({ result: "Error" });
});
app.delete("/delete/:id", async (req, res) => {
  let result = await Patient.deleteOne({ id: req.params.id });
});

app.listen(5000);
