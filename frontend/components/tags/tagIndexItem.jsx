var React = require('react');

var TagServerActions = require('../../actions/tagServerActions');

var tagIndexItem = React.createClass({

  deleteTag: function () {

  },

  render: function () {
    return(
    <div class='tag'>
      {this.props.name}
      <button onClick={this.deleteTag}>Delete</button>
    </div>);
  }
});

module.exports = tagIndexItem;
