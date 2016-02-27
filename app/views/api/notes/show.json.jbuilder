unless @note.nil?
  json.note do
    json.notebook @note.notebook.title
    json.notebook_id @note.notebook_id
    json.author @note.user.username
    json.id @note.id
    json.title @note.title
    json.body @note.body
  end
end


# json.array! @notes, :title, :body
# is there a better way so we won't need a logic check?
# TODO: i thought json would just render nothing instead of throwing an error
