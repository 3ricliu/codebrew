var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute,
    IndexRedirect = ReactRouter.IndexRedirect;

var NoteStore = require('./stores/noteStore');

var NotesIndex = require('./components/notesIndex'),
    Account = require('./components/account'),
    NavBar = require('./components/navBar'),
    NotebooksIndex = require('./components/notebooksIndex'),
    NotebookForm = require('./components/notebookForm'),
    NotebookIndexItem = require('./components/notebookForm');

var App = React.createClass({
  render: function () {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
});


var routes = (
  <Route path="/" component={App}>
    <IndexRedirect to="home/notebooks" />

    <Route path="home" component={NavBar}>
      <Route path="notebooks" component={NotebooksIndex}>
        <Route path="new" component={NotebookForm} />
        <Route path="edit/:notebook_id" component={NotebookForm} />
      </Route>
      <Route path="notebooks/:notebook_id" component={NotebooksIndex}>
        <Route path="notes" component={NotesIndex} />
      </Route>
    </Route>

  </Route>
);


document.addEventListener("DOMContentLoaded", function () {
  var content = document.getElementById("content");
  if (content) {
    ReactDOM.render(<Router>{routes}</Router>,
      content);
  }
});
