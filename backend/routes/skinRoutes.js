const express = require("express");
const router = express.Router();
const Skin = require("../models/Skin");

router.get("/", async (req, res) => {
  const skins = await Skin.find();
  res.json(skins);
});

router.post("/", async (req, res) => {
  const skin = new Skin(req.body);
  await skin.save();
  res.json({ msg: "Adicionada" });
});

module.exports = router;