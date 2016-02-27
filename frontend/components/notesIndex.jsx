var React = require('react');

var NoteStore = require('../stores/noteStore'),
    NoteServerActions = require('../actions/noteServerActions');

var NoteIndexItem = require('./noteIndexItem');
var NoteForm = require('./noteForm');


var noteIndex = React.createClass({
  getInitialState: function() {
    return { notes: [], selectedNote: null, notebookId: this.props.params.notebook_id};
  },


  componentDidMount: function() {
    this.notesListener = NoteStore.addListener(this.receiveNotes);
    NoteServerActions.fetchNotes(this.state.notebookId);
  },


  componentWillUnmount: function() {
    this.notesListener.remove();
  },

  componentWillReceiveProps: function(nextProps) {
    var newNotebookId = nextProps.params.notebook_id;
    if(this.props.params.notebook_id !== undefined){
      NoteServerActions.fetchNotes(newNotebookId);
      this.setState({notebookId: newNotebookId});
    }
  },

  receiveNotes: function () {
    var allNotes = NoteStore.all();
    var prevSelectedNote;
    // if(allNotes.indexOf(this.state.selectedNote) === -1){

    if(allNotes.length === 0){
      prevSelectedNote = {title: "", body: ""};
    } else if(this.state.selectedNote === null) { //first time mounting
      prevSelectedNote = allNotes[0];
    } else if(this.state.selectedNote.title !== "") {
      prevSelectedNote = allNotes[this.stillEditing(allNotes)];
    }

    this.setState({ notes: allNotes, selectedNote: prevSelectedNote });
  },

  stillEditing: function(allNotes) {
    var noteIds = allNotes.map( function(note) {
      return note.id;
    });

    var editing = noteIds.indexOf(this.state.selectedNote.id);

    if( editing > -1 ){
      return editing;
    } else {
      return false;
    }
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
    var notebookId = this.state.notebookId;
    if(this.state.notes.length !==0){
      if(this.state.selectedNote === undefined) {
        this.state.selectedNote = noteForForm;
      } else if(this.state.selectedNote.title !== "") {
        action = "Save Changes";
      }
      noteForForm = this.state.selectedNote;
    }
    return [noteForForm, action, notebookId];
  },

  generateNoteIndexItems: function () {
    var noteComponents = [];
    this.state.notes.map(function(note) {
      if(note.notebook_id == this.state.notebookId) {
        noteComponents.push(<NoteIndexItem
            key={note.id}
            note={note}
            selected={this.state.selectedNote.id}
            onClick={this.selectNote}/>);
      }
    }.bind(this));
    return noteComponents;
  },

  render: function() {
    var formParams = this.determineNoteForm();
    return(
      <ul>
        Note
        <br/>

      <button onClick={this.createNewNote}>Create New Note</button>

      {this.generateNoteIndexItems()}

        <NoteForm note={formParams[0]}
                  buttonTitle={formParams[1]}
                  notebookId={formParams[2]} />
      </ul>
    );
  }
});

module.exports = noteIndex;
