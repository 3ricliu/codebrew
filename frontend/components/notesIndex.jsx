var React = require('react');

var NoteStore = require('../stores/noteStore'),
    ApiUtil = require('../util/apiUtil');

var NoteIndexItem = require('./noteIndexItem');
var NoteForm = require('./noteForm');

var noteIndex = React.createClass({
  getInitialState: function() {
    return { notes: [], selected: NaN };
  },

  componentDidMount: function() {
    this.notesListener = NoteStore.addListener(this._onMount);
    ApiUtil.fetchAllNotes();
  },

  componentWillUnmount: function() {
    this.notesListener.remove();
  },

  _onMount: function () {
    this.setState({ notes: NoteStore.all() });
  },


  render: function() {
    return(
      <ul> Notes
        {this.state.notes.map(function (note) {
          // {return <li key={note.id} onClick={this.expand}>{note.title}</li>;}
          return <NoteIndexItem key={note.id} note={note}/>;
        })}

        <NoteForm />
        {/*tags also go here*/}
      </ul>
    );
  }
});

module.exports = noteIndex;
