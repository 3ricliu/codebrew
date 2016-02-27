var React = require('react');
var NoteServerActions = require('../actions/noteServerActions');


var noteIndexItem = React.createClass({
  // extracted snippet from state.
  summary: function () {
    var snippet = "";
    var noteBodyLength = this.props.note.body;

    if( noteBodyLength.length > 0 && noteBodyLength.length < 80){
      snippet = noteBodyLength;
    } else if (noteBodyLength.length > 80) {
      snippet = noteBodyLength.substr(0,80) + "...";
    }

    return snippet;
  },


  deleteNote: function() {
    NoteServerActions.deleteNote(this.props.note);
  },

  render: function () {
    var selected;
    // <Link to={"edit_note" + this.props.note.id}>
    if(this.props.selected === this.props.note.id){
      selected = "selected";
    }

    return(
      <li className={selected} onClick={this.props.onClick.bind(null, this.props.note)}>
        <ol>
          {this.props.note.title}
          <br />
            {this.summary()}
          <br />
          <input type="button" value="Delete" onClick={this.deleteNote} />
        </ol>

      </li>
    );
  }

});

module.exports = noteIndexItem;
