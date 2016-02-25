var NoteClientActions = require('../actions/noteClientActions');
var NoteServerActions = require('../actions/noteServerActions');

var apiUtil = {
  fetchNotes: function () {
    $.ajax ({
      url: '/api/notes',
      success: function (notes) {
        NoteClientActions.receiveAll(notes);
      }
    });
  },

  createNewNote: function () {
    $.ajax({
      url: 'api_notes',
      method: 'POST',
      success: function (data) {
        NoteClientActions.receiveNote(data); //this should be a new one
      }
    });
  },

  updateNote: function (updatedNote) {
    $.ajax ({
      url: 'api/notes/' + updatedNote.id,
      method: 'PATCH',
      data: {note: updatedNote},
      success: function (data) {
        NoteClientActions.receiveNote(updatedNote);
      }
    });
  }


};

//testing, change back to module.exports{}
module.exports = apiUtil;
window.ApiUtil = apiUtil;
