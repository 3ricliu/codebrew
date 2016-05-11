var React = require('react'),
    ReactQuill = require('react-quill');

var NoteServerActions = require('../../actions/noteServerActions'),
    TagNoteIndex = require('../tags/tagNoteIndex');


var noteForm = React.createClass({

  getInitialState: function() {
    var title = this.props.note.title;
    var body = this.props.note.body;
    var id = this.props.note.id;
    var notebookId = this.props.notebookId;
    return ({title: title, body: body, id: id, notebookId: notebookId});
  },

  updateTitle: function(event) {
    this.setState({title: event.target.value});
  },


  updateBody: function(event) {
    this.setState({body: event});
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

  render: function () {
    var noteAction;
    var tagComponent = this.createTagComponent();

    if(this.createOrEdit()){
      noteAction = this.createNote;
    } else {
      noteAction = this.updateNote;
    }


    return(
      <div className="note-container">
        <br/>
        <form onSubmit={noteAction}>
        <input className="note-title"
               value={this.state.title}
               placeholder={"Title your note"}
               onChange={this.updateTitle} />
          <br/>
            <ReactQuill theme="snow"
                      value={this.state.body}
                      onChange={this.updateBody} />;
          <br/>
          <input type="submit" value={this.props.buttonTitle} className="save"/>
        </form>
        {tagComponent}
      </div>
    );
  }

});

module.exports = noteForm;
