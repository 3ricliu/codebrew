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
    NoteServerActions.fetchNotes(this.props.params.notebook_id);
  },


  componentWillUnmount: function() {
    this.notesListener.remove();
  },

  componentWillReceiveProps: function(nextProps) {
    console.log("received props");
    if(this.props.params.notebook_id !== nextProps.params.notebook_id){
      NoteServerActions.fetchNotes(nextProps.params.notebook_id);
    }
  },

  receiveNotes: function () {
    var allNotes = NoteStore.all();
    var prevSelectedNote;

    if(allNotes.length === 0){ //if no notes created in notebook, create new note
      prevSelectedNote = {title: "", body: ""};
    } else if(this.state.selectedNote === null) { //first time mounting
      prevSelectedNote = allNotes[0];
    } else if(this.state.selectedNote.title !== "") { //still editing the last note
      prevSelectedNote = allNotes[this.stillEditing(allNotes)];
    }
    console.log("receiving notes");
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
    console.log("selecting note");
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
        this.state.selectedNote = noteForForm;
      } else if(this.state.selectedNote.title !== "") {
        action = "Save Changes";
      }
      noteForForm = this.state.selectedNote;
    }
    return [noteForForm, action];
  },

  generateNoteIndexItems: function () {
    var noteComponents = [];
    this.state.notes.map(function(note) {
        noteComponents.push(<NoteIndexItem
            key={note.id}
            note={note}
            selected={this.state.selectedNote.id}
            onClick={this.selectNote}/>);
    }.bind(this));
    return noteComponents;
  },


  render: function() {
    var formParams = this.determineNoteForm();
    return(
      <ul>
        Notebook Name //todo
        <br/>

      <button onClick={this.createNewNote}>Create New Note</button>

      {this.generateNoteIndexItems()}

        <NoteForm note={formParams[0]}
                  buttonTitle={formParams[1]}
                  notebookId={this.props.params.notebook_id} />
      </ul>
    );
  }
});

module.exports = noteIndex;
