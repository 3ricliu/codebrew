var React = require('react');

var TagIndexItem = require('./tagIndexItem'),
    TagForm = require('./tagForm'),
    TagStore = require('../../stores/tagStore'),
    TagServerActions = require('../../actions/tagServerActions');

var tagNoteIndex = React.createClass({

  getInitialState: function () {
    return({tags: []});
  },

  componentDidMount: function () {
    this.tagsListener = TagStore.addListener(this.receiveTags);
    TagServerActions.fetchTags();
  },

  componentWillUnmount: function () {
    this.tagsListener.remove();
  },

  componentWillReceiveProps: function (nextProps) {
    if(this.props.noteId !== nextProps.noteId){
      var nextTags = TagStore.fetchNoteTags(nextProps.noteId);
      this.setState({tags: nextTags});
    }
  },

  receiveTags: function () {
    var noteTags = TagStore.fetchNoteTags(this.props.noteId);
    this.setState({tags: noteTags});
  },

  generateTagList: function () {
    var tagList = [];
    this.state.tags.map(function (tag) {
      tagList.push(<TagIndexItem key={tag.id}
                                 tag={tag}
                                 noteId={this.props.noteId}/>);
    }.bind(this));

    return tagList;
  },

  render: function () {
    return (
      <div id="note-form-tag-area">
        <ul id="tag-list">
          {this.generateTagList()}
          <li>
            <TagForm noteId={this.props.noteId} />
          </li>
        </ul>
      </div>);
  }
});


module.exports = tagNoteIndex;
