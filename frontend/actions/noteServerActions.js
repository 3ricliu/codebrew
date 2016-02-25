var ApiUtil = require('../util/apiUtil');

module.exports = {

  fetchNotes: function () {
    ApiUtil.fetchNotes();
  },

  createNote: function () {
    ApiUtil.createNewNote();
  },

  updateNote: function (note) {
    ApiUtil.updateNote(note);
  },

};
