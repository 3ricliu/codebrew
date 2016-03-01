var React = require('react'),
    Link = require('react-router').Link,
    History = require('react-router').History;


var NotebookServerActions = require('../../actions/notebookServerActions');

var notebookForm = React.createClass({
  mixins: [History],
  getInitialState: function() {
    var title = this.findTitle(this.props.params.notebook_id);
    return({title: title});
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

  componentWillReceiveProps: function(nextProps){
    var title = this.findTitle(nextProps.params.notebook_id);
    this.setState({title: title});
  },

  findTitle: function(notebookId) {
    var title;
    if(notebookId){
      this.props.notebooks.forEach(function(notebook){
        if (notebook.id == notebookId) {
          title = notebook.title;
        }
      });
    } else {
      title= "";
    }

    return title;
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
      <form className="notebook-form" onSubmit={formAction}>

        <input size="30"
               value={this.state.title}
               onChange={this.updateTitle} />


             <input type="submit" value={buttonText} className="btn" />
      </form>
    );
  }
});

//  <Link to={'/home/notebooks'}></Link>
module.exports = notebookForm;
