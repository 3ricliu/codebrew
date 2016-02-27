var ApiUtil = require('../util/apiUtil');

module.exports = {

  fetchNotes: function (notebookId) {
    ApiUtil.fetchNotes(notebookId);
  },

  createNote: function (note) {
    ApiUtil.createNewNote(note);
  },

  updateNote: function (note) {
    ApiUtil.updateNote(note);
  },

  deleteNote: function (note) {
    ApiUtil.deleteNote(note);
  }

};
