# Codebrew

[Heroku link][heroku]
[heroku]: http://www.codebrew.club

## Minimum Viable Product
Codebrew is a note taking app that benefits developers with code snippet syntax highlighting functionality, making notes that contain code easier to read, faster to understand, and visually more engaging.

- [x] Users can sign up
- [x] Users can log in && out
- [ ] Can create notebooks
- [ ] Can create notes within notebooks
- [ ] Can create tags for notes
- [ ] Users can create snippets of code with basic syntax highlighting
- [ ] Can format notes with normal styling (font, font-size, color, italics, etc)


## Design Docs
* [View Wireframes][views]
* [Mock-Ups][mock-ups]
* [React Components][components]
* [Flux Stores][stores]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: ./docs/views.md
[mock-ups]: ./docs/mock-ups.md
[components]: ./docs/components.md
[stores]: ./docs/stores.md
[api-endpoints]: ./docs/api-endpoints.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and User Authentication (0.5 days)

**Objective:** Functioning rails project with Authentication

- [x] create `User` model
- [x] setup routes for homepage/new users, new session
- [x] implement user authentication and session control
- [x] create user sign up/sign in views
- [x] create blank landing page after sign in

### Phase 2: Notes Model, API, and basic APIUtil (0.5 days)

**Objective:** Notes can be created, read, edited and destroyed through
the API. Note contents can be shown through dynamic views

- [x] create `Note` model
- [x] create `Notebook` model
- [x] Set up associations between Notebook and Notes
- [x] seed the database with a sample data and test
- [x] set up CRUD API for notes (`NotesController`)
  - [x] utilize jBuilder views for notes
- [x] setup Webpack & React + Flux structure
- [x] implement frontend/utils/apiUtil.js to interact with API
- [x] test out CRUD API interaction in the chrome console

### Phase 3: Flux Architecture and Router (1 day)

**Objective:** Notes can be created, read, edited and destroyed with the
user interface.

- [x] setup the flux loop with skeleton files
- [x] setup React Router
- implement each note component, building out the flux loop as needed.
  - [x] `NotesIndex`
  - [x] `NoteIndexItem`
  - [x] `NoteForm`
- [x] set up dynamic views between NotesIndex and NoteDetail
- [x] new note button
- [x] create text-area and be able to update and create notes


### Phase 4: Notebooks (1 day)

**Objective:** Notes belong to Notebooks, and can be viewed by notebook.

- build out API, Flux loop, and components for:
  - [ ] Notebook CRUD
  - [ ] adding notes requires a notebook selected
  - [ ] moving notes to a different notebook (drag and drop)?
  - [ ] viewing notes by notebook
- update NotesIndex and NoteEditArea to reflect current Notebook

- [ ] setup heroku, to have live site
- [ ] brainstorm how to incorporate syntax highlighting into CRUD for Notes
- [ ] tailor Homepage, Login NotesIndex, NoteDetail views to fit chosen bootstrap theme


TODO: be able to swap notebooks


### Phase 5: Navbar (1 day)

**Objective:** All notebooks can be viewed and selected within Navbar

- build out NavBarIndex to show NotebooksIndex and NotebookForm
- test NotebookForm and creating new notes within itself
- build out editing and deleting capabilities for notebooks
- Tailor new views to bootstrap


### Phase 6: Tags (1 day)

**Objective:** Notes can be tagged with multiple tags, and tags are searchable.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching tags for notes within notebook
  - [ ] adding tags to notes
  - [ ] creating tags while adding to notes
  - [ ] searching notes by tag
- update and test notes to ensure they are tagable.
- [ ] Style new elements

### Phase 7: Allow Complex Styling in Notes (2 days)

**objective:** Enable code styling and usual text styling of notes.
- [ ] Implement solution for incorporating syntax highlighting for code snippets into notes
- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules, make sure everything is congruent
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Implement site wide keyboard hotkeys for console like experience
- [ ] Create edit toggle for notebook/tags page
- [ ] Autosave notes with spinning icon after 10 sec
  - [ ] save Notes to the DB when the form loses focus or is left idle
  after editing (5 sec)
- [ ] Share notes via email


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
[phase-seven]: ./docs/phases/phase7.md
[phase-eight]: ./docs/phases/phase8.md
