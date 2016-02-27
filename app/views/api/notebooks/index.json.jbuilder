unless @notebooks.nil?
  json.notebooks @notebooks do |notebook|
    json.author notebook.user.username
    json.title notebook.title
    json.id notebook.id
  end
end
