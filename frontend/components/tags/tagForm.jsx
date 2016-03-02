var React = require('react');

var TagServerActions = require('../../actions/tagServerActions');

var tagForm = React.createClass({

  getInitialState: function () {
    return({name: ""});
  },

  updateTitle: function (event) {
    this.setState({name: event.target.value});
  },

  createTag: function (event) {
    event.preventDefault();
    var tag = {name: this.state.name, noteId: this.props.noteId};
    TagServerActions.createTag(tag);
    this.setState({name: ""});
  },


  render: function () {
    return (
      <form className="tag-form" onSubmit={this.createTag}>

        <input value={this.state.name}
               onChange={this.updateTitle} />

             <input type="submit" value="create" />
      </form>);
  }
});

module.exports = tagForm;
