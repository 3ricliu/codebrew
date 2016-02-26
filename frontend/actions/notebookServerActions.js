var ApiUtil = require('../util/apiUtil');

module.exports = {

  fetchNotebooks: function () {
    ApiUtil.fetchNotebooks();
  },

  createNote: function (notebook) {
    ApiUtil.createNewNotebook(notebook);
  },

  updateNotebook: function (notebook) {
    ApiUtil.updateNotebook(notebook);
  },

  deleteNotebook: function (notebook) {
    ApiUtil.deleteNotebook(notebook);
  }

};
