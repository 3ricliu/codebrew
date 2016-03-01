var React = require('react');

var TagServerActions = require('../../actions/tagServerActions');

var tagForm = React.createClass({

  getInitialState: function () {
    return({title: ""});
  },

  updateTitle: function (event) {
    this.setState({title: event.target.value});
  },

  createTitle: function (event) {
    event.preventDefault();
    TagServerActions.createTag(this.state);
  },


  render: function () {
    return (
      <form className="tag-form" onSubmit={this.createTag}>

        <input value={this.state.title}
               onChange={this.updateTitle} />

             <input type="submit" value="create" />
      </form>);
  }
});

module.exports = tagForm;
