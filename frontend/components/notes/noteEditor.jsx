var React = require('react');

var noteEditor = React.createClass({

  getInitialState: function() {
    return({body: ""});
  },
  //
  // createToolbar: function() {
  //   return(
  //     <div id="toolbar">
  //       <button className="ql-bold">Bold</button>
  //       <button className="ql-italic">Italic</button>
  //     </div>
  //   );
  // },
  //
  // componentDidMount: function() {
  //   this.createQuillEditor();
  // },
  //
  //
  //
  // createQuillEditor: function() {
  //   _editor = new Quill('#textEditor');
  //   _editor.addModule('toolbar', { container: '#toolbar' });
  //
  //   _editor.on('text-change', function() {
  //     this.updateBody();
  //   }.bind(this));
  // },
  //
  //


  updateBody: function(event) {
    debugger;
  },


  //
  //
  // debug: function() {
  //   debugger;
  // },
  //
  // render: function() {
  //   var toolbar = this.createToolbar();
  //   return(
  //     <div>
  //       <form onSubmit={this.debug}>
  //       {toolbar}
  //       <div id="textEditor"
  //            value={this.state.body}
  //            onChange={this.updateBody}>
  //       </div>
  //       <input type="submit"/>
  //       </form>
  //     </div>
  //
  //   );
  // }

  render: function() {
    return(
      <ReactQuill theme="snow"
                  value={this.state.body}
                  onChange={this.updateBody}/>
    );
  }
});

module.exports = noteEditor;
