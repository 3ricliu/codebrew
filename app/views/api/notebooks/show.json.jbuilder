unless @notebook.nil?
  json.notebook do
    json.author @notebook.user.username
    json.title @notebook.title
  end
end
