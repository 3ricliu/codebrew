var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var NotebookConstants = require('../constants/notebookConstants');
var NotebookStore = new Store(AppDispatcher);

var _notebooks = {};

var receiveAllNotebooks = function (notebooks) {
  _notebooks = {};
  if(notebooks){
    notebooks.forEach(function(notebook) {
      _notebooks[notebook.id] = notebook;
    });
  }
  return _notebooks;
};

var receiveNotebook = function(notebook) {
  _notebooks[notebook.id] = notebook;
  return notebook;
};

var removeNotebook = function(deletedNotebook) {
  delete _notebooks[deletedNotebook.id];
  return deletedNotebook;
};

NotebookStore.all = function (){
  var notebooks = [];
  for(var id in _notebooks){
    if( _notebooks.hasOwnProperty(id) ){
      notebooks.push(_notebooks[id]);
    }
  }

  return notebooks;
};

NotebookStore.__onDispatch = function (dispatchedData) {
  switch(dispatchedData.actionType) {
    case NotebookConstants.RECEIVE_ALL_NOTEBOOKS:
      receiveAllNotebooks(dispatchedData.payload["notebooks"]);
      NotebookStore.__emitChange();
      break;
    case NotebookConstants.RECEIVE_NOTEBOOK:
      receiveNotebook(dispatchedData.payload);
      NotebookStore.__emitChange();
      break;
    case NotebookConstants.DELETE_NOTEBOOK:
      removeNotebook(dispatchedData.payload);
      NotebookStore.__emitChange();
      break;
  }
};

module.exports = NotebookStore;
