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

  createNotebook: function(e) {
    e.preventDefault();
    this.history.push("/home/notebooks/");
    NotebookServerActions.createNotebook(this.state);
  },

  editNotebook: function(e) {
    e.preventDefault();
    var notebookId = this.props.params.notebook_id;
    var notebookObject = {title: this.state.title, id: notebookId};
    this.history.push("/home/notebooks/" + notebookId);
    NotebookServerActions.updateNotebook(notebookObject);
  },

  createOrNew: function() {
    if(this.props.params.notebook_id){
      return "Edit";
    } else {
      return "New";
    }
  },


  render: function() {
    var buttonText = this.createOrNew();
    var formAction;

    if(buttonText === "Edit"){
      formAction = this.editNotebook;
    } else {
      formAction = this.createNotebook;
    }

    return (
      <form onSubmit={formAction}>

        <input size="30"
               value={this.state.title}
               onChange={this.updateTitle} />


             <input type="submit" value={buttonText} />
      </form>
    );
  }
});

//  <Link to={'/home/notebooks'}></Link>
module.exports = notebookForm;
