class Tag < ActiveRecord::Base
  validates :name, presence: true

  has_many :taggings
  has_many :notes, through: :taggings
end
