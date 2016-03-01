var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var TagConstants = require('../constants/tagConstants');
var TagStore = new Store(AppDispatcher);

var _tags = {};

var receiveAllTags = function (tags) {
  _tags = {};
  if(tags) {
    tags.forEach(function (tag) {
      _tags[tag.id] = tag;
    });
  }
  return _tags;
};

var fetchNoteTags = function (noteId) {
  var tags = [];
};

TagStore.fetchNoteTags = function (noteId) {

},

TagStore.__onDispatch = function (dispatchedData) {
  switch(dispatchedData.actionType) {
    case TagConstants.RECEIVE_ALL_TAGS:
      receiveAllTags(dispatchedData.payload["tags"]);
      TagStore.__emitChange();
  }
};

module.exports = TagStore;
