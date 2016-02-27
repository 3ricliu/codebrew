var React = require('react');

var navBar = React.createClass({
  render: function() {
    return(
      <div>
        {this.props.children}
      </div>
    );
  }
});

module.exports = navBar;
