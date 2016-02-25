var React = require('react');

var noteIndexItem = React.createClass({
  getInitialState: function() {
    return ({quickGlance: ""});
  },

  componentDidMount: function () {
    var snippet = this.props.note.body.substr(0,80) + "...";
    this.setState({quickGlance: snippet});
  },

  render: function () {
    var selected = "";
    if(this.props.selected === this.props.note.id){
      selected = "selected" + this.props.note.id;
      console.log(selected);
    }

    return(
      <li className={selected} onClick={this.props.onClick.bind(null, this.props.note)}>
        <ol>
          {this.props.note.title}
          <br />
            {this.state.quickGlance}
        </ol>
      </li>
    );
  }

});

module.exports = noteIndexItem;
