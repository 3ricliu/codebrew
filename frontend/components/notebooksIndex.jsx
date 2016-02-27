var React = require('react'),
    Link = require('react-router').Link,
    History = require('react-router').History;

var NotebookStore = require('../stores/notebookStore'),
    NotebookServerActions = require('../actions/notebookServerActions'),
    NotebookForm = require('./notebooksIndex');

var notebooksIndex = React.createClass({
  mixins: [History],
  getInitialState: function() {
    return {notebooks: [], selectedNotebookId: null};
  },

  componentDidMount: function() {
    this.notebooksListener = NotebookStore.addListener(this.receiveNotebooks);
    NotebookServerActions.fetchNotebooks();
  },

  componentWillUnmount: function() {
    this.notebooksListener.remove();
  },

  componentWillReceiveProps: function(nextProps) {
    var currNotebook = nextProps.params.notebook_id;
    // if(this.props.params.notebook_id !== undefined){
      this.setState({selectedNotebookId: currNotebook});
    // } //this will be the next selected notebook
  },

  receiveNotebooks: function() {
    var notebooks = NotebookStore.all();
    // var selected = notebooks[Object.keys(notebooks).length-1].id;
    if(notebooks.length !== 0){
      var selected = notebooks[0].id;
      this.history.push("/home/notebooks/" + selected +"/notes/");
      this.setState({notebooks: notebooks,
        selectedNotebookId: selected});
    }
  },


  render: function() {
    console.log(this.state.selectedNotebookId);
    var notebooks = this.state.notebooks.map(function(notebook) {
      return(<li key={notebook.id}>
              <Link to={'home/notebooks/' + notebook.id + '/notes'}>
                {notebook.title}
              </Link>
            </li>);
    });

    return(
      <div>
        <Link to={'home/notebooks/new'}>New Notebook</Link>
        <br/>
        <ul>
          {notebooks}
        </ul>
        {this.props.children}
      </div>
    );
  }
});

module.exports = notebooksIndex;
