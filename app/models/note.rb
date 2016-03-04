class Note < ActiveRecord::Base
  validates :title, :user_id, :notebook_id, presence: true

  belongs_to :notebook
  belongs_to :user

  has_many :taggings

  has_many :tags, through: :taggings
end
