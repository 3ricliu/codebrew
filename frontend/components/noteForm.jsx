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

  // updateNote: function(event) {
  //   debugger;
  //   this.setState({title: event.tar});
  // },

  componentDidMount: function() {
    console.log("mounted, plz update me accordingly");
  },

  render: function () {
    return(
      <div>
        <input value={this.state.title} onChange={this.updateTitle} />
        <textarea value={this.state.body} onChange={this.updateBody} />
      </div>
    );
  }

});

module.exports = noteForm;
