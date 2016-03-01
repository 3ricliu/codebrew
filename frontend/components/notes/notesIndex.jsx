var React = require('react');

var NoteStore = require('../../stores/noteStore'),
    NoteServerActions = require('../../actions/noteServerActions');

var NoteIndexItem = require('./noteIndexItem'),
    NoteForm = require('./noteForm');


var noteIndex = React.createClass({
  getInitialState: function() {
    return ({ notes: [], selectedNote: null});
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


  findNotebookTitle: function() {
    var title;
      this.props.notebooks.forEach(function(notebook){
        if (notebook.id == this.props.params.notebook_id) {
          title = notebook.title;
        }
      }.bind(this));

    return title;
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
    this.state.notes.map(function (note) {
        noteComponents.push( <li className="notes" key={note.id}>
          <NoteIndexItem
              className="title"
              note={note}
              selected={this.state.selectedNote.id}
              notebookId={this.props.params.notebook_id}
              onClick={this.selectNote}/></li>);
    }.bind(this));
    return noteComponents;
  },


  render: function () {
    var formParams = this.determineNoteForm();
    return(
      <div className="notes-col">
        <div className="notes-list-col">
          <div className="notebook-title">
            {this.findNotebookTitle()}
          </div>
            <br/>
          <button className="create-note btn" onClick={this.createNewNote}>New Note</button>
          <ul>
            {this.generateNoteIndexItems()}
          </ul>
        </div>
        <div className="notes-edit-col">
          <NoteForm note={formParams[0]}
                    buttonTitle={formParams[1]}
                    notebookId={this.props.params.notebook_id} />
        </div>
      </div>
    );
  }
});

module.exports = noteIndex;