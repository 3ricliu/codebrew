unless @tags.empty?
  json.tags @tags do |tag|
    json.id tag.id
    json.title tag.name

    unless tag.notes.empty?
      json.notes tag.notes do |note|
        json.note_id note.id
      end
    end
  end
end
