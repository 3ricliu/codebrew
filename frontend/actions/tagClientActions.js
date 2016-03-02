var Dispatcher = require('../dispatcher/dispatcher');
var TagConstants = require('../constants/tagConstants');


module.exports = {

  receiveTags: function (tags) {
    Dispatcher.dispatch({
      actionType: TagConstants.RECEIVE_ALL_TAGS,
      payload: tags
    });

  },

  createTag: function (newTag) {
    Dispatcher.dispatch({
      actionType: TagConstants.CREATE_TAG,
      payload: newTag
    });
  },

  deleteTag: function (deletedTag) {
    Dispatcher.dispatch({
      actionType: TagConstants.DELETE_TAG,
      payload: deletedTag
    });
  }

};
