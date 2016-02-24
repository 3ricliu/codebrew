var React = require('react');
var NoteStore = require('../stores/noteStore');
var ApiUtil = require('../util/apiUtil');

var noteIndex = React.createClass({
  getInitialState: function() {
    return { notes: NoteStore.all() };
  },

  _onChange: function () {
    this.setState({ notes: NoteStore.all() });
  },

  componentDidMount: function() {
    this.notesListener = NoteStore.addListener(this._onChange);
    ApiUtil.fetchAllNotes();
  },

  render: function() {
    return(
      <ul> Notes
        {this.state.notes.map(function (note) {
          return <li key={note.id}>{note.title}</li>;
        })}
      </ul>
    );
  }
});

module.exports = noteIndex;
