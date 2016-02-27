var Dispatcher = require('../dispatcher/dispatcher');
var NotebookConstants = require('../constants/notebookConstants');

module.exports = {

  receiveNotebook: function (notebook) {
    Dispatcher.dispatch({
      actionType: NotebookConstants.RECEIVE_NOTEBOOK,
      payload: notebook
    });

  },

  receiveAll: function (notebooks) {
    Dispatcher.dispatch({
      actionType: NotebookConstants.RECEIVE_ALL_NOTEBOOKS,
      payload: notebooks
    });
  },

  deleteNotebook: function (deletedNotebook) {
    Dispatcher.dispatch({
      actionType: NotebookConstants.DELETE_NOTEBOOK,
      payload: deletedNotebook
    });
  },

};
