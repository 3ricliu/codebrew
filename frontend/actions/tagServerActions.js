var ApiUtil = require('../util/apiUtil');

module.exports = {

  fetchTags: function () {
    ApiUtil.fetchTags();
  },

  createTag: function (tagName) {
    ApiUtil.createTag(tagName);
  },

  deleteTag: function (tagId, noteId) {
    ApiUtil.deleteTag(tagId, noteId);
  }

};
