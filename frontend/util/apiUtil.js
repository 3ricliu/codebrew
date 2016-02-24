var ApiActions = require('../actions/apiActions');

var apiUtil = {
  fetchAllNotes: function () {
    $.ajax ({
      url: '/api/notes',
      success: function (notes) {
        ApiActions.receiveAllNotes(notes);
      }
    });
  }
};

//testing, change back to module.exports{}
module.exports = apiUtil;
window.ApiUtil = apiUtil;
