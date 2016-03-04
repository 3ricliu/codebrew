var ApiUtil = require('../util/apiUtil');

module.exports = {

  fetchNotes: function (notebookId) {
    ApiUtil.fetchNotes(notebookId);
  },

  fetchTaggedNotes: function (tagName) {
    ApiUtil.fetchTaggedNotes(tagName);
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
