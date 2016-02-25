var ApiActions = require('../actions/apiActions');

var apiUtil = {
  fetchAllNotes: function () {
    $.ajax ({
      url: '/api/notes',
      success: function (notes) {
        ApiActions.receiveAllNotes(notes);
      }
    });
  },

  createNewNote: function () {
    $.ajax({
      url: 'api_notes',
      method: 'POST',
      success: function (data) {
        ApiActions.receiveNewNote(data); //this should be a new one
      }
    });
  },

  updateNote: function (updatedNote) {
    $.ajax ({
      url: 'api/notes/' + updatedNote.id,
      method: 'PATCH',
      data: {note: updatedNote},
      success: function (data) {
        ApiActions.receiveUpdatedNote(updatedNote);
      }
    });
  }


};

//testing, change back to module.exports{}
module.exports = apiUtil;
window.ApiUtil = apiUtil;
