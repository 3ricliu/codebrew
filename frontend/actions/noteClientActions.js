var Dispatcher = require('../dispatcher/dispatcher');
var NoteConstants = require('../constants/noteConstants');

module.exports = {

  receiveNote: function (note) {
    Dispatcher.dispatch({
      actionType: NoteConstants.RECEIVE_NOTE,
      payload: note
    });

  },

  receiveAll: function (notes) {
    Dispatcher.dispatch({
      actionType: NoteConstants.RECEIVE_ALL_NOTES,
      payload: notes
    });
  },

  deleteNote: function (deletedNote) {
    Dispatcher.dispatch({
      actionType: NoteConstants.DELETE_NOTE,
      payload: deletedNote
    });
  },
};
