const nodesModel = require('../models/notes.model');

// read all notes
function getAllNotes()  {
  return nodesModel;
}

// create a new note
function createNote (title, content, category) {
    const newNote = {
        id: Date.now(),
        title,
        content,
        category
    }
  nodesModel.push(newNote);
  return newNote;
}

// notes update

function updateNote (id, title, content, category) {
    const note = nodesModel.find(note => note.id === Number(id));

    if (!note) {
        const error = new Error('Note not found');
        error.statusCode = 404;
        throw error;
    }

    note.title = title || note.title;
    note.content = content || note.content;
    note.category = category || note.category;

    return note;
    }

    // get a note by id
    function getNoteById(id) {
        const note = nodesModel.find(note => note.id === Number(id));
        if (!note) {
            const error = new Error('Note not found');
            error.statusCode = 404;
            throw error;
        }
        return note;
    }

    // delete a note
    function deleteNote(id) {
        const index = nodesModel.findIndex(note => note.id === Number(id));

        if (index === -1) {
            const error = new Error('Note not found');
            error.statusCode = 404;
            throw error;
        }

        nodesModel.splice(index, 1);
    }

    module.exports = {
        getAllNotes,
        createNote,
        updateNote,
        getNoteById,
        deleteNote
    };
