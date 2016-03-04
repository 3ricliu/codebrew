var NoteClientActions = require('../actions/noteClientActions');
var NotebookClientActions = require('../actions/notebookClientActions');
var UserClientActions = require('../actions/userClientActions');
var TagClientActions = require('../actions/tagClientActions');


var apiUtil = {

  fetchNotes: function (notebookId) {
    if(notebookId !== undefined){
      $.ajax ({
        url: '/api/notebooks/' + notebookId + '/notes',
        data: {notebook_id: notebookId},
        success: function (notes) {
          NoteClientActions.receiveAll(notes);
        }
      });
    } else {
      $.ajax ({
        url: '/api/notes',
        success: function (notes) {
          NoteClientActions.receiveAll(notes);
        }
      });
    }
  },

  fetchTaggedNotes: function (tagName) {
    $.ajax ({
      url: 'api/tagged_notes',
      data: {tag_name: tagName},
      success: function (notes) {
        NoteClientActions.receiveAll(notes);
      }
    });
  },

  createNewNote: function (newNote) {
    $.ajax ({
      url: '/api/notes',
      method: 'POST',
      data: {note: newNote},
      success: function (note) {
        NoteClientActions.receiveNote(note.note);
      }
    });
  },

  updateNote: function (updateNote) {
    $.ajax ({
      url: '/api/notes/' + updateNote.id,
      method: 'PATCH',
      data: {note: updateNote},
      success: function (updatedNote) {
        NoteClientActions.receiveNote(updatedNote.note);
      }
    });
  },

  deleteNote: function (deleteNote) {
    $.ajax ({
      url: '/api/notes/' + deleteNote.id,
      method: 'DELETE',
      data: {note: deleteNote},
      success: function (deletedNote) {
        NoteClientActions.deleteNote(deletedNote.note);
      },
    });
  },

  fetchNotebooks: function () {
    $.ajax ({
      url: '/api/notebooks',
      success: function (notebooks) {
        NotebookClientActions.receiveAll(notebooks);
      }
    });
  },

  createNewNotebook: function (newNotebook) {
    $.ajax ({
      url: '/api/notebooks',
      method: 'POST',
      data: {notebook: newNotebook},
      success: function (notebook) {
        NotebookClientActions.receiveNotebook(notebook.notebook);
      }
    });
  },

  deleteNotebook: function (deleteNotebook) {
    $.ajax ({
      url: '/api/notebooks/' + deleteNotebook.id,
      method: 'DELETE',
      data: {note: deleteNotebook},
      success: function (deletedNotebook) {
        NotebookClientActions.deleteNotebook(deletedNotebook.notebook);
      },
    });
  },


  updateNotebook: function (updateNotebook) {
    $.ajax ({
      url: 'api/notebooks/' + updateNotebook.id,
      method: 'PATCH',
      data: {notebook: updateNotebook},
      success: function (updatedNotebook) {
        NotebookClientActions.receiveNotebook(updatedNotebook.notebook);
      }
    });
  },


  fetchTags: function () {
    $.ajax ({
      url: '/api/tags',
      method: 'GET',
      success: function (tags) {
        TagClientActions.receiveTags(tags.tags);
      }
    });
  },

  createTag: function (newTag) {
    $.ajax ({
      url: '/api/tags',
      method: 'POST',
      data: {tag: newTag},
      success: function (nTag) {
        TagClientActions.createTag(nTag.tag);
      }
    });
  },

  deleteTag: function (tagId) {
    $.ajax ({
      url: '/api/tags/' + tagId,
      method: 'DELETE',
      data: {tag: tagId},
      success: function (deletedTag) {
        TagClientActions.deleteTag(deletedTag.tag);
      },
    });
  },

  fetchUser: function () {
    $.ajax ({
      url: 'api/current_user',
      method: 'GET',
      success: function (username) {
        UserClientActions.receiveUser(username.username);
      }
    });
  },

  logoutUser: function () {
    $.ajax ({
      url: 'session',
      method: 'DELETE',
      data: {react: true},
      success: function () {
        window.location = '/users/new';
      }
    });
  }

};

//testing, change back to module.exports{}
module.exports = apiUtil;
window.ApiUtil = apiUtil;
