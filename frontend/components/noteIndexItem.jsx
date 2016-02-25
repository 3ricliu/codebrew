var React = require('react');

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

  render: function () {

    var selected = "";
    //this might cause some issues down the road maybe?
    //persistent selection?

    if(this.props.selected === this.props.note.id){selected = "selected";}

    return(
      <li className={selected} onClick={this.props.onClick.bind(null, this.props.note)}>
        <ol>
          {this.props.note.title}
          <br />
            {this.summary()}
        </ol>
      </li>
    );
  }

});

module.exports = noteIndexItem;
