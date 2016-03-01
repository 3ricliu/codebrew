var Dispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/userConstants');

module.exports = {

  receiveUser: function (user) {
    Dispatcher.dispatch({
      actionType: UserConstants.RECEIVE_USER,
      payload: user
    });
  }

};
