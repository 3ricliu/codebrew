var React = require('react'),
    Link = require('react-router').Link,
    History = require('react-router').History;

var NotebookStore = require('../../stores/notebookStore'),
    NotebookServerActions = require('../../actions/notebookServerActions'),
    NotebookForm = require('./notebooksIndex'),
    NotebookIndexItem = require('./notebookIndexItem'),
    TagNavIndex = require('../tags/tagNavIndex'),
    User = require('../user'),
    Bootstrap = " col-lg-12 col-md-12 col-sm-12 col-xs-12";

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
      notebooks.push(<li className={notebookClass + Bootstrap} key={notebook.id}>
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
        <div className="notebooks-col col-lg-2 col-md-2 col-s-2 col-xs-2">
          <div className="all-notes">
            <Link to={'home/notebooks/notes'}
                  className="nav-button">All Notes</Link>
          </div>
          <div className="new-notebook-form">
            <Link to={'home/notebooks/new'}
                  className="nav-button">New Notebook</Link>
          </div>
          <div className="notebook-desc">Notebooks</div>
          <br/>
          <ul className="nav-notebook-list">
            {this.generateNotebookIndexItems()}
          </ul>
          <div className="tag-desc">Tags</div>
          <ul className="nav-tag-list">
            <TagNavIndex />
          </ul>
          <User />
        </div>
        {childrenWithProps}
      </div>
    );
  }
});

module.exports = notebooksIndex;
