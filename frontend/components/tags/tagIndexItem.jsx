var React = require('react');

var TagServerActions = require('../../actions/tagServerActions');

var tagIndexItem = React.createClass({

  deleteTag: function (event) {
    event.preventDefault();
    TagServerActions.deleteTag(this.props.tag.id);
  },

  render: function () {
    return(
    <li className='tag'>
      {'#' + this.props.tag.name}
      <button onClick={this.deleteTag}>x</button>
    </li>);
  }
});

module.exports = tagIndexItem;
