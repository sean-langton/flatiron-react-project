class HoleSerializer < ActiveModel::Serializer
  attributes :id, :name, :start_time, :duration
  belongs_to :tournament
end
