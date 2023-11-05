const express = require("express");
const { AIFT } = require("../Middleware/AccessIdFromToken.js");
const {
  createNotes,
  readNotes,
  updateNotes,
  deleteNotes,
} = require("../controllers/notes.js");
const notes_router = express.Router();
const { body } = require("express-validator");

notes_router
  .route("/createnotes")
  .post(
    [
      body("title", "enter minimum three characters").isLength({ min: 3 }),
      body("description", "enter minimum five characters ").isLength({
        min: 5,
      }),
    ],
    AIFT,
    createNotes
  );
notes_router.route("/readnotes").get(AIFT, readNotes);
notes_router.route("/updatenotes/:id").put(
  [
    body("title", "enter minimum three characters").isLength({ min: 3 }),
    body("description", "enter minimum five characters ").isLength({
      min: 5,
    }),
  ],
  updateNotes
);
notes_router.route("/deletenotes/:id").delete(deleteNotes);

module.exports = { notes_router };
