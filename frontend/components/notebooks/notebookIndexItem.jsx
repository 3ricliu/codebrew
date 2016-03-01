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
        {this.props.notebook.title}
      </Link>
      <br />
      <Link to={'/home/notebooks/edit/' + this.props.notebook.id}>
        <input className="nb-edit nb-btn" type="button" value="Edit" />
      </Link>
      <input className="nb-delete nb-btn"type="button" value="Delete" onClick={this.deleteNotebook} />
    </div>);
  }
});


module.exports = notebookIndexItem;
