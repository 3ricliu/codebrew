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

    if(this.state.selectedNote !== null) {
      prevSelectedNote = this.state.selectedNote;
    }
    this.setState({ notes: allNotes, selectedNote: prevSelectedNote});
  },

  selectNote: function (note) {
    this.setState({selectedNote: note});
  },

  createNewNote: function () {
    //create new note and then destroy it later?
    //check to see if this is correct
    var newNote = {title: "", body: ""};
    this.setState({selectedNote: newNote });
  },

  render: function() {
    var noteFormComponent;
    var action;

    if(this.state.notes.length !==0){

      if(this.state.selectedNote.title !== ""){
        action = "Edit Note";
      } else {
        action = "Create New Note";
      }
      noteFormComponent = <NoteForm note={this.state.selectedNote}
                                    buttonTitle={action} />;
    }

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

        {noteFormComponent}
      </ul>
    );
  }
});

module.exports = noteIndex;
