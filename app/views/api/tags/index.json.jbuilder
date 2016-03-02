unless @tags_with_note_ids.empty?
  json.tags @tags_with_note_ids.each do |tag|
    json.id tag[0].id
    json.name tag[0].name
    json.note_ids tag[1]
    end
end
