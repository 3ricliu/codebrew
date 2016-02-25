# Phase 2: Notes Model, API, and basic APIUtil (0.5 days)

## Rails
### Models

### Controllers
* Api::NotesController (create, destroy, index, show, update)

### Views
* notes/index.json.jbuilder
* notes/show.json.jbuilder

## Flux
### Views (React Components)

### Stores
* Note

### Actions
* noteActions.receiveAllNotes -> triggered by ApiUtil
* noteActions.receiveSingleNote
* noteActions.deleteNote

### ApiUtil
* ApiUtil.fetchAllNotes
* ApiUtil.fetchSingleNote
* ApiUtil.createNote
* ApiUtil.editNote
* ApiUtil.destroyNote

## Gems/Libraries
* Flux Dispatcher (npm)
