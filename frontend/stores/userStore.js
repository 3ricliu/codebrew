var Store = require('flux/utils').Store;
var AppDispatcher = require('../dispatcher/dispatcher');
var UserConstants = require('../constants/userConstants');
var UserStore = new Store(AppDispatcher);

var _user = [];

var receiveUser = function(user) {
  _user = [];
  _user.push(user);
};


UserStore.getUser = function() {
  return _user.slice()[0];
};

UserStore.__onDispatch = function(dispatchedData) {
  switch(dispatchedData.actionType) {
    case UserConstants.RECEIVE_USER:
      receiveUser(dispatchedData.payload);
      UserStore.__emitChange();
      break;
  }
};



module.exports = UserStore;
