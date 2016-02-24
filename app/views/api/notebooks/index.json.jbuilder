unless @notebook.empty?
  json.notebooks @notebooks do |notebook|
    json.author notebook.user.username
    json.title notebook.title
  end
end
