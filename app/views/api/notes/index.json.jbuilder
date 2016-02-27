unless @notes.empty?
  json.notes @notes do |note|
    json.notebook note.notebook.title
    json.notebook_id note.notebook_id
    json.author note.user.username
    json.id note.id
    json.title note.title
    json.body note.body
  end
end
