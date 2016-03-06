var React = require('react');

var TagServerActions = require('../../actions/tagServerActions');

var tagIndexItem = React.createClass({

  deleteTag: function (event) {
    event.preventDefault();
    TagServerActions.deleteTag(this.props.tag.id, this.props.noteId);
  },

  render: function () {
    var deleteButton;
    if(this.props.nav !== "true") {
      deleteButton = <button onClick={this.deleteTag}>x</button>;
    }
    return(
    <li className='tag'>
      {'#' + this.props.tag.name}
      {deleteButton}
    </li>);
  }
});

module.exports = tagIndexItem;
