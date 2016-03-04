var React = require('react');
var Prosemirror = require('prosemirror');
require("prosemirror/dist/menu/menubar");

var NoteServerActions = require('../../actions/noteServerActions'),
    TagNoteIndex = require('../tags/tagNoteIndex');

var PrismCode = require('react-prism');

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

        <form onSubmit={noteAction}>

        <input className="note-title"
               value={this.state.title}
               placeholder={"New Title"}
               onChange={this.updateTitle} />

          <br/>
            <div id='editor' />
          <br/>
          <div className='note-form-buttons'>
            <input type="button" value="Create Snippet" className="note-form-button snippet" onClick={this.createSnippet} />
            <input type="submit" value={this.props.buttonTitle} className="note-form-button save" />
          </div>
        </form>
        {tagComponent}
      </div>
    );
  }

});

module.exports = noteForm;
