class Note < ActiveRecord::Base
  validates :title, :body, :user_id, :notebook_id, presence: true

  belongs_to :notebook
  belongs_to :user

  has_many :taggings
end
