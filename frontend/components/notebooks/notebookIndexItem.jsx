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
      <Link className="title col-xs-8" to={'home/notebooks/' + this.props.notebook.id + '/notes'}>
        {this.props.notebook.title.substr(0,75)}
      </Link>

      <Link to={'/home/notebooks/edit/' + this.props.notebook.id} className="edit-button col-xs-2">
      </Link>
      <span type="button" className="trash-button col-xs-2" onClick={this.deleteNotebook}>
      </span>
    </div>);
  }
});


module.exports = notebookIndexItem;
