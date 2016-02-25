var React = require('react');

var NoteStore = require('../stores/noteStore'),
    ApiUtil = require('../util/apiUtil');

var NoteIndexItem = require('./noteIndexItem');
var NoteForm = require('./noteForm');


var noteIndex = React.createClass({
  getInitialState: function() {
    console.log("getting initial state");
    return { notes: [], selectedNote: 0};
  },

  componentDidMount: function() {
    this.notesListener = NoteStore.addListener(this._onMount);
    ApiUtil.fetchAllNotes();
    console.log("mounting notesIndex..");
  },

  componentWillUnmount: function() {
    this.notesListener.remove();
  },

  _onMount: function () {
    var allNotes = NoteStore.all();
    this.setState({ notes: allNotes, selectedNote: allNotes[0]});
  },

  selectNote: function (note) {
    this.setState({selectedNote: note});
  },

  createNewNote: function () {
    alert("hola");
  },

  render: function() {
    console.log("rendering in notesIndex");
    console.log("selected note is now " + this.state.selectedNote.title);

    var noteFormComponent = "";
    if(this.state.notes.length !==0){
      noteFormComponent = <NoteForm note={this.state.selectedNote} />;
    }

    console.log("selected note is still..." + this.state.selectedNote.title);

    return(
      <ul>
        Notes
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
