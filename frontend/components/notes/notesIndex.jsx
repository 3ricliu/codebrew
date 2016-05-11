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
    // console.log("received props");
    if (nextProps.params.tag_name !== undefined) {
      NoteServerActions.fetchTaggedNotes(nextProps.params.tag_name);
    } else if (this.props.params.notebook_id !== nextProps.params.notebook_id) {
      NoteServerActions.fetchNotes(nextProps.params.notebook_id);
    } else if (nextProps.params.notebook_id === undefined){
      NoteServerActions.fetchNotes();
    }
  },

  receiveNotes: function () {
    var allNotes = NoteStore.all();
    var prevSelectedNote;

    if(allNotes.length === 0){ //if no notes created in notebook, create new note
      prevSelectedNote = {title: "", body: ""};
    } else if(this.state.selectedNote === null
           || this.state.selectedNote.title === "" ) { //first time mounting
      prevSelectedNote = allNotes[0];
    } else if(this.state.selectedNote.title !== "") { //still editing the last note
      var editing = this.stillEditing(allNotes);
        if(editing === false){
          prevSelectedNote = allNotes[0];
        } else {
          prevSelectedNote = allNotes[editing];
        }
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


  findNotebookTitle: function() {
    var title;

    this.props.notebooks.forEach(function(notebook){
      if (notebook.id === parseInt(this.props.params.notebook_id)) {
        title = notebook.title;
      }
    }.bind(this));

    if(title === undefined) {
      if(this.props.params.tag_name !== undefined) {
        title = "#" + this.props.params.tag_name;
      } else {
        title = "All Notes";
      }
    }
    return title.substr(0,21);
  },


  createNewNote: function (e) {
    e.preventDefault();
    var newNote = {title: "", body: ""};
    this.setState({selectedNote: newNote });
  },


  determineCreateButton: function () {
    if(this.props.params.notebook_id !== undefined){
      return (<span className="create-note new-note-button"
                      onClick={this.createNewNote}>New</span>);
    }
  },

  determineNoteForm: function () {
    var noteForForm = {title: "", body: ""};
    var action = "Create";

    if(this.state.notes.length !==0){
      if(this.state.selectedNote === undefined) {
        this.state.selectedNote = noteForForm;
      } else if(this.state.selectedNote.title !== "") {
        action = "Update";
      }
      noteForForm = this.state.selectedNote;
    }
    return [noteForForm, action];
  },

  generateNoteIndexItems: function () {
    var noteComponents = [];
    this.state.notes.map(function (note) {
        var noteClass;
        if(parseInt(this.state.selectedNote.id) === note.id){
          noteClass = "notes selected";
        } else {
          noteClass = "notes";
        }

        noteComponents.push( <li className={noteClass} key={note.id}>
          <NoteIndexItem
              className="title"
              note={note}
              onClick={this.selectNote}/></li> );
    }.bind(this)

  );
    return noteComponents;
  },



  render: function () {
    var formParams = this.determineNoteForm();
    var createButton = this.determineCreateButton();
    return(
      <div className="notes-col col-xs-10">
          <div className="row">
            <div className="notes-list-col col-xs-3">
              <div className="row title-and-new">

                <div className="notebook-title col-xs-10 text-center">
                  {this.findNotebookTitle()}
                </div>

                {createButton}
              </div>

              <ul className="note-index-items">
                {this.generateNoteIndexItems()}
              </ul>

            </div>

          <div className="notes-edit-col col-xs-9">
            <NoteForm note={formParams[0]}
              buttonTitle={formParams[1]}
              notebookId={this.props.params.notebook_id} />
          </div>
          
        </div>
      </div>);
  }
});

module.exports = noteIndex;
