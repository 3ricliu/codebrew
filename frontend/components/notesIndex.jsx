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
    console.log("mounting");
  },

  componentWillUnmount: function() {
    this.notesListener.remove();
  },

  _onMount: function () {
    var allNotes = NoteStore.all();
    this.setState({ notes: allNotes, selectedNote: allNotes[0]});
  },

  selectedNewNote: function (note) {
    // alert("hola");
    this.setState({selectedNote: note});
  },

  render: function() {
    console.log("rendering");
    return(
      <ul>
        Notes
        {
          this.state.notes.map(function (note) {
            return (
              <NoteIndexItem
                key={note.id}
                note={note}
                selected={this.state.selectedNote.id}
                onClick={this.selectedNewNote}
              />
              );
          }.bind(this))
        }

        <NoteForm note={this.state.selectedNote}/>
      </ul>
    );
  }
});

module.exports = noteIndex;
