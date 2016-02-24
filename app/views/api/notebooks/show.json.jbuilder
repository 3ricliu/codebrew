unless @notebook.nil?
  json.notebook do
    json.author @notebook.user.username
    json.title @notebook.title
    json.id @notebook.id
  end
end
