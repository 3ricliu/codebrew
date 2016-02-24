var React = require('react');
var ReactDOM = require('react-dom');
var NotesIndex = require('./components/notesIndex');


// var Router = require('react-router').Router;
// var Route = require('react-router').Route;
// var IndexRoute = require('react-router').IndexRoute;
//
//
// var routes = (
//
// )


document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <NotesIndex />,
      document.getElementById("content")
  );
});



// testing
var NoteStore = require('./stores/noteStore');
var ApiUtil = require('./util/apiUtil');
