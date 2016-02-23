# Phase 4: Notebooks (1 days)

## Rails
### Models
* Notebook


### Controllers
* Api::NotebooksController (create, destroy, index, show, update)

### Views
* notebooks/index.json.jbuilder
* notebooks/show.json.jbuilder

## Flux
### Views (React Components)


### Stores
* Notebook

### Actions
* ApiActions.receiveAllNotebooks -> triggered by ApiUtil
* ApiActions.receiveSingleNotebook
* ApiActions.deleteNotebook
* NotebookActions.fetchAllNotebooks -> triggers ApiUtil
* NotebookActions.fetchSingleNotebook


### ApiUtil
* ApiUtil.fetchSingleNotebook
* ApiUtil.createNotebook
* ApiUtil.editNotebook
* ApiUtil.destroyNotebook



## Gems/Libraries
