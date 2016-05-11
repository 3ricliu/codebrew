var React = require('react'),
    Link = require('react-router').Link;

var NotebookServerActions = require('../../actions/notebookServerActions');

var notebookIndexItem = React.createClass({

  deleteNotebook: function() {
    NotebookServerActions.deleteNotebook(this.props.notebook);
  },

  render: function() {
    return(
    <div className="notebook-index-item row">
      <Link className="title col-xs-8" to={'home/notebooks/' + this.props.notebook.id + '/notes'}>
        {this.props.notebook.title.substr(0,75)}
      </Link>
      <Link to={'/home/notebooks/edit/' + this.props.notebook.id} className="edit-button"></Link>
      <span type="button" className="trash-button" onClick={this.deleteNotebook}></span>
    </div>);
  }
});


module.exports = notebookIndexItem;
