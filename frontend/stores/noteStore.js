var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var NoteConstants = require('../constants/noteConstants');
var NoteStore = new Store(AppDispatcher);

var _notes = {};
var _errors = {};

var receiveAllNotes = function (notes) {
  _notes = {};

  notes.forEach( function(note) {
    _notes[note.id] = note;
  });

  return _notes;
};

var receiveNote = function (note) {
  _notes[note.id] = note;
  return _notes;
};

var removeNote = function (deletedNote) {
  delete _notes[deletedNote.id];
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
  _errors = {};

  switch(dispatchedData.actionType) {
    case NoteConstants.ERROR:
      //TODO: errors
      receiveError(dispatchedData.payload["responseText"]);
      break;
    case NoteConstants.RECEIVE_ALL_NOTES:
      receiveAllNotes(dispatchedData.payload["notes"]);
      break;
    case NoteConstants.RECEIVE_NOTE:
      receiveNote(dispatchedData.payload);
      break;
    case NoteConstants.DELETE_NOTE:
      removeNote(dispatchedData.payload);
      break;
  }
  NoteStore.__emitChange();
};


module.exports = NoteStore;

// testing
window.NoteStore = NoteStore;
