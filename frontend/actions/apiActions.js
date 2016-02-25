var Dispatcher = require('../dispatcher/dispatcher');
var ApiUtil = require('../util/apiUtil');
var NoteConstants = require('../constants/noteConstants');

module.exports = {
  receiveAllNotes: function (notes) {
    Dispatcher.dispatch({
      actionType: NoteConstants.RECEIVE_ALL_NOTES,
      payload: notes
    });
  },

  receiveUpdatedNote: function (note) {
    Dispatcher.dispatch({
      actionType: NoteConstants.RECEIVE_UPDATED_NOTE,
      payload: note
    });
  }
};
