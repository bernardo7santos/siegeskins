const mongoose = require("mongoose");
const SkinSchema = new mongoose.Schema({
  name: String,
  image: String
});
module.exports = mongoose.model("Skin", SkinSchema);