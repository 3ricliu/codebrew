unless @tag.nil?
  json.tag do
    json.id @tag.id
    json.name @tag.name
    if @note_id
      json.note_ids @note_id
    end
  end
end
