var React = require('react');

var NoteStore = require('../stores/noteStore'),
    NoteServerActions = require('../actions/noteServerActions');

var NoteIndexItem = require('./noteIndexItem');
var NoteForm = require('./noteForm');


var noteIndex = React.createClass({
  getInitialState: function() {
    return { notes: [], selectedNote: null};
  },

  componentDidMount: function() {
    this.notesListener = NoteStore.addListener(this.receiveNotes);
    NoteServerActions.fetchNotes();
  },

  componentWillUnmount: function() {
    this.notesListener.remove();
  },

  receiveNotes: function () {
    var allNotes = NoteStore.all();
    var prevSelectedNote = allNotes[0];

    if(allNotes.indexOf(this.state.selectedNote) === -1){
      prevSelectedNote = {title: "", body: ""};
    } else if (this.state.selectedNote !== null) {
      prevSelectedNote = this.state.selectedNote;
    }
    this.setState({ notes: allNotes, selectedNote: prevSelectedNote});
  },

  selectNote: function (note) {
    this.setState({selectedNote: note});
  },

  createNewNote: function () {
    var newNote = {title: "", body: ""};
    this.setState({selectedNote: newNote });
  },

  determineNoteForm: function () {
    var noteForForm = {title: "", body: ""};
    var action = "Create Note";

    if(this.state.notes.length !==0){
      if(this.state.selectedNote === undefined) {
        this.state.selectedNote = this.state.note[0];
      } else if(this.state.selectedNote.title !== ""){
        action = "Update Note";
      }
      noteForForm = this.state.selectedNote;
    }
    return [noteForForm, action];
  },

  render: function() {
    var formParams = this.determineNoteForm();
    return(
      <ul>
        Note
        <br/>

      <button onClick={this.createNewNote}>Create New Note</button>
        {
          this.state.notes.map(function (note) {
            return (
              <NoteIndexItem
                key={note.id}
                note={note}
                selected={this.state.selectedNote.id}
                onClick={this.selectNote}
              />
              );
          }.bind(this))
        }

        <NoteForm note={formParams[0]} buttonTitle={formParams[1]} />
      </ul>
    );
  }
});

module.exports = noteIndex;
