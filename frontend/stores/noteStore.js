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

NoteStore.all = function () {
  var notes = [];
  for(var id in _notes){
    notes.push(_notes[id]);
  }

  return notes;
};

NoteStore.__onDispatch = function (dispatchedData) {
  switch(dispatchedData.actionType) {
    case NoteConstants.All_NOTES_RECEIVED:
      receiveAllNotes(dispatchedData.payload["notes"]);
      break;
  }
  NoteStore.__emitChange();
};


module.exports = NoteStore;

// testing
window.NoteStore = NoteStore;
