var React = require('react');

var ApiUtil = require('../util/apiUtil');


var noteForm = React.createClass({
  getInitialState: function() {
    return ({
      title: this.props.note.title,
      body: this.props.note.body
    });
  },

  updateTitle: function(event) {
    console.log(event.target.value);
    this.setState({title: event.target.value});
  },

  updateBody: function(event) {
    console.log(event.target.value);
    this.setState({body: event.target.value});
  },

  updateNote: function() {
    console.log(this.state.title + this.state.body);
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState({title: nextProps.note.title, body: nextProps.note.body});
  },

  render: function () {
    return(
      <div>

        <br/>
        <br/>
      <input size="30" value={this.state.title} onChange={this.updateTitle} />

        <br/>

      <textarea
        rows="6"
        cols="50"
        value={this.state.body}
        onChange={this.updateBody} />

        <br/>

      <button onClick={this.updateNote}>Update</button>

      </div>
    );
  }

});

module.exports = noteForm;
