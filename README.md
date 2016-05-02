# Codebrew

[Heroku link][heroku]
[heroku]: http://www.codebrew.club is a single-page, organizational web application enabling users to create richly formatted notes, organize notes within notebooks, and tag notes for filtering.


## Core Functionality

* Browse, create, and edit notebooks.
* Create and update notes accordingly.
* Tag note(s) based on theme, allowing subsequently filtering of specifically tagged notes based on tags.
* Rich format area for notes enabling **Bold** and *Italic* words, ordered and unordered list creations.


## Languages, Libraries, Frameworks, and Tools

* Rails
* React.js
* Flux
* Prosemirror
* BCrypt
* JBuilder
* Heroku
* Postgres
* Webpack

## Implementation Details




## APIs

## To Dos
* Implement


## Front End Authentication

A session store maintains information about the current user. Logging in and out is facilitated by AJAX requests to the Rails `Api::SessionsController` which authenticates the user, responds with their information (for the session store) and sets a cookie.

All stores are set to respond to a dispatched 'logout' action by dumping their contents, to prevent a subsequent user of the same browser from accessing the previous user's data.

## Soft Signup

It's important to track participants in each poll, but we don't want to require users to sign up before being able to participate. To handle this, a soft signup was implemented that allows users to use the website for up to two weeks as an anonymous guest.

If they sign up for an account during that time, all of their information is transferred over to their full user account.

## Front End Form Validation

To give users instant feedback on their form submissions, as many problems as possible are caught on the front end:

![editable item](./docs/signup_validation.gif)

## A Nested Schema

The schema has nested one-to-many relationships:

`Users -> Polls -> Questions -> Responses -> Votes`  
`Users -> Cast Votes`

This proved to be an interesting challenge and afforded me the chance to get my hands dirty with Rails' `accepts_nested_attributes_for`.

## Ordered Sublists

Allowing users to maintain a mutable order to their entries in the polls table turned out to be quite an interesting challenge.

A custom migration added an order column to hold indices of each item in the sublist, as well as deferred joint uniqueness constraints, ensuring no duplicate indices existed within a single sublist.

`ActiveRecord::Callbacks` on `before_validation` and `after_destroy` gave the means to ensure the order column was maintained.

Here are some excerpts of the Response model, showing the SQL code that fixed the order after a response was removed from the middle of a question's response sublist:

```ruby
class Response < ActiveRecord::Base
  ...
  belongs_to :question,
    inverse_of: :responses
  ...
  after_destroy :mend_ord
  ...
  def mend_ord
    responses = question.responses
    self.ord ||= responses.count
    transaction do
      self.class.connection.execute(<<-SQL)
      SET CONSTRAINTS deferred_ord_and_question_id DEFERRED;
      UPDATE "responses" SET ord = ord - 1
      WHERE "responses"."id" IN (
        SELECT "responses"."id" FROM "responses"
        WHERE "responses"."question_id" = #{self.question_id} AND (ord > #{self.ord})
        ORDER BY "responses"."ord" ASC
      );
      SQL
    end
  end
end
```

By deferring the constraints, we're able to hit the database a single time, updating all the indices in one go.

The end result is having reorderable responses for questions:
![editing a question](./docs/edit_question.gif)

## React Editable Item

With the data nested the way it is, most of our input fields were small phrases of text, so I implemented a simple reusable React component that wraps input fields, allowing it to toggle between display and editing modes:

![editable item](./docs/editable_item.gif)

The component takes as props the text to display, and a callback which is passed the new value of the text on an update.

```html
<EditableItem updateText={this.updateTitle} text={poll.title} />
```

## AJAX Polling

Participant voting pages are kept synchronized with the presentation through AJAX polling. This works, but it's a high priority to migrate to a websockets setup to make this more scaleable.

In the gif below, we can see three voting panes keeping in step with the presentation.

![synchronous voting](./docs/synchronous_voting.gif)

## Question Filter

A question filter store holds various filters and when passed an array of questions, returns only those that meet the criteria. This lets us do a simple search of questions by keyword:

![question filter](./docs/filter.gif)




## Minimum Viable Product
Codebrew is a note taking app that benefits developers with code snippet syntax highlighting functionality, making notes that contain code easier to read, faster to understand, and visually more engaging.

- [x] Users can sign up
- [x] Users can log in && out
- [x] Can create notebooks
- [x] Can create notes within notebooks
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
  - [x] Notebook CRUD
  - [x] adding notes requires a notebook selected
  - [x] moving notes to a different notebook (drag and drop)?
  - [x] viewing notes by notebook
- update NotesIndex and NoteEditArea to reflect current Notebook

- [x] setup heroku, to have live site
- [x] brainstorm how to incorporate syntax highlighting into CRUD for Notes
- [x] tailor Homepage, Login NotesIndex, NoteDetail views to fit chosen bootstrap theme


TODO: be able to swap notebooks


### Phase 5: Navbar (1 day)

**Objective:** All notebooks can be viewed and selected within Navbar

- [x] build out NavBarIndex to show NotebooksIndex and NotebookForm
- [x] test NotebookForm and creating new notes within itself
- [x] build out editing and deleting capabilities for notebooks
- [x] Tailor new views to bootstrap


### Phase 6: Tags (1 day)

**Objective:** Notes can be tagged with multiple tags, and tags are searchable.

- [x] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [x] fetching tags for notes within notebook
  - [x] adding tags to notes
  - [x] creating tags while adding to notes
  - [x] searching notes by tag
- update and test notes to ensure they are tagable.
- [x] Style new elements

### Phase 7: Allow Complex Styling in Notes (2 days)

**objective:** Enable code styling and usual text styling of notes.
- [x] Implement solution for incorporating syntax highlighting for code snippets into notes
- [x] Integrate `react-quill` (based on Quill.js).
- [x] Use Rails helpers to sanitize HTML before rendering.
- [x] Style the new Quill elements.

### Phase 8: Styling Cleanup and Seeding (1 day)

**objective:** Make the site feel more cohesive and awesome.

- [x] Get feedback on my UI from others
- [x] Refactor HTML classes & CSS rules, make sure everything is congruent
- [x] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [x] Implement site wide keyboard hotkeys for console like experience
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
