### Phase 6: Tags (1 day)

## Rails
* Tags
* Tagging

### Models

### Controllers
* Api::TagsController (create, destroy, index, show, update)


### Views
* tags/show.json.jbuilder
* tags/index.json.jbuilder

## Flux
### Views (React Components)

### Stores
* Tags
### Actions
* tagActions.receiveAllTags -> triggered by ApiUtil
* tagActions.receiveSingleTag
* tagActions.deleteTag
* NotebookActions.fetchAllTags -> triggers ApiUtil
* NotebookActions.fetchSingleTag

### ApiUtil
* ApiUtil.fetchSingleTag
* ApiUtil.createTag
* ApiUtil.editTag
* ApiUtil.destroyTag


## Gems/Libraries
