const notesService = require('../services/notes.service');

// get all notes
function getNotes(req, res, next) {
  try {
    res.status(200).json({message: `Notes Found`, Notes:notesService.getAllNotes() });
  } catch (error) {
    next(error);
  }
}

// add a new note
function addNote(req, res, next) {
  try {
    const { title, content, category } = req.body;
    const note = notesService.createNote(title, content, category);
    res.status(201).json({message: 'Note created successfully', note });
  } catch (error) {
    next(error);
  }
}

// edit a note
function editNote(req, res, next) {
  try {
    const { title, content, category } = req.body;
    const note = notesService.updateNote(req.params.id, title, content, category);
    res.status(200).json({ message: 'Note updated successfully', note });
  } catch (error) {
    next(error);
  }
}

// get a note by id
function getNoteById(req, res, next) {
  try {
    const note = notesService.getNoteById(req.params.id);
    res.status(200).json(note);
  } catch (error) {
    next(error);
  }
}

// delete a note
function deleteNote(req, res, next) {
  try { 
    notesService.deleteNote(req.params.id);
    res.status(200).json({ message: 'Note deleted successfully' });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  getNotes,
  addNote,
  editNote,
  getNoteById,
  deleteNote
};
