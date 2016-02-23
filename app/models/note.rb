class Note < ActiveRecord::Base
  validates :title, :body, :author_id, :notebook_id, presence: true

  belongs_to :notebook
  belongs_to :user
end
