class TournamentSerializer < ActiveModel::Serializer
  attributes :id, :name, :date, :per_team, :entry_code
  has_many :holes, :teams
end
