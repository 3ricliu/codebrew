var React = require('react');

var NoteStore = require('../stores/noteStore'),
    ApiUtil = require('../util/apiUtil');

var NoteIndexItem = require('./noteIndexItem');
var NoteForm = require('./noteForm');


var noteIndex = React.createClass({
  getInitialState: function() {
    return { notes: [], selectedNote: 0};
  },

  componentDidMount: function() {
    this.notesListener = NoteStore.addListener(this._onChange);
    ApiUtil.fetchAllNotes();
  },

  componentWillUnmount: function() {
    this.notesListener.remove();
  },

  _onChange: function () {
    var allNotes = NoteStore.all();
    var prevSelectedNote = allNotes[0];
    if(this.state.selectedNote !== 0) {
      prevSelectedNote = this.state.selectedNote;
    }
    this.setState({ notes: allNotes, selectedNote: prevSelectedNote});
  },

  selectNote: function (note) {
    this.setState({selectedNote: note});
  },

  createNewNote: function () {
    //create new note and then destroy it later?
    //check assessment later to see if this is correct

  },

  render: function() {
    var noteFormComponent = "";
    // debugger;
    if(this.state.notes.length !==0){
      noteFormComponent = <NoteForm note={this.state.selectedNote} />;
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
