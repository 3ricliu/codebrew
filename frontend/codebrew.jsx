var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute;

var NoteStore = require('./stores/noteStore');


var NotesIndex = require('./components/notesIndex'),
    Account = require('./components/account');

var App = React.createClass({
  // navbar stuff would go above this.props.children, hidden for now.
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
    <IndexRoute component={NotesIndex} />
  </Route>

  // <Route path="/account" component={Account} />
  // <Route component={Note}></Route>
  // <Route component={NoteForm} path="edit_note/:note_id">
  //   <Route component={NoteForm} path="/:note_id">
  // </Route>
);



document.addEventListener("DOMContentLoaded", function () {
  var content = document.getElementById("content");
  if (content) {
    ReactDOM.render(<Router>{routes}</Router>,
      content);
  }
});
