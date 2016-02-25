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

  createNote: function() {
    NoteServerActions.createNote(this.props.note);
  },

  componentWillReceiveProps: function (nextProps) {
    console.log(nextProps.note);
    this.setState({note: nextProps.note});
  },

  render: function () {
    var noteAction = "";

    if(this.state.note.id === undefined){
      noteAction = this.createNote;
    } else {
      noteAction = this.updateNote;
    }

    return(
      <div>
        <br/> <br/>

      <form onSubmit={noteAction}>

      <input size="30"
             value={this.state.note.title}
             onChange={this.updateTitle} />

        <br/>

      <textarea
        rows="6"
        cols="50"
        value={this.state.note.body}
        onChange={this.updateBody} />

        <br/>

        <input type="submit" value={this.props.buttonTitle} />

      </form>
      </div>
    );
  }

});

module.exports = noteForm;
