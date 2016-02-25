var React = require('react');

var noteIndexItem = React.createClass({
  // extracted snippet from state.

  render: function () {
    var selected = "";

    if(this.props.selected === this.props.note.id){
      selected = "selected " + this.props.note.id;
      console.log(selected);
    }

    var snippet = this.props.note.body.substr(0,80) + "...";

    return(
      <li className={selected} onClick={this.props.onClick.bind(null, this.props.note)}>
        <ol>
          {this.props.note.title}
          <br />
            {snippet}
        </ol>
      </li>
    );
  }

});

module.exports = noteIndexItem;
