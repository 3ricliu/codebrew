var React = require('react');
var Prosemirror = require('prosemirror');
var Prism = require('prismjs');
require("prosemirror/dist/menu/menubar");

var NoteServerActions = require('../../actions/noteServerActions'),
    TagNoteIndex = require('../tags/tagNoteIndex');

var _editor;

var noteForm = React.createClass({

  getInitialState: function() {
    var title = this.props.note.title;
    var body = this.props.note.body;
    var id = this.props.note.id;
    var notebookId = this.props.notebookId;
    return ({title: title, body: body, id: id, notebookId: notebookId});
  },

  componentDidMount: function () {
    this.proseSetup();
  },

  proseSetup: function () {
    _editor = new Prosemirror.ProseMirror({
      place: document.getElementById('editor'),
      menuBar: true
    });

    _editor.on('change', function () {
      this.updateBody();
    }.bind(this));
  },

  updateTitle: function(event) {
    // event.preventDefault();
    this.setState({title: event.target.value});
  },

  updateBody: function () {
    this.setState({body: _editor.getContent("html")});
  },

  updateNote: function(event) {
    event.preventDefault();
    NoteServerActions.updateNote(this.state);
  },


  createNote: function(event) {
    event.preventDefault();
    NoteServerActions.createNote(this.state);
    // luckily, this is the only thing that depends on notebookId
    // so when you search notes by clicking onto approporiate tag
    // you wont create any new note.
    //just do logic to take new note off the page when searching.
  },

  determineDeleteButton: function () {
    if(this.state.id !== undefined){
      return (<input type="button"
                     value="Delete"
                     className="note-form-button snippet col-xs-3 col-xs-offset-5 text-center"
                     onClick={this.deleteNote} />);
    }
  },

  deleteNote: function () {
    NoteServerActions.deleteNote(this.state.id);
  },

  componentWillReceiveProps: function (nextProps) {

    _editor.setContent(nextProps.note.body, "html");

    this.setState({title: nextProps.note.title,
                   body: nextProps.note.body,
                   id: nextProps.note.id,
                   notebookId: nextProps.notebookId});
  },

  createOrEdit: function () {
    if(this.props.note.id === undefined){
      return true;
    } else {
      return false;
    }
  },

  createTagComponent: function () { // if its not a new note, no tag comp
    var tagComponent;
    if(this.props.note.id !== undefined) {
      tagComponent = <TagNoteIndex noteId={this.props.note.id} />;
    } else {
      tagComponent = <br/>;
    }
    return tagComponent;
  },

  createSnippet: function () {
    var body = _editor.getContent("html");
    body = body + "<pre><code> </pre></code>";
    _editor.setContent(body, "html");
    _editor.focus();
  },

  render: function () {
    var noteAction;
    var tagComponent = this.createTagComponent();
    var deleteButton = this.determineDeleteButton();
    if(this.createOrEdit()){
      noteAction = this.createNote;
    } else {
      noteAction = this.updateNote;
    }

    // var highlight;
    // if(this.props.note.id !== undefined){
    //   Prism.highlightElement(test);
    //   debugger;
    // }

    return(
      <div className="note-container">
        <br/>
        <div className="row">
        <input className="note-title col-xs-12"
               value={this.state.title}
               placeholder={"New Title"}
               onChange={this.updateTitle} />

        </div>
            <div id="editor" />
              {tagComponent}
          <br></br>
          <div className="row note-form-buttons">
              <div className="col-xs-6">
                <input type="button" value={this.props.buttonTitle} className="note-form-button save col-xs-3 col-xs-offset-5 text-center" onClick={noteAction}/>
              </div>
              <div className="col-xs-6">
                {deleteButton}
            </div>
          </div>
      </div>
    );
  }

});

module.exports = noteForm;
