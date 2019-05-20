class Hole < ApplicationRecord
  validates :name, presence: true
  validates :start_time, presence: true
  validates :duration, presence: true

  belongs_to :tournament
  has_many :scores
  has_many :players, through: :scores
  has_many :teams, through: :players

end
