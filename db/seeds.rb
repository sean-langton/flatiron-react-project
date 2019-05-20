# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

tournament_list = [
  ["Test Tournament", "2020-04-20", 2, "BALL"]
]

hole_list = [
  ["Hole 1", "14:00", 30, 1],
  ["Hole 2", "14:45", 30, 1],
  ["Hole 3", "15:30", 30, 1],
  ["Hole 4", "16:15", 30, 1],
  ["Hole 5", "17:00", 30, 1],
  ["Hole 6", "17:45", 30, 1],
  ["Hole 7", "18:30", 30, 1],
  ["Hole 8", "19:15", 30, 1],
  ["Hole 9", "19:45", 30, 1]
]

team_list = [
  ["Team A", 1],
  ["Team B", 1],
  ["Team C", 1]
]

player_list = [
  "Player 1",
  "Player 2",
  "Player 3",
  "Player 4",
  "Player 5",
  "Player 6"
]

teamplayer_list = [
  [1,1],
  [1,2],
  [2,3],
  [2,4],
  [3,5],
  [3,6]
]


tournament_list.each do |name, date, per_team, entry_code|
  Tournament.create(name: name, date: date, per_team: per_team, entry_code: entry_code)
end

hole_list.each do |name, start_time, duration, tournament_id|
  Hole.create(name: name, start_time: start_time, duration: duration, tournament_id: tournament_id)
end

team_list.each do |name, tournament_id|
  Team.create(name: name, tournament_id: tournament_id)
end

player_list.each do |name|
  Player.create(name: name)
end

teamplayer_list.each do |team_id, player_id|
  Teamplayer.create(team_id: team_id, player_id: player_id)
end
