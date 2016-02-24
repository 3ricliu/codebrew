var React = require('react'),
    ReactDOM = require('react-dom'),
    ReactRouter = require('react-router'),
    Router = ReactRouter.Router,
    Route = ReactRouter.Route,
    IndexRoute = ReactRouter.IndexRoute;

var NoteStore = require('./stores/noteStore');


var NotesIndex = require('./components/notesIndex');

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
    {/*<Route path="notes" component={NotesIndex} />*/}
  </Route>
);


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(<Router>{routes}</Router>,
    document.getElementById("content"));
});

// testing
var ApiUtil = require('./util/apiUtil');
