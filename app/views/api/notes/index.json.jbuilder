unless @notes.empty?
  json.notes @notes do |note|
    json.notebook note.notebook.title
    json.author note.user.username
    json.id note.id
    json.title note.title
    json.body note.body
  end
end
