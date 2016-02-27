var React = require('react'),
    Link = require('react-router').Link,
    History = require('react-router').History;

var NotebookStore = require('../stores/notebookStore'),
    NotebookServerActions = require('../actions/notebookServerActions'),
    NotebookForm = require('./notebooksIndex'),
    NotebookIndexItem = require('./notebookIndexItem');

var notebooksIndex = React.createClass({
  mixins: [History],
  getInitialState: function() {
    return {notebooks: [], selectedNotebookId: null};
  },

  componentDidMount: function() {
    NotebookStore.addListener(this.receiveNotebooks);
    NotebookServerActions.fetchNotebooks();
  },

  componentWillUnmount: function() {
    this.notebooksListener.remove();
  },

  componentWillReceiveProps: function(nextProps) {
    var currNotebook = nextProps.params.notebook_id;
    // NoteServerActions.fetchNotes(currNotebook);
    // if(this.props.params.notebook_id !== undefined){
    this.setState({selectedNotebookId: currNotebook});
    // } //this will be the next selected notebook
  },

  receiveNotebooks: function() {
    var notebooks = NotebookStore.all();
    if(notebooks.length ===0 ){
      this.history.push("/home/notebooks");
      this.setState({notebooks: notebooks});
    } else {
      var selected = notebooks[0].id;
      this.history.push("/home/notebooks/" + selected +"/notes/");
      this.setState({notebooks: notebooks,
        selectedNotebookId: selected});
    }
  },

  render: function() {
    var notebooks = this.state.notebooks.map(function(notebook) {
      return(<NotebookIndexItem key={notebook.id} notebook={notebook} />);
    });
    var childrenWithProps = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {notebooks: this.state.notebooks});
    }.bind(this));

    return(
      <div>
        <Link to={'home/notebooks/new'}>New Notebook</Link>
        <br/>
        <ul>
          {notebooks}
        </ul>
        {childrenWithProps}
      </div>
    );
  }
});

module.exports = notebooksIndex;
