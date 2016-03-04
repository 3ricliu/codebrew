var React = require('react');
var Prosemirror = require('prosemirror');
require("prosemirror/dist/menu/menubar");

var _editor;

var myEditor = React.createClass({
  getInitialState: function () {
    return({body: "asdfasdf"});
  },

  componentDidMount: function () {
    this.proseSetup();
  },

  proseSetup: function () {
    _editor = new Prosemirror.ProseMirror({
      place: document.getElementById('editor'),
      menuBar: true
    });

  _editor.on('change', function () {
    this.updateText();
  }.bind(this));
  },

  updateText: function () {
    this.setState({body: _editor.getContent("text")});
  },


  render: function () {
    var editorState = this.state.editorState;
    return (
      <div id='editor'>
       </div>
    );
  },
});

module.exports = myEditor;