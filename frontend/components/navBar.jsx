var React = require('react');

var navBar = React.createClass({
  render: function() {
    return(
      <div className="group main-container">
        {this.props.children}
      </div>
    );
  }
});

module.exports = navBar;
