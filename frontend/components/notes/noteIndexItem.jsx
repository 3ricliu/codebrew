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

    snippet = noteBody.substr(0,120);

    _translator.setContent(snippet, "html");
    snippet = _translator.getContent("text");

    return snippet;
  },


  render: function () {

    return(
      <div className="note-index-item"
           onClick={this.props.onClick.bind(null, this.props.note)}>

          <div className="note-summary-title">
            {this.props.note.title.substr(0,60)}
          </div>

            {this.summary()}
      </div>
    );
  }

});

module.exports = noteIndexItem;
