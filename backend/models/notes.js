const mongoose = require("mongoose");
const Noteschema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "please enter your notes"],
  },
  description: {
    type: String,
    required: [true, "please enter a description"]
  },
  tag: {
    type: String,
    default:"Tag"
  },
  id: {
    type: String,
    required:true
  },
  date: {
    type: Date,
    default: Date.now,
  },
});
const Note_model = mongoose.model("notes", Noteschema);
module.exports = Note_model;
