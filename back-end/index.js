const mongoose = require("mongoose");
const express = require("express");
const Item = require("./models/data.model");
const app = express();
app.use(express.json());
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());

mongoose
  .connect("mongodb://localhost:27017/crud_operation", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});

app.post("/new", async (req, res) => {
  try {
    const {
      title,
      firstName,
      lastName,
      position,
      company,
      businessArena,
      employees,
      streetNumber,
      additionalInformation,
      zipCode,
      place,
      country,
      code,
      phoneNumber,
      email
    } = req.body;

    const data = {
      title,
      firstName,
      lastName,
      position,
      company,
      businessArena,
      employees,
      streetNumber,
      additionalInformation,
      zipCode,
      place,
      country,
      code,
      phoneNumber,
      email
    };

    const savedItem = await Item.create(data);
    res.status(201).json({ msg: "Data is sent", item: savedItem });
  } catch (err) {
    res.status(401).json({ message: err.message });
  }
});

app.get("/all", async (req, res) => {
  try {
    const items = await Item.find();
    res.status(200).json({ items });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.delete("/delete/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Item.findByIdAndDelete(id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.put("/update/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Item.findByIdAndUpdate(id, req.body, { new: true });
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ message: "Item updated successfully", item });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

app.get("/get/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({ message: "Item not found" });
    }
    res.status(200).json({ item });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
