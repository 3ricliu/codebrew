var React = require('react');

var noteForm = React.createClass({
  getInitialState: function() {
    return ({
      title: "",
      body: ""
    });
  },

  updateTitle: function(event) {
    console.log(event.target.value);
    this.setState({title: event.target.value});
  },

  updateBody: function(event) {
    console.log(event.target.value);
    this.setState({body: event.target.value});
  },


  render: function () {
    return(
      <div>
        <br/>
        <br/>
        <input size="30" value={this.props.note.title} onChange={this.updateTitle} />
        <br/>
        <textarea rows="6" cols="50" value={this.props.note.body} onChange={this.updateBody} />
        <br/>

      </div>
    );
  }

});

module.exports = noteForm;
