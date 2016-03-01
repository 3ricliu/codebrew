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

  fetchUser: function () {
    $.ajax ({
      url: 'api/current_user',
      method: 'GET',
      success: function (username) {
        UserClientActions.receiveUser(username.username);
      }
    });
  },

  fetchTags: function () {
    $.ajax ({
      url: '/api/tags',
      success: function (tags) {
        TagClientActions.receiveTags(tags);
      }
    });
  },

  createTag: function (newTag) {
    $.ajax ({
      url: '/api/tags',
      method: 'POST',
      data: {tag: newTag},
      success: function (tag) {

      }
    });
  },

  deleteTag: function (deleteTag) {
    $.ajax ({
      url: '/api/tags/' + deleteTag.id,
      method: 'DELETE',
      data: {tag: deleteTag},
      success: function (deletedTag) {

      },
    });
  },

  logoutUser: function () {
    $.ajax ({
      url: 'session',
      method: 'DELETE',
      success: function () {
        window.location = '/users/new';
      }
    });
  }

};

//testing, change back to module.exports{}
module.exports = apiUtil;
window.ApiUtil = apiUtil;
