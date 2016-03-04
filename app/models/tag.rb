class Tag < ActiveRecord::Base
  validates :name, presence: true
  validates :name, uniqueness: true

  has_many :taggings
  has_many :notes, through: :taggings
end
