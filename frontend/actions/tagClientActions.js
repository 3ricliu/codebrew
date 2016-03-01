var Dispatcher = require('../dispatcher/dispatcher');
var TagConstants = require('../constants/tagConstants');


module.exports = {

  receiveTags: function (tags) {
    Dispatcher.dispatch({
      actionType: TagConstants.RECEIVE_ALL_TAGS,
      payload: tags
    });

  },

};
