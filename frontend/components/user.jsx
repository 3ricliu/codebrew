var React = require('react');

var UserStore = require('../stores/userStore'),
    UserServerActions = require('../actions/userServerActions');


var user = React.createClass({

  getInitialState: function () {
    return({user: ""});
  },

  componentDidMount: function () {
    this.userListener = UserStore.addListener(this.receiveUser);
    UserServerActions.fetchCurrentUser();
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },

  receiveUser: function () {
    var username = UserStore.getUser();
    this.setState({user: username});
  },

  logOut: function () {
    UserServerActions.logoutCurrentUser();
  },

  render: function() {
    return(<div className="user-logout">
            <button className="nav-button logout" onClick={this.logOut}>{this.state.user} | Log Out</button>
            </div>);
  }
});


module.exports = user;
