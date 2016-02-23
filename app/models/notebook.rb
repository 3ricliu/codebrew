class Notebook < ActiveRecord::Base
  validates :author_id, :title, presence: true

  belongs_to :user
  has_many :notes
end
