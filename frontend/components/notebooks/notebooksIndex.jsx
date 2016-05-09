var React = require('react'),
    Link = require('react-router').Link,
    History = require('react-router').History;

var NotebookStore = require('../../stores/notebookStore'),
    NotebookServerActions = require('../../actions/notebookServerActions'),
    NotebookForm = require('./notebooksIndex'),
    NotebookIndexItem = require('./notebookIndexItem'),
    TagNavIndex = require('../tags/tagNavIndex'),
    User = require('../user');

var notebooksIndex = React.createClass({
  mixins: [History],
  getInitialState: function() {
    return({notebooks: [], selectedNotebookId: null});
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
    // NoteServerActions.fetchNotes(currNotebook);
    // if(this.props.params.notebook_id !== undefined){
    this.setState({selectedNotebookId: currNotebook});
    // } //this will be the next selected notebook
  },

  receiveNotebooks: function () {
    var notebooks = NotebookStore.all();
    if(notebooks.length === 0 ){
      this.history.push("/home/notebooks");
      this.setState({notebooks: notebooks});
    } else {
      var selected = notebooks[0].id;
      this.history.push("/home/notebooks/" + selected +"/notes/");
      this.setState({notebooks: notebooks,
        selectedNotebookId: selected});
    }
  },


  generateNotebookIndexItems: function () {
    var notebooks = [];

    this.state.notebooks.map(function(notebook) {

      var notebookClass;
      if(parseInt(this.state.selectedNotebookId) === notebook.id){
        notebookClass = "notebooks selected";
      } else {
        notebookClass = "notebooks";
      }
      notebooks.push(<li className={notebookClass} key={notebook.id}>
              <NotebookIndexItem key={notebook.id}
                                 notebook={notebook}/>
            </li>);
    }.bind(this));

    return notebooks;
  },

  render: function() {
    var childrenWithProps = React.Children.map(this.props.children, function(child) {
      return React.cloneElement(child, {notebooks: this.state.notebooks});
    }.bind(this));

    return(
      <div className="notes-container row">
        <div className="notebooks-col col-xs-2">

          <div className="row">
            <div className="all-notes nav-buttons col-xs-12">
              <Link to={'home/notebooks/notes'}
                    className="nav-button">All Notes</Link>
            </div>
          </div>

          <div className="row">
            <div className="new-notebook nav-buttons col-xs-12">
              <Link to={'home/notebooks/new'}
                    className="nav-button">New Notebook</Link>
            </div>
          </div>

          <div className="row">
            <div className="notebook-desc col-xs-12">Notebooks</div>
            <br/>
            <ul className="nav-notebook-list col-xs-12">
              {this.generateNotebookIndexItems()}
            </ul>
          </div>

          <div className="row">
          <div className="tag-desc col-xs-12">Tags</div>
          <ul className="nav-tag-list col-xs-12">
            <TagNavIndex />
          </ul>
          </div>

          <div className="row">
            <User />
          </div>
        </div>
        {childrenWithProps}
      </div>
    );
  }
});

module.exports = notebooksIndex;
