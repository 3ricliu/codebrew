var React = require('react');

var noteIndexItem = React.createClass({
  getInitialState: function() {
    return ({quickGlance: "", selected: false});
  },

  componentDidMount: function () {
    var snippet = this.props.note.body.substr(0,80) + "...";
    this.setState({quickGlance: snippet});
  },

  render: function () {
    return(
      <li>
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
