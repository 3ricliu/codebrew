var ApiUtil = require('../util/apiUtil');


module.exports = {

  fetchCurrentUser: function () {
    ApiUtil.fetchUser();
  },

  logoutCurrentUser: function () {
    ApiUtil.logoutUser();
  }

};
