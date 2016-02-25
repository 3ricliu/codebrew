# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)


10.times do |i|
  user_id = (i%2 + 1)
  title = Faker::Hipster.sentence(3)
  body = Faker::Hipster.paragraph(3)
  Note.create!(user_id: user_id, title: title, body: body, notebook_id: 1)
end
