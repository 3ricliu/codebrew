var NoteClientActions = require('../actions/noteClientActions');
var NotebookClientActions = require('../actions/notebookClientActions');


var apiUtil = {
  fetchNotes: function () {
    $.ajax ({
      url: '/api/notes',
      success: function (notes) {
        NoteClientActions.receiveAll(notes);
      }
    });
  },

  createNewNote: function (newNote) {
    $.ajax ({
      url: '/api/notes',
      method: 'POST',
      data: {note: newNote},
      success: function (note) {
        NoteClientActions.receiveNote(note.note);
      }
    });
  },

  updateNote: function (updatedNote) {
    $.ajax ({
      url: '/api/notes/' + updatedNote.id,
      method: 'PATCH',
      data: {note: updatedNote},
      success: function () {
        NoteClientActions.receiveNote(updatedNote);
      }
    });
  },

  deleteNote: function (deleteNote) {
    $.ajax ({
      url: '/api/notes/' + deleteNote.id,
      method: 'DELETE',
      data: {note: deleteNote},
      success: function (deletedNote) {
        NoteClientActions.deleteNote(deletedNote.note);
      },
    });
  },

  fetchNotebooks: function () {
    $.ajax ({
      url: '/api/notebooks',
      success: function (notebooks) {
        NotebookClientActions.receiveAll(notebooks);
      }
    });
  }


};

//testing, change back to module.exports{}
module.exports = apiUtil;
window.ApiUtil = apiUtil;
