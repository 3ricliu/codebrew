var React = require('react'),
    Link = require('react-router').Link;

var NotebookServerActions = require('../../actions/notebookServerActions');

var notebookIndexItem = React.createClass({

  deleteNotebook: function() {
    NotebookServerActions.deleteNotebook(this.props.notebook);
  },

  render: function() {
    return(
    <div>
      <Link className="title" to={'home/notebooks/' + this.props.notebook.id + '/notes'}>
        {this.props.notebook.title.substr(0,75)}
      </Link>
    </div>);
  }
});


module.exports = notebookIndexItem;
