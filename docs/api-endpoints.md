# API Endpoints

## HTML API

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Notes

- `GET /api/notes`
  - Notes index/search
  - accepts `tag_name` query param to list notes by tag
- `POST /api/notes`
- `GET /api/notes/:id`
- `PATCH /api/notes/:id`
- `DELETE /api/notes/:id`

### Notebooks

- `GET /api/notebooks`
- `POST /api/notebooks`
- `GET /api/notebooks/:id`
- `PATCH /api/notebooks/:id`
- `DELETE /api/notebooks/:id`
- `GET /api/notebooks/:id/notes`
  - index of all notes for a notebook

### Tags

- `GET /api/tags`
- `POST /api/notes/:note_id/tags`:
- `DELETE /api/notes/:note_id/tags/:tag_name`: remove tag from note by
  name
