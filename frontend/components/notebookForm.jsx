var React = require('react'),
    Link = require('react-router').Link,
    History = require('react-router').History;


var NotebookServerActions = require('../actions/notebookServerActions');

var notebookForm = React.createClass({
  mixins: [History],
  getInitialState: function() {
    return({title: ""});
  },

  updateTitle: function(event) {
    this.setState({title: event.target.value});
  },

  createNotebook: function (e) {
    e.preventDefault();
    this.history.push("/home/notebooks/");
    //+ this.props.id + "/order")
    NotebookServerActions.createNotebook(this.state);

  },

  createOrNew: function () {
    if(this.props.params.notebook_id){
      return "Edit";
    } else {
      return "New";
    }
  },

  render: function() {
    var buttonText = this.createOrNew();

    return (
      <form onSubmit={this.createNotebook}>

        <input size="30"
               value={this.state.title}
               onChange={this.updateTitle}></input>
             <Link to={'/home/notebooks'}></Link>
             <input type="submit" value={buttonText} />


      </form>
    );
  }
});

module.exports = notebookForm;
