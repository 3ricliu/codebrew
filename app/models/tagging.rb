class Tagging < ActiveRecord::Base
  belongs_to :note
  belongs_to :tag

  validates_uniqueness_of :tag_id, scope: :note_id

end
