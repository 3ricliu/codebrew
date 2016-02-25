var React = require('react');

var NoteServerActions = require('../actions/noteServerActions');


var noteForm = React.createClass({
  getInitialState: function() {
    return ({
      note: this.props.note
    });
  },

  updateTitle: function(event) {
    console.log(event.target.value);
    var newNote = this.state.note;
    newNote.title = event.target.value;
    this.setState({note: newNote});
  },

  updateBody: function(event) {
    console.log(event.target.value);
    var newNote = this.state.note;
    newNote.body = event.target.value;
    this.setState({note: newNote});
  },

  updateNote: function() {
    NoteServerActions.updateNote(this.props.note);
  },

  componentWillReceiveProps: function (nextProps) {
    console.log(nextProps.note);
    this.setState({note: nextProps.note});
  },

  render: function () {
    // debugger;
    return(
      <div>
        <br/> <br/>

      <form onSubmit={this.updateNote}>

      <input size="30" value={this.state.note.title} onChange={this.updateTitle} />

        <br/>

      <textarea
        rows="6"
        cols="50"
        value={this.state.note.body}
        onChange={this.updateBody} />

        <br/>

        <input type="submit" value="Update Note" />

      </form>
      </div>
    );
  }

});

module.exports = noteForm;
