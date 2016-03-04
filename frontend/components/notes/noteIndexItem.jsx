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

    return snippet;
  },


  deleteNote: function () {
    NoteServerActions.deleteNote(this.props.note);
  },


  render: function () {
    var selected;
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
