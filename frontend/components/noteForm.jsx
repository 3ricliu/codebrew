var React = require('react');

var NoteServerActions = require('../actions/noteServerActions');

var noteForm = React.createClass({
  getInitialState: function() {
    var title = this.props.note.title;
    var body = this.props.note.body;
    var id = this.props.note.id;
    var notebookId = this.props.notebookId;
    return ({title: title, body: body, id: id, notebookId: notebookId});
    //maybe not even need id, and just pass it into the actions as a second param
  },

  updateTitle: function(event) {
    this.setState({title: event.target.value});
  },


  updateBody: function(event) {
    this.setState({body: event.target.value});
  },


  updateNote: function(e) {
    e.preventDefault();
    // this.props.note.title = this.state.title;
    // this.props.note.body = this.state.body;
    NoteServerActions.updateNote(this.state);
  },


  createNote: function(e) {
    e.preventDefault();
    NoteServerActions.createNote(this.state);
  },


  componentWillReceiveProps: function (nextProps) {
    this.setState({title: nextProps.note.title,
                   body: nextProps.note.body,
                   id: nextProps.note.id});
  },
  //props.params.note_id

  createOrEdit: function () {
    if(this.props.note.id === undefined){
      return true;
    } else {
      return false;
    }
  },


  render: function () {
    var noteAction;

    if(this.createOrEdit()){
      noteAction = this.createNote;
    } else {
      noteAction = this.updateNote;
    }

    return(
      <div>
        <br/> <br/>

      <form onSubmit={noteAction}>

      <input size="30"
             value={this.state.title}
             onChange={this.updateTitle} />

        <br/>

      <textarea rows="6"
                cols="50"
                value={this.state.body}
                onChange={this.updateBody} />

        <br/>

        <input type="submit" value={this.props.buttonTitle} />

      </form>
      </div>
    );
  }

});

module.exports = noteForm;
