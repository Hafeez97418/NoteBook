const { validationResult } = require("express-validator");
const { responce } = require("../utils/utils");
const Note_model = require("../models/notes");
const val = new responce();
const createNotes = async (req, res, next) => {
  const { title, description, tag } = req.body;
  const result = validationResult(req);
  val.utils_check(async () => {
    if (result.isEmpty()) {
      await Note_model.create({
        title,
        description,
        tag,
        id: req.user.id,
      }).then((note) => {
        val.REST(res, true, 200, "Notes Created", note);
      });
    } else {
      val.REST(res, false, 400, result.array());
    }
  });
};
const readNotes = (req, res, next) => {
  val.utils_check(async () => {
    const notes = await Note_model.find({ id: req.user.id });
    val.REST(res, true, 200, "Your notes", notes);
  });
};
const updateNotes = (req, res, next) => {
  const { title, description, tag } = req.body;
  const result = validationResult(req);
  // console.log(req.params); give you :id param output
  val.utils_check(async () => {
    if (result.isEmpty()) {
      const newNotes = {
        title,
        description,
        tag,
      };
      const notes = await Note_model.findOne({ _id: req.params.id });
      if (notes == null) {
        val.REST(
          res,
          false,
          400,
          "something went wrong update your notes again ",
          notes
        );
      } else {
       await Note_model.findByIdAndUpdate({ _id:notes._id },newNotes);
        val.REST(res, true, 200, "Notes updated", newNotes);
      }
    } else {
      val.REST(res, false, 400, result.array());
    }
  });
};
const deleteNotes = (req,res,next) => {
// console.log(req.params); give you :id param output
val.utils_check(async () => {
    const notes = await Note_model.findOne({ _id: req.params.id });
    if (notes == null) {
      val.REST(
        res,
        false,
        400,
        "something went wrong please try again",
        notes
      );
    } else {
      await Note_model.findByIdAndDelete({ _id: notes._id});
      val.REST(res, true, 200, "Notes Deleted");
    }
});
};
module.exports = { createNotes, readNotes, updateNotes, deleteNotes };
