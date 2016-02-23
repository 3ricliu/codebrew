# Codebrew

[Heroku link][heroku]
[heroku]: http://www.codebrew.club

## Minimum Viable Product
Codebrew is a note taking app that benefits developers with code snippet syntax highlighting functionality, making notes that contain code easier to read, faster to understand, and visually more engaging.

- [ ] Users can sign up
- [ ] Users can log in && out
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

- [ ] create `User` model
- [ ] setup routes for homepage/new users, new session
- [ ] implement user authentication and session control
- [ ] create user sign up/sign in views
- [ ] create blank landing page after sign in

### Phase 2: Notes Model, API, and basic APIUtil (0.5 days)

**Objective:** Notes can be created, read, edited and destroyed through
the API. Note contents can be shown through dynamic views

- [ ] create `Note` model
- [ ] seed the database with a sample data and test
- [ ] set up CRUD API for notes (`NotesController`)
- [ ] utilize jBuilder views for notes
- [ ] setup Webpack & React + Flux structure
- [ ] implement frontend/utils/apiUtil.js to interact with API
- [ ] test out CRUD API interaction in the console
- [ ] brainstorm how to incorporate syntax highlighting into CRUD for Notes

### Phase 3: Flux Architecture and Router (1 day)

**Objective:** Notes can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each note component, building out the flux loop as needed.
  - [ ] `NotesIndex`
  - [ ] `NoteIndexItem`
  - [ ] `NoteForm`
- [ ] set up dynamic views between NotesIndex and NoteDetail
- [ ] save Notes to the DB when the form loses focus or is left idle
  after editing (5 sec)
- [ ] tailor Homepage, Login NotesIndex, NoteDetail views to fit chosen bootstrap theme


### Phase 4: Notebooks (1 day)

**Objective:** Notes belong to Notebooks, and can be viewed by notebook.

- [ ] create `Notebook` model
  - [ ] Set up associations between Notebook and Notes
  - [ ] Seed database and test
- build out API, Flux loop, and components for:
  - [ ] Notebook CRUD
  - [ ] adding notes requires a notebook selected
  - [ ] moving notes to a different notebook (drag and drop)?
  - [ ] viewing notes by notebook
- update NotesIndex and NoteEditArea to reflect current Notebook


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
- [ ] Share notes via email


[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md
[phase-six]: ./docs/phases/phase6.md
[phase-seven]: ./docs/phases/phase7.md
[phase-eight]: ./docs/phases/phase8.md
