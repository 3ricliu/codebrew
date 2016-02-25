var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var NoteConstants = require('../constants/noteConstants');
var NoteStore = new Store(AppDispatcher);

var _notes = {};

var receiveAllNotes = function (notes) {
  _notes = {};

  notes.forEach( function(note) {
    _notes[note.id] = note;
  });

  return _notes;
};

var receiveUpdatedNote = function (note) {
  _notes[note.id] = note;
  return _notes;
};

NoteStore.all = function () {
  var notes = [];
  for(var id in _notes){
    if( _notes.hasOwnProperty(id) ){
      notes.push(_notes[id]);
    }
  }

  return notes;
};

NoteStore.__onDispatch = function (dispatchedData) {
  switch(dispatchedData.actionType) {
    case NoteConstants.RECEIVE_ALL_NOTES:
      receiveAllNotes(dispatchedData.payload["notes"]);
      break;
    case NoteConstants.RECEIVE_UPDATED_NOTE:
      receiveUpdatedNote(dispatchedData.payload);
      // TODO: what if there was an error?
      break;
  }
  NoteStore.__emitChange();
};


module.exports = NoteStore;

// testing
window.NoteStore = NoteStore;
