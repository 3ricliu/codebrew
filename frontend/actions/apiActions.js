var Dispatcher = require('../dispatcher');
var ApiUtil = require('../util/apiUtil');
var NoteConstants = require('../constants/noteConstants');

module.exports = {
  receiveAllNotes: function (notes) {
    Dispatcher.dispatch({
      actionType: NoteConstants.All_NOTES_RECEIVED,
      payload: notes
    });
  }
};
