var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var NoteConstants = require('../constants/noteConstants');
var NoteStore = new Store(AppDispatcher);

var _notes = {};
var _errors = {};

var receiveAllNotes = function (notes) {
  _notes = {};
  if(notes) {
    notes.forEach(function (note) {
      _notes[note.id] = note;
    });
  }
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
    case NoteConstants.RECEIVE_ALL_NOTES:
      receiveAllNotes(dispatchedData.payload["notes"]);
      NoteStore.__emitChange();
      break;
    case NoteConstants.RECEIVE_NOTE:
      receiveNote(dispatchedData.payload);
      NoteStore.__emitChange();
      break;
    case NoteConstants.DELETE_NOTE:
      removeNote(dispatchedData.payload);
      NoteStore.__emitChange();
      break;
  }
};


module.exports = NoteStore;
