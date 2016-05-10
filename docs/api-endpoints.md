# API Endpoints

### HTML API

#### Users
- `GET /users/new`
- `POST /users`
#### Session
- `GET /session/new`
- `POST /session`
- `DELETE /session`

### JSON API

#### Notebooks
- `GET /api/notebooks`
- `POST /api/notebooks`
- `PATCH /api/notebooks/:id`
- `DELETE /api/notebooks/:id`
- `GET /api/notebooks/:id/notes`

#### Notes
- `GET /api/notes`
- `POST /api/notes`
- `GET /api/notes/:id`
- `PATCH /api/notes/:id`
- `DELETE /api/notes/:id`

#### Tags

- `GET /api/tags`
- `POST /api/notes/:note_id/tags`:
- `Get /api/notes/:note_id/tags`:
- `DELETE /api/notes/:note_id/tags/:tag_name`
