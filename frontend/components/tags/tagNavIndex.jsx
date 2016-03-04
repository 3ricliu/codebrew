var React = require('react'),
    Link = require('react-router').Link,
    History = require('react-router').History;

var TagIndexItem = require('./tagIndexItem'),
    TagStore = require('../../stores/tagStore'),
    TagIndexItem = require('./tagIndexItem'),
    TagServerActions = require('../../actions/tagServerActions');

var tagNavIndex = React.createClass({
  mixins: [History],
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

  receiveTags: function () {
    var allTags = TagStore.fetchAllTags(this.props.noteId);
    this.setState({tags: allTags});
  },

  generateTagList: function () {
    var tagList = [];
    this.state.tags.map(function (tag) {
      tagList.push(
        <Link to={'/home/notebooks/tags/' + tag.name} key={tag.id} className='tag-item'>
          <TagIndexItem tag={tag}/>
        </Link>);
    });

    return tagList;
  },

  render: function () {
    return (
      <div id="tag-nav-list">
        <ul>
          {this.generateTagList()}
        </ul>
      </div>);
  }
});

module.exports = tagNavIndex;
