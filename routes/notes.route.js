const express = require("express");
const router = express.Router();

const notesController = require("../controllers/notes.controller");
const notesValidator = require("../middlewares/noteValidation");

// get all notes
router.get("/", notesController.getNotes);

// add a new note
router.post("/", notesValidator, notesController.addNote);

// edit a note
router.put("/:id", notesValidator, notesController.editNote);

// get a note by id
router.get("/:id", notesController.getNoteById);

// delete a note
router.delete("/:id", notesController.deleteNote);

module.exports = router;