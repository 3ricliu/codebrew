var React = require('react');

var NoteServerActions = require('../actions/noteServerActions');

var noteForm = React.createClass({
  getInitialState: function() {
    var title = this.props.note.title;
    var body = this.props.note.body;
    var id = this.props.note.id;
    return ({title: title, body: body, id: id});
    //maybe not even need id, and just pass it into the actions as a second param
  },

  updateTitle: function(event) {
    // console.log(event.target.value);
    // var newNote = this.state.note;
    // newNote.title = event.target.value;
    // this.setState({note: newNote});
    this.setState({title: event.target.value});
  },

  updateBody: function(event) {
    // console.log(event.target.value);
    // var newNote = this.state.note;
    // newNote.body = event.target.value;
    // this.setState({note: newNote});
    this.setState({body: event.target.value});
  },

  updateNote: function() {
    NoteServerActions.updateNote(this.state);
  },

  createNote: function() {
    NoteServerActions.createNote(this.state);
  },

  componentWillReceiveProps: function (nextProps) {
    this.setState({title: nextProps.note.title,
                   body: nextProps.note.body,
                   id: nextProps.note.id});
  },

  render: function () {
    var noteAction;

    if(this.props.note.id === undefined){
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

      <textarea
        rows="6"
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
