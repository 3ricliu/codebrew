var React = require('react');
var Prosemirror = require('prosemirror');
var NoteServerActions = require('../../actions/noteServerActions');

var _translator;

var noteIndexItem = React.createClass({

  componentWillMount: function() {
    _translator = new Prosemirror.ProseMirror();
  },

  // extracted snippet from state.
  summary: function () {
    var snippet;

    var noteBody = this.props.note.body;

    snippet = noteBody.substr(0,80);

    _translator.setContent(snippet, "html");
    snippet = _translator.getContent("text");

    // if( noteBody.length > 0 && noteBody.length < 80){
    //   _translator.setContent(note.body, "html");
    //   note.body = _translator.getContent("text");
    //   snippet = noteBody;
    // } else if (noteBody.length > 80) {
    //   snippet = noteBody.substr(0,80) + "...";
    // }

    return snippet;
  },


  deleteNote: function () {
    NoteServerActions.deleteNote(this.props.note);
  },


  render: function () {
    var selected;
    // <Link to={"edit_note" + this.props.note.id}>
    if(this.props.selected === this.props.note.id){
      selected = "selected";
    }

    return(
      <ul className={selected} onClick={this.props.onClick.bind(null, this.props.note)}>
          {this.props.note.title}
          <br />
            {this.summary()}
          <br />

          <br />
          <input type="button" value="Delete" onClick={this.deleteNote} />
      </ul>
    );
  }

});

module.exports = noteIndexItem;
