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

var deleteTag = function (tag) {
  if(tag.note_ids.length === 0){
    delete _tags[tag.id];
  } else {
    _tags[tag.id] = tag;
  }
};

var createTag = function (tag) {
  _tags[tag.id] = tag;
};

TagStore.fetchNoteTags = function (noteId) {
  var noteTags = [];
  Object.keys(_tags).map(function (tagId) {
    if(_tags[tagId].note_ids.indexOf(noteId) !== -1){
      var tag = {id: _tags[tagId].id, name: _tags[tagId].name};
      noteTags.push(tag);
    }
  });

  return noteTags;
};

TagStore.fetchAllTags = function () {
  var tags = [];
  for(var id in _tags){
    if( _tags.hasOwnProperty(id) ){
      tags.push(_tags[id]);
    }
  }

  return tags;
};

TagStore.__onDispatch = function (dispatchedData) {
  switch(dispatchedData.actionType) {
    case TagConstants.RECEIVE_ALL_TAGS:
      receiveAllTags(dispatchedData.payload);
      TagStore.__emitChange();
      break;
    case TagConstants.DELETE_TAG:
      deleteTag(dispatchedData.payload);
      TagStore.__emitChange();
      break;
    case TagConstants.CREATE_TAG:
      createTag(dispatchedData.payload);
      TagStore.__emitChange();
      break;
  }
};

module.exports = TagStore;
